'use strict';const _0xa2cbf9=_0x5eaa;(function(_0xb1fa6,_0xf278d0){const _0x130682=_0x5eaa,_0x27e029=_0xb1fa6();while(!![]){try{const _0x3d7c63=-parseInt(_0x130682(0x1f1))/0x1+-parseInt(_0x130682(0x1db))/0x2*(parseInt(_0x130682(0x201))/0x3)+-parseInt(_0x130682(0x209))/0x4+-parseInt(_0x130682(0x218))/0x5+parseInt(_0x130682(0x21a))/0x6*(-parseInt(_0x130682(0x1f2))/0x7)+-parseInt(_0x130682(0x1eb))/0x8+-parseInt(_0x130682(0x216))/0x9*(-parseInt(_0x130682(0x1f8))/0xa);if(_0x3d7c63===_0xf278d0)break;else _0x27e029['push'](_0x27e029['shift']());}catch(_0x4524f3){_0x27e029['push'](_0x27e029['shift']());}}}(_0x2d49,0x3d708));function _0x5eaa(_0x1ae379,_0x4e1e4e){const _0x2d49e8=_0x2d49();return _0x5eaa=function(_0x5eaa9b,_0x55ce90){_0x5eaa9b=_0x5eaa9b-0x1d7;let _0x160402=_0x2d49e8[_0x5eaa9b];return _0x160402;},_0x5eaa(_0x1ae379,_0x4e1e4e);}var __asyncValues=this&&this['__asyncValues']||function(_0x390157){const _0x184722=_0x5eaa;if(!Symbol['asyncIterator'])throw new TypeError('Symbol.asyncIterator\x20is\x20not\x20defined.');var _0x36df08=_0x390157[Symbol[_0x184722(0x217)]],_0x3cead7;return _0x36df08?_0x36df08['call'](_0x390157):(_0x390157=typeof __values==='function'?__values(_0x390157):_0x390157[Symbol[_0x184722(0x1ed)]](),_0x3cead7={},_0x56bc1b(_0x184722(0x1ec)),_0x56bc1b('throw'),_0x56bc1b(_0x184722(0x20c)),_0x3cead7[Symbol['asyncIterator']]=function(){return this;},_0x3cead7);function _0x56bc1b(_0x56d9e1){_0x3cead7[_0x56d9e1]=_0x390157[_0x56d9e1]&&function(_0x3a693a){return new Promise(function(_0x235030,_0x2536f0){const _0x18d3b6=_0x5eaa;_0x3a693a=_0x390157[_0x56d9e1](_0x3a693a),_0x5bf1a8(_0x235030,_0x2536f0,_0x3a693a[_0x18d3b6(0x1d9)],_0x3a693a[_0x18d3b6(0x1e6)]);});};}function _0x5bf1a8(_0x2846fd,_0x2feade,_0x151b69,_0x316dd2){const _0x5071a5=_0x184722;Promise[_0x5071a5(0x1fc)](_0x316dd2)['then'](function(_0x4b486f){_0x2846fd({'value':_0x4b486f,'done':_0x151b69});},_0x2feade);}};Object[_0xa2cbf9(0x1fd)](exports,_0xa2cbf9(0x1ee),{'value':!![]}),exports[_0xa2cbf9(0x202)]=void 0x0;const rxjs_1=require(_0xa2cbf9(0x1f9)),tinkoff_invest_api_1=require(_0xa2cbf9(0x215)),instruments_1=require('tinkoff-invest-api/cjs/generated/instruments'),marketdata_1=require(_0xa2cbf9(0x1fe)),nearest_increment_value_1=require(_0xa2cbf9(0x20e)),perf_hooks_1=require('perf_hooks'),CHANK_SIZE=0x12c;class DropFutures{constructor(_0x153096,_0x1792da){const _0x5d6f0f=_0xa2cbf9;this[_0x5d6f0f(0x208)]=_0x153096,this[_0x5d6f0f(0x20a)]=_0x1792da,this[_0x5d6f0f(0x1e1)]=new rxjs_1[(_0x5d6f0f(0x1ea))](),this['unsubscribes']=[],this[_0x5d6f0f(0x1d7)]=this['buyTheDrop']['pipe']((0x0,rxjs_1[_0x5d6f0f(0x207)])(()=>!this[_0x5d6f0f(0x219)]),(0x0,rxjs_1[_0x5d6f0f(0x1f3)])(()=>{const _0x1ac416=_0x5d6f0f;!this[_0x1ac416(0x219)]&&(this['halt']=!![],setTimeout(()=>this['halt']=![],this[_0x1ac416(0x20a)][_0x1ac416(0x20d)]));}));}async['startFuturesDrop'](){const _0x16eda2=_0xa2cbf9;var _0x999fdf,_0x3e7682,_0x3bf92b,_0x2e8d04;const _0x57b08c=perf_hooks_1[_0x16eda2(0x205)][_0x16eda2(0x210)](),_0x276872=await this[_0x16eda2(0x208)][_0x16eda2(0x1e0)][_0x16eda2(0x1f5)]({'instrumentStatus':instruments_1[_0x16eda2(0x214)][_0x16eda2(0x1e8)]}),_0x21c6a4=perf_hooks_1[_0x16eda2(0x205)]['now']();console[_0x16eda2(0x1f0)](_0x16eda2(0x21b)+(_0x21c6a4-_0x57b08c)['toFixed'](0x2)+'\x20мс');const _0x532fa4=[];for(let _0x3403eb=0x0;_0x3403eb<_0x276872[_0x16eda2(0x1e0)][_0x16eda2(0x1df)];_0x3403eb+=CHANK_SIZE){_0x532fa4[_0x16eda2(0x1e5)](_0x276872[_0x16eda2(0x1e0)][_0x16eda2(0x1fb)](_0x3403eb,_0x3403eb+CHANK_SIZE));}try{for(var _0x1b1121=!![],_0x332e0b=__asyncValues(_0x532fa4),_0x2425b1;_0x2425b1=await _0x332e0b[_0x16eda2(0x1ec)](),_0x999fdf=_0x2425b1['done'],!_0x999fdf;){_0x2e8d04=_0x2425b1[_0x16eda2(0x1e6)],_0x1b1121=![];try{const _0x1fe631=_0x2e8d04,_0x590044=await this[_0x16eda2(0x208)][_0x16eda2(0x1e4)]()[_0x16eda2(0x212)]({'instruments':_0x1fe631['map'](_0x5c7202=>({'figi':_0x5c7202[_0x16eda2(0x1e9)],'interval':marketdata_1[_0x16eda2(0x211)][_0x16eda2(0x1dc)]})),'waitingClose':![]},_0x4dee19=>this['processOnCandle'](_0x4dee19,_0x1fe631));this[_0x16eda2(0x1ef)][_0x16eda2(0x1e5)](_0x590044),this[_0x16eda2(0x208)][_0x16eda2(0x1e3)][_0x16eda2(0x1fa)]['on']('error',_0x476aaf=>console['log'](_0x16eda2(0x213),_0x476aaf)),this[_0x16eda2(0x208)][_0x16eda2(0x1e3)][_0x16eda2(0x1fa)]['on']('close',_0x520720=>console[_0x16eda2(0x1f0)]('stream\x20closed,\x20reason:',_0x520720));}finally{_0x1b1121=!![];}}}catch(_0x324643){_0x3e7682={'error':_0x324643};}finally{try{if(!_0x1b1121&&!_0x999fdf&&(_0x3bf92b=_0x332e0b['return']))await _0x3bf92b[_0x16eda2(0x21c)](_0x332e0b);}finally{if(_0x3e7682)throw _0x3e7682[_0x16eda2(0x1dd)];}}return this[_0x16eda2(0x1d7)];}[_0xa2cbf9(0x1ff)](_0x396bb6,_0x16c8af){const _0x465aef=_0xa2cbf9,{open:_0x2e84be,low:_0x1ebbea}=_0x396bb6,_0x1c0071=_0x16c8af[_0x465aef(0x203)](_0x271417=>_0x271417[_0x465aef(0x1e9)]===_0x396bb6[_0x465aef(0x1e9)]),_0xb84192=Number(_0x1ebbea[_0x465aef(0x206)]+'.'+_0x1ebbea[_0x465aef(0x20b)]),_0x5a7308=Number(_0x2e84be[_0x465aef(0x206)]+'.'+_0x2e84be['nano']);if(_0x5a7308*this[_0x465aef(0x20a)][_0x465aef(0x1d8)]>_0xb84192){const _0x52fd60=perf_hooks_1[_0x465aef(0x205)][_0x465aef(0x210)]();this[_0x465aef(0x1e1)][_0x465aef(0x1ec)]({'price':this[_0x465aef(0x20f)](_0xb84192,_0x5a7308-_0xb84192,_0x1c0071),'future':_0x1c0071});const _0x47d85e=perf_hooks_1[_0x465aef(0x205)][_0x465aef(0x210)]();console['log'](_0x465aef(0x1f7)+_0x1c0071[_0x465aef(0x1f6)]+':\x20'+(_0x47d85e-_0x52fd60)['toFixed'](0x2)+_0x465aef(0x200));}}[_0xa2cbf9(0x20f)](_0x2bd16c,_0x5dbc8e,_0x5ad834){const _0x1b62d0=_0xa2cbf9;return(0x0,nearest_increment_value_1[_0x1b62d0(0x1f4)])(_0x2bd16c+_0x5dbc8e*this['options'][_0x1b62d0(0x1de)],tinkoff_invest_api_1[_0x1b62d0(0x1e7)][_0x1b62d0(0x1e2)](_0x5ad834['minPriceIncrement']));}['stop'](){const _0x207872=_0xa2cbf9;Promise[_0x207872(0x204)](this[_0x207872(0x1ef)])[_0x207872(0x1da)]();}}function _0x2d49(){const _0x28ddcd=['\x20мс','39njRycK','DropFutures','find','all','performance','units','filter','api','1312920BDkufd','options','nano','return','haltTimeout','../utils/nearest-increment-value','getPrice','now','SubscriptionInterval','candles','stream\x20error','InstrumentStatus','tinkoff-invest-api','205749uQhIoe','asyncIterator','82135XJYOJr','halt','18TDtYmK','Время\x20запроса\x20futures:\x20','call','buy','moexDiffFuture','done','then','9514pnYQKf','SUBSCRIPTION_INTERVAL_ONE_MINUTE','error','moexDiffFutureBuy','length','instruments','buyTheDrop','toNumber','stream','createMarketStream','push','value','Helpers','INSTRUMENT_STATUS_BASE','figi','Subject','1632568HbANUu','next','iterator','__esModule','unsubscribes','log','453076QdeKxL','238189UjcGdm','tap','nearestHighIncrementValue','futures','name','Время\x20обработки\x20свечи\x20для\x20','620MqlJgd','rxjs','market','slice','resolve','defineProperty','tinkoff-invest-api/cjs/generated/marketdata','processOnCandle'];_0x2d49=function(){return _0x28ddcd;};return _0x2d49();}exports[_0xa2cbf9(0x202)]=DropFutures;