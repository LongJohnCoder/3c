webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/forgot-password/forgot-password.module": [
		"../../../../../src/app/core/auth/forgot-password/forgot-password.module.ts",
		"forgot-password.module",
		"common"
	],
	"./auth/reset-password/reset-password.module": [
		"../../../../../src/app/core/auth/reset-password/reset-password.module.ts",
		"reset-password.module",
		"common"
	],
	"./auth/sign-in/sign-in.module": [
		"../../../../../src/app/core/auth/sign-in/sign-in.module.ts",
		"sign-in.module",
		"common"
	],
	"./auth/sign-up/sign-up.module": [
		"../../../../../src/app/core/auth/sign-up/sign-up.module.ts",
		"sign-up.module",
		"common"
	],
	"./inner-pages/admin/admin.module": [
		"../../../../../src/app/core/layout/inner-pages/admin/admin.module.ts",
		"admin.module",
		"common"
	],
	"./inner-pages/agent/agent.module": [
		"../../../../../src/app/core/layout/inner-pages/agent/agent.module.ts",
		"agent.module",
		"common"
	],
	"./inner-pages/chat/chat.module": [
		"../../../../../src/app/core/layout/inner-pages/chat/chat.module.ts",
		"chat.module",
		"common"
	],
	"./inner-pages/dashboard/dashboard.module": [
		"../../../../../src/app/core/layout/inner-pages/dashboard/dashboard.module.ts",
		"dashboard.module"
	],
	"./inner-pages/department/department.module": [
		"../../../../../src/app/core/layout/inner-pages/department/department.module.ts",
		"department.module",
		"common"
	],
	"./inner-pages/profile/profile.module": [
		"../../../../../src/app/core/layout/inner-pages/profile/profile.module.ts",
		"profile.module",
		"common"
	],
	"./inner-pages/twilio/twilio.module": [
		"../../../../../src/app/core/layout/inner-pages/twilio/twilio.module.ts",
		"twilio.module",
		"common"
	],
	"./inner-pages/widget/widget.module": [
		"../../../../../src/app/core/layout/inner-pages/widget/widget.module.ts",
		"widget.module",
		"common"
	],
	"./layout/layout.module": [
		"../../../../../src/app/core/layout/layout.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: "<app-core></app-core>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__core_core_module__["a" /* CoreModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/alert/alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert {\n    color: #fff;\n    padding: 18px 12px;\n    overflow: hidden;\n}\n.alert strong{width: 90%;\n    float: left;}\n\ni {\n    cursor: pointer;\n}\n\n:host {\n    z-index: 1001;\n    position: fixed;\n    width: 35%;\n    right: 5px;\n    top:45px;\n}\n\n/*padding: 5px;*/\n/*background: none !important;*/\n/*color: #dd4b39 !important;*/\n/*border: none;*/\n/*font-size: 12px;*/\n/*margin: 0 0 2px;*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert animated fadeInRight\"\n     role=\"alert\"\n     [style.background]=\"color\"\n>\n  <strong>{{text}}</strong>\n  <i (click)=\"dismiss()\"\n     class=\"fa fa-remove fa-fw pull-right\"\n  ></i>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_alert_alert_actions__ = __webpack_require__("../../../../../src/app/core/store/alert/alert.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = (function () {
    /** Service Injection */
    function AlertComponent(store) {
        this.store = store;
        /** Variable declaration */
        this.text = "Danger Alert";
        this.type = "danger";
    }
    /** Function to be executed when component initializes */
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.type === 'success') {
            this.color = "rgba(138,217,25,0.7)";
        }
        else if (this.type === 'warning') {
            this.color = "rgba(255,181,62,0.7)";
        }
        else {
            this.color = "rgba(249,36,63,0.7)";
        }
        /** Auto closing an alert after a set time */
        setTimeout(function () {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_alert_alert_actions__["c" /* AlertHide */]());
        }, 3000);
    };
    /** Function to be executed when clicked on cross btn */
    AlertComponent.prototype.dismiss = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_alert_alert_actions__["c" /* AlertHide */]());
    };
    return AlertComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('text'),
    __metadata("design:type", String)
], AlertComponent.prototype, "text", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
    __metadata("design:type", String)
], AlertComponent.prototype, "type", void 0);
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-alert',
        template: __webpack_require__("../../../../../src/app/core/alert/alert.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/alert/alert.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Guard to prevent unauthorized users to visit routes that are only allowed to logged in users
 */




var AuthGuard = (function () {
    /** Service injection */
    function AuthGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.store.select('auth')
            .map(function (authState) {
            if (authState.isAuthenticated) {
                return true;
            }
            else {
                _this.router.navigate(['/']);
                return false;
            }
        });
    };
    AuthGuard.prototype.canActivateChild = function (next, state) {
        return this.canActivate(next, state);
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth/auth.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthInterceptor = (function () {
    function AuthInterceptor(store) {
        this.store = store;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        // const copiedReq = req.clone({headers: req.headers.set('', '')});
        return this.store.select('auth')
            .take(1)
            .switchMap(function (authState) {
            var copiedReq = req;
            if (authState.isAuthenticated) {
                copiedReq = req.clone({ params: req.params.set('token', authState.token) });
            }
            return next.handle(copiedReq);
        });
        // return null;
    };
    return AuthInterceptor;
}());
AuthInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
], AuthInterceptor);

var _a;
//# sourceMappingURL=auth.interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth/is-admin-or-super-admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsAdminOrSuperAdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Guard to prevent non admin users to visit routes that are only allowed for admins
 */




var IsAdminOrSuperAdminGuard = (function () {
    /** Service injection */
    function IsAdminOrSuperAdminGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    IsAdminOrSuperAdminGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.store.select('auth')
            .map(function (authState) {
            if (authState.isAdmin || authState.isSuperAdmin) {
                return true;
            }
            else {
                _this.router.navigate(['/dashboard']);
                return false;
            }
        });
    };
    IsAdminOrSuperAdminGuard.prototype.canActivateChild = function (next, state) {
        return this.canActivate(next, state);
    };
    return IsAdminOrSuperAdminGuard;
}());
IsAdminOrSuperAdminGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _b || Object])
], IsAdminOrSuperAdminGuard);

var _a, _b;
//# sourceMappingURL=is-admin-or-super-admin.guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth/is-agent.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsAgentGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Guard to prevent non agent users to visit routes that are only allowed for agents
 */




var IsAgentGuard = (function () {
    /** Service injection */
    function IsAgentGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    IsAgentGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.store.select('auth')
            .map(function (authState) {
            if (authState.isAgent) {
                return true;
            }
            else {
                _this.router.navigate(['/dashboard']);
                return false;
            }
        });
    };
    IsAgentGuard.prototype.canActivateChild = function (next, state) {
        return this.canActivate(next, state);
    };
    return IsAgentGuard;
}());
IsAgentGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _b || Object])
], IsAgentGuard);

var _a, _b;
//# sourceMappingURL=is-agent.guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth/is-super-admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsSuperAdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Guard to prevent non super admin users to visit routes that are only allowed for super admins
 */




var IsSuperAdminGuard = (function () {
    /** Service injection */
    function IsSuperAdminGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    IsSuperAdminGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.store.select('auth')
            .map(function (authState) {
            if (authState.isSuperAdmin) {
                return true;
            }
            else {
                _this.router.navigate(['/dashboard']);
                return false;
            }
        });
    };
    IsSuperAdminGuard.prototype.canActivateChild = function (next, state) {
        return this.canActivate(next, state);
    };
    return IsSuperAdminGuard;
}());
IsSuperAdminGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _b || Object])
], IsSuperAdminGuard);

var _a, _b;
//# sourceMappingURL=is-super-admin.guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth/not-auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Guard to prevent authorized users to visit routes that are only allowed to not logged in users
 */



var NotAuthGuard = (function () {
    /** Service injection */
    function NotAuthGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    NotAuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.store.select('auth')
            .map(function (authState) {
            if (authState.isAuthenticated) {
                _this.router.navigate(['/dashboard']);
                return false;
            }
            else {
                return true;
            }
        });
    };
    return NotAuthGuard;
}());
NotAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _b || Object])
], NotAuthGuard);

var _a, _b;
//# sourceMappingURL=not-auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/core-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_layout_component__ = __webpack_require__("../../../../../src/app/core/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_not_auth_guard__ = __webpack_require__("../../../../../src/app/core/auth/not-auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_guard__ = __webpack_require__("../../../../../src/app/core/auth/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
    { path: 'sign-in', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_not_auth_guard__["a" /* NotAuthGuard */]], loadChildren: './auth/sign-in/sign-in.module#SignInModule' },
    { path: 'sign-up', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_not_auth_guard__["a" /* NotAuthGuard */]], loadChildren: './auth/sign-up/sign-up.module#SignUpModule' },
    { path: 'forgot-password', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_not_auth_guard__["a" /* NotAuthGuard */]], loadChildren: './auth/forgot-password/forgot-password.module#ForgotPasswordModule' },
    { path: 'reset-password/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_not_auth_guard__["a" /* NotAuthGuard */]], loadChildren: './auth/reset-password/reset-password.module#ResetPasswordModule' },
    { path: '', canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_auth_guard__["a" /* AuthGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_4__auth_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_2__layout_layout_component__["a" /* LayoutComponent */], loadChildren: './layout/layout.module#LayoutModule' },
    { path: '**', redirectTo: 'sign-in' }
];
var CoreRoutingModule = (function () {
    function CoreRoutingModule() {
    }
    return CoreRoutingModule;
}());
CoreRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* PreloadAllModules */], enableTracing: false })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], CoreRoutingModule);

//# sourceMappingURL=core-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper{\n    min-height: calc(100vh - 0px);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/core.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<app-alert *ngIf=\"(alertState | async).show\" [text]=\"(alertState | async).message\" [type]=\"(alertState | async).type\"></app-alert>"

/***/ }),

/***/ "../../../../../src/app/core/core.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_store_auth_auth_actions__ = __webpack_require__("../../../../../src/app/core/store/auth/auth.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoreComponent = (function () {
    function CoreComponent(store) {
        this.store = store;
    }
    CoreComponent.prototype.ngOnInit = function () {
        this.alertState = this.store.select('alert');
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__core_store_auth_auth_actions__["d" /* CheckToken */]());
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__core_store_auth_auth_actions__["e" /* CheckTwilioActiveAttempt */]());
    };
    return CoreComponent;
}());
CoreComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-core',
        template: __webpack_require__("../../../../../src/app/core/core.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/core.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
], CoreComponent);

var _a;
//# sourceMappingURL=core.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alert_alert_component__ = __webpack_require__("../../../../../src/app/core/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_auth_auth_effects__ = __webpack_require__("../../../../../src/app/core/store/auth/auth.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_auth_guard__ = __webpack_require__("../../../../../src/app/core/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_auth_interceptor__ = __webpack_require__("../../../../../src/app/core/auth/auth.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_component__ = __webpack_require__("../../../../../src/app/core/core.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_routing_module__ = __webpack_require__("../../../../../src/app/core/core-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_is_admin_or_super_admin_guard__ = __webpack_require__("../../../../../src/app/core/auth/is-admin-or-super-admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_is_agent_guard__ = __webpack_require__("../../../../../src/app/core/auth/is-agent.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_is_super_admin_guard__ = __webpack_require__("../../../../../src/app/core/auth/is-super-admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__layout_layout_module__ = __webpack_require__("../../../../../src/app/core/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_not_auth_guard__ = __webpack_require__("../../../../../src/app/core/auth/not-auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__store_core_reducers__ = __webpack_require__("../../../../../src/app/core/store/core.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_shared_module__ = __webpack_require__("../../../../../src/app/core/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_11__core_routing_module__["a" /* CoreRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_19__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_16__layout_layout_module__["LayoutModule"],
            __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["i" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__store_core_reducers__["a" /* reducers */]),
            __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_7__store_auth_auth_effects__["a" /* AuthEffects */]]),
            !__WEBPACK_IMPORTED_MODULE_12__environments_environment__["a" /* environment */].production ? __WEBPACK_IMPORTED_MODULE_4__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument() : []
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__core_component__["a" /* CoreComponent */],
            __WEBPACK_IMPORTED_MODULE_6__alert_alert_component__["a" /* AlertComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_10__core_component__["a" /* CoreComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__auth_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_13__auth_is_admin_or_super_admin_guard__["a" /* IsAdminOrSuperAdminGuard */],
            __WEBPACK_IMPORTED_MODULE_14__auth_is_agent_guard__["a" /* IsAgentGuard */],
            __WEBPACK_IMPORTED_MODULE_15__auth_is_super_admin_guard__["a" /* IsSuperAdminGuard */],
            __WEBPACK_IMPORTED_MODULE_17__auth_not_auth_guard__["a" /* NotAuthGuard */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_9__auth_auth_interceptor__["a" /* AuthInterceptor */], multi: true }
        ]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n    cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n  <!-- Logo -->\n  <a href=\"../../index2.html\" class=\"logo\">\n    <!-- mini logo for sidebar mini 50x50 pixels -->\n    <span class=\"logo-mini\"><b>3</b>C</span>\n    <!-- logo for regular state and mobile devices -->\n    <span class=\"logo-lg\"><b>TM</b>SMS</span>\n  </a>\n  <!-- Header Navbar: style can be found in header.less -->\n  <nav class=\"navbar navbar-static-top\">\n    <!-- Sidebar toggle button-->\n    <a class=\"sidebar-toggle\" (click)=\"toggleLeftSidebar()\" data-toggle=\"push-menu\" role=\"button\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </a>\n\n    <div class=\"navbar-custom-menu\">\n      <ul class=\"nav navbar-nav\">\n        <!-- Messages: style can be found in dropdown.less-->\n        <li class=\"dropdown messages-menu\" [appDropdown]=\"'open'\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-envelope-o\"></i>\n            <span class=\"label label-success\">4</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 4 messages</li>\n            <li>\n              <!-- inner menu: contains the actual data -->\n              <ul class=\"menu\">\n                <li><!-- start message -->\n                  <a>\n                    <div class=\"pull-left\">\n                      <img src=\"../../../../assets/img/avatar5.png\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      Support Team\n                      <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <!-- end message -->\n              </ul>\n            </li>\n            <li class=\"footer\"><a>See All Messages</a></li>\n          </ul>\n        </li>\n\n        <!-- Notifications: style can be found in dropdown.less -->\n        <li class=\"dropdown notifications-menu\" [appDropdown]=\"'open'\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-bell-o\"></i>\n            <span class=\"label label-warning\">10</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 10 notifications</li>\n            <li>\n              <!-- inner menu: contains the actual data -->\n              <ul class=\"menu\">\n                <li>\n                  <a>\n                    <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"footer\"><a>View all</a></li>\n          </ul>\n        </li>\n\n        <!-- Tasks: style can be found in dropdown.less -->\n        <li class=\"dropdown tasks-menu\" [appDropdown]=\"'open'\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-flag-o\"></i>\n            <span class=\"label label-danger\">9</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 9 tasks</li>\n            <li>\n              <!-- inner menu: contains the actual data -->\n              <ul class=\"menu\">\n                <li><!-- Task item -->\n                  <a>\n                    <h3>\n                      Design some buttons\n                      <small class=\"pull-right\">20%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                      <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">20% Complete</span>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n              </ul>\n            </li>\n            <li class=\"footer\">\n              <a>View all tasks</a>\n            </li>\n          </ul>\n        </li>\n\n        <!-- User Account: style can be found in dropdown.less -->\n        <li class=\"dropdown user user-menu\" [appDropdown]=\"'open'\">\n          <a  class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <img src=\"../../../../assets/img/avatar5.png\" class=\"user-image\" alt=\"User Image\">\n            <span class=\"hidden-xs\">{{(authState | async).name}}</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <!-- User image -->\n            <li class=\"user-header\">\n              <img src=\"../../../../assets/img/avatar5.png\" class=\"img-circle\" alt=\"User Image\">\n\n              <p>\n                {{(authState | async).name}} - {{(authState | async).isSuperAdmin ? 'Super Admin': ''}}{{(authState | async).isAdmin ? 'Admin': ''}}{{(authState | async).isAgent ? 'Agent': ''}}\n                <small>Member since Nov. 1999</small>\n              </p>\n            </li>\n            <!-- Menu Body -->\n            <!--<li class=\"user-body\">-->\n              <!--<div class=\"row\">-->\n                <!--<div class=\"col-xs-4 text-center\">-->\n                  <!--<a>Followers</a>-->\n                <!--</div>-->\n                <!--<div class=\"col-xs-4 text-center\">-->\n                  <!--<a>Sales</a>-->\n                <!--</div>-->\n                <!--<div class=\"col-xs-4 text-center\">-->\n                  <!--<a>Friends</a>-->\n                <!--</div>-->\n              <!--</div>-->\n            <!--</li>-->\n            <!-- Menu Footer-->\n            <li class=\"user-footer\">\n              <div class=\"pull-left\">\n                <a class=\"btn btn-default btn-flat\" routerLink=\"/profile\"> Profile</a>\n              </div>\n              <div class=\"pull-right\">\n                <a class=\"btn btn-default btn-flat\" (click)=\"onSignOut()\">Sign out</a>\n              </div>\n            </li>\n          </ul>\n        </li>\n\n        <!-- Control Sidebar Toggle Button -->\n        <li>\n          <a data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>"

/***/ }),

/***/ "../../../../../src/app/core/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_auth_auth_actions__ = __webpack_require__("../../../../../src/app/core/store/auth/auth.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    /** Service injection */
    function HeaderComponent(store) {
        this.store = store;
        /** Variable declaration */
        this.tls = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mtls = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.authState = this.store.select('auth');
    };
    /** Function call to toggle left sidebar */
    HeaderComponent.prototype.toggleLeftSidebar = function () {
        if (window.screen.width <= 767) {
            this.mtls.emit(event);
        }
        else {
            this.tls.emit(event);
        }
    };
    /** Function call to sign out */
    HeaderComponent.prototype.onSignOut = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_auth_auth_actions__["u" /* SignOutAttempt */]());
    };
    return HeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], HeaderComponent.prototype, "tls", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], HeaderComponent.prototype, "mtls", void 0);
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/core/layout/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chat/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_chat_chat_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/chat/chat.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChatService = (function () {
    function ChatService(store) {
        var _this = this;
        this.store = store;
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default()('http://localhost:3000');
        this.store.select('auth')
            .map(function (data) { return data.userId; })
            .distinctUntilChanged()
            .take(1)
            .subscribe(function (id) {
            _this.loggedInAgentId = id;
            _this.socket.on('connect', function () {
                _this.socket.emit('get-added-rooms');
                _this.socket.on('new-rooms-added', function (data) {
                    console.log('Angular: New Room Added ', data);
                    for (var i = 0, len = data.length; i < len; i++) {
                        if (data[i].agent_id == id) {
                            _this.socket.emit('add-agent-to-rooms', data[i].rooms);
                            break;
                        }
                    }
                });
                _this.socket.on('agent-added-to-room', function (data) {
                    console.log('Agent Added To Room', data.name);
                    _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_chat_chat_actions__["d" /* AddToChatList */](data));
                });
                _this.socket.on('msg-of-acceptance', function (data) {
                    console.log(data);
                });
                _this.socket.on('which-agent-accepted', function (data) {
                    console.log('In which agent accepted');
                    console.log(data);
                    if (data.agentId == id) {
                        _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_chat_chat_actions__["k" /* EditFromChatList */]({ status: data.status, room_number: data.chatRoomId }));
                    }
                    else {
                        _this.socket.emit('remove-agent-from-room', { room_number: data.chatRoomId });
                        _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_chat_chat_actions__["i" /* DeleteFromChatList */]({ room_number: data.chatRoomId }));
                    }
                });
                _this.socket.on('newmsg', function (data) {
                    console.log(data);
                    _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_chat_chat_actions__["c" /* AddNewMsgToChatList */](data));
                });
            });
        });
        this.store.select('auth')
            .subscribe(function (data) {
            _this.loggedInAgentName = data.name;
        });
    }
    ChatService.prototype.connect = function () {
    };
    ChatService.prototype.accept = function (data) {
        this.socket.emit('agent-accepts-msg', data);
    };
    ChatService.prototype.sendMsg = function (data) {
        var obj = __assign({}, data, { user: this.loggedInAgentName, direction: 2, time: __WEBPACK_IMPORTED_MODULE_5_moment__() });
        console.log(obj);
        this.socket.emit('msg', obj);
    };
    return ChatService;
}());
ChatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
], ChatService);

var _a;
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/layout-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_is_super_admin_guard__ = __webpack_require__("../../../../../src/app/core/auth/is-super-admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_is_admin_or_super_admin_guard__ = __webpack_require__("../../../../../src/app/core/auth/is-admin-or-super-admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_is_agent_guard__ = __webpack_require__("../../../../../src/app/core/auth/is-agent.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', children: [
            { path: 'dashboard', loadChildren: './inner-pages/dashboard/dashboard.module#DashboardModule' },
            { path: 'profile', loadChildren: './inner-pages/profile/profile.module#ProfileModule' },
            { path: 'twilio', canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_is_super_admin_guard__["a" /* IsSuperAdminGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_2__auth_is_super_admin_guard__["a" /* IsSuperAdminGuard */]], loadChildren: './inner-pages/twilio/twilio.module#TwilioModule' },
            { path: 'admin', canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_is_super_admin_guard__["a" /* IsSuperAdminGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_2__auth_is_super_admin_guard__["a" /* IsSuperAdminGuard */]], loadChildren: './inner-pages/admin/admin.module#AdminModule' },
            { path: 'agent', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_is_admin_or_super_admin_guard__["a" /* IsAdminOrSuperAdminGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_3__auth_is_admin_or_super_admin_guard__["a" /* IsAdminOrSuperAdminGuard */]], loadChildren: './inner-pages/agent/agent.module#AgentModule' },
            { path: 'widget', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_is_admin_or_super_admin_guard__["a" /* IsAdminOrSuperAdminGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_3__auth_is_admin_or_super_admin_guard__["a" /* IsAdminOrSuperAdminGuard */]], loadChildren: './inner-pages/widget/widget.module#WidgetModule' },
            { path: 'department', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_is_admin_or_super_admin_guard__["a" /* IsAdminOrSuperAdminGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_3__auth_is_admin_or_super_admin_guard__["a" /* IsAdminOrSuperAdminGuard */]], loadChildren: './inner-pages/department/department.module#DepartmentModule' },
            { path: 'chat', canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_is_agent_guard__["a" /* IsAgentGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_4__auth_is_agent_guard__["a" /* IsAgentGuard */]], loadChildren: './inner-pages/chat/chat.module#ChatModule' }
        ] }
];
var LayoutRoutingModule = (function () {
    function LayoutRoutingModule() {
    }
    return LayoutRoutingModule;
}());
LayoutRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], LayoutRoutingModule);

//# sourceMappingURL=layout-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.main-footer {position: absolute;*/\n/*width: 100%;*/\n/*bottom: 0;*/\n/*margin: 0 !important;*/\n/*padding-right: 68px;*/\n/*}*/\n/*.fixed .wrapper{padding-bottom: 50px;}*/\n\n/*router-outlet > div {*/\n    /*min-height: 500px;*/\n/*}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"skin-blue fixed sidebar-mini sidebar-mini-expand-feature\"\n     [ngClass]=\"{\n                  'sidebar-expanded-on-hover': hovered,\n                  'sidebar-collapse': !hovered,\n                  'sidebar-open': mobileViewClicked\n                }\"\n>\n<!-- Site wrapper -->\n<div class=\"wrapper\">\n\n  <app-header (mtls)=\"toggleLeftSidebarMobile($event)\"\n              (tls)=\"toggleLeftSidebar($event)\"\n  ></app-header>\n  <!-- =============================================== -->\n\n  <!-- Left side column. contains the sidebar -->\n\n  <app-sidebar (mouseover)=\"toggleLeftSidebar($event)\"\n               (mouseout)=\"toggleLeftSidebar($event)\"\n  ></app-sidebar>\n  <!-- =============================================== -->\n\n  <router-outlet></router-outlet>\n\n  <footer class=\"main-footer\">\n    <div class=\"pull-right hidden-xs\">\n      <b>Version</b> 5.0.0\n    </div>\n    <strong>Copyright &copy; 2017 <a href=\"#\">TM SMS | 3C</a>.</strong> All rights\n    reserved.\n  </footer>\n\n  <!-- Control Sidebar -->\n  <aside class=\"control-sidebar control-sidebar-dark\">\n    <!-- Create the tabs -->\n    <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\n      <li><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\n      <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\n    </ul>\n    <!-- Tab panes -->\n    <div class=\"tab-content\">\n      <!-- Home tab content -->\n      <div class=\"tab-pane\" id=\"control-sidebar-home-tab\">\n        <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\n        <ul class=\"control-sidebar-menu\">\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\n\n                <p>Will be 23 on April 24th</p>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-user bg-yellow\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4>\n\n                <p>New phone +1(800)555-1234</p>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4>\n\n                <p>nora@example.com</p>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4>\n\n                <p>Execution time 5 seconds</p>\n              </div>\n            </a>\n          </li>\n        </ul>\n        <!-- /.control-sidebar-menu -->\n\n        <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\n        <ul class=\"control-sidebar-menu\">\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Custom Template Design\n                <span class=\"label label-danger pull-right\">70%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Update Resume\n                <span class=\"label label-success pull-right\">95%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Laravel Integration\n                <span class=\"label label-warning pull-right\">50%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Back End Framework\n                <span class=\"label label-primary pull-right\">68%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>\n              </div>\n            </a>\n          </li>\n        </ul>\n        <!-- /.control-sidebar-menu -->\n\n      </div>\n      <!-- /.tab-pane -->\n      <!-- Stats tab content -->\n      <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab Content</div>\n      <!-- /.tab-pane -->\n      <!-- Settings tab content -->\n      <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\n        <form method=\"post\">\n          <h3 class=\"control-sidebar-heading\">General Settings</h3>\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Report panel usage\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n            <p>\n              Some information about this general settings option\n            </p>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Allow mail redirect\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n            <p>\n              Other sets of options are available\n            </p>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Expose author name in posts\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n            <p>\n              Allow the user to show his name in blog posts\n            </p>\n          </div>\n          <!-- /.form-group -->\n\n          <h3 class=\"control-sidebar-heading\">Chat Settings</h3>\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Show me as online\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Turn off notifications\n              <input type=\"checkbox\" class=\"pull-right\">\n            </label>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Delete chat history\n              <a href=\"javascript:void(0)\" class=\"text-red pull-right\"><i class=\"fa fa-trash-o\"></i></a>\n            </label>\n          </div>\n          <!-- /.form-group -->\n        </form>\n      </div>\n      <!-- /.tab-pane -->\n    </div>\n  </aside>\n  <!-- /.control-sidebar -->\n  <!-- Add the sidebar's background. This div must be placed\n       immediately after the control sidebar -->\n  <div class=\"control-sidebar-bg\"></div>\n</div>\n<!-- ./wrapper -->\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_chat_chat_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/chat/chat.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LayoutComponent = (function () {
    function LayoutComponent(store) {
        this.store = store;
        /** Variable declaration */
        this.hovered = false;
        this.mobileViewClicked = false;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('auth')
            .take(1)
            .map(function (data) { return data.isAgent; })
            .subscribe(function (data) {
            if (data) {
                _this.chatState = _this.store.select('afterLogin')
                    .map(function (data) { return data.chat; });
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_chat_chat_actions__["g" /* ConnectAttempt */]());
            }
        });
    };
    /** Function to toggle sidebar in desktop view */
    LayoutComponent.prototype.toggleLeftSidebar = function ($event) {
        if ($event.type == 'click') {
            this.hovered = !this.hovered;
        }
        else {
            this.hovered = $event.type == 'mouseover';
        }
    };
    /** Function to toggle sidebar in mobile view */
    LayoutComponent.prototype.toggleLeftSidebarMobile = function ($event) {
        if ($event.type == 'click') {
            this.mobileViewClicked = !this.mobileViewClicked;
        }
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layout.component.ts',
        template: __webpack_require__("../../../../../src/app/core/layout/layout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/layout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
], LayoutComponent);

var _a;
//# sourceMappingURL=layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("../../../../../src/app/core/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_component__ = __webpack_require__("../../../../../src/app/core/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_routing_module__ = __webpack_require__("../../../../../src/app/core/layout/layout-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/core/layout/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("../../../../../src/app/core/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_profile_profile_effect__ = __webpack_require__("../../../../../src/app/core/layout/store/profile/profile.effect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_after_login_reducers__ = __webpack_require__("../../../../../src/app/core/layout/store/after-login.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store_twilio_twilio_effect__ = __webpack_require__("../../../../../src/app/core/layout/store/twilio/twilio.effect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store_department_department_effects__ = __webpack_require__("../../../../../src/app/core/layout/store/department/department.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_admin_admin_effect__ = __webpack_require__("../../../../../src/app/core/layout/store/admin/admin.effect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__store_agent_agent_effect__ = __webpack_require__("../../../../../src/app/core/layout/store/agent/agent.effect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__store_widget_widget_effect__ = __webpack_require__("../../../../../src/app/core/layout/store/widget/widget.effect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__store_chat_chat_effects__ = __webpack_require__("../../../../../src/app/core/layout/store/chat/chat.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__inner_pages_chat_chat_service__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6__layout_routing_module__["a" /* LayoutRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["i" /* StoreModule */].forFeature('afterLogin', __WEBPACK_IMPORTED_MODULE_10__store_after_login_reducers__["a" /* reducers */]),
            __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_9__store_profile_profile_effect__["a" /* ProfileEffects */], __WEBPACK_IMPORTED_MODULE_11__store_twilio_twilio_effect__["a" /* TwilioEffects */], __WEBPACK_IMPORTED_MODULE_12__store_department_department_effects__["a" /* DepartmentEffects */], __WEBPACK_IMPORTED_MODULE_13__store_admin_admin_effect__["a" /* AdminEffects */], __WEBPACK_IMPORTED_MODULE_14__store_agent_agent_effect__["a" /* AgentEffects */], __WEBPACK_IMPORTED_MODULE_15__store_widget_widget_effect__["a" /* WidgetEffects */], __WEBPACK_IMPORTED_MODULE_16__store_chat_chat_effects__["a" /* ChatEffects */]])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_component__["a" /* SidebarComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__inner_pages_chat_chat_service__["a" /* ChatService */]]
    })
], LayoutModule);

//# sourceMappingURL=layout.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n    cursor: pointer;\n}\n.main-sidebar{\n    overflow: hidden;\n    min-width: 240px;\n}\n.sidebar{\n    overflow-y: auto;\n    height: 90%;\n    position: absolute;\n    width: 250px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\n  <div class=\"slimScrollDiv\">\n    <!-- sidebar: style can be found in sidebar.less -->\n    <section class=\"sidebar\">\n      <!-- Sidebar user panel -->\n      <div class=\"user-panel\">\n        <div class=\"pull-left image\">\n          <img src=\"../../../../assets/img/avatar5.png\" class=\"img-circle\" alt=\"User Image\">\n        </div>\n        <div class=\"pull-left info\">\n          <p>Jon Vaughn</p>\n          <a><i class=\"fa fa-circle text-success\"></i> Online</a>\n        </div>\n      </div>\n      <!-- search form -->\n      <!--<form class=\"sidebar-form\">-->\n        <!--<div class=\"input-group\">-->\n          <!--<input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">-->\n          <!--<span class=\"input-group-btn\">-->\n            <!--<button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>-->\n            <!--</button>-->\n          <!--</span>-->\n        <!--</div>-->\n      <!--</form>-->\n      <!-- /.search form -->\n      <!-- sidebar menu: : style can be found in sidebar.less -->\n      <ul class=\"sidebar-menu\" data-widget=\"tree\">\n        <li class=\"header\">MAIN NAVIGATIONS</li>\n\n        <!-- Dashboard -->\n        <li class=\"treeview\"\n            routerLinkActive=\"active\"\n            [disable-hover]=\"true\"\n            [appDropdown]=\"'menu-open'\"\n        >\n          <a routerLink=\"/dashboard\">\n            <i class=\"fa fa-dashboard\"></i> <span>Dashboard</span>\n          </a>\n        </li>\n\n        <li class=\"header\" *ngIf=\"(authState | async).isSuperAdmin\">CREDENTIALS</li>\n\n        <!-- Twilio Accounts -->\n        <li class=\"treeview\"\n            *ngIf=\"(authState | async).isSuperAdmin\"\n            routerLinkActive=\"active\"\n            [disable-hover]=\"true\"\n            [appDropdown]=\"'menu-open'\"\n        >\n          <a>\n            <i class=\"fa fa-compress\"></i> <span> Twilio Accounts</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a routerLink=\"/twilio/create\"><i class=\"fa fa-circle-o\"></i> Create</a></li>\n            <li><a routerLink=\"/twilio/list\"><i class=\"fa fa-circle-o\"></i> List</a></li>\n          </ul>\n        </li>\n\n        <li class=\"header\" *ngIf=\"(authState | async).isSuperAdmin || (authState | async).isAdmin\">OTHER USERS</li>\n\n        <!-- Admins -->\n        <li class=\"treeview\"\n            *ngIf=\"(authState | async).isSuperAdmin\"\n            routerLinkActive=\"active\"\n            [disable-hover]=\"true\"\n            [appDropdown]=\"'menu-open'\"\n        >\n          <a>\n            <i class=\"fa fa-unlock-alt\"></i> <span> Admins</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a routerLink=\"/admin/create\"><i class=\"fa fa-circle-o\"></i> Create</a></li>\n            <li><a routerLink=\"/admin/list\"><i class=\"fa fa-circle-o\"></i> List</a></li>\n          </ul>\n        </li>\n\n        <!-- Agents -->\n        <li class=\"treeview\"\n            *ngIf=\"(authState | async).isSuperAdmin || (authState | async).isAdmin\"\n            routerLinkActive=\"active\"\n            [disable-hover]=\"true\"\n            [appDropdown]=\"'menu-open'\"\n        >\n          <a>\n            <i class=\"fa fa-lock\"></i> <span> Agents</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a routerLink=\"/agent/create\"><i class=\"fa fa-circle-o\"></i> Create</a></li>\n            <li><a routerLink=\"/agent/list\"><i class=\"fa fa-circle-o\"></i> List</a></li>\n          </ul>\n        </li>\n\n        <li class=\"header\" *ngIf=\"(authState | async).isSuperAdmin || (authState | async).isAdmin\">ACCOUNTS</li>\n\n        <!-- Departments -->\n        <li class=\"treeview\"\n            *ngIf=\"(authState | async).isSuperAdmin || (authState | async).isAdmin\"\n            routerLinkActive=\"active\"\n            [disable-hover]=\"true\"\n            [appDropdown]=\"'menu-open'\"\n        >\n          <a>\n            <i class=\"fa fa-puzzle-piece\"></i> <span> Departments</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a routerLink=\"/department/create\"><i class=\"fa fa-circle-o\"></i> Create</a></li>\n            <li><a routerLink=\"/department/list\"><i class=\"fa fa-circle-o\"></i> List</a></li>\n          </ul>\n        </li>\n\n        <!-- Widgets -->\n        <li class=\"treeview\"\n            *ngIf=\"(authState | async).isSuperAdmin || (authState | async).isAdmin\"\n            routerLinkActive=\"active\"\n            [disable-hover]=\"true\"\n            [appDropdown]=\"'menu-open'\"\n        >\n          <a>\n            <i class=\"fa fa-th\"></i> <span>Widgets</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a routerLink=\"/widget/create\"><i class=\"fa fa-circle-o\"></i> Create</a></li>\n            <li><a routerLink=\"/widget/list\"><i class=\"fa fa-circle-o\"></i> List</a></li>\n          </ul>\n        </li>\n\n        <li class=\"header\" *ngIf=\"(authState | async).isAgent\">COMMUNICATIONS</li>\n\n        <!-- Chat Rooms -->\n        <li class=\"treeview\"\n            *ngIf=\"(authState | async).isAgent\"\n            routerLinkActive=\"active\"\n            [disable-hover]=\"true\"\n            [appDropdown]=\"'menu-open'\"\n        >\n          <a>\n            <i class=\"fa fa-comments\"></i> <span>Chat Rooms</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li>\n              <a routerLink=\"/chat/pending\">\n                <i class=\"fa fa-circle-o\"></i> <span>Pending Chats</span>\n                <span class=\"pull-right-container\">\n                  <small class=\"label pull-right bg-yellow\">2</small>\n                </span>\n              </a>\n            </li>\n            <li>\n              <a routerLink=\"/chat/ongoing\">\n                <i class=\"fa fa-circle-o\"></i> <span>Ongoing Chats</span>\n                <span class=\"pull-right-container\">\n                  <small class=\"label pull-right bg-green\">8</small>\n                </span>\n              </a>\n            </li>\n            <li>\n              <a routerLink=\"/chat/rejected\">\n                <i class=\"fa fa-circle-o\"></i> <span>Rejected Chats</span>\n                <span class=\"pull-right-container\">\n                  <small class=\"label pull-right bg-red\">5</small>\n                </span>\n              </a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </section>\n    <!-- /.sidebar -->\n  </div>\n</aside>\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(store) {
        this.store = store;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.authState = this.store.select('auth');
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/core/layout/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
], SidebarComponent);

var _a;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/admin/admin.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GET_ADMIN_ATTEMPT */
/* unused harmony export GET_ADMIN_SUCCESS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_ADMIN_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_ADMIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return EDIT_ADMIN_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return EDIT_ADMIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return GET_ADMIN_LIST_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return GET_ADMIN_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return RESET_ADMIN_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CREATE_TWILIO_SID_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CREATE_TWILIO_SID_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BLOCK_ADMIN_USER_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return BLOCK_ADMIN_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return UNBLOCK_ADMIN_USER_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return UNBLOCK_ADMIN_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return GET_TO_EDIT_ADMIN_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return GET_TO_EDIT_ADMIN_SUCCESS; });
/* unused harmony export GetAdminAttempt */
/* unused harmony export GetAdminSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddAdminAttempt; });
/* unused harmony export AddAdminSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return EditAdminAttempt; });
/* unused harmony export EditAdminSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return GetAdminListAttempt; });
/* unused harmony export GetAdminListSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return ResetAdminForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CreateTwilioSidAttempt; });
/* unused harmony export CreateTwilioSidSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return BlockAdminUserAttempt; });
/* unused harmony export BlockAdminUserSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return UnblockAdminUserAttempt; });
/* unused harmony export UnblockAdminUserSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return GetToEditAdminAttempt; });
/* unused harmony export GetToEditAdminSuccess */
var GET_ADMIN_ATTEMPT = 'GET_ADMIN_ATTEMPT';
var GET_ADMIN_SUCCESS = 'GET_ADMIN_SUCCESS';
var ADD_ADMIN_ATTEMPT = 'ADD_ADMIN_ATTEMPT';
var ADD_ADMIN_SUCCESS = 'ADD_ADMIN_SUCCESS';
var EDIT_ADMIN_ATTEMPT = 'EDIT_ADMIN_ATTEMPT';
var EDIT_ADMIN_SUCCESS = 'EDIT_ADMIN_SUCCESS';
var GET_ADMIN_LIST_ATTEMPT = 'GET_ADMIN_LIST_ATTEMPT';
var GET_ADMIN_LIST_SUCCESS = 'GET_ADMIN_LIST_SUCCESS';
var RESET_ADMIN_FORM = 'RESET_ADMIN_FORM';
var CREATE_TWILIO_SID_ATTEMPT = 'CREATE_TWILIO_SID_ATTEMPT';
var CREATE_TWILIO_SID_SUCCESS = 'CREATE_TWILIO_SID_SUCCESS';
var BLOCK_ADMIN_USER_ATTEMPT = 'BLOCK_ADMIN_USER_ATTEMPT';
var BLOCK_ADMIN_USER_SUCCESS = 'BLOCK_ADMIN_USER_SUCCESS';
var UNBLOCK_ADMIN_USER_ATTEMPT = 'UNBLOCK_ADMIN_USER_ATTEMPT';
var UNBLOCK_ADMIN_USER_SUCCESS = 'UNBLOCK_ADMIN_USER_SUCCESS';
var GET_TO_EDIT_ADMIN_ATTEMPT = 'GET_TO_EDIT_ADMIN_ATTEMPT';
var GET_TO_EDIT_ADMIN_SUCCESS = 'GET_TO_EDIT_ADMIN_SUCCESS';
var GetAdminAttempt = (function () {
    function GetAdminAttempt() {
        this.type = GET_ADMIN_ATTEMPT;
    }
    return GetAdminAttempt;
}());

var GetAdminSuccess = (function () {
    function GetAdminSuccess(payload) {
        this.payload = payload;
        this.type = GET_ADMIN_SUCCESS;
    }
    return GetAdminSuccess;
}());

var AddAdminAttempt = (function () {
    function AddAdminAttempt(payload) {
        this.payload = payload;
        this.type = ADD_ADMIN_ATTEMPT;
    }
    return AddAdminAttempt;
}());

var AddAdminSuccess = (function () {
    function AddAdminSuccess(payload) {
        this.payload = payload;
        this.type = ADD_ADMIN_SUCCESS;
    }
    return AddAdminSuccess;
}());

var EditAdminAttempt = (function () {
    function EditAdminAttempt(payload) {
        this.payload = payload;
        this.type = EDIT_ADMIN_ATTEMPT;
    }
    return EditAdminAttempt;
}());

var EditAdminSuccess = (function () {
    function EditAdminSuccess(payload) {
        this.payload = payload;
        this.type = EDIT_ADMIN_SUCCESS;
    }
    return EditAdminSuccess;
}());

var GetAdminListAttempt = (function () {
    function GetAdminListAttempt() {
        this.type = GET_ADMIN_LIST_ATTEMPT;
    }
    return GetAdminListAttempt;
}());

var GetAdminListSuccess = (function () {
    function GetAdminListSuccess(payload) {
        this.payload = payload;
        this.type = GET_ADMIN_LIST_SUCCESS;
    }
    return GetAdminListSuccess;
}());

var ResetAdminForm = (function () {
    function ResetAdminForm() {
        this.type = RESET_ADMIN_FORM;
    }
    return ResetAdminForm;
}());

var CreateTwilioSidAttempt = (function () {
    function CreateTwilioSidAttempt(payload) {
        this.payload = payload;
        this.type = CREATE_TWILIO_SID_ATTEMPT;
    }
    return CreateTwilioSidAttempt;
}());

var CreateTwilioSidSuccess = (function () {
    function CreateTwilioSidSuccess(payload) {
        this.payload = payload;
        this.type = CREATE_TWILIO_SID_SUCCESS;
    }
    return CreateTwilioSidSuccess;
}());

var BlockAdminUserAttempt = (function () {
    function BlockAdminUserAttempt(payload) {
        this.payload = payload;
        this.type = BLOCK_ADMIN_USER_ATTEMPT;
    }
    return BlockAdminUserAttempt;
}());

var BlockAdminUserSuccess = (function () {
    function BlockAdminUserSuccess(payload) {
        this.payload = payload;
        this.type = BLOCK_ADMIN_USER_SUCCESS;
    }
    return BlockAdminUserSuccess;
}());

var UnblockAdminUserAttempt = (function () {
    function UnblockAdminUserAttempt(payload) {
        this.payload = payload;
        this.type = UNBLOCK_ADMIN_USER_ATTEMPT;
    }
    return UnblockAdminUserAttempt;
}());

var UnblockAdminUserSuccess = (function () {
    function UnblockAdminUserSuccess(payload) {
        this.payload = payload;
        this.type = UNBLOCK_ADMIN_USER_SUCCESS;
    }
    return UnblockAdminUserSuccess;
}());

var GetToEditAdminAttempt = (function () {
    function GetToEditAdminAttempt(payload) {
        this.payload = payload;
        this.type = GET_TO_EDIT_ADMIN_ATTEMPT;
    }
    return GetToEditAdminAttempt;
}());

var GetToEditAdminSuccess = (function () {
    function GetToEditAdminSuccess(payload) {
        this.payload = payload;
        this.type = GET_TO_EDIT_ADMIN_SUCCESS;
    }
    return GetToEditAdminSuccess;
}());

//# sourceMappingURL=admin.actions.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/admin/admin.effect.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/admin/admin.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__ = __webpack_require__("../../../../../src/app/core/store/alert/alert.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AdminEffects = (function () {
    function AdminEffects(actions$, httpClient) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.addAdmin = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__admin_actions__["a" /* ADD_ADMIN_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'admin-registration';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__admin_actions__["b" /* ADD_ADMIN_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.getAdminList = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__admin_actions__["m" /* GET_ADMIN_LIST_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'admin-list';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.get(apiUrl, config)
                .map(function (res) {
                if (res.status) {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_9__admin_actions__["n" /* GET_ADMIN_LIST_SUCCESS */],
                        payload: res.response
                    };
                }
                else {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                        payload: { message: res.message, type: 'danger' }
                    };
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.editAdmin = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__admin_actions__["j" /* EDIT_ADMIN_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'updateuserprofile';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__admin_actions__["k" /* EDIT_ADMIN_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.createTwilioSid = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__admin_actions__["g" /* CREATE_TWILIO_SID_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'create-user-twilio-sid';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__admin_actions__["h" /* CREATE_TWILIO_SID_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.blockUser = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__admin_actions__["d" /* BLOCK_ADMIN_USER_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'block-user';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__admin_actions__["e" /* BLOCK_ADMIN_USER_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.unblockUser = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__admin_actions__["u" /* UNBLOCK_ADMIN_USER_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'unblock-user';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__admin_actions__["v" /* UNBLOCK_ADMIN_USER_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.getToEditAdmin = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__admin_actions__["o" /* GET_TO_EDIT_ADMIN_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'view-admin';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .map(function (res) {
                return {
                    type: __WEBPACK_IMPORTED_MODULE_9__admin_actions__["p" /* GET_TO_EDIT_ADMIN_SUCCESS */],
                    payload: res.response
                };
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
    }
    return AdminEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AdminEffects.prototype, "addAdmin", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AdminEffects.prototype, "getAdminList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AdminEffects.prototype, "editAdmin", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AdminEffects.prototype, "createTwilioSid", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AdminEffects.prototype, "blockUser", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AdminEffects.prototype, "unblockUser", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AdminEffects.prototype, "getToEditAdmin", void 0);
AdminEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], AdminEffects);

var _a, _b;
//# sourceMappingURL=admin.effect.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/admin/admin.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = adminReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/admin/admin.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    info: null,
    list: [],
    toEdit: {},
    resetAdminForm: false
};
function adminReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (__WEBPACK_IMPORTED_MODULE_0__admin_actions__["b" /* ADD_ADMIN_SUCCESS */]):
            return __assign({}, state, { list: state.list.concat([action.payload]), resetAdminForm: true });
        case (__WEBPACK_IMPORTED_MODULE_0__admin_actions__["k" /* EDIT_ADMIN_SUCCESS */]):
            var index = state.list.indexOf(function (admin) { return admin.id === action.payload.id; });
            var someAdmin = state.list[index];
            var updatedAdmin = __assign({}, someAdmin, action.payload);
            var admins = state.list.slice();
            admins[index] = updatedAdmin;
            return __assign({}, state, { list: state.list.concat(admins) });
        case (__WEBPACK_IMPORTED_MODULE_0__admin_actions__["n" /* GET_ADMIN_LIST_SUCCESS */]):
            return __assign({}, state, { list: action.payload });
        case (__WEBPACK_IMPORTED_MODULE_0__admin_actions__["s" /* RESET_ADMIN_FORM */]):
            return __assign({}, state, { resetAdminForm: false });
        case (__WEBPACK_IMPORTED_MODULE_0__admin_actions__["h" /* CREATE_TWILIO_SID_SUCCESS */]):
            var dataIndex = state.list.findIndex(function (admin) { return admin.id === action.payload.id; });
            var someAdminData = state.list[dataIndex];
            var updatedAdminData = __assign({}, someAdminData, action.payload);
            var adminsData = state.list.slice();
            adminsData[dataIndex] = updatedAdminData;
            return __assign({}, state, { list: adminsData.slice() });
        case (__WEBPACK_IMPORTED_MODULE_0__admin_actions__["e" /* BLOCK_ADMIN_USER_SUCCESS */]):
            var blockIndex = state.list.findIndex(function (admin) { return admin.id === action.payload.id; });
            var someBlockAdmin = state.list[blockIndex];
            var updatedBlockAdmin = __assign({}, someBlockAdmin, action.payload);
            var blockAdminData = state.list.slice();
            blockAdminData[blockIndex] = updatedBlockAdmin;
            return __assign({}, state, { list: blockAdminData.slice() });
        case (__WEBPACK_IMPORTED_MODULE_0__admin_actions__["v" /* UNBLOCK_ADMIN_USER_SUCCESS */]):
            var unblockIndex = state.list.findIndex(function (admin) { return admin.id === action.payload.id; });
            var someUnblockAdmins = state.list[unblockIndex];
            var updatedUnblockAdmin = __assign({}, someUnblockAdmins, action.payload);
            var unblockAdminData = state.list.slice();
            unblockAdminData[unblockIndex] = updatedUnblockAdmin;
            return __assign({}, state, { list: unblockAdminData.slice() });
        case (__WEBPACK_IMPORTED_MODULE_0__admin_actions__["p" /* GET_TO_EDIT_ADMIN_SUCCESS */]):
            return __assign({}, state, { toEdit: __assign({}, action.payload) });
        default:
            return state;
    }
}
//# sourceMappingURL=admin.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/after-login.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_profile_reducers__ = __webpack_require__("../../../../../src/app/core/layout/store/profile/profile.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__twilio_twilio_reducers__ = __webpack_require__("../../../../../src/app/core/layout/store/twilio/twilio.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__department_department_reducers__ = __webpack_require__("../../../../../src/app/core/layout/store/department/department.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin_reducers__ = __webpack_require__("../../../../../src/app/core/layout/store/admin/admin.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agent_agent_reducers__ = __webpack_require__("../../../../../src/app/core/layout/store/agent/agent.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__widget_widget_reducers__ = __webpack_require__("../../../../../src/app/core/layout/store/widget/widget.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat_reducers__ = __webpack_require__("../../../../../src/app/core/layout/store/chat/chat.reducers.ts");







;
var reducers = {
    profile: __WEBPACK_IMPORTED_MODULE_0__profile_profile_reducers__["a" /* profileReducer */],
    twilio: __WEBPACK_IMPORTED_MODULE_1__twilio_twilio_reducers__["a" /* twilioReducer */],
    department: __WEBPACK_IMPORTED_MODULE_2__department_department_reducers__["a" /* departmentReducer */],
    admin: __WEBPACK_IMPORTED_MODULE_3__admin_admin_reducers__["a" /* adminReducer */],
    agent: __WEBPACK_IMPORTED_MODULE_4__agent_agent_reducers__["a" /* agentReducer */],
    widget: __WEBPACK_IMPORTED_MODULE_5__widget_widget_reducers__["a" /* widgetReducer */],
    chat: __WEBPACK_IMPORTED_MODULE_6__chat_chat_reducers__["a" /* chatReducer */]
};
//# sourceMappingURL=after-login.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/agent/agent.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GET_AGENT_ATTEMPT */
/* unused harmony export GET_AGENT_SUCCESS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_AGENT_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_AGENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EDIT_AGENT_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return EDIT_AGENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GET_AGENT_LIST_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GET_AGENT_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return RESET_AGENT_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GET_TO_EDIT_AGENT_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GET_TO_EDIT_AGENT_SUCCESS; });
/* unused harmony export GetAgentAttempt */
/* unused harmony export GetAgentSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddAgentAttempt; });
/* unused harmony export AddAgentSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return EditAgentAttempt; });
/* unused harmony export EditAgentSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return GetAgentListAttempt; });
/* unused harmony export GetAgentListSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return ResetAgentForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GetToEditAgentAttempt; });
/* unused harmony export GetToEditAgentSuccess */
var GET_AGENT_ATTEMPT = 'GET_AGENT_ATTEMPT';
var GET_AGENT_SUCCESS = 'GET_AGENT_SUCCESS';
var ADD_AGENT_ATTEMPT = 'ADD_AGENT_ATTEMPT';
var ADD_AGENT_SUCCESS = 'ADD_AGENT_SUCCESS';
var EDIT_AGENT_ATTEMPT = 'EDIT_AGENT_ATTEMPT';
var EDIT_AGENT_SUCCESS = 'EDIT_AGENT_SUCCESS';
var GET_AGENT_LIST_ATTEMPT = 'GET_AGENT_LIST_ATTEMPT';
var GET_AGENT_LIST_SUCCESS = 'GET_AGENT_LIST_SUCCESS';
var RESET_AGENT_FORM = 'RESET_AGENT_FORM';
var GET_TO_EDIT_AGENT_ATTEMPT = 'GET_TO_EDIT_AGENT_ATTEMPT';
var GET_TO_EDIT_AGENT_SUCCESS = 'GET_TO_EDIT_AGENT_SUCCESS';
var GetAgentAttempt = (function () {
    function GetAgentAttempt() {
        this.type = GET_AGENT_ATTEMPT;
    }
    return GetAgentAttempt;
}());

var GetAgentSuccess = (function () {
    function GetAgentSuccess(payload) {
        this.payload = payload;
        this.type = GET_AGENT_SUCCESS;
    }
    return GetAgentSuccess;
}());

var AddAgentAttempt = (function () {
    function AddAgentAttempt(payload) {
        this.payload = payload;
        this.type = ADD_AGENT_ATTEMPT;
    }
    return AddAgentAttempt;
}());

var AddAgentSuccess = (function () {
    function AddAgentSuccess(payload) {
        this.payload = payload;
        this.type = ADD_AGENT_SUCCESS;
    }
    return AddAgentSuccess;
}());

var EditAgentAttempt = (function () {
    function EditAgentAttempt(payload) {
        this.payload = payload;
        this.type = EDIT_AGENT_ATTEMPT;
    }
    return EditAgentAttempt;
}());

var EditAgentSuccess = (function () {
    function EditAgentSuccess(payload) {
        this.payload = payload;
        this.type = EDIT_AGENT_SUCCESS;
    }
    return EditAgentSuccess;
}());

var GetAgentListAttempt = (function () {
    function GetAgentListAttempt() {
        this.type = GET_AGENT_LIST_ATTEMPT;
    }
    return GetAgentListAttempt;
}());

var GetAgentListSuccess = (function () {
    function GetAgentListSuccess(payload) {
        this.payload = payload;
        this.type = GET_AGENT_LIST_SUCCESS;
    }
    return GetAgentListSuccess;
}());

var ResetAgentForm = (function () {
    function ResetAgentForm() {
        this.type = RESET_AGENT_FORM;
    }
    return ResetAgentForm;
}());

var GetToEditAgentAttempt = (function () {
    function GetToEditAgentAttempt(payload) {
        this.payload = payload;
        this.type = GET_TO_EDIT_AGENT_ATTEMPT;
    }
    return GetToEditAgentAttempt;
}());

var GetToEditAgentSuccess = (function () {
    function GetToEditAgentSuccess(payload) {
        this.payload = payload;
        this.type = GET_TO_EDIT_AGENT_SUCCESS;
    }
    return GetToEditAgentSuccess;
}());

//# sourceMappingURL=agent.actions.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/agent/agent.effect.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agent_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/agent/agent.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__ = __webpack_require__("../../../../../src/app/core/store/alert/alert.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AgentEffects = (function () {
    function AgentEffects(actions$, httpClient) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.addAdmin = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__agent_actions__["a" /* ADD_AGENT_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'agent-register';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__agent_actions__["b" /* ADD_AGENT_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.getAgentList = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__agent_actions__["g" /* GET_AGENT_LIST_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'listofAgent';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, config)
                .map(function (res) {
                if (res.status) {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_9__agent_actions__["h" /* GET_AGENT_LIST_SUCCESS */],
                        payload: res.response
                    };
                }
                else {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                        payload: { message: res.message, type: 'danger' }
                    };
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.editAgent = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__agent_actions__["d" /* EDIT_AGENT_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'agent-update';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__agent_actions__["e" /* EDIT_AGENT_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.getToEditDepartmentList = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__agent_actions__["i" /* GET_TO_EDIT_AGENT_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'view-agent';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .map(function (res) {
                return {
                    type: __WEBPACK_IMPORTED_MODULE_9__agent_actions__["j" /* GET_TO_EDIT_AGENT_SUCCESS */],
                    payload: res.response
                };
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
    }
    return AgentEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AgentEffects.prototype, "addAdmin", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AgentEffects.prototype, "getAgentList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AgentEffects.prototype, "editAgent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AgentEffects.prototype, "getToEditDepartmentList", void 0);
AgentEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], AgentEffects);

var _a, _b;
//# sourceMappingURL=agent.effect.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/agent/agent.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = agentReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agent_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/agent/agent.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    info: null,
    list: [],
    toEdit: {},
    resetAgentForm: false
};
function agentReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (__WEBPACK_IMPORTED_MODULE_0__agent_actions__["b" /* ADD_AGENT_SUCCESS */]):
            return __assign({}, state, { list: state.list.concat([action.payload]), resetAgentForm: true });
        case (__WEBPACK_IMPORTED_MODULE_0__agent_actions__["h" /* GET_AGENT_LIST_SUCCESS */]):
            return __assign({}, state, { list: action.payload });
        case (__WEBPACK_IMPORTED_MODULE_0__agent_actions__["e" /* EDIT_AGENT_SUCCESS */]):
            var index = state.list.indexOf(function (agent) { return agent.id === action.payload.id; });
            var someAgent = state.list[index];
            var updatedAgent = __assign({}, someAgent, action.payload);
            var admins = state.list.slice();
            admins[index] = updatedAgent;
            return __assign({}, state, { list: state.list.concat(admins) });
        case (__WEBPACK_IMPORTED_MODULE_0__agent_actions__["j" /* GET_TO_EDIT_AGENT_SUCCESS */]):
            return __assign({}, state, { toEdit: __assign({}, action.payload) });
        case (__WEBPACK_IMPORTED_MODULE_0__agent_actions__["m" /* RESET_AGENT_FORM */]):
            return __assign({}, state, { resetAgentForm: false });
        default:
            return state;
    }
}
//# sourceMappingURL=agent.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/chat/chat.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CONNECT_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CONNECT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_NEW_MSG_TO_CHAT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_TO_CHAT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return EDIT_FROM_CHAT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DELETE_FROM_CHAT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ConnectAttempt; });
/* unused harmony export ConnectSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddNewMsgToChatList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AddToChatList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return EditFromChatList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return DeleteFromChatList; });
var CONNECT_ATTEMPT = 'CONNECT_ATTEMPT';
var CONNECT_SUCCESS = "CONNECT_SUCCESS";
var ADD_NEW_MSG_TO_CHAT_LIST = "ADD_NEW_MSG_TO_CHAT_LIST";
var ADD_TO_CHAT_LIST = "ADD_TO_CHAT_LIST";
var EDIT_FROM_CHAT_LIST = "EDIT_FROM_CHAT_LIST";
var DELETE_FROM_CHAT_LIST = "DELETE_FROM_CHAT_LIST";
var ConnectAttempt = (function () {
    function ConnectAttempt() {
        this.type = CONNECT_ATTEMPT;
    }
    return ConnectAttempt;
}());

var ConnectSuccess = (function () {
    function ConnectSuccess() {
        this.type = CONNECT_SUCCESS;
    }
    return ConnectSuccess;
}());

var AddNewMsgToChatList = (function () {
    function AddNewMsgToChatList(payload) {
        this.payload = payload;
        this.type = ADD_NEW_MSG_TO_CHAT_LIST;
    }
    return AddNewMsgToChatList;
}());

var AddToChatList = (function () {
    function AddToChatList(payload) {
        this.payload = payload;
        this.type = ADD_TO_CHAT_LIST;
    }
    return AddToChatList;
}());

var EditFromChatList = (function () {
    function EditFromChatList(payload) {
        this.payload = payload;
        this.type = EDIT_FROM_CHAT_LIST;
    }
    return EditFromChatList;
}());

var DeleteFromChatList = (function () {
    function DeleteFromChatList(payload) {
        this.payload = payload;
        this.type = DELETE_FROM_CHAT_LIST;
    }
    return DeleteFromChatList;
}());

//# sourceMappingURL=chat.actions.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/chat/chat.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_chat_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/chat/chat.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__inner_pages_chat_chat_service__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chat/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ChatEffects = (function () {
    function ChatEffects(actions$, chatService, httpClient) {
        var _this = this;
        this.actions$ = actions$;
        this.chatService = chatService;
        this.httpClient = httpClient;
        this.connect = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__chat_chat_actions__["e" /* CONNECT_ATTEMPT */])
            .switchMap(function (action) {
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                type: __WEBPACK_IMPORTED_MODULE_9__chat_chat_actions__["f" /* CONNECT_SUCCESS */]
            });
        })
            .do(function () {
            _this.chatService.connect();
        });
    }
    return ChatEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ChatEffects.prototype, "connect", void 0);
ChatEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_10__inner_pages_chat_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__inner_pages_chat_chat_service__["a" /* ChatService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _c || Object])
], ChatEffects);

var _a, _b, _c;
//# sourceMappingURL=chat.effects.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/chat/chat.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = chatReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/chat/chat.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    ongoing: [],
    connected: false
};
function chatReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__chat_actions__["f" /* CONNECT_SUCCESS */]:
            return __assign({}, state, { connected: true });
        case __WEBPACK_IMPORTED_MODULE_0__chat_actions__["b" /* ADD_TO_CHAT_LIST */]:
            var obj = {
                room: action.payload.name,
                client: action.payload.client_name,
                status: action.payload.status,
                chats: action.payload.chats
            };
            return __assign({}, state, { ongoing: state.ongoing.concat([__assign({}, obj)]) });
        case (__WEBPACK_IMPORTED_MODULE_0__chat_actions__["a" /* ADD_NEW_MSG_TO_CHAT_LIST */]):
            console.log('Add New Msg');
            console.log(action.payload);
            var indexOfChat = state.ongoing.findIndex(function (chat) { return chat.room == action.payload.roomNo; });
            console.log(indexOfChat);
            var oldChatList = state.ongoing.slice();
            var someChatList = __assign({}, oldChatList[indexOfChat]);
            someChatList.chats = someChatList.chats.concat([__assign({}, action.payload)]);
            oldChatList[indexOfChat] = __assign({}, someChatList);
            return __assign({}, state, { ongoing: oldChatList.slice() });
        case (__WEBPACK_IMPORTED_MODULE_0__chat_actions__["j" /* EDIT_FROM_CHAT_LIST */]):
            console.log('Action:', action.payload);
            var indexToEdit = state.ongoing.findIndex(function (chat) { return chat.room === action.payload.room_number; });
            console.log('index to edit', indexToEdit);
            var chats = state.ongoing.slice();
            var someChat = chats[indexToEdit];
            console.log(someChat);
            var updatedChat = __assign({}, someChat, { status: action.payload.status });
            console.log(updatedChat);
            chats[indexToEdit] = updatedChat;
            return __assign({}, state, { ongoing: chats.slice() });
        case __WEBPACK_IMPORTED_MODULE_0__chat_actions__["h" /* DELETE_FROM_CHAT_LIST */]:
            var indexToDelete = state.ongoing.findIndex(function (chat) { return chat.room === action.payload.room_number; });
            var oldChats = state.ongoing.slice();
            oldChats.splice(indexToDelete, 1);
            return __assign({}, state, { ongoing: oldChats.slice() });
        default:
            return state;
    }
}
//# sourceMappingURL=chat.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/department/department.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return RESET_DEPARTMENT_FORM; });
/* unused harmony export GET_DEPARTMENT_ATTEMPT */
/* unused harmony export GET_DEPARTMENT_SUCCESS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_DEPARTMENT_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_DEPARTMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EDIT_DEPARTMENT_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return EDIT_DEPARTMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GET_DEPARTMENT_LIST_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GET_DEPARTMENT_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GET_TO_EDIT_DEPARTMENT_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GET_TO_EDIT_DEPARTMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return ResetDepartmentForm; });
/* unused harmony export GetDepartmentAttempt */
/* unused harmony export GetDepartmentSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddDepartmentAttempt; });
/* unused harmony export AddDepartmentSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return EditDepartmentAttempt; });
/* unused harmony export EditDepartmentSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return GetDepartmentListAttempt; });
/* unused harmony export GetDepartmentListSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GetToEditDepartmentAttempt; });
/* unused harmony export GetToEditDepartmentSuccess */
var RESET_DEPARTMENT_FORM = 'RESET_DEPARTMENT_FORM';
var GET_DEPARTMENT_ATTEMPT = 'GET_DEPARTMENT_ATTEMPT';
var GET_DEPARTMENT_SUCCESS = 'GET_DEPARTMENT_SUCCESS';
var ADD_DEPARTMENT_ATTEMPT = 'ADD_DEPARTMENT_ATTEMPT';
var ADD_DEPARTMENT_SUCCESS = 'ADD_DEPARTMENT_SUCCESS';
var EDIT_DEPARTMENT_ATTEMPT = 'EDIT_DEPARTMENT_ATTEMPT';
var EDIT_DEPARTMENT_SUCCESS = 'EDIT_DEPARTMENT_SUCCESS';
var GET_DEPARTMENT_LIST_ATTEMPT = 'GET_DEPARTMENT_LIST_ATTEMPT';
var GET_DEPARTMENT_LIST_SUCCESS = 'GET_DEPARTMENT_LIST_SUCCESS';
var GET_TO_EDIT_DEPARTMENT_ATTEMPT = 'GET_TO_EDIT_DEPARTMENT_ATTEMPT';
var GET_TO_EDIT_DEPARTMENT_SUCCESS = 'GET_TO_EDIT_DEPARTMENT_SUCCESS';
var ResetDepartmentForm = (function () {
    function ResetDepartmentForm() {
        this.type = RESET_DEPARTMENT_FORM;
    }
    return ResetDepartmentForm;
}());

var GetDepartmentAttempt = (function () {
    function GetDepartmentAttempt() {
        this.type = GET_DEPARTMENT_ATTEMPT;
    }
    return GetDepartmentAttempt;
}());

var GetDepartmentSuccess = (function () {
    function GetDepartmentSuccess(payload) {
        this.payload = payload;
        this.type = GET_DEPARTMENT_SUCCESS;
    }
    return GetDepartmentSuccess;
}());

var AddDepartmentAttempt = (function () {
    function AddDepartmentAttempt(payload) {
        this.payload = payload;
        this.type = ADD_DEPARTMENT_ATTEMPT;
    }
    return AddDepartmentAttempt;
}());

var AddDepartmentSuccess = (function () {
    function AddDepartmentSuccess(payload) {
        this.payload = payload;
        this.type = ADD_DEPARTMENT_SUCCESS;
    }
    return AddDepartmentSuccess;
}());

var EditDepartmentAttempt = (function () {
    function EditDepartmentAttempt(payload) {
        this.payload = payload;
        this.type = EDIT_DEPARTMENT_ATTEMPT;
    }
    return EditDepartmentAttempt;
}());

var EditDepartmentSuccess = (function () {
    function EditDepartmentSuccess(payload) {
        this.payload = payload;
        this.type = EDIT_DEPARTMENT_SUCCESS;
    }
    return EditDepartmentSuccess;
}());

var GetDepartmentListAttempt = (function () {
    function GetDepartmentListAttempt(payload) {
        this.payload = payload;
        this.type = GET_DEPARTMENT_LIST_ATTEMPT;
    }
    return GetDepartmentListAttempt;
}());

var GetDepartmentListSuccess = (function () {
    function GetDepartmentListSuccess(payload) {
        this.payload = payload;
        this.type = GET_DEPARTMENT_LIST_SUCCESS;
    }
    return GetDepartmentListSuccess;
}());

var GetToEditDepartmentAttempt = (function () {
    function GetToEditDepartmentAttempt(payload) {
        this.payload = payload;
        this.type = GET_TO_EDIT_DEPARTMENT_ATTEMPT;
    }
    return GetToEditDepartmentAttempt;
}());

var GetToEditDepartmentSuccess = (function () {
    function GetToEditDepartmentSuccess(payload) {
        this.payload = payload;
        this.type = GET_TO_EDIT_DEPARTMENT_SUCCESS;
    }
    return GetToEditDepartmentSuccess;
}());

//# sourceMappingURL=department.actions.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/department/department.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__department_department_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/department/department.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__ = __webpack_require__("../../../../../src/app/core/store/alert/alert.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var DepartmentEffects = (function () {
    function DepartmentEffects(actions$, httpClient) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.addDepartment = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__department_department_actions__["a" /* ADD_DEPARTMENT_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'create-department';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__department_department_actions__["b" /* ADD_DEPARTMENT_SUCCESS */],
                            payload: res.response
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
        this.editDepartment = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__department_department_actions__["d" /* EDIT_DEPARTMENT_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'edit-department';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__department_department_actions__["e" /* EDIT_DEPARTMENT_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
        this.getDepartmentList = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__department_department_actions__["g" /* GET_DEPARTMENT_LIST_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'department-list';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .map(function (res) {
                return {
                    type: __WEBPACK_IMPORTED_MODULE_9__department_department_actions__["h" /* GET_DEPARTMENT_LIST_SUCCESS */],
                    payload: res.response
                };
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
        this.getToEditDepartment = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__department_department_actions__["i" /* GET_TO_EDIT_DEPARTMENT_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'view-department';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .map(function (res) {
                return {
                    type: __WEBPACK_IMPORTED_MODULE_9__department_department_actions__["j" /* GET_TO_EDIT_DEPARTMENT_SUCCESS */],
                    payload: res.response
                };
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_10__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
    }
    return DepartmentEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], DepartmentEffects.prototype, "addDepartment", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], DepartmentEffects.prototype, "editDepartment", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], DepartmentEffects.prototype, "getDepartmentList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], DepartmentEffects.prototype, "getToEditDepartment", void 0);
DepartmentEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], DepartmentEffects);

var _a, _b;
//# sourceMappingURL=department.effects.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/department/department.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = departmentReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__department_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/department/department.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    list: [],
    toEdit: {},
    resetDepartmentForm: false
};
function departmentReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (__WEBPACK_IMPORTED_MODULE_0__department_actions__["b" /* ADD_DEPARTMENT_SUCCESS */]):
            return __assign({}, state, { list: state.list.concat([action.payload]), resetDepartmentForm: true });
        case (__WEBPACK_IMPORTED_MODULE_0__department_actions__["e" /* EDIT_DEPARTMENT_SUCCESS */]):
            var index = state.list.indexOf(function (dep) { return dep.id === action.payload.id; });
            var someDep = state.list[index];
            var updatedDep = __assign({}, someDep, action.payload);
            var deps = state.list.slice();
            deps[index] = updatedDep;
            return __assign({}, state, { list: state.list.concat(deps) });
        case (__WEBPACK_IMPORTED_MODULE_0__department_actions__["h" /* GET_DEPARTMENT_LIST_SUCCESS */]):
            return __assign({}, state, { list: action.payload.slice() });
        case (__WEBPACK_IMPORTED_MODULE_0__department_actions__["m" /* RESET_DEPARTMENT_FORM */]):
            return __assign({}, state, { resetDepartmentForm: false });
        case (__WEBPACK_IMPORTED_MODULE_0__department_actions__["j" /* GET_TO_EDIT_DEPARTMENT_SUCCESS */]):
            return __assign({}, state, { toEdit: __assign({}, action.payload) });
        default:
            return state;
    }
}
//# sourceMappingURL=department.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/profile/profile.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GET_PROFILE_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GET_PROFILE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EDIT_PROFILE_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EDIT_PROFILE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EDIT_PROFILE_CHANGE_PASSWORD_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EDIT_PROFILE_CHANGE_PASSWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GetProfileAttempt; });
/* unused harmony export GetProfileSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return EditProfileAttempt; });
/* unused harmony export EditProfileSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return EditProfileChangePasswordAttempt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return EditProfileChangePasswordSuccess; });
var GET_PROFILE_ATTEMPT = 'GET_PROFILE_ATTEMPT';
var GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
var EDIT_PROFILE_ATTEMPT = 'EDIT_PROFILE_ATTEMPT';
var EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';
var EDIT_PROFILE_CHANGE_PASSWORD_ATTEMPT = 'EDIT_PROFILE_CHANGE_PASSWORD_ATTEMPT';
var EDIT_PROFILE_CHANGE_PASSWORD_SUCCESS = 'EDIT_PROFILE_CHANGE_PASSWORD_SUCCESS';
var GetProfileAttempt = (function () {
    function GetProfileAttempt() {
        this.type = GET_PROFILE_ATTEMPT;
    }
    return GetProfileAttempt;
}());

var GetProfileSuccess = (function () {
    function GetProfileSuccess(payload) {
        this.payload = payload;
        this.type = GET_PROFILE_SUCCESS;
    }
    return GetProfileSuccess;
}());

var EditProfileAttempt = (function () {
    function EditProfileAttempt(payload) {
        this.payload = payload;
        this.type = EDIT_PROFILE_ATTEMPT;
    }
    return EditProfileAttempt;
}());

var EditProfileSuccess = (function () {
    function EditProfileSuccess(payload) {
        this.payload = payload;
        this.type = EDIT_PROFILE_SUCCESS;
    }
    return EditProfileSuccess;
}());

var EditProfileChangePasswordAttempt = (function () {
    function EditProfileChangePasswordAttempt(payload) {
        this.payload = payload;
        this.type = EDIT_PROFILE_CHANGE_PASSWORD_ATTEMPT;
    }
    return EditProfileChangePasswordAttempt;
}());

var EditProfileChangePasswordSuccess = (function () {
    function EditProfileChangePasswordSuccess(payload) {
        this.payload = payload;
        this.type = EDIT_PROFILE_CHANGE_PASSWORD_SUCCESS;
    }
    return EditProfileChangePasswordSuccess;
}());

//# sourceMappingURL=profile.actions.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/profile/profile.effect.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/profile/profile.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store_alert_alert_actions__ = __webpack_require__("../../../../../src/app/core/store/alert/alert.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ProfileEffects = (function () {
    function ProfileEffects(actions$, httpClient, router, store) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.router = router;
        this.store = store;
        this.getProfile = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__profile_profile_actions__["h" /* GET_PROFILE_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_13__environments_environment__["a" /* environment */].API_BASE_URL + 'userprofile';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, '', config)
                .map(function (res) {
                if (res.status) {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_11__profile_profile_actions__["i" /* GET_PROFILE_SUCCESS */],
                        payload: res.response
                    };
                }
                else {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_12__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                        payload: { message: res.message, type: 'danger' }
                    };
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_12__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
        this.editProfile = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__profile_profile_actions__["a" /* EDIT_PROFILE_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_13__environments_environment__["a" /* environment */].API_BASE_URL + 'updateuserprofile';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_11__profile_profile_actions__["d" /* EDIT_PROFILE_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_12__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_12__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_12__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
        this.editProfileChangePassword = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__profile_profile_actions__["b" /* EDIT_PROFILE_CHANGE_PASSWORD_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_13__environments_environment__["a" /* environment */].API_BASE_URL + 'reset-password';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_11__profile_profile_actions__["c" /* EDIT_PROFILE_CHANGE_PASSWORD_SUCCESS */],
                            payload: true
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_12__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_12__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_12__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
    }
    return ProfileEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ProfileEffects.prototype, "getProfile", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ProfileEffects.prototype, "editProfile", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ProfileEffects.prototype, "editProfileChangePassword", void 0);
ProfileEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["h" /* Store */]) === "function" && _d || Object])
], ProfileEffects);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.effect.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/profile/profile.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = profileReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/profile/profile.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    data: null,
    resetChangePasswordForm: false
};
function profileReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (__WEBPACK_IMPORTED_MODULE_0__profile_actions__["i" /* GET_PROFILE_SUCCESS */]):
            return __assign({}, state, { data: __assign({}, action.payload) });
        case (__WEBPACK_IMPORTED_MODULE_0__profile_actions__["d" /* EDIT_PROFILE_SUCCESS */]):
            return __assign({}, state, { data: __assign({}, action.payload) });
        case (__WEBPACK_IMPORTED_MODULE_0__profile_actions__["c" /* EDIT_PROFILE_CHANGE_PASSWORD_SUCCESS */]):
            return __assign({}, state, { resetChangePasswordForm: action.payload });
        default:
            return state;
    }
}
//# sourceMappingURL=profile.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/twilio/twilio.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_TWILIO_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_TWILIO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TWILIO_ATTEMPT; });
/* unused harmony export ADD_TWILIO_SUCCESS */
/* unused harmony export EDIT_TWILIO_ATTEMPT */
/* unused harmony export EDIT_TWILIO_SUCCESS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_TWILIO_LIST_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_TWILIO_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GetTwilioAttempt; });
/* unused harmony export GetTwilioSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddTwilioAttempt; });
/* unused harmony export AddTwilioSuccess */
/* unused harmony export EditTwilioAttempt */
/* unused harmony export EditTwilioSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GetTwilioListAttempt; });
/* unused harmony export GetTwilioListSuccess */
var GET_TWILIO_ATTEMPT = 'GET_TWILIO_ATTEMPT';
var GET_TWILIO_SUCCESS = 'GET_TWILIO_SUCCESS';
var ADD_TWILIO_ATTEMPT = 'ADD_TWILIO_ATTEMPT';
var ADD_TWILIO_SUCCESS = 'ADD_TWILIO_SUCCESS';
var EDIT_TWILIO_ATTEMPT = 'EDIT_TWILIO_ATTEMPT';
var EDIT_TWILIO_SUCCESS = 'EDIT_TWILIO_SUCCESS';
var GET_TWILIO_LIST_ATTEMPT = 'GET_TWILIO_LIST_ATTEMPT';
var GET_TWILIO_LIST_SUCCESS = 'GET_TWILIO_LIST_SUCCESS';
var GetTwilioAttempt = (function () {
    function GetTwilioAttempt() {
        this.type = GET_TWILIO_ATTEMPT;
    }
    return GetTwilioAttempt;
}());

var GetTwilioSuccess = (function () {
    function GetTwilioSuccess(payload) {
        this.payload = payload;
        this.type = GET_TWILIO_SUCCESS;
    }
    return GetTwilioSuccess;
}());

var AddTwilioAttempt = (function () {
    function AddTwilioAttempt(payload) {
        this.payload = payload;
        this.type = ADD_TWILIO_ATTEMPT;
    }
    return AddTwilioAttempt;
}());

var AddTwilioSuccess = (function () {
    function AddTwilioSuccess(payload) {
        this.payload = payload;
        this.type = ADD_TWILIO_SUCCESS;
    }
    return AddTwilioSuccess;
}());

var EditTwilioAttempt = (function () {
    function EditTwilioAttempt(payload) {
        this.payload = payload;
        this.type = EDIT_TWILIO_ATTEMPT;
    }
    return EditTwilioAttempt;
}());

var EditTwilioSuccess = (function () {
    function EditTwilioSuccess(payload) {
        this.payload = payload;
        this.type = EDIT_TWILIO_SUCCESS;
    }
    return EditTwilioSuccess;
}());

var GetTwilioListAttempt = (function () {
    function GetTwilioListAttempt() {
        this.type = GET_TWILIO_LIST_ATTEMPT;
    }
    return GetTwilioListAttempt;
}());

var GetTwilioListSuccess = (function () {
    function GetTwilioListSuccess(payload) {
        this.payload = payload;
        this.type = GET_TWILIO_LIST_SUCCESS;
    }
    return GetTwilioListSuccess;
}());

//# sourceMappingURL=twilio.actions.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/twilio/twilio.effect.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwilioEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_auth_auth_actions__ = __webpack_require__("../../../../../src/app/core/store/auth/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__twilio_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/twilio/twilio.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store_alert_alert_actions__ = __webpack_require__("../../../../../src/app/core/store/alert/alert.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var TwilioEffects = (function () {
    function TwilioEffects(actions$, httpClient) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.addTwilio = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__twilio_actions__["a" /* ADD_TWILIO_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_12__environments_environment__["a" /* environment */].API_BASE_URL + 'twilio-information';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_11__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__store_auth_auth_actions__["c" /* CHECK_TWILIO_ACTIVE_SUCCESS */],
                            payload: true
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_11__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_11__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
        this.getTwilio = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__twilio_actions__["c" /* GET_TWILIO_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_12__environments_environment__["a" /* environment */].API_BASE_URL + 'get-twilio-information';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, '', config)
                .map(function (res) {
                return {
                    type: __WEBPACK_IMPORTED_MODULE_10__twilio_actions__["f" /* GET_TWILIO_SUCCESS */],
                    payload: res.response
                };
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_11__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
        this.getTwilioList = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__twilio_actions__["d" /* GET_TWILIO_LIST_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_12__environments_environment__["a" /* environment */].API_BASE_URL + 'twilio-account-list';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.get(apiUrl, config)
                .map(function (res) {
                if (res.status) {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_10__twilio_actions__["e" /* GET_TWILIO_LIST_SUCCESS */],
                        payload: res.response
                    };
                }
                else {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_11__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                        payload: { message: res.message, type: 'danger' }
                    };
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_11__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
    }
    return TwilioEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], TwilioEffects.prototype, "addTwilio", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], TwilioEffects.prototype, "getTwilio", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], TwilioEffects.prototype, "getTwilioList", void 0);
TwilioEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], TwilioEffects);

var _a, _b;
//# sourceMappingURL=twilio.effect.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/twilio/twilio.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = twilioReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__twilio_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/twilio/twilio.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    info: null,
    list: []
};
function twilioReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (__WEBPACK_IMPORTED_MODULE_0__twilio_actions__["f" /* GET_TWILIO_SUCCESS */]):
            return __assign({}, state, { info: action.payload });
        case (__WEBPACK_IMPORTED_MODULE_0__twilio_actions__["e" /* GET_TWILIO_LIST_SUCCESS */]):
            return __assign({}, state, { list: action.payload });
        default:
            return state;
    }
}
//# sourceMappingURL=twilio.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/widget/widget.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GET_WIDGET_ATTEMPT */
/* unused harmony export GET_WIDGET_SUCCESS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_WIDGET_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_WIDGET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EDIT_WIDGET_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return EDIT_WIDGET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GET_WIDGET_LIST_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GET_WIDGET_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return RESET_WIDGET_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return GET_WIDGET_TO_EDIT_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GET_WIDGET_TO_EDIT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GET_TIMEZONE_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GET_TIMEZONE_LIST_ATTEMPT; });
/* unused harmony export GetWidgetAttempt */
/* unused harmony export GetWidgetSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddWidgetAttempt; });
/* unused harmony export AddWidgetSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return EditWidgetAttempt; });
/* unused harmony export EditWidgetSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return GetWidgetListAttempt; });
/* unused harmony export GetWidgetListSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return ResetWidgetForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return GetTimeZoneListAttempt; });
/* unused harmony export GetTimeZoneListSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return GetWidgetToEditAttempt; });
/* unused harmony export GetWidgetToEditSuccess */
var GET_WIDGET_ATTEMPT = 'GET_WIDGET_ATTEMPT';
var GET_WIDGET_SUCCESS = 'GET_WIDGET_SUCCESS';
var ADD_WIDGET_ATTEMPT = 'ADD_WIDGET_ATTEMPT';
var ADD_WIDGET_SUCCESS = 'ADD_WIDGET_SUCCESS';
var EDIT_WIDGET_ATTEMPT = 'EDIT_WIDGET_ATTEMPT';
var EDIT_WIDGET_SUCCESS = 'EDIT_WIDGET_SUCCESS';
var GET_WIDGET_LIST_ATTEMPT = 'GET_WIDGET_LIST_ATTEMPT';
var GET_WIDGET_LIST_SUCCESS = 'GET_WIDGET_LIST_SUCCESS';
var RESET_WIDGET_FORM = 'RESET_WIDGET_FORM';
var GET_WIDGET_TO_EDIT_ATTEMPT = 'GET_WIDGET_TO_EDIT_ATTEMPT';
var GET_WIDGET_TO_EDIT_SUCCESS = 'GET_WIDGET_TO_EDIT_SUCCESS';
var GET_TIMEZONE_LIST_SUCCESS = 'GET_TIMEZONE_LIST_SUCCESS';
var GET_TIMEZONE_LIST_ATTEMPT = 'GET_TIMEZONE_LIST_ATTEMPT';
var GetWidgetAttempt = (function () {
    function GetWidgetAttempt() {
        this.type = GET_WIDGET_ATTEMPT;
    }
    return GetWidgetAttempt;
}());

var GetWidgetSuccess = (function () {
    function GetWidgetSuccess(payload) {
        this.payload = payload;
        this.type = GET_WIDGET_SUCCESS;
    }
    return GetWidgetSuccess;
}());

var AddWidgetAttempt = (function () {
    function AddWidgetAttempt(payload) {
        this.payload = payload;
        this.type = ADD_WIDGET_ATTEMPT;
    }
    return AddWidgetAttempt;
}());

var AddWidgetSuccess = (function () {
    function AddWidgetSuccess(payload) {
        this.payload = payload;
        this.type = ADD_WIDGET_SUCCESS;
    }
    return AddWidgetSuccess;
}());

var EditWidgetAttempt = (function () {
    function EditWidgetAttempt(payload) {
        this.payload = payload;
        this.type = EDIT_WIDGET_ATTEMPT;
    }
    return EditWidgetAttempt;
}());

var EditWidgetSuccess = (function () {
    function EditWidgetSuccess(payload) {
        this.payload = payload;
        this.type = EDIT_WIDGET_SUCCESS;
    }
    return EditWidgetSuccess;
}());

var GetWidgetListAttempt = (function () {
    function GetWidgetListAttempt(payload) {
        this.payload = payload;
        this.type = GET_WIDGET_LIST_ATTEMPT;
    }
    return GetWidgetListAttempt;
}());

var GetWidgetListSuccess = (function () {
    function GetWidgetListSuccess(payload) {
        this.payload = payload;
        this.type = GET_WIDGET_LIST_SUCCESS;
    }
    return GetWidgetListSuccess;
}());

var ResetWidgetForm = (function () {
    function ResetWidgetForm() {
        this.type = RESET_WIDGET_FORM;
    }
    return ResetWidgetForm;
}());

var GetTimeZoneListAttempt = (function () {
    function GetTimeZoneListAttempt() {
        this.type = GET_TIMEZONE_LIST_ATTEMPT;
    }
    return GetTimeZoneListAttempt;
}());

var GetTimeZoneListSuccess = (function () {
    function GetTimeZoneListSuccess(payload) {
        this.payload = payload;
        this.type = GET_TIMEZONE_LIST_SUCCESS;
    }
    return GetTimeZoneListSuccess;
}());

var GetWidgetToEditAttempt = (function () {
    function GetWidgetToEditAttempt(payload) {
        this.payload = payload;
        this.type = GET_WIDGET_TO_EDIT_ATTEMPT;
    }
    return GetWidgetToEditAttempt;
}());

var GetWidgetToEditSuccess = (function () {
    function GetWidgetToEditSuccess(payload) {
        this.payload = payload;
        this.type = GET_WIDGET_TO_EDIT_SUCCESS;
    }
    return GetWidgetToEditSuccess;
}());

//# sourceMappingURL=widget.actions.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/widget/widget.effect.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__ = __webpack_require__("../../../../../src/app/core/store/alert/alert.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__widget_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/widget/widget.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var WidgetEffects = (function () {
    function WidgetEffects(actions$, httpClient) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.getTimezoneList = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__widget_actions__["g" /* GET_TIMEZONE_LIST_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'get-timezone';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.get(apiUrl, config)
                .map(function (res) {
                if (res.status) {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_10__widget_actions__["h" /* GET_TIMEZONE_LIST_SUCCESS */],
                        payload: res.response
                    };
                }
                else {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                        payload: { message: res.message, type: 'danger' }
                    };
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.addWidget = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__widget_actions__["a" /* ADD_WIDGET_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'createWidgets';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__widget_actions__["b" /* ADD_WIDGET_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.getWidgetList = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__widget_actions__["i" /* GET_WIDGET_LIST_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'listWidgets';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .map(function (res) {
                if (res.status) {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_10__widget_actions__["j" /* GET_WIDGET_LIST_SUCCESS */],
                        payload: res.response
                    };
                }
                else {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                        payload: { message: res.message, type: 'danger' }
                    };
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.editWidget = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__widget_actions__["d" /* EDIT_WIDGET_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'updateWidgets';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_10__widget_actions__["e" /* EDIT_WIDGET_SUCCESS */],
                            payload: res.response
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
        this.widgetToEdit = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__widget_actions__["k" /* GET_WIDGET_TO_EDIT_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].API_BASE_URL + 'viewWidgets';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .map(function (res) {
                if (res.status) {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_10__widget_actions__["l" /* GET_WIDGET_TO_EDIT_SUCCESS */],
                        payload: res.response
                    };
                }
                else {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                        payload: { message: res.message, type: 'danger' }
                    };
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_9__store_alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error, type: 'danger' }
                });
            });
        });
    }
    return WidgetEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], WidgetEffects.prototype, "getTimezoneList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], WidgetEffects.prototype, "addWidget", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], WidgetEffects.prototype, "getWidgetList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], WidgetEffects.prototype, "editWidget", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], WidgetEffects.prototype, "widgetToEdit", void 0);
WidgetEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], WidgetEffects);

var _a, _b;
//# sourceMappingURL=widget.effect.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/store/widget/widget.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = widgetReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/widget/widget.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    info: null,
    list: [],
    toEdit: {},
    resetWidgetForm: false,
    timezoneList: []
};
function widgetReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (__WEBPACK_IMPORTED_MODULE_0__widget_actions__["b" /* ADD_WIDGET_SUCCESS */]):
            return __assign({}, state, { list: state.list.concat([action.payload]), resetWidgetForm: true });
        case (__WEBPACK_IMPORTED_MODULE_0__widget_actions__["j" /* GET_WIDGET_LIST_SUCCESS */]):
            return __assign({}, state, { list: action.payload });
        case (__WEBPACK_IMPORTED_MODULE_0__widget_actions__["h" /* GET_TIMEZONE_LIST_SUCCESS */]):
            return __assign({}, state, { timezoneList: action.payload.slice() });
        case (__WEBPACK_IMPORTED_MODULE_0__widget_actions__["p" /* RESET_WIDGET_FORM */]):
            return __assign({}, state, { resetWidgetForm: false });
        case (__WEBPACK_IMPORTED_MODULE_0__widget_actions__["l" /* GET_WIDGET_TO_EDIT_SUCCESS */]):
            return __assign({}, state, { toEdit: action.payload });
        default:
            return state;
    }
}
//# sourceMappingURL=widget.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/core/shared/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = (function () {
    /** Service injection */
    function DropdownDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.dh = false;
        this.clicked = false;
    }
    /** Function to be executed on mouse click */
    DropdownDirective.prototype.toggle = function () {
        if (this.el.nativeElement.classList.contains(this.dd)) {
            this.renderer.removeClass(this.el.nativeElement, this.dd);
            this.clicked = true;
        }
        else {
            this.renderer.addClass(this.el.nativeElement, this.dd);
            this.clicked = false;
        }
    };
    /** Function to be executed on mouse hover in */
    DropdownDirective.prototype.toggleOpen = function () {
        if (!this.dh) {
            this.renderer.addClass(this.el.nativeElement, this.dd);
        }
    };
    /** Function to be executed on mouse hover out */
    DropdownDirective.prototype.toggleClose = function () {
        if (!this.dh) {
            if (!this.clicked) {
                this.renderer.removeClass(this.el.nativeElement, this.dd);
            }
            this.renderer.removeClass(this.el.nativeElement, this.dd);
        }
    };
    return DropdownDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('appDropdown'),
    __metadata("design:type", String)
], DropdownDirective.prototype, "dd", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('disable-hover'),
    __metadata("design:type", Boolean)
], DropdownDirective.prototype, "dh", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toggle", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseover'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toggleOpen", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toggleClose", null);
DropdownDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appDropdown]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], DropdownDirective);

var _a, _b;
//# sourceMappingURL=dropdown.directive.js.map

/***/ }),

/***/ "../../../../../src/app/core/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_directive__ = __webpack_require__("../../../../../src/app/core/shared/dropdown.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__dropdown_directive__["a" /* DropdownDirective */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__dropdown_directive__["a" /* DropdownDirective */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/store/alert/alert.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ALERT_SHOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALERT_HIDE; });
/* unused harmony export AlertShow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AlertHide; });
var ALERT_SHOW = 'ALERT_SHOW';
var ALERT_HIDE = 'ALERT_HIDE';
var AlertShow = (function () {
    function AlertShow(payload) {
        this.payload = payload;
        this.type = ALERT_SHOW;
    }
    return AlertShow;
}());

var AlertHide = (function () {
    function AlertHide() {
        this.type = ALERT_HIDE;
    }
    return AlertHide;
}());

//# sourceMappingURL=alert.actions.js.map

/***/ }),

/***/ "../../../../../src/app/core/store/alert/alert.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = alertReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_actions__ = __webpack_require__("../../../../../src/app/core/store/alert/alert.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    message: '',
    show: false,
    type: ''
};
function alertReducer(state, actions) {
    if (state === void 0) { state = initialState; }
    switch (actions.type) {
        case __WEBPACK_IMPORTED_MODULE_0__alert_actions__["b" /* ALERT_SHOW */]:
            return __assign({}, state, { show: true, type: actions.payload.type, message: actions.payload.message });
        case __WEBPACK_IMPORTED_MODULE_0__alert_actions__["a" /* ALERT_HIDE */]:
            return __assign({}, state, { show: false, type: '', message: '' });
        default:
            return state;
    }
}
//# sourceMappingURL=alert.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/core/store/auth/auth.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SIGNUP_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return SIGNUP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SIGNUP_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SIGNIN_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SIGNIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SIGNOUT_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SIGNOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FORGOT_PASSWORD_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FORGOT_PASSWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return RESET_PASSWORD_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return RESET_PASSWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHECK_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHECK_TWILIO_ACTIVE_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHECK_TWILIO_ACTIVE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return SignUpAttempt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return SignUpSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SignInAttempt; });
/* unused harmony export SignInSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return SignOutAttempt; });
/* unused harmony export SignOutSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ForgotPasswordAttempt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ForgotPasswordSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ResetPasswordAttempt; });
/* unused harmony export ResetPasswordSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CheckToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CheckTwilioActiveAttempt; });
/* unused harmony export CheckTwilioActiveSuccess */
var SIGNUP_ATTEMPT = 'SIGNUP_ATTEMPT';
var SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
var SIGNUP_FAILED = 'SIGNUP_FAILED';
var SIGNIN_ATTEMPT = 'SIGNIN_ATTEMPT';
var SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
var SIGNOUT_ATTEMPT = 'SIGNOUT_ATTEMPT';
var SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
var FORGOT_PASSWORD_ATTEMPT = 'FORGOT_PASSWORD_ATTEMPT';
var FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
var RESET_PASSWORD_ATTEMPT = 'RESET_PASSWORD_ATTEMPT';
var RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
var CHECK_TOKEN = 'CHECK_TOKEN';
var CHECK_TWILIO_ACTIVE_ATTEMPT = 'CHECK_TWILIO_ACTIVE_ATTEMPT';
var CHECK_TWILIO_ACTIVE_SUCCESS = 'CHECK_TWILIO_ACTIVE_SUCCESS';
var SignUpAttempt = (function () {
    function SignUpAttempt(payload) {
        this.payload = payload;
        this.type = SIGNUP_ATTEMPT;
    }
    return SignUpAttempt;
}());

var SignUpSuccess = (function () {
    function SignUpSuccess(payload) {
        this.payload = payload;
        this.type = SIGNUP_SUCCESS;
    }
    return SignUpSuccess;
}());

var SignInAttempt = (function () {
    function SignInAttempt(payload) {
        this.payload = payload;
        this.type = SIGNIN_ATTEMPT;
    }
    return SignInAttempt;
}());

var SignInSuccess = (function () {
    function SignInSuccess(payload) {
        this.payload = payload;
        this.type = SIGNIN_SUCCESS;
    }
    return SignInSuccess;
}());

var SignOutAttempt = (function () {
    function SignOutAttempt() {
        this.type = SIGNOUT_ATTEMPT;
    }
    return SignOutAttempt;
}());

var SignOutSuccess = (function () {
    function SignOutSuccess() {
        this.type = SIGNOUT_SUCCESS;
    }
    return SignOutSuccess;
}());

var ForgotPasswordAttempt = (function () {
    function ForgotPasswordAttempt(payload) {
        this.payload = payload;
        this.type = FORGOT_PASSWORD_ATTEMPT;
    }
    return ForgotPasswordAttempt;
}());

var ForgotPasswordSuccess = (function () {
    function ForgotPasswordSuccess(payload) {
        this.payload = payload;
        this.type = FORGOT_PASSWORD_SUCCESS;
    }
    return ForgotPasswordSuccess;
}());

var ResetPasswordAttempt = (function () {
    function ResetPasswordAttempt(payload) {
        this.payload = payload;
        this.type = RESET_PASSWORD_ATTEMPT;
    }
    return ResetPasswordAttempt;
}());

var ResetPasswordSuccess = (function () {
    function ResetPasswordSuccess(payload) {
        this.payload = payload;
        this.type = RESET_PASSWORD_SUCCESS;
    }
    return ResetPasswordSuccess;
}());

var CheckToken = (function () {
    function CheckToken() {
        this.type = CHECK_TOKEN;
    }
    return CheckToken;
}());

var CheckTwilioActiveAttempt = (function () {
    function CheckTwilioActiveAttempt() {
        this.type = CHECK_TWILIO_ACTIVE_ATTEMPT;
    }
    return CheckTwilioActiveAttempt;
}());

var CheckTwilioActiveSuccess = (function () {
    function CheckTwilioActiveSuccess(payload) {
        this.payload = payload;
        this.type = CHECK_TWILIO_ACTIVE_SUCCESS;
    }
    return CheckTwilioActiveSuccess;
}());

//# sourceMappingURL=auth.actions.js.map

/***/ }),

/***/ "../../../../../src/app/core/store/auth/auth.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_retry__ = __webpack_require__("../../../../rxjs/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_actions__ = __webpack_require__("../../../../../src/app/core/store/auth/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__ = __webpack_require__("../../../../../src/app/core/store/alert/alert.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AuthEffects = (function () {
    function AuthEffects(actions$, httpClient, router, store) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.router = router;
        this.store = store;
        this.authSignUp = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__auth_actions__["q" /* SIGNUP_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_14__environments_environment__["a" /* environment */].API_BASE_URL + 'admin-registration';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_12__auth_actions__["s" /* SIGNUP_SUCCESS */],
                            payload: true
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_12__auth_actions__["r" /* SIGNUP_FAILED */],
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.message, type: 'danger' }
                });
            });
        });
        this.authSignIn = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__auth_actions__["m" /* SIGNIN_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_14__environments_environment__["a" /* environment */].API_BASE_URL + 'userlogin';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .map(function (res) {
                if (res.status) {
                    _this.router.navigate(['/dashboard']);
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_12__auth_actions__["n" /* SIGNIN_SUCCESS */],
                        payload: res.response
                    };
                }
                else {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                        payload: { message: res.message, type: 'danger' }
                    };
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error.message, type: 'danger' }
                });
            });
        });
        this.authForgotPassword = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__auth_actions__["f" /* FORGOT_PASSWORD_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_14__environments_environment__["a" /* environment */].API_BASE_URL + 'forget-password-mail';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    _this.router.navigate(['/sign-in']);
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_12__auth_actions__["g" /* FORGOT_PASSWORD_SUCCESS */],
                            payload: true
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        },
                        {
                            type: 'FORGOT_PASSWORD_FAILED',
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error.message, type: 'danger' }
                });
            });
        });
        this.authResetPassword = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__auth_actions__["j" /* RESET_PASSWORD_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_14__environments_environment__["a" /* environment */].API_BASE_URL + 'update-password';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.post(apiUrl, action.payload, config)
                .mergeMap(function (res) {
                if (res.status) {
                    _this.router.navigate(['/sign-in']);
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'success' }
                        },
                        {
                            type: __WEBPACK_IMPORTED_MODULE_12__auth_actions__["k" /* RESET_PASSWORD_SUCCESS */],
                            payload: true
                        }
                    ];
                }
                else {
                    return [
                        {
                            type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                            payload: { message: res.message, type: 'danger' }
                        },
                        {
                            type: 'RESET_PASSWORD_SUCCESS',
                        }
                    ];
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error.message, type: 'danger' }
                });
            });
        });
        this.authSignOut = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__auth_actions__["o" /* SIGNOUT_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_14__environments_environment__["a" /* environment */].API_BASE_URL + 'log-out';
            return _this.httpClient.post(apiUrl, null)
                .map(function (res) {
                if (res.status) {
                    _this.router.navigate(['/']);
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_12__auth_actions__["p" /* SIGNOUT_SUCCESS */]
                    };
                }
                else {
                    return {
                        type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                        payload: { message: res.message, type: 'danger' }
                    };
                }
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error.message, type: 'danger' }
                });
            });
        });
        this.twilioActive = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__auth_actions__["b" /* CHECK_TWILIO_ACTIVE_ATTEMPT */])
            .switchMap(function (action) {
            var apiUrl = __WEBPACK_IMPORTED_MODULE_14__environments_environment__["a" /* environment */].API_BASE_URL + 'validate-twilio-credentials';
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('X-Requested-With', 'XMLHttpRequest');
            var config = {
                headers: headers
            };
            return _this.httpClient.get(apiUrl, config)
                .map(function (res) {
                return {
                    type: __WEBPACK_IMPORTED_MODULE_12__auth_actions__["c" /* CHECK_TWILIO_ACTIVE_SUCCESS */],
                    payload: res.status
                };
            })
                .catch(function (err) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])({
                    type: __WEBPACK_IMPORTED_MODULE_13__alert_alert_actions__["b" /* ALERT_SHOW */],
                    payload: { message: err.error.message, type: 'danger' }
                });
            });
        });
    }
    return AuthEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "authSignUp", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "authSignIn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "authForgotPassword", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "authResetPassword", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "authSignOut", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "twilioActive", void 0);
AuthEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["h" /* Store */]) === "function" && _d || Object])
], AuthEffects);

var _a, _b, _c, _d;
//# sourceMappingURL=auth.effects.js.map

/***/ }),

/***/ "../../../../../src/app/core/store/auth/auth.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = authReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_actions__ = __webpack_require__("../../../../../src/app/core/store/auth/auth.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    token: null,
    registered: false,
    resetForgotPasswordForm: false,
    isAuthenticated: false,
    name: null,
    email: null,
    userId: null,
    userType: null,
    twilioIsActive: false,
    isSuperAdmin: false,
    isAdmin: false,
    isAgent: false
};
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (__WEBPACK_IMPORTED_MODULE_0__auth_actions__["s" /* SIGNUP_SUCCESS */]):
            return __assign({}, state, { registered: action.payload });
        case (__WEBPACK_IMPORTED_MODULE_0__auth_actions__["g" /* FORGOT_PASSWORD_SUCCESS */]):
            return __assign({}, state, { resetForgotPasswordForm: action.payload });
        case (__WEBPACK_IMPORTED_MODULE_0__auth_actions__["n" /* SIGNIN_SUCCESS */]):
            localStorage.setItem('data', JSON.stringify(action.payload));
            return __assign({}, state, { isAuthenticated: true, token: action.payload.userToken, userId: action.payload.userId, userType: action.payload.userType, isSuperAdmin: action.payload.userType == 1, isAdmin: action.payload.userType == 2, isAgent: action.payload.userType == 3, name: action.payload.firstName + ' ' + action.payload.lastName, email: action.payload.email });
        case (__WEBPACK_IMPORTED_MODULE_0__auth_actions__["p" /* SIGNOUT_SUCCESS */]):
            localStorage.removeItem('data');
            return __assign({}, state, { token: null, userId: null, userType: null, isSuperAdmin: false, isAdmin: false, isAgent: false, isAuthenticated: false });
        case (__WEBPACK_IMPORTED_MODULE_0__auth_actions__["a" /* CHECK_TOKEN */]):
            if (localStorage.getItem('data') !== null && localStorage.getItem('data') !== undefined) {
                var data = JSON.parse(localStorage.getItem('data'));
                return __assign({}, state, { isAuthenticated: true, token: data.userToken, userId: data.userId, userType: data.userType, isSuperAdmin: data.userType == 1, isAdmin: data.userType == 2, isAgent: data.userType == 3, name: data.firstName + ' ' + data.lastName, email: data.email });
            }
            else {
                return state;
            }
        case (__WEBPACK_IMPORTED_MODULE_0__auth_actions__["c" /* CHECK_TWILIO_ACTIVE_SUCCESS */]):
            return __assign({}, state, { twilioIsActive: action.payload });
        default:
            return state;
    }
}
//# sourceMappingURL=auth.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/core/store/core.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth_reducers__ = __webpack_require__("../../../../../src/app/core/store/auth/auth.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_alert_reducers__ = __webpack_require__("../../../../../src/app/core/store/alert/alert.reducers.ts");


var reducers = {
    auth: __WEBPACK_IMPORTED_MODULE_0__auth_auth_reducers__["a" /* authReducer */],
    alert: __WEBPACK_IMPORTED_MODULE_1__alert_alert_reducers__["a" /* alertReducer */]
};
//# sourceMappingURL=core.reducers.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    API_BASE_URL: 'http://3c.local/api/v1/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map