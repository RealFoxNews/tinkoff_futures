#!/bin/bash

# Security Check Script for Tinkoff Futures Trading Bot
# Run this script before publishing to ensure no sensitive data is exposed

set -euo pipefail

echo "🔒 Starting security check..."
echo "================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    local status=$1
    local message=$2
    case $status in
        "PASS")
            echo -e "${GREEN}✅ PASS${NC}: $message"
            ;;
        "FAIL")
            echo -e "${RED}❌ FAIL${NC}: $message"
            ;;
        "WARN")
            echo -e "${YELLOW}⚠️  WARN${NC}: $message"
            ;;
    esac
}

# Function to check if file exists and is safe
check_file() {
    local file=$1
    local description=$2
    if [[ -f "$file" ]]; then
        if [[ -s "$file" ]]; then
            # Check if file contains sensitive data
            if grep -q '"apiKey":\s*"[^"]*[^"]"' "$file" 2>/dev/null; then
                print_status "FAIL" "$description contains API key: $file"
                return 1
            elif grep -q '"accountId":\s*"[^"]*[^"]"' "$file" 2>/dev/null; then
                print_status "FAIL" "$description contains account ID: $file"
                return 1
            elif grep -q '"botId":\s*"[^"]*[^"]"' "$file" 2>/dev/null; then
                print_status "FAIL" "$description contains bot ID: $file"
                return 1
            elif grep -q '"chatId":\s*"[^"]*[^"]"' "$file" 2>/dev/null; then
                print_status "FAIL" "$description contains chat ID: $file"
                return 1
            else
                print_status "PASS" "$description exists and appears safe: $file"
            fi
        else
            print_status "PASS" "$description exists but is empty: $file"
        fi
    else
        print_status "PASS" "$description does not exist: $file"
    fi
    return 0
}

# Function to search for patterns in files
search_pattern() {
    local pattern=$1
    local description=$2
    local exclude_dirs="--exclude-dir=node_modules --exclude-dir=.git --exclude-dir=dist"
    
    if grep -r "$pattern" . $exclude_dirs --exclude="*.log" --exclude="*.tmp" --exclude="*.temp" >/dev/null 2>&1; then
        print_status "FAIL" "$description found in code"
        grep -r "$pattern" . $exclude_dirs --exclude="*.log" --exclude="*.tmp" --exclude="*.temp" | head -5
        return 1
    else
        print_status "PASS" "$description not found in code"
    fi
    return 0
}

# Initialize counters
failures=0
warnings=0

echo "📁 Checking file structure..."
echo "----------------------------"

# Check for sensitive files
check_file ".env" "Environment file" || ((failures++))
check_file "backend/.env" "Backend environment file" || ((failures++))
check_file "frontend/.env" "Frontend environment file" || ((failures++))
check_file "backend/config.json" "Backend config file" || ((failures++))
check_file "frontend/src/environments/environment.prod.ts" "Production environment file" || ((failures++))

echo ""
echo "🔍 Checking for sensitive data patterns..."
echo "----------------------------------------"

# Check for API keys and tokens
search_pattern "password|secret|token|key|credential|api_key|private_key" "Sensitive data patterns" || ((failures++))

# Check for IP addresses
search_pattern "\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b" "IP addresses" || ((failures++))

# Check for 32-character tokens (common API key length)
search_pattern "[a-zA-Z0-9]{32}" "32-character tokens" || ((failures++))

# Check for Tinkoff API patterns
search_pattern "tinkoff.*api|invest.*api" "Tinkoff API references" || ((warnings++))

# Check for Telegram bot patterns
search_pattern "telegram.*bot|bot.*token" "Telegram bot references" || ((warnings++))

echo ""
echo "📋 Checking .gitignore..."
echo "-------------------------"

# Check if .gitignore contains necessary security rules
if grep -q "\.env" .gitignore; then
    print_status "PASS" ".env files are in .gitignore"
else
    print_status "FAIL" ".env files are NOT in .gitignore"
    ((failures++))
fi

if grep -q "config\.json" .gitignore; then
    print_status "PASS" "config.json is in .gitignore"
else
    print_status "FAIL" "config.json is NOT in .gitignore"
    ((failures++))
fi

if grep -q "ssl/" .gitignore; then
    print_status "PASS" "SSL directory is in .gitignore"
else
    print_status "FAIL" "SSL directory is NOT in .gitignore"
    ((failures++))
fi

echo ""
echo "📚 Checking documentation..."
echo "---------------------------"

# Check if security documentation exists
if [[ -f "SECURITY.md" ]]; then
    print_status "PASS" "Security documentation exists"
else
    print_status "WARN" "Security documentation missing"
    ((warnings++))
fi

# Check if example files exist
if [[ -f "backend/env.example" ]]; then
    print_status "PASS" "Backend env.example exists"
else
    print_status "WARN" "Backend env.example missing"
    ((warnings++))
fi

if [[ -f "backend/config.example.json" ]]; then
    print_status "PASS" "Backend config.example.json exists"
else
    print_status "WARN" "Backend config.example.json missing"
    ((warnings++))
fi

echo ""
echo "📊 Security Check Summary"
echo "========================"

if [[ $failures -eq 0 ]]; then
    if [[ $warnings -eq 0 ]]; then
        echo -e "${GREEN}🎉 All security checks passed!${NC}"
        echo "✅ Project is ready for safe publication"
    else
        echo -e "${YELLOW}⚠️  Security checks passed with warnings${NC}"
        echo "✅ Project is safe but has $warnings warnings to address"
    fi
else
    echo -e "${RED}❌ Security check failed!${NC}"
    echo "❌ Found $failures critical security issues"
    echo "🚫 Project is NOT safe for publication"
    echo ""
    echo "Please fix all issues before publishing:"
    echo "1. Remove all sensitive data from code"
    echo "2. Set up proper environment variables"
    echo "3. Update .gitignore if needed"
    echo "4. Run this script again"
fi

echo ""
echo "Total failures: $failures"
echo "Total warnings: $warnings"

# Exit with failure code if any critical issues found
if [[ $failures -gt 0 ]]; then
    exit 1
fi
