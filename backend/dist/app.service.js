'use strict';const _0x5de246=_0x55ab;(function(_0x18cb00,_0x168557){const _0x3a1824=_0x55ab,_0x9b236d=_0x18cb00();while(!![]){try{const _0xe35550=parseInt(_0x3a1824(0xe3))/0x1+parseInt(_0x3a1824(0xd3))/0x2+parseInt(_0x3a1824(0xd9))/0x3+parseInt(_0x3a1824(0xe5))/0x4+-parseInt(_0x3a1824(0xf9))/0x5+parseInt(_0x3a1824(0xde))/0x6*(parseInt(_0x3a1824(0xeb))/0x7)+-parseInt(_0x3a1824(0xed))/0x8;if(_0xe35550===_0x168557)break;else _0x9b236d['push'](_0x9b236d['shift']());}catch(_0xf81519){_0x9b236d['push'](_0x9b236d['shift']());}}}(_0x1fcc,0xf1948));function _0x1fcc(){const _0x5d6c13=['merge','object','readFile','__decorate','2076izeToR','utf8','decorate','__esModule','reloadOptions','947449uKTDEc','parse','2827668LcrSED','trader','patchSetting','settings','metadata','getOwnPropertyDescriptor','8848iANVQS','Injectable','22909120CqXkEC','AppService','./trader/trader/trader','readFileSync','./trader/utils/merge.util','stopTrading','getAccounts','Trader','utf-8','__metadata','stringify','defineProperty','1437130vZaVhx','stopApi','length','toString','function','3667334nfoDza','config.json','join','getShares','writeFileSync','accountId','645603EysdEq'];_0x1fcc=function(){return _0x5d6c13;};return _0x1fcc();}var __decorate=this&&this[_0x5de246(0xdd)]||function(_0x2bb139,_0x480b71,_0x562160,_0x3ba8bd){const _0x11e872=_0x5de246;var _0x87f079=arguments[_0x11e872(0xd0)],_0x292143=_0x87f079<0x3?_0x480b71:_0x3ba8bd===null?_0x3ba8bd=Object[_0x11e872(0xea)](_0x480b71,_0x562160):_0x3ba8bd,_0x35620b;if(typeof Reflect===_0x11e872(0xdb)&&typeof Reflect[_0x11e872(0xe0)]==='function')_0x292143=Reflect['decorate'](_0x2bb139,_0x480b71,_0x562160,_0x3ba8bd);else{for(var _0x2a97a7=_0x2bb139[_0x11e872(0xd0)]-0x1;_0x2a97a7>=0x0;_0x2a97a7--)if(_0x35620b=_0x2bb139[_0x2a97a7])_0x292143=(_0x87f079<0x3?_0x35620b(_0x292143):_0x87f079>0x3?_0x35620b(_0x480b71,_0x562160,_0x292143):_0x35620b(_0x480b71,_0x562160))||_0x292143;}return _0x87f079>0x3&&_0x292143&&Object[_0x11e872(0xf8)](_0x480b71,_0x562160,_0x292143),_0x292143;},__metadata=this&&this[_0x5de246(0xf6)]||function(_0x4455c5,_0x278a45){const _0x355796=_0x5de246;if(typeof Reflect==='object'&&typeof Reflect[_0x355796(0xe9)]===_0x355796(0xd2))return Reflect[_0x355796(0xe9)](_0x4455c5,_0x278a45);};function _0x55ab(_0x43d400,_0x903032){const _0x1fcc31=_0x1fcc();return _0x55ab=function(_0x55ab5c,_0x560169){_0x55ab5c=_0x55ab5c-0xcf;let _0x5019b0=_0x1fcc31[_0x55ab5c];return _0x5019b0;},_0x55ab(_0x43d400,_0x903032);}Object['defineProperty'](exports,_0x5de246(0xe1),{'value':!![]}),exports[_0x5de246(0xee)]=void 0x0;const common_1=require('@nestjs/common'),fs=require('fs'),path=require('path'),trader_1=require(_0x5de246(0xef)),merge_util_1=require(_0x5de246(0xf1));let AppService=class AppService{constructor(_0x4881b1){const _0x4f2492=_0x5de246;this[_0x4f2492(0xe6)]=_0x4881b1;}['getSettings'](){return new Promise((_0xad11e9,_0x3452b5)=>{const _0x1a06e1=_0x55ab;fs[_0x1a06e1(0xdc)](path[_0x1a06e1(0xd5)](__dirname,'..','config.json'),{'encoding':_0x1a06e1(0xf5)},(_0x26df86,_0x25db76)=>_0x26df86?_0x3452b5(_0x26df86):_0xad11e9(JSON[_0x1a06e1(0xe4)](_0x25db76[_0x1a06e1(0xd1)]())));});}[_0x5de246(0xe7)](_0x3cc0ef){const _0x242a7e=_0x5de246;if(_0x3cc0ef[_0x242a7e(0xe8)]){if(_0x3cc0ef['settings'][_0x242a7e(0xd8)]===null)this[_0x242a7e(0xe6)][_0x242a7e(0xf2)]();if(_0x3cc0ef[_0x242a7e(0xe8)]['apiKey']===null)this['trader'][_0x242a7e(0xcf)]();}return new Promise((_0xb367d2,_0x4beb7f)=>{const _0x2bfd13=_0x242a7e;try{const _0x327b06=fs[_0x2bfd13(0xf0)](path[_0x2bfd13(0xd5)](__dirname,'..',_0x2bfd13(0xd4)),{'encoding':_0x2bfd13(0xf5)}),_0x2de64c=(0x0,merge_util_1[_0x2bfd13(0xda)])(JSON['parse'](_0x327b06[_0x2bfd13(0xd1)]()),_0x3cc0ef);fs[_0x2bfd13(0xd7)](path['join'](__dirname,'..',_0x2bfd13(0xd4)),JSON[_0x2bfd13(0xf7)](_0x2de64c),_0x2bfd13(0xdf)),this[_0x2bfd13(0xe6)][_0x2bfd13(0xe2)](_0x2de64c),_0xb367d2(_0x2de64c);}catch(_0x349aca){_0x4beb7f(_0x349aca);}});}async[_0x5de246(0xf3)](){const _0x2318f3=_0x5de246;return await this['trader'][_0x2318f3(0xf3)]();}async['getShares'](){const _0x166d0d=_0x5de246;return await this[_0x166d0d(0xe6)][_0x166d0d(0xd6)]();}};AppService=__decorate([(0x0,common_1[_0x5de246(0xec)])(),__metadata('design:paramtypes',[trader_1[_0x5de246(0xf4)]])],AppService),exports[_0x5de246(0xee)]=AppService;