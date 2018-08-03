webpackJsonp(["chats.module"],{

/***/ "../../../../../src/app/core/layout/inner-pages/chats/chats-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_chat_list_chat_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/list-chat/list-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_agent_list_agent_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/list-agent/list-agent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_list_contact_list_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/contact-list/contact-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'list-agent', component: __WEBPACK_IMPORTED_MODULE_3__list_agent_list_agent_component__["a" /* ListAgentComponent */], data: { chatMode: true } },
    { path: 'list-chat/:id', component: __WEBPACK_IMPORTED_MODULE_2__list_chat_list_chat_component__["a" /* ListChatComponent */] },
    { path: 'list-agents-contacts', component: __WEBPACK_IMPORTED_MODULE_3__list_agent_list_agent_component__["a" /* ListAgentComponent */], data: { chatMode: false } },
    { path: 'contact-list/:id', component: __WEBPACK_IMPORTED_MODULE_4__contact_list_contact_list_component__["a" /* ContactListComponent */] },
    { path: '**', redirectTo: 'list-agent' }
];
var ChatsRoutingModule = (function () {
    function ChatsRoutingModule() {
    }
    return ChatsRoutingModule;
}());
ChatsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], ChatsRoutingModule);

//# sourceMappingURL=chats-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/chats.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsModule", function() { return ChatsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chats_routing_module__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/chats-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_chat_list_chat_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/list-chat/list-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_agent_list_agent_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/list-agent/list-agent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_list_contact_list_component__ = __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/contact-list/contact-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/core/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ChatsModule = (function () {
    function ChatsModule() {
    }
    return ChatsModule;
}());
ChatsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__chats_routing_module__["a" /* ChatsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_9_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_order_pipe__["a" /* OrderModule */],
            __WEBPACK_IMPORTED_MODULE_11_ngx_pagination__["a" /* NgxPaginationModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__list_chat_list_chat_component__["a" /* ListChatComponent */],
            __WEBPACK_IMPORTED_MODULE_5__list_agent_list_agent_component__["a" /* ListAgentComponent */],
            __WEBPACK_IMPORTED_MODULE_6__contact_list_contact_list_component__["a" /* ContactListComponent */]
        ]
    })
], ChatsModule);

//# sourceMappingURL=chats.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/contact-list/contact-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/contact-list/contact-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <section class=\"content-header\">\n    <h1>Contact List</h1>\n    <ol class=\"breadcrumb\">\n      <li><a routerLink=\"/dashboard\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n      <li><a routerLink=\"/chats/list-agents-contacts\">Contact</a></li>\n      <li class=\"active\"><a href=\"javascript:void(0)\">View</a></li>\n    </ol>\n  </section>\n  <section class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"box\">\n          <div class=\"box-header\">\n            <h3 class=\"box-title\">Contact List</h3>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body\">\n            <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\"><div class=\"row\"><div class=\"col-sm-6\"> Search : <input [(ngModel)]=\"term\" placeholder=\"keyword\"> </div><div class=\"col-sm-6\"></div></div><div class=\"row\"><div class=\"col-sm-12\">\n              <table id=\"contactListTable\" class=\"table table-bordered table-hover dataTable\" role=\"grid\" aria-describedby=\"example2_info\">\n              <thead>\n              <tr role=\"row\">\n                <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\">#</th>\n                <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\" class=\"mdl-data-table__cell--non-numeric\">Client Name </th>\n                <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\">Email</th>\n                <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\">Phone</th>\n              </tr>\n              </thead>\n              <tbody>\n                <tr role=\"row\" class=\"odd\" *ngFor=\"let item of (chatState | async).contactList | filter : term | paginate: { itemsPerPage: 10, currentPage: page }; let i = index\">\n                <td>{{i}}</td>\n                <td>{{item.client_info.client_name.name}}</td>\n                <td>{{item.client_info.client_name.email}}</td>\n                <td>{{item.client_info.client_name.phone}}</td>\n\n              </tr>\n              </tbody>\n            </table>\n              <div class=\"row\">\n                <pagination-controls class=\"older_post_text\"\n                                     (pageChange)=\"page=$event\"\n                                     maxSize=\"9\"\n                                     directionLinks=\"true\"\n                                     autoHide=\"true\"\n                                     previousLabel=\"\"\n                                     nextLabel=\"\"\n                                     screenReaderPaginationLabel=\"\"\n                                     screenReaderPageLabel=\"page\"\n                                     screenReaderCurrentLabel=\"You're on page\">\n                </pagination-controls>\n              </div>\n            </div>\n            </div>\n            </div>\n          </div>\n          <!-- /.box-body -->\n        </div>\n        <!-- /.box -->\n        <!--<div class=\"msg-popup\">-->\n          <!--<p>This is a success msg!</p>-->\n        <!--</div>-->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/contact-list/contact-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_chat_chat_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/chat/chat.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/ngx-order-pipe.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactListComponent = (function () {
    /** Service injection */
    function ContactListComponent(store, activatedRoute, router, orderPipe) {
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.orderPipe = orderPipe;
        this.order = 'info.name';
        this.reverse = false;
        this.sortedCollection = orderPipe.transform(this.chatState, 'info.name');
    }
    /** Function to be executed when component initializes */
    ContactListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page = 1;
        this.chatState = this.store.select('afterLogin')
            .map(function (data) { return data.chat; });
        this.activatedRoute.params
            .subscribe(function (id) {
            _this.agentId = _this.activatedRoute.snapshot.params['id'];
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_chat_chat_actions__["v" /* GetContactListAttempt */]({ agentId: id }));
        });
    };
    /** Function to Edit Agent */
    ContactListComponent.prototype.onViewChat = function (id) {
        this.router.navigate(['chats/list-chat/', id]);
    };
    /**
     * Function for ordering the table
     * @param {string} value
     */
    ContactListComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    return ContactListComponent;
}());
ContactListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chats-contact-list',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/contact-list/contact-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/contact-list/contact-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_order_pipe__["b" /* OrderPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_order_pipe__["b" /* OrderPipe */]) === "function" && _d || Object])
], ContactListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=contact-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/list-agent/list-agent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/list-agent/list-agent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <section class=\"content-header\">\n    <h1>Agent List</h1>\n    <ol class=\"breadcrumb\">\n      <li><a routerLink=\"/dashboard\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n      <li *ngIf=\"chatMode\"><a href=\"javascript:void(0)\">Chats</a></li>\n      <li *ngIf=\"!chatMode\"><a href=\"javascript:void(0)\">Contact</a></li>\n      <li class=\"active\"><a href=\"javascript:void(0)\">List</a></li>\n    </ol>\n  </section>\n  <section class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"box\">\n          <div class=\"box-header\">\n            <h3 class=\"box-title\">Agent List</h3>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body\">\n            <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\n              <div class=\"row\">\n                <div class=\"col-sm-6\"> Search : <input [(ngModel)]=\"term\" placeholder=\"keyword\"> </div>\n                <div class=\"col-sm-6\"></div>\n              </div>\n              <div class=\"row\"><div class=\"col-sm-12\">\n              <table id=\"chatList\" class=\"table table-bordered table-hover dataTable\" role=\"grid\" aria-describedby=\"example2_info\">\n              <thead>\n              <tr role=\"row\">\n                <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\">#</th>\n                <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\" class=\"mdl-data-table__cell--non-numeric\">First Name </th>\n                <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\" class=\"mdl-data-table__cell--non-numeric\" >Last Name </th>\n                <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\" aria-label=\"Engine version: activate to sort column ascending\">Email</th>\n                <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\" aria-label=\"CSS grade: activate to sort column ascending\">Phone</th>\n                <th tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\" class=\"mdl-data-table__cell--non-numeric\">Department </th>\n                <th  tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\" aria-label=\"CSS grade: activate to sort column ascending\">Action</th>\n              </tr>\n              </thead>\n              <tbody>\n                <tr role=\"row\" class=\"odd\" *ngFor=\"let item of (chatState | async).agentList | filter : term | paginate: { itemsPerPage: 10, currentPage: page }; let i = index\">\n                <td>{{i+1}}</td>\n                <td>{{item.first_name}}</td>\n                <td>{{item.last_name}}</td>\n                <td>{{item.email}}</td>\n                <td>{{item.phone}}</td>\n                <td>{{item.department_agent_mapping.department_details.department_name}}</td>\n                <td>\n                  <!-- Single button -->\n                  <div class=\"btn-group\" >\n                    <button type=\"button\" class=\"btn btn-default\" aria-haspopup=\"true\" aria-expanded=\"false\" *ngIf=\"chatMode\" (click)=\"onViewChat(item.id)\">\n                      View Chats\n                    </button>\n                    <button type=\"button\" class=\"btn btn-default\" aria-haspopup=\"true\" aria-expanded=\"false\" *ngIf=\"!chatMode\" (click)=\"onViewContact(item.id)\">\n                      View Contact List\n                    </button>\n                  </div>\n                </td>\n              </tr>\n              </tbody>\n            </table>\n                <div class=\"row\">\n                  <pagination-controls class=\"older_post_text\"\n                                       (pageChange)=\"page=$event\"\n                                       maxSize=\"9\"\n                                       directionLinks=\"true\"\n                                       autoHide=\"true\"\n                                       previousLabel=\"\"\n                                       nextLabel=\"\"\n                                       screenReaderPaginationLabel=\"\"\n                                       screenReaderPageLabel=\"page\"\n                                       screenReaderCurrentLabel=\"You're on page\">\n                  </pagination-controls>\n                </div>\n            </div>\n            </div>\n\n            </div>\n          </div>\n          <!-- /.box-body -->\n        </div>\n        <!-- /.box -->\n        <!--<div class=\"msg-popup\">-->\n          <!--<p>This is a success msg!</p>-->\n        <!--</div>-->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/list-agent/list-agent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListAgentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_chat_chat_actions__ = __webpack_require__("../../../../../src/app/core/layout/store/chat/chat.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/ngx-order-pipe.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListAgentComponent = (function () {
    /** Service injection */
    function ListAgentComponent(store, activatedRoute, router, orderPipe) {
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.orderPipe = orderPipe;
        this.chatMode = false;
        this.order = 'info.name';
        this.reverse = false;
        this.sortedCollection = orderPipe.transform(this.chatState, 'info.name');
    }
    /** Function to be executed when component initializes */
    ListAgentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page = 1;
        this.chatState = this.store.select('afterLogin')
            .map(function (data) { return data.chat; });
        this.activatedRoute.data
            .subscribe(function (data) {
            _this.chatMode = data['chatMode'];
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_chat_chat_actions__["t" /* GetAgentListAttempt */]());
        });
    };
    /** Function to View Chats of Agent */
    ListAgentComponent.prototype.onViewChat = function (id) {
        this.router.navigate(['chats/list-chat/', id]);
    };
    /** Function to View Contact List of Agent */
    ListAgentComponent.prototype.onViewContact = function (id) {
        this.router.navigate(['chats/contact-list/', id]);
    };
    /**
     * Function for ordering the table
     * @param {string} value
     */
    ListAgentComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    return ListAgentComponent;
}());
ListAgentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chats-list-agent',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/list-agent/list-agent.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/list-agent/list-agent.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_order_pipe__["b" /* OrderPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_order_pipe__["b" /* OrderPipe */]) === "function" && _d || Object])
], ListAgentComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=list-agent.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/list-chat/list-chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\n    background: #fff;\n    text-align: center;\n    margin: 0;\n    padding: 15px;\n    color: #000;\n    font-size: 20px;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    box-shadow: 1px 1px 1px 1px #ebebeb;\n    -webkit-box-shadow: 1px 1px 1px 1px #ebebeb;\n    -moz-box-shadow: 1px 1px 1px 1px #ebebeb;\n}\n.box{\n    margin-top: 5px;\n    border: 0;\n}\n.chat-list{\n    display: inline-block;\n    width: 100%;\n}\n.chat-list ul{\n    margin: 5px 0 0;\n    padding: 0;\n    list-style-type: none;\n    background: #fff;\n    max-height: 705px;\n    overflow-y: auto;\n    border-radius: 3px;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n}\n.chat-list ul li{\n    display: inline-block;\n    width: 100%;\n    padding: 15px 0;\n    border-bottom: 1px solid #f4f4f4;\n    cursor: pointer;\n    vertical-align: top;\n}\n.chat-list ul li:last-child{\n    border: 0;\n}\n.chat-list ul li:hover{\n    background: #3c8dbc;\n    box-shadow: 1px 1px 1px 1px #666;\n    border-bottom: 1px solid #3c8dbc;\n}\n.chat-head img{\n    border-radius: 50%;\n    margin: auto;\n    width: 40px;\n    height: 40px;\n}\n.chat-content h3{\n    margin: 0 0 5px;\n    font-size: 16px;\n    font-weight: bold;\n    color: #3c8dbc;\n}\n.chat-content h3 span{\n    float: right;\n    font-weight: normal;\n    font-size: 12px;\n    color: #000;\n}\n.chat-list ul li:hover h3{\n    color: #fff;\n}\n.chat-list ul li:hover h3 span{\n    color: #fff;\n}\n.chat-list ul li:hover p{\n    color: #fff;\n}\n.chat-box{\n    padding: 20px;\n}\n.receiver, .sender{\n    display: inline-block;\n    width: 100%;\n    padding: 20px 0;\n}\n.sender .chat-content{\n    text-align: right;\n    border-radius: 5px;\n}\n.receiver .chat-content{\n    background: #3c8dbc;\n    color: #fff;\n    padding: 15px;\n    border-radius: 5px;\n}\n.sender .chat-content p, .receiver .chat-content p {\n    margin: 0;\n}\n.direct-chat-msg {\n    margin-bottom: 20px;\n}\n.direct-chat-messages {\n    height: 500px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/list-chat/list-chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <section class=\"content-header\">\n    <h1>Previous Chats</h1>\n    <ol class=\"breadcrumb\">\n      <li><a routerLink=\"/dashboard\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n      <li><a routerLink=\"/chats/list-agent\">Chats</a></li>\n      <li class=\"active\"><a href=\"javascript:void(0)\">View</a></li>\n    </ol>\n  </section>\n  <section class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"box\">\n          <div class=\"col-xs-12\">\n            <div class=\"row\">\n              <h2>Messages</h2>\n            </div>\n            <div class=\"row\" *ngIf=\"!!(showChats() | async).length\">\n              <div class=\"col-md-3 col-sm-3\">\n                <div class=\"row\">\n                  <div class=\"chat-list\">\n                    <ul>\n                      <ng-container *ngFor=\"let contact of (chatState | async).chatList; let i = index;\">\n                        <li [ngClass]=\"{ active : currentChatIndex == i}\"\n                            (click)=\"changeCurrentChat(i)\">\n                          <div class=\"col-md-2\">\n                            <div class=\"chat-head row\">\n                              <img src=\"../../../../assets/img/avatar5.png\" class=\"img-responsive\">\n                            </div>\n                          </div>\n                          <div class=\"col-md-10\">\n                            <div class=\"chat-content\">\n                              <h3>{{contact.client_name}} <span>{{contact.chat_time?.date | amFromUtc | amLocal | amTimeAgo}}</span> </h3>\n                              <p>{{contact.name}}</p>\n                            </div>\n                          </div>\n                        </li>\n                      </ng-container>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-9 col-sm-9\">\n                <div class=\"row\">\n                  <div class=\"box box-primary direct-chat direct-chat-primary\">\n                    <div class=\"box-body\">\n                      <!-- Conversations are loaded here -->\n                      <div class=\"direct-chat-messages\">\n                        <!-- Message. Default to the left -->\n                        <div class=\"direct-chat-msg\" [ngClass]=\"{ right: chat.direction == 2 }\" *ngFor=\"let chat of (chatState | async).chatList[currentChatIndex]?.chats\">\n                          <div class=\"direct-chat-info clearfix\">\n                            <span class=\"direct-chat-name\" [ngClass]=\"chat.direction == 2 ? 'pull-right' : 'pull-left'\">{{chat.user}}</span>\n                            <span class=\"direct-chat-timestamp\" [ngClass]=\"chat.direction == 1 ? 'pull-right' : 'pull-left'\"> {{chat.created_at.date  | amFromUtc | amLocal | amDateFormat:'MMMM Do YYYY, h:mm:ss a'}} </span>\n                          </div>\n                          <img class=\"direct-chat-img\" [src]=\"chat.direction == 2 ?  '../../../../assets/img/user1-128x128.jpg' : '../../../../assets/img/user3-128x128.jpg'\" alt=\"Message User Image\"><!-- /.direct-chat-img -->\n                          <div class=\"direct-chat-text\">\n                            {{chat.message}}\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\" *ngIf=\"!(showChats() | async).length\">\n              <div class=\"box box-primary\">\n                <div class=\"box-body\" >\n                  <div class=\"col-md-9 col-sm-9\">\n                    <div class=\"col-md-5 col-sm-5\">\n                      <h4>No chats found at the moment!</h4>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n        <!-- /.box -->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n  </section>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/core/layout/inner-pages/chats/list-chat/list-chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
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




var ListChatComponent = (function () {
    /** Service injection */
    function ListChatComponent(store, activatedRoute, router) {
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.currentChatIndex = 0;
    }
    ListChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatState = this.store.select('afterLogin')
            .map(function (data) { return data.chat; });
        this.activatedRoute.params
            .subscribe(function (id) {
            _this.agentId = _this.activatedRoute.snapshot.params['id'];
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_chat_chat_actions__["u" /* GetChatListAttempt */]({ agentId: id }));
        });
    };
    ListChatComponent.prototype.changeCurrentChat = function (i) {
        this.currentChatIndex = i;
    };
    ListChatComponent.prototype.showChats = function () {
        return this.store.select('afterLogin')
            .map(function (data) { return data.chat; })
            .map(function (chats) { return chats.chatList; });
    };
    return ListChatComponent;
}());
ListChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list-chat',
        template: __webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/list-chat/list-chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/layout/inner-pages/chats/list-chat/list-chat.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ListChatComponent);

var _a, _b, _c;
//# sourceMappingURL=list-chat.component.js.map

/***/ })

});
//# sourceMappingURL=chats.module.chunk.js.map