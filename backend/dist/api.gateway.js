'use strict';function _0x597b(_0x472d99,_0x2b3f70){const _0x21be8c=_0x21be();return _0x597b=function(_0x597b1d,_0x217637){_0x597b1d=_0x597b1d-0x6b;let _0x25f84a=_0x21be8c[_0x597b1d];return _0x25f84a;},_0x597b(_0x472d99,_0x2b3f70);}const _0x53231c=_0x597b;function _0x21be(){const _0x9bd789=['design:paramtypes','object','readFileSync','createServer','@nestjs/websockets','server','length','Server','1427552PbOvND','defineProperty','afterInit','merge','log','SubscribeMessage','Trader','609678GADzYv','prototype','https','__metadata','findAll','metadata','api','trader','map','1232656iCxUPj','getOwnPropertyDescriptor','function','WebSocketServer','4PYQkcz','45175kvsXvL','612eYGukm','ApiGateway','885000hLnEOF','status','7814YFCmOC','6pGKDzl','__esModule','listen','design:type','__param','./ssl/key.pem','./ssl/cert.pem','10360efmvfU'];_0x21be=function(){return _0x9bd789;};return _0x21be();}(function(_0x5c6d63,_0x2e9bc8){const _0x38b51f=_0x597b,_0x23cbea=_0x5c6d63();while(!![]){try{const _0x53fa5a=-parseInt(_0x38b51f(0x78))/0x1*(-parseInt(_0x38b51f(0x72))/0x2)+parseInt(_0x38b51f(0x90))/0x3+parseInt(_0x38b51f(0x76))/0x4+parseInt(_0x38b51f(0x73))/0x5*(-parseInt(_0x38b51f(0x79))/0x6)+-parseInt(_0x38b51f(0x89))/0x7+-parseInt(_0x38b51f(0x6e))/0x8+-parseInt(_0x38b51f(0x74))/0x9*(-parseInt(_0x38b51f(0x80))/0xa);if(_0x53fa5a===_0x2e9bc8)break;else _0x23cbea['push'](_0x23cbea['shift']());}catch(_0x40a419){_0x23cbea['push'](_0x23cbea['shift']());}}}(_0x21be,0x2308b));var __decorate=this&&this['__decorate']||function(_0x271a27,_0x1f80be,_0x50ba67,_0x27c3fe){const _0x537fb6=_0x597b;var _0x278d16=arguments[_0x537fb6(0x87)],_0x142c28=_0x278d16<0x3?_0x1f80be:_0x27c3fe===null?_0x27c3fe=Object[_0x537fb6(0x6f)](_0x1f80be,_0x50ba67):_0x27c3fe,_0x57283b;if(typeof Reflect===_0x537fb6(0x82)&&typeof Reflect['decorate']===_0x537fb6(0x70))_0x142c28=Reflect['decorate'](_0x271a27,_0x1f80be,_0x50ba67,_0x27c3fe);else{for(var _0x3f3394=_0x271a27[_0x537fb6(0x87)]-0x1;_0x3f3394>=0x0;_0x3f3394--)if(_0x57283b=_0x271a27[_0x3f3394])_0x142c28=(_0x278d16<0x3?_0x57283b(_0x142c28):_0x278d16>0x3?_0x57283b(_0x1f80be,_0x50ba67,_0x142c28):_0x57283b(_0x1f80be,_0x50ba67))||_0x142c28;}return _0x278d16>0x3&&_0x142c28&&Object[_0x537fb6(0x8a)](_0x1f80be,_0x50ba67,_0x142c28),_0x142c28;},__metadata=this&&this[_0x53231c(0x93)]||function(_0x4960a7,_0x5b07f1){const _0x3da7a1=_0x53231c;if(typeof Reflect==='object'&&typeof Reflect['metadata']==='function')return Reflect[_0x3da7a1(0x95)](_0x4960a7,_0x5b07f1);},__param=this&&this[_0x53231c(0x7d)]||function(_0x2f938f,_0x28ed79){return function(_0x362465,_0x57e31a){_0x28ed79(_0x362465,_0x57e31a,_0x2f938f);};};Object[_0x53231c(0x8a)](exports,_0x53231c(0x7a),{'value':!![]}),exports[_0x53231c(0x75)]=void 0x0;const websockets_1=require(_0x53231c(0x85)),rxjs_1=require('rxjs'),ws_1=require('ws'),trader_1=require('./trader/trader/trader'),https_1=require(_0x53231c(0x92)),fs_1=require('fs');let ApiGateway=class ApiGateway{constructor(_0x3383c3){const _0x55d510=_0x53231c;this[_0x55d510(0x6c)]=_0x3383c3;}[_0x53231c(0x8b)](){const _0x7b0250=_0x53231c,_0x1bddf1={'key':(0x0,fs_1[_0x7b0250(0x83)])(_0x7b0250(0x7e)),'cert':(0x0,fs_1[_0x7b0250(0x83)])(_0x7b0250(0x7f))},_0x30c978=(0x0,https_1[_0x7b0250(0x84)])(_0x1bddf1);_0x30c978[_0x7b0250(0x7b)](0x1f90),this[_0x7b0250(0x86)]=new ws_1[(_0x7b0250(0x88))]({'server':_0x30c978}),this[_0x7b0250(0x86)]['on']('connection',_0x2f6be7=>{const _0xd34d1e=_0x7b0250;console[_0xd34d1e(0x8d)]('Новое\x20wss\x20соединение\x20установлено');});}[_0x53231c(0x94)](_0x137c64){const _0x443002=_0x53231c;return(0x0,rxjs_1[_0x443002(0x8c)])((0x0,rxjs_1['from'])([{'status':'api','alive':!!this[_0x443002(0x6c)][_0x443002(0x6b)]},{'status':'wallet','alive':!!this[_0x443002(0x6c)]['wallet']}]),this['trader'][_0x443002(0x77)])['pipe']((0x0,rxjs_1[_0x443002(0x6d)])(_0x68c9c9=>({'event':'api','data':_0x68c9c9})));}};__decorate([(0x0,websockets_1[_0x53231c(0x71)])(),__metadata(_0x53231c(0x7c),ws_1[_0x53231c(0x88)])],ApiGateway[_0x53231c(0x91)],'server',void 0x0),__decorate([(0x0,websockets_1[_0x53231c(0x8e)])('api'),__param(0x0,(0x0,websockets_1['MessageBody'])()),__metadata(_0x53231c(0x7c),Function),__metadata(_0x53231c(0x81),[Object]),__metadata('design:returntype',void 0x0)],ApiGateway['prototype'],_0x53231c(0x94),null),ApiGateway=__decorate([(0x0,websockets_1['WebSocketGateway'])(),__metadata(_0x53231c(0x81),[trader_1[_0x53231c(0x8f)]])],ApiGateway),exports[_0x53231c(0x75)]=ApiGateway;