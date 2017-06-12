webpackJsonp([1,4],{

/***/ 382:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 382;


/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(503);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/markfasel/Sites/apps/angular-lotto-game/src/main.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function AppComponent() {
        this.title = 'Lotto Game';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(661),
            styles: [__webpack_require__(659)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/markfasel/Sites/apps/angular-lotto-game/src/app.component.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lotto_lotto_component__ = __webpack_require__(504);
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







// Define the routes
var ROUTES = [
    {
        path: '',
        redirectTo: 'lotto',
        pathMatch: 'full'
    },
    {
        path: 'lotto',
        component: __WEBPACK_IMPORTED_MODULE_6__lotto_lotto_component__["a" /* LottoComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__lotto_lotto_component__["a" /* LottoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(ROUTES)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/markfasel/Sites/apps/angular-lotto-game/src/app.module.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LottoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Set up our Component Decorator
var LottoComponent = (function () {
    // Constructor function
    function LottoComponent() {
        // Set up various variables for the Lotto Game
        this.picks = []; // Array to story user's quick picks
        this.counter = 0; // Create a counter variable
        this.winningNumber = []; // Array to store the winning numbers
        this.isWinner = false; // Bool if the user wins
        this.isPlaying = false; // Bool if the user clicked play
    }
    // Our init function - runs on load
    LottoComponent.prototype.ngOnInit = function () {
        this.createQuickPick(); // Let's get our first quick pick on load
    };
    // Creates a "quickpick" of numbers and adds to the user's ticket
    LottoComponent.prototype.createQuickPick = function () {
        // Create a local variable for an array that will store the randomly selected numbers
        var numPick = [];
        // Generate the number
        this.generateNumber(numPick);
        this.picks[this.counter] = numPick; // Let's store this array into our quick pick array based on our counter index
        this.counter += 1; // Let's add 1 to the current counter value
    };
    LottoComponent.prototype.playLotto = function (picks) {
        // Let's set our winner variable to false to start
        var isWinner = false;
        // Lotto is playing - user clicks play button
        this.isPlaying = true;
        // Generate the number
        this.generateNumber(this.winningNumber);
        // Set a local variable to store the winning number
        var wn = this.winningNumber;
        // Set a local variable to hold if the array / number is a winner
        var arrWin = false;
        // Loop over the quick picks and check each quick pick against the generated winning number
        __WEBPACK_IMPORTED_MODULE_1_underscore__["each"](picks, function (pick) {
            if (!arrWin) {
                arrWin = __WEBPACK_IMPORTED_MODULE_1_underscore__["isEqual"](wn, pick); // If the current pick is equal to the winning number - set the variable arrWin to true
            }
        });
        this.isWinner = arrWin; // Set the isWinner variable to the boolean produced in the _.each 
    };
    // Starts a new game
    LottoComponent.prototype.reset = function () {
        this.isPlaying = false;
        this.winningNumber = [];
        this.picks = [];
        this.counter = 0;
        this.createQuickPick();
    };
    // Number generator with sorting the array min - max
    LottoComponent.prototype.generateNumber = function (arr) {
        // Run a for loop like in our quick pick function 
        for (var i = 0; i < 5; ++i) {
            this.random = this.randomNumber(1, 64);
            while (arr.indexOf(this.random) !== -1) {
                this.random = this.randomNumber(1, 64);
            }
            arr[i] = this.random;
        }
        ;
        return arr.sort(this.sortNumber);
    };
    // Helpers
    LottoComponent.prototype.randomNumber = function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    };
    LottoComponent.prototype.sortNumber = function (a, b) {
        return a - b;
    };
    LottoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-lotto',
            template: __webpack_require__(662),
            styles: [__webpack_require__(660)]
        }), 
        __metadata('design:paramtypes', [])
    ], LottoComponent);
    return LottoComponent;
}());
//# sourceMappingURL=/Users/markfasel/Sites/apps/angular-lotto-game/src/lotto.component.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/markfasel/Sites/apps/angular-lotto-game/src/environment.js.map

/***/ }),

/***/ 659:
/***/ (function(module, exports) {

module.exports = "header {\n    padding: 30px 0;\n}"

/***/ }),

/***/ 660:
/***/ (function(module, exports) {

module.exports = "/* Add Lotto Component Styles here if needed */"

/***/ }),

/***/ 661:
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h1>{{title}}</h1>\n      </div>\n    </div>\n  </div>\n</header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 662:
/***/ (function(module, exports) {

module.exports = "<!-- Basic Lotto Component -->\n<section class=\"lotto-ticket__container\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"quick-pick__container\">\n          <h3>Your Ticket</h3>\n          <table class=\"table\" *ngIf=\"picks\">\n            <tbody> \n              <tr *ngFor=\"let pick of picks\">\n                <td *ngFor=\"let item of pick\">\n                  {{item}}\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"actions\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"createQuickPick()\" *ngIf=\"!isPlaying\">Add Quick Pick</button>\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"playLotto(picks)\" *ngIf=\"!isPlaying\">Play</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"reset(picks)\" *ngIf=\"isPlaying\">Play Again</button>\n        </div>\n      </div>\n      <div class=\"col-md-6\" *ngIf=\"isPlaying\">\n          <div class=\"winning-ticket__container\">\n              <h3>Winning Number</h3>\n              <table class=\"table\" *ngIf=\"picks\">\n                <tbody> \n                  <tr>\n                    <td  *ngFor=\"let number of winningNumber\">\n                      {{number}}\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isWinner\">\n                <p>You won!</p>\n              </div>\n\n              <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"!isWinner\">\n                <p>Sorry! Better luck next time!</p>\n              </div>\n\n          </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(383);


/***/ })

},[681]);
//# sourceMappingURL=main.bundle.map