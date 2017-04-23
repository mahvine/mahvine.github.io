webpackJsonp([2,4],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemoryService = (function () {
    function MemoryService() {
        this.compareLimit = 2;
        this.compareModels = [];
        this.onWin = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
    }
    MemoryService.prototype.setModels = function (tileModels) {
        this.tileModels = tileModels;
    };
    MemoryService.prototype.evaluate = function (tileModel) {
        this.compareModels.push(tileModel);
        console.log("evaluate");
        console.log(this.compareModels);
        if (this.compareModels.length == this.compareLimit) {
            var firstModel = this.compareModels[0];
            var notSame = false;
            for (var index in this.compareModels) {
                if (firstModel.tileId != this.compareModels[index].tileId) {
                    notSame = true;
                }
            }
            if (notSame) {
                // alert("this is not same kids");
                for (var index in this.compareModels) {
                    this.compareModels[index].evaluating = false;
                }
            }
            else {
                for (var index in this.compareModels) {
                    //You would want to complete this ones
                    this.compareModels[index].finished = true;
                }
            }
            this.compareModels = [];
        }
    };
    MemoryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], MemoryService);
    return MemoryService;
}());
//# sourceMappingURL=memory-service.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PictureTileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PictureTileModel; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PictureTileComponent = (function () {
    function PictureTileComponent() {
        this.tileClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.model;
    }
    PictureTileComponent.prototype.ngOnChanges = function (change) {
        if (change['index']) {
            if (change['index'].currentValue) {
                this.model.index = change['index'].currentValue;
            }
        }
    };
    PictureTileComponent.prototype.onTileClick = function () {
        var _this = this;
        if (!this.model.evaluating) {
            this.model.evaluating = true;
            setTimeout(function () {
                _this.tileClick.emit(_this.model);
            }, 500);
            console.log(this.model.tileId);
            console.log(this.index);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', PictureTileModel)
    ], PictureTileComponent.prototype, "model", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], PictureTileComponent.prototype, "index", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], PictureTileComponent.prototype, "tileClick", void 0);
    PictureTileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'picture-tile',
            template: __webpack_require__(524),
            styles: [__webpack_require__(518)]
        }), 
        __metadata('design:paramtypes', [])
    ], PictureTileComponent);
    return PictureTileComponent;
    var _a;
}());
var PictureTileModel = (function () {
    function PictureTileModel(tileId) {
        this.evaluating = false;
        this.finished = false;
        if (tileId) {
            this.tileId = tileId;
            var sequence = Number(this.tileId.substr(4)) + 1;
            var imgID = sequence > 9 ? sequence : "0" + sequence.toString();
            this.imgFileName = "robot" + imgID + ".png";
        }
    }
    return PictureTileModel;
}());
//# sourceMappingURL=picture-tile.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 350;


/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(462);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__picture_tile_picture_tile_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__memory_service__ = __webpack_require__(305);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(memoryService) {
        this.memoryService = memoryService;
        this.tileModels = [];
        this.playing = false;
        this.lose = false;
        this.winner = false;
        this.countDowntimeout = 35000;
        this.initializeTiles();
    }
    AppComponent.prototype.shuffle = function (array) {
        var i = 0, j = 0, temp = null;
        for (i = array.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.onTileClick = function (event) {
        var _this = this;
        this.memoryService.evaluate(event);
        this.checkIfWin();
        if (!this.playing && !this.lose && !this.winner) {
            this.playing = true;
            this.timer = setTimeout(function () {
                _this.lose = true;
                _this.playing = false;
            }, this.countDowntimeout);
            console.log(this.timer);
        }
    };
    AppComponent.prototype.initializeTiles = function () {
        this.tileModels = [];
        //populate
        for (var number = 0; number < 9; number++) {
            var tileModel = new __WEBPACK_IMPORTED_MODULE_1__picture_tile_picture_tile_component__["b" /* PictureTileModel */]("TILE" + number);
            var tileModelCopy = new __WEBPACK_IMPORTED_MODULE_1__picture_tile_picture_tile_component__["b" /* PictureTileModel */]("TILE" + number);
            this.tileModels.push(tileModel);
            this.tileModels.push(tileModelCopy);
        }
        this.shuffle(this.tileModels);
        console.log(this.tileModels);
        this.memoryService.setModels(this.tileModels);
    };
    AppComponent.prototype.restart = function () {
        this.initializeTiles();
        this.lose = false;
        this.playing = false;
    };
    AppComponent.prototype.checkIfWin = function () {
        this.winner = false;
        for (var i in this.tileModels) {
            var model = this.tileModels[i];
            if (!model.finished) {
                return;
            }
        }
        this.playing = false;
        this.winner = true;
        clearTimeout(this.timer);
        clearInterval(this.timer);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'body',
            template: __webpack_require__(523),
            styles: [__webpack_require__(517)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__memory_service__["a" /* MemoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__memory_service__["a" /* MemoryService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__memory_service__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__picture_tile_picture_tile_component__ = __webpack_require__(306);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__picture_tile_picture_tile_component__["a" /* PictureTileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__memory_service__["a" /* MemoryService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(92)();
// imports


// module
exports.push([module.i, ":host {\n  width: 100%;\n  height: 100%;\n  background-image: url(" + __webpack_require__(801) + ");\n  background-size: 100% 100%;\n  padding-top: 20px;\n}\n.wrapper {\n  display: -ms-grid;\n  display: grid;\n  grid-gap: 20px;\n}\n.wrapper picture-tile {\n  height: 11em;\n  width: 11em;\n  display: inline-block;\n}\n/*count down animation*/\n.countdown-anim {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  width: 100%;\n  height: 15px;\n  background: rgba(0, 0, 0, 0.2);\n  pointer-events: none;\n  -webkit-transform: translate3d(0, -100%, 0);\n          transform: translate3d(0, -100%, 0);\n  opacity: 0;\n}\n.countdown-anim .bar {\n  position: absolute;\n  content: '';\n  height: 100%;\n  width: 100%;\n  background: #ed4e6e;\n  height: 15px;\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n.countdown-anim.la-animate {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s;\n}\n.countdown-anim.la-animate .bar {\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n  transition: -webkit-transform 35s;\n  transition: transform 35s;\n  transition: transform 35s, -webkit-transform 35s;\n}\n.countdown-anim.win {\n  opacity: 0;\n}\n/** MODAL **/\na.modal-trigger {\n  display: block;\n  text-decoration: none;\n  color: #fefefe;\n  font-size: 1em;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  line-height: 50px;\n  border-radius: 50%;\n  background: #ed4e6e;\n  position: fixed;\n  z-index: 5;\n  top: 15px;\n  left: -200px;\n  -webkit-transform-origin: 50%;\n          transform-origin: 50%;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  transition: all .5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\na.modal-trigger:hover {\n  background: #ed4e6e;\n}\na.modal-trigger:active {\n  box-shadow: inset 0 0 0.2em rgba(0, 0, 0, 0.3);\n}\na.modal-trigger.opened {\n  top: 5%;\n  left: 95%;\n  z-index: 1000;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 20% 40%;\n          transform-origin: 20% 40%;\n}\na.modal-trigger.opened ~ .modal {\n  z-index: 900;\n}\na.modal-trigger.opened ~ .modal .inner-modal {\n  width: 200vw;\n  height: 200vw;\n  z-index: 910;\n}\na.modal-trigger.opened ~ .modal .inner-modal .modal-content {\n  opacity: 1;\n  z-index: 920;\n  transition-delay: .5s;\n}\n.modal {\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: 0;\n  top: 0;\n  left: 0;\n}\n.modal .inner-modal {\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  background: #ffdc44;\n  width: 0;\n  height: 0;\n  transition: all 0.4s ease-in 0.4s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.modal .inner-modal .modal-content {\n  opacity: 0;\n  transition: opacity .4s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  color: #fefefe;\n  text-align: center;\n  max-width: 90vw;\n  max-height: 90vh;\n}\n/**PICTURE TILE ANIMATION**/\n@-webkit-keyframes topleftbottomright {\n  25% {\n    border-top: 2px solid #546E7A;\n  }\n  50% {\n    border-top: 2px solid #546E7A;\n    border-left: 2px solid #546E7A;\n  }\n  75% {\n    border-top: 2px solid #546E7A;\n    border-left: 2px solid #546E7A;\n    border-bottom: 2px solid #546E7A;\n  }\n  100% {\n    border: 2px solid #546E7A;\n  }\n}\n@keyframes topleftbottomright {\n  25% {\n    border-top: 2px solid #546E7A;\n  }\n  50% {\n    border-top: 2px solid #546E7A;\n    border-left: 2px solid #546E7A;\n  }\n  75% {\n    border-top: 2px solid #546E7A;\n    border-left: 2px solid #546E7A;\n    border-bottom: 2px solid #546E7A;\n  }\n  100% {\n    border: 2px solid #546E7A;\n  }\n}\npicture-tile {\n  border: 0 px solid rgba(0, 0, 0, 0);\n  border-radius: 5px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\npicture-tile:hover {\n  box-shadow: 0px 0px 150px #000000;\n  z-index: 850;\n  transition: all 200ms ease-in;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\npicture-tile.finished {\n  z-index: 800;\n  -webkit-animation: topleftbottomright 0.5s ease-in forwards;\n          animation: topleftbottomright 0.5s ease-in forwards;\n  border-color: 5px solid #546E7A;\n}\n/** Media wrapper **/\n@media (max-width: 1980px) {\n  .wrapper {\n    -ms-grid-columns: (1fr)[6];\n        grid-template-columns: repeat(6, 1fr);\n  }\n  .wrapper picture-tile {\n    height: 18em;\n    width: 18em;\n    display: inline-block;\n  }\n}\n@media (max-width: 1600px) {\n  .wrapper {\n    -ms-grid-columns: (1fr)[6];\n        grid-template-columns: repeat(6, 1fr);\n  }\n  .wrapper picture-tile {\n    height: 14em;\n    width: 14em;\n  }\n}\n@media (max-width: 1440px) {\n  .wrapper {\n    -ms-grid-columns: (1fr)[6];\n        grid-template-columns: repeat(6, 1fr);\n  }\n  .wrapper picture-tile {\n    height: 12em;\n    width: 12em;\n  }\n}\n@media (max-width: 1366px) {\n  .wrapper {\n    -ms-grid-columns: (1fr)[6];\n        grid-template-columns: repeat(6, 1fr);\n  }\n  .wrapper picture-tile {\n    height: 11em;\n    width: 11em;\n    display: inline-block;\n  }\n}\n@media (max-width: 1280px) {\n  .wrapper {\n    -ms-grid-columns: (1fr)[6];\n        grid-template-columns: repeat(6, 1fr);\n  }\n  .wrapper picture-tile {\n    height: 10em;\n    width: 10em;\n    display: inline-block;\n  }\n}\n@media (max-width: 1150px) {\n  .wrapper {\n    -ms-grid-columns: (1fr)[4];\n        grid-template-columns: repeat(4, 1fr);\n  }\n  .wrapper picture-tile {\n    height: 13em;\n    width: 13em;\n  }\n}\n@media (max-width: 1000px) {\n  .wrapper {\n    -ms-grid-columns: (1fr)[4];\n        grid-template-columns: repeat(4, 1fr);\n  }\n  .wrapper picture-tile {\n    height: 12em;\n    width: 12em;\n  }\n}\n@media (max-width: 900px) {\n  .wrapper {\n    -ms-grid-columns: (1fr)[4];\n        grid-template-columns: repeat(4, 1fr);\n  }\n  .wrapper picture-tile {\n    height: 11em;\n    width: 11em;\n  }\n}\n@media (max-width: 800px) {\n  .wrapper {\n    -ms-grid-columns: (1fr)[3];\n        grid-template-columns: repeat(3, 1fr);\n  }\n  .wrapper picture-tile {\n    height: 13.5em;\n    width: 13.5em;\n  }\n}\n@media (max-width: 425px) {\n  .wrapper {\n    -ms-grid-columns: (1fr)[3];\n        grid-template-columns: repeat(3, 1fr);\n  }\n  .wrapper picture-tile {\n    height: 12em;\n    width: 12em;\n  }\n}\n@media (max-width: 400px) {\n  .wrapper {\n    -ms-grid-columns: (1fr)[2];\n        grid-template-columns: repeat(2, 1fr);\n  }\n  .wrapper picture-tile {\n    height: 11.5em;\n    width: 11.5em;\n  }\n}\n@media (max-width: 400px) {\n  .wrapper {\n    -ms-grid-columns: (1fr)[2];\n        grid-template-columns: repeat(2, 1fr);\n  }\n  .wrapper picture-tile {\n    height: 11.5em;\n    width: 11.5em;\n  }\n}\n@media (max-width: 375px) {\n  .wrapper {\n    -ms-grid-columns: (1fr)[2];\n        grid-template-columns: repeat(2, 1fr);\n  }\n  .wrapper picture-tile {\n    height: 10.5em;\n    width: 10.5em;\n  }\n}\n@media (max-width: 320px) {\n  .wrapper {\n    -ms-grid-columns: (1fr)[2];\n        grid-template-columns: repeat(2, 1fr);\n  }\n  .wrapper picture-tile {\n    height: 9em;\n    width: 9em;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(92)();
// imports


// module
exports.push([module.i, "/* entire container, keeps perspective */\n.picture-tile {\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n  transition: 0.6s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  position: relative;\n}\n/* flip the pane when hovered */\n.picture-tile.evaluating {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n.picture-tile,\n.front,\n.back {\n  border: 1px;\n  border-color: #333;\n}\n.picture-tile img,\n.front img,\n.back img {\n  height: auto;\n  max-width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n  background-color: #fff;\n}\n/* hide back of pane during swap */\n.front,\n.back {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: inline-block;\n}\n/* front pane, placed above back */\n.front {\n  z-index: 2;\n  /* for firefox 31 */\n  -webkit-transform: rotateY(0deg);\n          transform: rotateY(0deg);\n}\n/* back, initially hidden pane */\n.back {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 523:
/***/ (function(module, exports) {

module.exports = "<div class=\"countdown-anim\" [ngClass]=\"{'la-animate': playing,'win':win}\">\r\n  <div class=\"bar\"></div>\r\n</div>\r\n\r\n<a class=\"modal-trigger\" [ngClass]=\"{'opened': lose}\" (click)=\"restart()\"><i class=\"fa fa-refresh\"></i></a>\r\n<div class=\"modal\">\r\n  <div class=\"inner-modal\">\r\n  <div class=\"modal-content\">\r\n    <h1>Times up kid! try again</h1>\r\n  </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper\">\r\n  <picture-tile *ngFor=\"let tileModel of tileModels; let i = index\" [model]=\"tileModel\" [index]=\"i\" (tileClick)=\"onTileClick($event)\" [ngClass]=\"{'finished': tileModel.finished, 'win':winner}\" ></picture-tile>\r\n</div>\r\n"

/***/ }),

/***/ 524:
/***/ (function(module, exports) {

module.exports = "<div class=\"picture-tile\"(click)=\"onTileClick()\" [ngClass]=\"{'evaluating': model.evaluating}\">\r\n    <div class=\"front\" >\r\n        <img src=\"assets/tile-back.png\">\r\n    </div>\r\n    <div class=\"back\">\r\n        <img src=\"assets/robots/{{model.imgFileName}}\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg1.85456c21c7e332fde70f.png";

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(351);


/***/ })

},[803]);
//# sourceMappingURL=main.bundle.js.map