(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
// {path: '', redirectTo: '/login', pathMatch: 'full'},
// {path: 'login', component: LoginComponent},
// {path: 'relatorio', component: RelatoriobackupComponent},
// { path: '**', redirectTo: '/login' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _relatoriobackup_relatoriobackup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relatoriobackup/relatoriobackup.component */ "./src/app/relatoriobackup/relatoriobackup.component.ts");




class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'win-app';
    }
    // tslint:disable-next-line: typedef
    ngOnInit() {
        createServer();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["id", "page"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-relatoriobackup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_relatoriobackup_relatoriobackup_component__WEBPACK_IMPORTED_MODULE_2__["RelatoriobackupComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _relatoriobackup_relatoriobackup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./relatoriobackup/relatoriobackup.component */ "./src/app/relatoriobackup/relatoriobackup.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _relatoriobackup_relatoriobackup_component__WEBPACK_IMPORTED_MODULE_9__["RelatoriobackupComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]], exports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _relatoriobackup_relatoriobackup_component__WEBPACK_IMPORTED_MODULE_9__["RelatoriobackupComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production }),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
                exports: [
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/relatoriobackup/relatoriobackup.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/relatoriobackup/relatoriobackup.component.ts ***!
  \**************************************************************/
/*! exports provided: RelatoriobackupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatoriobackupComponent", function() { return RelatoriobackupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var pdfmake_build_pdfmake_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pdfmake/build/pdfmake.js */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pdfmake_build_vfs_fonts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/vfs_fonts.js */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_home_service_home_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/home-service/home-service.service */ "./src/app/services/home-service/home-service.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function RelatoriobackupComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "System Recovery");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RelatoriobackupComponent_div_26_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.models = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Anota\u00E7\u00F5es Recovery");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RelatoriobackupComponent_div_26_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); return _r6.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Calend\u00E1rio Recovery");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.models);
} }
function RelatoriobackupComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Nome Busca");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Nome Alternativo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RelatoriobackupComponent_div_60_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RelatoriobackupComponent_div_60_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const udp_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.editaFita(udp_r10, "classSuccess", "classeU"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RelatoriobackupComponent_div_60_div_7_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const udp_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.editaFita(udp_r10, "classFailed", "classeU"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const udp_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", udp_r10.classeU === "classFailed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", udp_r10.classeU === "classSuccess");
} }
function RelatoriobackupComponent_div_60_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const udp_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](udp_r10.classeU);
} }
function RelatoriobackupComponent_div_60_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RelatoriobackupComponent_div_60_div_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const udp_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.editaFita(udp_r10, "classSuccess", "classeF"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RelatoriobackupComponent_div_60_div_10_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const udp_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.editaFita(udp_r10, "classFailed", "classeF"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const udp_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", udp_r10.classeF === "classFailed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", udp_r10.classeF === "classSuccess");
} }
function RelatoriobackupComponent_div_60_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const udp_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](udp_r10.classeF);
} }
function RelatoriobackupComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RelatoriobackupComponent_div_60_div_7_Template, 3, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, RelatoriobackupComponent_div_60_div_8_Template, 2, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, RelatoriobackupComponent_div_60_div_10_Template, 3, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RelatoriobackupComponent_div_60_div_11_Template, 2, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RelatoriobackupComponent_div_60_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const udp_r10 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.editaFita(udp_r10, "classSuccess", "classeR"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const udp_r10 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](udp_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.manual.udp === "- Manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.manual.udp !== "- Manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.manual.fita === "- Manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.manual.fita !== "- Manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](udp_r10.classeR);
} }
function RelatoriobackupComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RelatoriobackupComponent_div_64_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const udps_r31 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.editaTel(udps_r31, "classSuccess"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RelatoriobackupComponent_div_64_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const udps_r31 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.editaTel(udps_r31, "classFailed"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const udps_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](udps_r31.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", udps_r31.classe === "classFailed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", udps_r31.classe === "classSuccess");
} }
pdfmake_build_pdfmake_js__WEBPACK_IMPORTED_MODULE_3__["vfs"] = pdfmake_build_vfs_fonts_js__WEBPACK_IMPORTED_MODULE_4__["pdfMake"].vfs;
class RelatoriobackupComponent {
    constructor(toaster, homeservice) {
        this.toaster = toaster;
        this.homeservice = homeservice;
        this.manual = { udp: ' ', fita: ' ' };
        this.cads = { valor: null, data: null, anotacao: null, anotacao2: null, datas: null, anotacoes: null, nomebusca: null, nomelternativo: null };
        this.gerar = true;
        this.corrigido = false;
        this.hiddenRecovery = true;
        this.hiddenCadastro = true;
        this.serverList = [];
        this.serverList3 = [];
        this.serverList2 = [];
        this.telefone = [
            { name: 'TELEFONE', classe: 'classWaiting' },
        ];
    }
    // tslint:disable-next-line: typedef
    ngOnInit() {
        this.getServers();
        this.Formcad();
    }
    getServers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dados = yield this.homeservice.getServers();
            if (dados) {
                const lista = JSON.parse(JSON.stringify(dados));
                lista.forEach(element => {
                    element.classeU = 'classWaiting';
                    element.classeF = 'classWaiting';
                    element.classeR = 'classWaiting';
                });
                this.serverList2 = lista;
                this.serverList2.forEach(element => {
                    element && element.name ? this.serverList.push(element.name) : '';
                    element && element.altname ? this.serverList3.push(element.altname) : '';
                });
            }
        });
    }
    cadastrar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.cad.controls.nomebusca.value && this.cad.controls.nomelternativo.value) {
                const retorno = yield this.homeservice.insertEscopo({ name: this.cad.controls.nomebusca.value, altname: this.cad.controls.nomelternativo.value });
                if (retorno && (retorno['rowCount'] > 0)) {
                    this.toaster.success('Backup cadastrado com sucesso!', '');
                    setTimeout(() => {
                        this.cad.patchValue({ nomebusca: null, nomelternativo: null });
                        this.getServers();
                    }, 100);
                }
                else {
                    this.toaster.error('Erro ao cadastrar!', '');
                }
            }
            else {
                this.toaster.info('Preencha os campos de Nome de Busca e Alternativo para poder cadastrar!', '');
            }
        });
    }
    // tslint:disable-next-line: typedef
    separa(data) {
        console.log(data);
        let texto = data.valor.split(' ');
        for (let index = 0; index < this.serverList.length; index++) {
            if (texto.find(f => f === this.serverList[index])) {
                const index2 = this.serverList2.findIndex(f => f.name === this.serverList[index]);
                if (texto.find(f => f === 'concluido')) {
                    this.serverList2[index2].classeU = 'classSuccess';
                    this.toaster.success(this.serverList3[index] + ' DEU CERTO', 'MENSAGEM');
                }
                else if (texto.find(f => f === 'falha')) {
                    this.serverList2[index2].classeU = 'classFailed';
                }
                else {
                    this.toaster.error('BACKUP É DE OUTRA DATA!', 'MENSAGEM');
                }
                this.verificaCompleto();
            }
        }
        this.cad.patchValue({ valor: null });
        console.log(texto);
    }
    verificaCompleto() {
        if (!(this.serverList2.find(f => f.classeF === 'classWaiting' || f.classeU === 'classWaiting')) && !(this.telefone[0].classe === 'classWaiting') && this.cad.controls.data.value) {
            this.gerar = false;
        }
        else {
            this.gerar = true;
        }
    }
    limparDados() {
        this.serverList2.forEach(element => {
            element.classeU = 'classWaiting';
            element.classeF = 'classWaiting';
            element.classeR = 'classWaiting';
        });
        this.telefone[0].classe = 'classWaiting';
        this.verificaCompleto();
        this.cad.patchValue({ data: null, anotacao: null, anotacao2: null });
    }
    // tslint:disable-next-line: typedef
    editaFita(udp, valor, classe) {
        console.log(udp);
        if (this.corrigido) {
            const index = this.serverList2.findIndex(f => f.name === udp.name);
            this.serverList2[index][classe] = 'classWaiting';
            this.verificaCompleto();
        }
        else {
            const index = this.serverList2.findIndex(f => f.name === udp.name);
            this.serverList2[index][classe] = valor;
            this.verificaCompleto();
        }
    }
    corrige() {
        if (this.corrigido) {
            this.corrigido = false;
            document.getElementById('corrige').setAttribute('class', 'btn btn-outline-secondary buttonClass3');
        }
        else {
            this.corrigido = true;
            document.getElementById('corrige').setAttribute('class', 'btn btn-outline-secondary buttonClassActivated');
        }
    }
    minimiza() {
        this.hiddenRecovery = !this.hiddenRecovery;
        if (!this.hiddenRecovery) {
            document.getElementById('minimiza').setAttribute('class', 'btn btn-outline-secondary buttonClass3');
        }
        else {
            document.getElementById('minimiza').setAttribute('class', 'btn btn-outline-secondary buttonClassActivated');
        }
    }
    minimizaCadastro() {
        this.hiddenCadastro = !this.hiddenCadastro;
        if (!this.hiddenCadastro) {
            document.getElementById('cadastro').setAttribute('class', 'btn btn-outline-secondary buttonClassActivated');
        }
        else {
            document.getElementById('cadastro').setAttribute('class', 'btn btn-outline-secondary buttonClass3');
        }
    }
    manualChange(param) {
        console.log('caiu manueakl');
        if (this.manual[param].length > 1) {
            this.manual[param] = ' ';
        }
        else {
            this.manual[param] = '- Manual';
        }
    }
    editaTel(udp, valor) {
        if (this.corrigido) {
            const index = this.telefone.findIndex(f => f.name === udp.name);
            this.telefone[index].classe = 'classWaiting';
            this.verificaCompleto();
        }
        else {
            const index = this.telefone.findIndex(f => f.name === udp.name);
            this.telefone[index].classe = valor;
            this.verificaCompleto();
        }
    }
    gerarPDF() {
        pdfmake_build_pdfmake_js__WEBPACK_IMPORTED_MODULE_3__["createPdf"](this.montaPDF(this.serverList2, this.cad.controls.data.value, this.telefone, this.cad.controls.anotacao.value, this.cad.controls.anotacao2.value, this.cad.value)).print();
    }
    formatadata(data) {
        if (data) {
            return (data.day < 10 ? '0' + data.day : data.day) + '/' + (data.month < 10 ? '0' + data.month : data.month) + '/' + data.year;
        }
    }
    formatadata2020(data) {
        return data.year + '-' + (data.month < 10 ? '0' + data.month : data.month) + data.day;
    }
    Formcad() {
        this.cad = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            valor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.cads.valor, disabled: false }),
            data: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.cads.data, disabled: false }),
            anotacao: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.cads.anotacao, disabled: false }),
            anotacao2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.cads.anotacao2, disabled: false }),
            datas: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.cads.datas, disabled: false }),
            anotacoes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.cads.anotacoes, disabled: false }),
            nomebusca: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.cads.nomebusca, disabled: false }),
            nomelternativo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.cads.nomelternativo, disabled: false })
        });
    }
    montaPDF(listaTipos, data, telefone, observacao, observacao2, cad) {
        let pdf = {
            content: [
                {
                    style: 'tableExample',
                    table: {
                        widths: ['*'],
                        body: [
                            [
                                {
                                    text: 'CONTROLE DIÁRIO',
                                    alignment: 'center'
                                }
                            ],
                            [
                                {
                                    text: 'LISTA DE NOMES - BACKUP ' + (data.day < 10 ? '0' + data.day : data.day) + '/' + (data.month < 10 ? '0' + data.month : data.month) + '/' + data.year + '.',
                                    alignment: 'center'
                                }
                            ],
                            [
                                {
                                    text: observacao ? observacao : '',
                                    alignment: 'center'
                                }
                            ],
                        ]
                    }
                },
                {
                    style: 'tableExample2',
                    table: {
                        widths: ['*', 70, 70],
                        body: this.formataServer(listaTipos)
                    }
                },
                {
                    style: 'tableExample3',
                    table: {
                        widths: ['*'],
                        heights: ['*', 20, '*'],
                        body: [
                            [
                                {
                                    text: 'VISTO',
                                    alignment: 'center'
                                }
                            ],
                            [
                                {
                                    border: [true, true, true, false],
                                    text: '',
                                }
                            ],
                            [
                                {
                                    border: [true, false, true, true],
                                    text: 'ASSINATURA               ______________________________________________________________________',
                                    alignment: 'left'
                                }
                            ],
                        ]
                    }
                },
                {
                    style: 'tableExample',
                    table: {
                        widths: ['*'],
                        body: [
                            [
                                {
                                    text: 'CONTROLE DE TELEFONE',
                                    alignment: 'center'
                                }
                            ],
                            [
                                {
                                    text: 'DATA: ' + (data.day < 10 ? '0' + data.day : data.day) + '/' + (data.month < 10 ? '0' + data.month : data.month) + '/' + data.year,
                                    alignment: 'center'
                                }
                            ],
                            [
                                {
                                    text: observacao2 ? observacao2 : '',
                                    alignment: 'center'
                                }
                            ],
                        ]
                    }
                },
                {
                    style: 'tableExample2',
                    table: {
                        widths: ['*', 70],
                        body: [
                            [
                                {
                                    text: 'Descrição',
                                    fillColor: '#eeeeee'
                                },
                                {
                                    text: 'Situação',
                                    fillColor: '#eeeeee'
                                }
                            ],
                            [
                                {
                                    text: 'S_TEL',
                                },
                                {
                                    text: '',
                                    fillColor: (telefone[0].classe === 'classSuccess' ? '#2b9600' : '#ff0000')
                                }
                            ]
                        ]
                    }
                },
                {
                    style: 'tableExample3',
                    table: {
                        widths: ['*'],
                        heights: ['*', 20, '*'],
                        body: [
                            [
                                {
                                    text: 'VISTO',
                                    alignment: 'center'
                                }
                            ],
                            [
                                {
                                    border: [true, true, true, false],
                                    text: '',
                                }
                            ],
                            [
                                {
                                    border: [true, false, true, true],
                                    text: 'ASSINATURA               ______________________________________________________________________',
                                    alignment: 'left'
                                }
                            ],
                        ]
                    }
                }
            ],
            styles: {
                tableExample: {
                    margin: [0, 5, 0, 0],
                    fontSize: 10,
                    fillColor: '#eeeeee'
                },
                tableExample2: {
                    margin: [0, 0, 0, 0],
                    fontSize: 10,
                },
                tableExample3: {
                    margin: [0, 3, 0, 15],
                    fontSize: 10,
                    fillColor: '#eeeeee'
                },
            },
            defaultStyle: {
            // alignment: 'justify'
            }
        };
        if (cad.datas && listaTipos.find(element => element.classeR === 'classSuccess')) {
            pdf.content.push({
                style: 'tableExample',
                table: {
                    widths: ['*'],
                    body: [
                        [
                            {
                                text: 'CONTROLE RECUPERAÇÃO',
                                alignment: 'center'
                            }
                        ],
                        [
                            {
                                text: 'DATA: ' + (cad.datas.day < 10 ? '0' + cad.datas.day : cad.datas.day) + '/' + (cad.datas.month < 10 ? '0' + cad.datas.month : cad.datas.month) + '/' + cad.datas.year,
                                alignment: 'center'
                            }
                        ],
                        [
                            {
                                text: cad.anotacoes ? cad.anotacoes : '',
                                alignment: 'center'
                            }
                        ],
                    ]
                }
            });
            pdf.content.push({
                style: 'tableExample2',
                table: {
                    widths: ['*', 70],
                    body: this.formataServerRecovery(listaTipos.filter(element => element.classeR === 'classSuccess'))
                }
            });
            pdf.content.push({
                style: 'tableExample3',
                table: {
                    widths: ['*'],
                    heights: ['*', 20, '*'],
                    body: [
                        [
                            {
                                text: 'VISTO',
                                alignment: 'center'
                            }
                        ],
                        [
                            {
                                border: [true, true, true, false],
                                text: '',
                            }
                        ],
                        [
                            {
                                border: [true, false, true, true],
                                text: 'ASSINATURA               ______________________________________________________________________',
                                alignment: 'left'
                            }
                        ],
                    ]
                }
            });
        }
        return pdf;
    }
    formataServer(listaTipos) {
        let listas = [];
        listas.push([
            {
                text: 'Descrição',
                fillColor: '#eeeeee'
            },
            {
                text: 'Situação TIPO2',
                fillColor: '#eeeeee'
            },
            {
                text: 'Situação TIPO1',
                fillColor: '#eeeeee'
            }
        ]);
        for (let index = 0; index < listaTipos.length; index++) {
            const array = [
                { text: listaTipos[index].name },
                { text: '', fillColor: (listaTipos[index].classeU === 'classSuccess' ? '#2b9600' : '#ff0000') },
                { text: '', fillColor: (listaTipos[index].classeF === 'classSuccess' ? '#2b9600' : '#ff0000') },
            ];
            listas.push(array);
        }
        return listas;
    }
    formataServerRecovery(listaTipos) {
        let listas = [];
        listas.push([
            {
                text: 'Descrição',
                fillColor: '#eeeeee'
            },
            {
                text: 'Situação',
                fillColor: '#eeeeee'
            }
        ]);
        for (let index = 0; index < listaTipos.length; index++) {
            const array = [
                { text: listaTipos[index].name },
                { text: '', fillColor: (listaTipos[index].classeR === 'classSuccess' ? '#2b9600' : '#eeeeee') }
            ];
            listas.push(array);
        }
        return listas;
    }
}
RelatoriobackupComponent.ɵfac = function RelatoriobackupComponent_Factory(t) { return new (t || RelatoriobackupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_home_service_home_service_service__WEBPACK_IMPORTED_MODULE_6__["HomeServiceService"])); };
RelatoriobackupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RelatoriobackupComponent, selectors: [["app-relatoriobackup"]], decls: 65, vars: 9, consts: [[1, "container1"], [1, "container2"], [1, "container3"], [3, "formGroup"], ["cads", "ngForm"], ["clas", "form-row flex-row flex-wrap align-items-center"], ["clas", "form-group col-sm-6 col-md-6 col-lg-6 col-xl-6"], ["type", "text", "name", "valor", "id", "valor", "formControlName", "valor", 1, "form-control", 3, "focusout"], ["type", "text", "name", "data", "id", "data", "formControlName", "data", "placeholder", "yyyyy-mm-dd", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["d", "ngbDatepicker"], ["type", "text", "name", "anotacao", "id", "anotacao", "formControlName", "anotacao", 1, "form-control"], ["type", "text", "name", "anotacao2", "id", "anotacao2", "formControlName", "anotacao2", 1, "form-control"], ["clas", "form-group col-sm-3 col-md-3 col-lg-3 col-xl-3", 4, "ngIf"], ["clas", "form-group col-sm-6 col-md-6 col-lg-6 col-xl-6", 4, "ngIf"], ["clas", "form-group col-sm-3 col-md-3 col-lg-3 col-xl-3", 2, "text-align", "right"], ["type", "button", 1, "btn", "btn-outline-secondary", "buttonClass3", 3, "click"], ["type", "button", "id", "corrige", 1, "btn", "btn-outline-secondary", "buttonClass3", 3, "click"], ["type", "button", "id", "minimiza", 1, "btn", "btn-outline-secondary", "buttonClassActivated", 3, "click"], ["type", "button", 1, "btn", "btn-outline-secondary", "buttonClass3", 3, "disabled", "click"], ["type", "button", "id", "cadastro", 1, "btn", "btn-outline-secondary", "buttonClass3", 3, "click"], [1, "row"], [1, "col", 2, "color", "black !important"], [1, "col", 2, "color", "black !important", 3, "click"], [4, "ngFor", "ngForOf"], ["clas", "form-group col-sm-3 col-md-3 col-lg-3 col-xl-3"], ["type", "text", "name", "datas", "id", "datas", "formControlName", "datas", "placeholder", "yyyyy-mm-dd", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ds", "ngbDatepicker"], ["type", "text", "name", "anotacoes", "id", "anotacoes", "formControlName", "anotacoes", 1, "form-control"], ["clas", "form-group col-sm-6 col-md-6 col-lg-6 col-xl-6", 2, "margin-bottom", "10px", "text-align", "right"], ["type", "text", "name", "nomebusca", "id", "nomebusca", "formControlName", "nomebusca", "maxlength", "100", 1, "form-control"], ["type", "text", "name", "nomelternativo", "id", "nomelternativo", "formControlName", "nomelternativo", "maxlength", "100", 1, "form-control"], [1, "lines"], [1, "col"], [4, "ngIf"], [2, "margin-left", "50px !important", 3, "click"], [1, "classSuccess", 2, "margin-left", "50px !important", 3, "hidden", "click"], [1, "classFailed", 2, "margin-left", "50px !important", 3, "hidden", "click"], ["disabled", "true", 2, "margin-left", "50px !important"]], template: function RelatoriobackupComponent_Template(rf, ctx) { if (rf & 1) {
        const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusout", function RelatoriobackupComponent_Template_input_focusout_10_listener() { return ctx.separa(ctx.cad.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Data Backup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RelatoriobackupComponent_Template_input_ngModelChange_14_listener() { return ctx.verificaCompleto(); })("ngModelChange", function RelatoriobackupComponent_Template_input_ngModelChange_14_listener($event) { return ctx.model = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Anota\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Anota\u00E7\u00F5es Telefone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, RelatoriobackupComponent_div_26_Template, 18, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, RelatoriobackupComponent_div_27_Template, 11, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RelatoriobackupComponent_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Calend\u00E1rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RelatoriobackupComponent_Template_button_click_32_listener() { return ctx.limparDados(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Limpar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RelatoriobackupComponent_Template_button_click_35_listener() { return ctx.corrige(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Corrigir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RelatoriobackupComponent_Template_button_click_38_listener() { return ctx.minimiza(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Minimiza Aba Recovery");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RelatoriobackupComponent_Template_button_click_41_listener() { return ctx.gerarPDF(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Gerar Relat\u00F3rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RelatoriobackupComponent_Template_button_click_43_listener() { return ctx.minimizaCadastro(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Cadastro Backup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RelatoriobackupComponent_Template_button_click_46_listener() { return ctx.cadastrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Cadastrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RelatoriobackupComponent_Template_div_click_54_listener() { return ctx.manualChange("udp"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RelatoriobackupComponent_Template_div_click_56_listener() { return ctx.manualChange("fita"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "SYSTEM RECOVERY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, RelatoriobackupComponent_div_60_Template, 15, 7, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, RelatoriobackupComponent_div_64_Template, 9, 3, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.cad);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hiddenRecovery);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hiddenCadastro);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.gerar);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("TIPO 1" + ctx.manual.udp);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("TIPO 2" + ctx.manual.fita);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.serverList2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.telefone);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbInputDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]], styles: [".classSuccess[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n    width: 30px;\r\n    background-color: #58d184;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n}\r\n\r\n.classFailed[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n    width: 30px;\r\n    background-color: #d45050;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n}\r\n\r\n.classWaiting[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n    width: 30px;\r\n    background-color: #55a0f2;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n}\r\n\r\n.container1[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    margin-left: 30px;\r\n    margin-top: 10px;\r\n    margin-right: 30px;\r\n    align-self: center;\r\n}\r\n\r\n.container2[_ngcontent-%COMP%] {\r\n    height: 60%;\r\n    box-shadow: 0px 0px 10px #9e9e9e;\r\n}\r\n\r\n.container3[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    margin-left: 10px;\r\n    margin-top: 10px;\r\n    margin-right: 10px;\r\n    align-content: center !important;\r\n}\r\n\r\n.container3a[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    margin-left: 10px;\r\n    margin-top: 10px;\r\n    margin-right: 10px;\r\n    align-content: center !important;\r\n    text-align: center;\r\n}\r\n\r\n.buttonClass3[_ngcontent-%COMP%] {\r\n   border-radius: 5px !important;\r\n   background-color: #3d3d3d !important;\r\n   border-color: transparent !important;\r\n   color: white;\r\n}\r\n\r\n.buttonClassActivated[_ngcontent-%COMP%] {\r\n    border-radius: 5px !important;\r\n    background-color: #55a0f2 !important;\r\n    border-color: transparent !important;\r\n    color: white;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    border: transparent !important;\r\n    box-shadow: 0px 0px 10px #9e9e9e;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    background-color: #55a0f2 !important;\r\n}\r\n\r\n.lines[_ngcontent-%COMP%] {\r\n    border-top: 2px solid #3d3d3d;\r\n    border-radius: 90%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVsYXRvcmlvYmFja3VwL3JlbGF0b3Jpb2JhY2t1cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7O0FBRUE7R0FDRyw2QkFBNkI7R0FDN0Isb0NBQW9DO0dBQ3BDLG9DQUFvQztHQUNwQyxZQUFZO0FBQ2Y7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9yZWxhdG9yaW9iYWNrdXAvcmVsYXRvcmlvYmFja3VwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xhc3NTdWNjZXNzIHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ZDE4NDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmNsYXNzRmFpbGVkIHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0NTA1MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmNsYXNzV2FpdGluZyB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NWEwZjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5jb250YWluZXIxIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIyIHtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICM5ZTllOWU7XHJcbn1cclxuXHJcbi5jb250YWluZXIzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRhaW5lcjNhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbkNsYXNzMyB7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzZDNkICFpbXBvcnRhbnQ7XHJcbiAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnV0dG9uQ2xhc3NBY3RpdmF0ZWQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVhMGYyICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzllOWU5ZTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NWEwZjIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpbmVzIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjM2QzZDNkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RelatoriobackupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-relatoriobackup',
                templateUrl: './relatoriobackup.component.html',
                styleUrls: ['./relatoriobackup.component.css']
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: _services_home_service_home_service_service__WEBPACK_IMPORTED_MODULE_6__["HomeServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/home-service/home-service.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/home-service/home-service.service.ts ***!
  \***************************************************************/
/*! exports provided: HomeServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeServiceService", function() { return HomeServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class HomeServiceService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:10000/';
    }
    ngOnInit() {
    }
    getServers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let retorno = yield this.getdeletehttp('get', 'list');
            return retorno;
        });
    }
    insertEscopo(objeto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let retorno = yield this.postputhttp('post', 'insert', objeto);
            return retorno;
        });
    }
    getdeletehttp(type, url) {
        const opts = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json; charset=ISO-8859-1',
                'Accept': '*/*',
                'Access-Control-Allow-Headers': '*'
            })
        };
        return new Promise((resolve, reject) => {
            try {
                this.http[type](`${this.url}${url}`, opts).subscribe(data => {
                    resolve(data);
                }, error => {
                    resolve(error);
                });
            }
            catch (error) {
                resolve(error);
            }
        });
    }
    postputhttp(type, url, object) {
        const opts = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json; charset=ISO-8859-1',
                'Accept': '*/*',
                'Access-Control-Allow-Headers': '*'
            })
        };
        return new Promise((resolve, reject) => {
            try {
                this.http[type](`${this.url}${url}`, object, opts).subscribe(data => {
                    resolve(data);
                }, error => {
                    resolve(error);
                });
            }
            catch (error) {
                resolve(error);
            }
        });
    }
}
HomeServiceService.ɵfac = function HomeServiceService_Factory(t) { return new (t || HomeServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
HomeServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HomeServiceService, factory: HomeServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\RELATORIOS-BANCO\win-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map