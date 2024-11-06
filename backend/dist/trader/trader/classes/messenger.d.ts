export declare class Messenger {
    private readonly botId;
    private readonly chatId;
    constructor();
    byLogMessage(stratagyName: string, text: string): void;
    openLimitOrderLogMessage(stratagyName: string, text: string, type: 'success' | 'error', stockTiker: string, errorDescription?: string): void;
    cancelLimitOrderLogMessage(stratagyName: string, type: 'success' | 'error', stockTiker: string, errorDescription?: string): void;
    sendMessage(stratagyName: string, title: string, text: string, stockTiker?: string, errorDescription?: string): void;
}
