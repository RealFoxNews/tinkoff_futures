'use strict';const _0x1af08d=_0x3370;(function(_0x3374e5,_0x1e52fd){const _0x5f5638=_0x3370,_0x1249fe=_0x3374e5();while(!![]){try{const _0x235199=parseInt(_0x5f5638(0x1bf))/0x1+-parseInt(_0x5f5638(0x1cb))/0x2*(-parseInt(_0x5f5638(0x1ae))/0x3)+parseInt(_0x5f5638(0x1b6))/0x4+-parseInt(_0x5f5638(0x1c9))/0x5*(parseInt(_0x5f5638(0x1b0))/0x6)+-parseInt(_0x5f5638(0x1bc))/0x7+parseInt(_0x5f5638(0x1b3))/0x8*(-parseInt(_0x5f5638(0x1d0))/0x9)+parseInt(_0x5f5638(0x1d1))/0xa;if(_0x235199===_0x1e52fd)break;else _0x1249fe['push'](_0x1249fe['shift']());}catch(_0x54fad9){_0x1249fe['push'](_0x1249fe['shift']());}}}(_0x2a8c,0xaea17));function _0x3370(_0x27c342,_0x41c1f1){const _0x2a8c7a=_0x2a8c();return _0x3370=function(_0x3370d6,_0x50310c){_0x3370d6=_0x3370d6-0x1a9;let _0x4e852c=_0x2a8c7a[_0x3370d6];return _0x4e852c;},_0x3370(_0x27c342,_0x41c1f1);}var __decorate=this&&this['__decorate']||function(_0x572611,_0x597e02,_0x1a6ae7,_0x1aec8b){const _0x2d811f=_0x3370;var _0x111665=arguments[_0x2d811f(0x1af)],_0x10676a=_0x111665<0x3?_0x597e02:_0x1aec8b===null?_0x1aec8b=Object['getOwnPropertyDescriptor'](_0x597e02,_0x1a6ae7):_0x1aec8b,_0x19a49a;if(typeof Reflect===_0x2d811f(0x1cf)&&typeof Reflect[_0x2d811f(0x1bd)]===_0x2d811f(0x1bb))_0x10676a=Reflect[_0x2d811f(0x1bd)](_0x572611,_0x597e02,_0x1a6ae7,_0x1aec8b);else{for(var _0x3f5fc1=_0x572611[_0x2d811f(0x1af)]-0x1;_0x3f5fc1>=0x0;_0x3f5fc1--)if(_0x19a49a=_0x572611[_0x3f5fc1])_0x10676a=(_0x111665<0x3?_0x19a49a(_0x10676a):_0x111665>0x3?_0x19a49a(_0x597e02,_0x1a6ae7,_0x10676a):_0x19a49a(_0x597e02,_0x1a6ae7))||_0x10676a;}return _0x111665>0x3&&_0x10676a&&Object[_0x2d811f(0x1b1)](_0x597e02,_0x1a6ae7,_0x10676a),_0x10676a;},__metadata=this&&this[_0x1af08d(0x1b8)]||function(_0x241409,_0x31d7b9){const _0x4c62e2=_0x1af08d;if(typeof Reflect===_0x4c62e2(0x1cf)&&typeof Reflect[_0x4c62e2(0x1b2)]===_0x4c62e2(0x1bb))return Reflect[_0x4c62e2(0x1b2)](_0x241409,_0x31d7b9);},__param=this&&this[_0x1af08d(0x1c3)]||function(_0x50e794,_0x69696){return function(_0x3e6d84,_0x37ca3a){_0x69696(_0x3e6d84,_0x37ca3a,_0x50e794);};};Object[_0x1af08d(0x1b1)](exports,'__esModule',{'value':!![]}),exports['ApiGateway']=void 0x0;const websockets_1=require('@nestjs/websockets'),rxjs_1=require(_0x1af08d(0x1c6)),ws_1=require('ws'),trader_1=require(_0x1af08d(0x1be)),https_1=require(_0x1af08d(0x1c7)),fs_1=require('fs');let ApiGateway=class ApiGateway{constructor(_0x36aeb7){const _0x22f84c=_0x1af08d;this[_0x22f84c(0x1cc)]=_0x36aeb7;}[_0x1af08d(0x1b7)](){const _0x57a524=_0x1af08d,_0x30232f={'key':(0x0,fs_1[_0x57a524(0x1d2)])(_0x57a524(0x1d4)),'cert':(0x0,fs_1[_0x57a524(0x1d2)])(_0x57a524(0x1ac))},_0x1b8611=(0x0,https_1[_0x57a524(0x1c4)])(_0x30232f);_0x1b8611[_0x57a524(0x1ab)](0x1f90),this[_0x57a524(0x1a9)]=new ws_1[(_0x57a524(0x1cd))]({'server':_0x1b8611}),this['server']['on']('connection',_0x2f0a4b=>{const _0x4bd2a4=_0x57a524;console[_0x4bd2a4(0x1c8)](_0x4bd2a4(0x1b9));});}[_0x1af08d(0x1b5)](_0x5bbb93){const _0x2469e0=_0x1af08d;return(0x0,rxjs_1[_0x2469e0(0x1aa)])((0x0,rxjs_1['from'])([{'status':'api','alive':!!this[_0x2469e0(0x1cc)][_0x2469e0(0x1c2)]},{'status':_0x2469e0(0x1ba),'alive':!!this[_0x2469e0(0x1cc)][_0x2469e0(0x1ba)]}]),this['trader'][_0x2469e0(0x1ad)])['pipe']((0x0,rxjs_1[_0x2469e0(0x1d3)])(_0x3fa4f1=>({'event':'api','data':_0x3fa4f1})));}};__decorate([(0x0,websockets_1['WebSocketServer'])(),__metadata('design:type',ws_1[_0x1af08d(0x1cd)])],ApiGateway[_0x1af08d(0x1c5)],_0x1af08d(0x1a9),void 0x0),__decorate([(0x0,websockets_1[_0x1af08d(0x1b4)])(_0x1af08d(0x1c2)),__param(0x0,(0x0,websockets_1['MessageBody'])()),__metadata(_0x1af08d(0x1ce),Function),__metadata(_0x1af08d(0x1ca),[Object]),__metadata('design:returntype',void 0x0)],ApiGateway[_0x1af08d(0x1c5)],_0x1af08d(0x1b5),null),ApiGateway=__decorate([(0x0,websockets_1[_0x1af08d(0x1c0)])(),__metadata(_0x1af08d(0x1ca),[trader_1[_0x1af08d(0x1c1)]])],ApiGateway),exports['ApiGateway']=ApiGateway;function _0x2a8c(){const _0x542c03=['decorate','./trader/trader/trader','395121oBuuXA','WebSocketGateway','Trader','api','__param','createServer','prototype','rxjs','https','log','85fpqoEk','design:paramtypes','2058oWOgNf','trader','Server','design:type','object','144AZBgmZ','19970240dLZqTv','readFileSync','map','./ssl/key.pem','server','merge','listen','./ssl/cert.pem','status','1767PvxuBC','length','499944iaxYEa','defineProperty','metadata','358584OdDqaV','SubscribeMessage','findAll','3675456zrWcvz','afterInit','__metadata','Новое\x20wss\x20соединение\x20установлено','wallet','function','7476889OYRUaM'];_0x2a8c=function(){return _0x542c03;};return _0x2a8c();}