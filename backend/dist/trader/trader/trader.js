'use strict';const _0x4b34da=_0x4f8e;function _0x4f8e(_0x326c0a,_0x57774b){const _0x573564=_0x5735();return _0x4f8e=function(_0x4f8ea4,_0x2c3707){_0x4f8ea4=_0x4f8ea4-0x15f;let _0xb8d62a=_0x573564[_0x4f8ea4];return _0xb8d62a;},_0x4f8e(_0x326c0a,_0x57774b);}(function(_0x432472,_0x299ff1){const _0x46246f=_0x4f8e,_0x530588=_0x432472();while(!![]){try{const _0x2f719f=parseInt(_0x46246f(0x1a5))/0x1+parseInt(_0x46246f(0x16a))/0x2*(parseInt(_0x46246f(0x171))/0x3)+-parseInt(_0x46246f(0x169))/0x4*(parseInt(_0x46246f(0x194))/0x5)+parseInt(_0x46246f(0x17c))/0x6*(parseInt(_0x46246f(0x164))/0x7)+-parseInt(_0x46246f(0x19c))/0x8+parseInt(_0x46246f(0x19a))/0x9+-parseInt(_0x46246f(0x1a3))/0xa;if(_0x2f719f===_0x299ff1)break;else _0x530588['push'](_0x530588['shift']());}catch(_0x1bc77c){_0x530588['push'](_0x530588['shift']());}}}(_0x5735,0x76a70));var __decorate=this&&this['__decorate']||function(_0x1a5cf3,_0x52f94b,_0x357ae2,_0x28a80e){const _0x4951a0=_0x4f8e;var _0x3396c7=arguments[_0x4951a0(0x191)],_0x17572b=_0x3396c7<0x3?_0x52f94b:_0x28a80e===null?_0x28a80e=Object[_0x4951a0(0x180)](_0x52f94b,_0x357ae2):_0x28a80e,_0x3261b2;if(typeof Reflect===_0x4951a0(0x184)&&typeof Reflect[_0x4951a0(0x193)]===_0x4951a0(0x19e))_0x17572b=Reflect[_0x4951a0(0x193)](_0x1a5cf3,_0x52f94b,_0x357ae2,_0x28a80e);else{for(var _0x2fc3c1=_0x1a5cf3['length']-0x1;_0x2fc3c1>=0x0;_0x2fc3c1--)if(_0x3261b2=_0x1a5cf3[_0x2fc3c1])_0x17572b=(_0x3396c7<0x3?_0x3261b2(_0x17572b):_0x3396c7>0x3?_0x3261b2(_0x52f94b,_0x357ae2,_0x17572b):_0x3261b2(_0x52f94b,_0x357ae2))||_0x17572b;}return _0x3396c7>0x3&&_0x17572b&&Object[_0x4951a0(0x179)](_0x52f94b,_0x357ae2,_0x17572b),_0x17572b;},__metadata=this&&this[_0x4b34da(0x172)]||function(_0x230dc3,_0x30d73e){const _0x1201e4=_0x4b34da;if(typeof Reflect===_0x1201e4(0x184)&&typeof Reflect['metadata']===_0x1201e4(0x19e))return Reflect['metadata'](_0x230dc3,_0x30d73e);};function _0x5735(){const _0x4c53d9=['./services/share.fda','init','enabled','initializeOptions','6hhEQHK','__metadata','ShareFda','shareHalts$','./classes/trader.base.class','initializeApi','drop','accountId','defineProperty','Api','\x1b[37m','372972KvdShG','settings','Injectable','shareReports$','getOwnPropertyDescriptor','shareDividends$','shareReports','shareDividends','object','apiKey','\x1b[36m%s\x1b[0m','shareFDA$','startTrading','sharesDrop','stopStratagies','shareHalts','reloadOptions','stoped','initializeTrading','unWatch','Trader','length','Стратегия\x20СЛЕЗА:\x20выключена','decorate','20hNfkxy','then','startStratagies','Wallet','log','ShareReports','4169592DTQscK','onCloseApi','2335392Jpdifr','DropShares','function','api','onOpenApi','Стратегия\x20СЛЕЗА:\x20запущена','ShareHalts','4338270hSfWwL','onCloseWallet','419423jQnTOY','design:paramtypes','shareClose','./classes/wallet','../stratagies/drop.shares','stopTrading','stopApi','options','91nshcfi','wallet','shareFDA','start','stop','769272xAlyGl','290206abHzPu','onOpenWallet','watch'];_0x5735=function(){return _0x4c53d9;};return _0x5735();}Object[_0x4b34da(0x179)](exports,'__esModule',{'value':!![]}),exports[_0x4b34da(0x190)]=void 0x0;const common_1=require('@nestjs/common'),api_1=require('../api/api'),drop_shares_1=require(_0x4b34da(0x160)),trader_base_class_1=require(_0x4b34da(0x175)),wallet_1=require(_0x4b34da(0x15f)),share_close_1=require('./services/share.close'),share_dividents_1=require('./services/share.dividents'),share_fda_1=require(_0x4b34da(0x16d)),share_halts_1=require('./services/share.halts'),share_reports_1=require('./services/share.reports');let Trader=class Trader extends trader_base_class_1['BaseTrader']{constructor(_0x7e3e58,_0x84bbfb,_0x49f716,_0x12dd80,_0x5627bb){const _0x582b20=_0x4b34da;super(),this[_0x582b20(0x183)]=_0x7e3e58,this['shareFDA']=_0x84bbfb,this[_0x582b20(0x18b)]=_0x49f716,this[_0x582b20(0x182)]=_0x12dd80,this[_0x582b20(0x1a7)]=_0x5627bb,this[_0x582b20(0x188)]()[_0x582b20(0x195)]();}async[_0x4b34da(0x188)](){const _0x412af8=_0x4b34da;this[_0x412af8(0x170)](),this[_0x412af8(0x18a)](),await this[_0x412af8(0x162)](),await this[_0x412af8(0x176)](this[_0x412af8(0x163)]),await this[_0x412af8(0x161)](),await this[_0x412af8(0x18e)](this[_0x412af8(0x163)]);}async[_0x4b34da(0x176)](_0x2250a6){const _0x13e675=_0x4b34da;var _0x138f90;if((_0x138f90=_0x2250a6===null||_0x2250a6===void 0x0?void 0x0:_0x2250a6[_0x13e675(0x17d)])===null||_0x138f90===void 0x0?void 0x0:_0x138f90[_0x13e675(0x185)]){this[_0x13e675(0x19f)]=new api_1[(_0x13e675(0x17a))]({'token':_0x2250a6[_0x13e675(0x17d)]['apiKey']}),this[_0x13e675(0x1a0)]();const _0x8e5cc4=await this['getShares']();this[_0x13e675(0x181)]=this[_0x13e675(0x183)]['watch']([]),this['shareFDA$']=this[_0x13e675(0x166)][_0x13e675(0x16c)]([]),this[_0x13e675(0x174)]=this['shareHalts'][_0x13e675(0x16c)]([]),this[_0x13e675(0x17f)]=this[_0x13e675(0x182)][_0x13e675(0x16c)]([]);}}async[_0x4b34da(0x162)](){const _0x5ef4de=_0x4b34da;this[_0x5ef4de(0x183)][_0x5ef4de(0x18f)](),this[_0x5ef4de(0x166)][_0x5ef4de(0x18f)](),this[_0x5ef4de(0x18b)][_0x5ef4de(0x18f)](),this['shareReports']['unWatch'](),this[_0x5ef4de(0x19b)]();}async[_0x4b34da(0x18e)](_0x44cb7e){const _0x3c2466=_0x4b34da;if(!this[_0x3c2466(0x19f)]||!_0x44cb7e['settings'][_0x3c2466(0x178)])return;this[_0x3c2466(0x165)]=new wallet_1[(_0x3c2466(0x197))](this[_0x3c2466(0x19f)],_0x44cb7e[_0x3c2466(0x17d)][_0x3c2466(0x178)],this[_0x3c2466(0x163)]),await this['wallet'][_0x3c2466(0x16e)](),await this[_0x3c2466(0x196)](),this[_0x3c2466(0x16b)](),console['log'](_0x3c2466(0x186),'Стратегии\x20запущены','\x1b[37m');}async[_0x4b34da(0x161)](){const _0x4c4b74=_0x4b34da;this[_0x4c4b74(0x1a4)](),this['stopStratagies'](),console[_0x4c4b74(0x198)]('\x1b[31m','Стратегии\x20выключены','\x1b[37m');}async[_0x4b34da(0x196)](){const _0x40e306=_0x4b34da;this[_0x40e306(0x189)]=new drop_shares_1[(_0x40e306(0x19d))](this[_0x40e306(0x19f)],this[_0x40e306(0x163)][_0x40e306(0x177)],this[_0x40e306(0x165)]),this[_0x40e306(0x163)][_0x40e306(0x177)][_0x40e306(0x16f)]&&(await this[_0x40e306(0x189)][_0x40e306(0x167)](this[_0x40e306(0x181)],this[_0x40e306(0x187)],this['shareHalts$'],this[_0x40e306(0x17f)]),console[_0x40e306(0x198)](_0x40e306(0x186),_0x40e306(0x1a1),_0x40e306(0x17b)));}[_0x4b34da(0x18a)](){const _0xdff279=_0x4b34da;this[_0xdff279(0x189)]&&this['sharesDrop'][_0xdff279(0x168)]();}[_0x4b34da(0x18c)](_0x4f9efb){const _0x22aac9=_0x4b34da;var _0x2effcd;super['reloadOptions'](_0x4f9efb),(_0x2effcd=this[_0x22aac9(0x189)])===null||_0x2effcd===void 0x0?void 0x0:_0x2effcd[_0x22aac9(0x18c)](this['options'][_0x22aac9(0x177)]),this[_0x22aac9(0x189)]&&(!_0x4f9efb[_0x22aac9(0x177)][_0x22aac9(0x16f)]&&!this[_0x22aac9(0x189)][_0x22aac9(0x18d)]&&(this[_0x22aac9(0x189)]['stop'](),console['log'](_0x22aac9(0x186),_0x22aac9(0x192),_0x22aac9(0x17b))),_0x4f9efb[_0x22aac9(0x177)][_0x22aac9(0x16f)]&&this[_0x22aac9(0x189)][_0x22aac9(0x18d)]&&(this[_0x22aac9(0x189)][_0x22aac9(0x167)](this[_0x22aac9(0x181)],this['shareFDA$'],this['shareHalts$'],this['shareReports$'])[_0x22aac9(0x195)](),console[_0x22aac9(0x198)](_0x22aac9(0x186),_0x22aac9(0x1a1),_0x22aac9(0x17b))));}};Trader=__decorate([(0x0,common_1[_0x4b34da(0x17e)])(),__metadata(_0x4b34da(0x1a6),[share_dividents_1['ShareDividends'],share_fda_1[_0x4b34da(0x173)],share_halts_1[_0x4b34da(0x1a2)],share_reports_1[_0x4b34da(0x199)],share_close_1['ShareClose']])],Trader),exports['Trader']=Trader;