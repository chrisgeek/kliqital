webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet>\n\n</router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__ = __webpack_require__("../../../../angular-bootstrap-md/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__["a" /* MDBBootstrapModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_app_routing_module__["a" /* AppRoutingModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NO_ERRORS_SCHEMA */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <!--Navbar-->\n    <nav class=\"navbar navbar-expand-lg navbar-light fixed-top scrolling-navbar\">\n        <div class=\"container\">\n            <a class=\"navbar-brand font-bold dark-grey-text\" href=\"#\"><strong>KLIQITAL</strong></a> <button aria-controls=\"navbarSupportedContent-7\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\" data-target=\"#navbarSupportedContent-7\"\n                data-toggle=\"collapse\" type=\"button\"><span class=\"navbar-toggler-icon\"></span></button>\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent-7\">\n                <ul class=\"navbar-nav ml-auto navbar-right\">\n                    <li class=\"nav-item active\">\n                        <a class=\"nav-link dark-grey-text\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link dark-grey-text\" href=\"#\">Link</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link dark-grey-text\" href=\"#\">Profile</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n    <!-- Intro Section -->\n\n</header>\n<!--Main Navigation-->\n<!--Main layout-->\n<main class=\"pb-0\">\n    <div class=\"container\">\n        <!--First row-->\n        <div class=\"row mt-5 pt-lg-4 wow fadeIn\" data-wow-delay=\"0.2s\">\n            <div class=\"col-lg-7\">\n                <!--Featured image -->\n                <div class=\"view overlay hm-white-light z-depth-1-half\">\n                    <img alt=\"\" class=\"img-fluid\" src=\"/assets/img2.jpg\">\n                    <div class=\"mask\"></div>\n                </div><br>\n            </div>\n            <!--Main information-->\n            <div class=\"col-lg-5 wow fadeIn\" data-wow-delay=\"0.2s\">\n                <h2 class=\"h2-responsive font-bold dark-grey-text\">We are professionals</h2>\n                <hr>\n                <p class=\"dark-grey-text mt-3\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis pariatur quod ipsum atque quam dolorem voluptate officia sunt placeat consectetur alias fugit cum praesentium ratione sint mollitia, perferendis natus quaerat! Lorem\n                    ipsum dolor sit amet, consectetur adipisicing elit.</p><a class=\"btn btn-indigo btn-md\" href=\"\">Get in touch</a>\n            </div>\n        </div>\n        <!--/.First row-->\n        <hr class=\"extra-margins my-5\">\n        <!--Second row-->\n        <div class=\"row pt-4 mb-4\">\n            <!--First columnn-->\n            <div class=\"col-lg-4\">\n                <!--Card-->\n                <div class=\"card mb-r wow fadeIn\" data-wow-delay=\"0.4s\">\n                    <!--Card image-->\n                    <img alt=\"Card image cap\" class=\"img-fluid\" src=\"https://mdbootstrap.com/img/Photos/Others/images/65.jpg\">\n                    <!--Card content-->\n                    <div class=\"card-body\">\n                        <!--Title-->\n                        <h4 class=\"card-title text-center dark-grey-text\"><strong>Card title</strong></h4>\n                        <hr>\n                        <!--Text-->\n                        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                    </div>\n                </div>\n                <!--/.Card-->\n            </div>\n            <!--First columnn-->\n            <!--Second columnn-->\n            <div class=\"col-lg-4\">\n                <!--Card-->\n                <div class=\"card mb-r wow fadeIn\" data-wow-delay=\"0.6s\">\n                    <!--Card image-->\n                    <img alt=\"Card image cap\" class=\"img-fluid\" src=\"https://mdbootstrap.com/img/Photos/Others/images/64.jpg\">\n                    <!--Card content-->\n                    <div class=\"card-body\">\n                        <!--Title-->\n                        <h4 class=\"card-title text-center dark-grey-text\"><strong>Card title</strong></h4>\n                        <hr>\n                        <!--Text-->\n                        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                    </div>\n                </div>\n                <!--/.Card-->\n            </div>\n            <!--Second columnn-->\n            <!--Third columnn-->\n            <div class=\"col-lg-4\">\n                <!--Card-->\n                <div class=\"card mb-r wow fadeIn\" data-wow-delay=\"0.8s\">\n                    <!--Card image-->\n                    <img alt=\"Card image cap\" class=\"img-fluid\" src=\"https://mdbootstrap.com/img/Photos/Others/images/72.jpg\">\n                    <!--Card content-->\n                    <div class=\"card-body\">\n                        <!--Title-->\n                        <h4 class=\"card-title text-center dark-grey-text\"><strong>Card title</strong></h4>\n                        <hr>\n                        <!--Text-->\n                        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                    </div>\n                </div>\n                <!--/.Card-->\n            </div>\n            <!--Third columnn-->\n        </div>\n        <!--/.Second row-->\n    </div>\n    <!--Second container-->\n    <div class=\"container-fluid pb-0\" style=\"background-color: #f4f4fa\">\n        <div class=\"container py-4\">\n            <!--Section: Services-->\n            <section class=\"section mt-3 mb-3 pb-3\" id=\"services\">\n                <!-- Section heading -->\n                <h3 class=\"text-center title my-5 pt-4 pb-5 dark-grey-text font-bold wow fadeIn\" data-wow-delay=\"0.2s\"><strong>What we offer</strong></h3>\n                <!-- First row -->\n                <div class=\"row wow fadeIn\" data-wow-delay=\"0.4s\">\n                    <!-- First column -->\n                    <div class=\"col-md-4 mb-r text-center\">\n                        <!--Panel-->\n                        <div class=\"card card-body text-left white hoverable\">\n                            <p class=\"feature-title title font-bold dark-grey-text font-up spacing mt-4 mx-4\"><i aria-hidden=\"true\" class=\"fa fa-square indigo-text mr-2\"></i> <strong>Web Design</strong></p>\n                            <p class=\"grey-text font-small mx-4\">Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente earu proident. Ad vegan excepteur butcher vice lomo leggings.</p>\n\n                            <p></p>\n                        </div>\n                        <!--/.Panel-->\n                    </div>\n                    <!-- /First column -->\n                    <!-- Second column -->\n                    <div class=\"col-md-4 mb-r text-center\">\n                        <!--Panel-->\n                        <div class=\"card card-body text-left white hoverable\">\n                            <p class=\"feature-title title font-bold dark-grey-text font-up spacing mt-4 mx-4\"><i aria-hidden=\"true\" class=\"fa fa-square indigo-text mr-2\"></i> <strong>Mobile Development</strong></p>\n                            <p class=\"grey-text font-small mx-4\">Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente earu proident. Ad vegan excepteur butcher vice lomo leggings.</p>\n\n                            <p></p>\n                        </div>\n                        <!--/.Panel-->\n                    </div>\n                    <!-- /.Second column -->\n                    <!-- Third column -->\n                    <div class=\"col-md-4 mb-r text-center\">\n                        <!--Panel-->\n                        <div class=\"card card-body text-left white hoverable\">\n                            <p class=\"feature-title title font-bold dark-grey-text font-up spacing mt-4 mx-4\"><i aria-hidden=\"true\" class=\"fa fa-square indigo-text mr-2\"></i> <strong>Desktop Apps</strong></p>\n                            <p class=\"grey-text font-small mx-4\">Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente earu proident. Ad vegan excepteur butcher vice lomo leggings.</p>\n\n                            <p></p>\n                        </div>\n                        <!--/.Panel-->\n                    </div>\n                    <!-- /.Third column -->\n                    <!-- Fourth column -->\n\n                    <!-- /.Fourth column -->\n                </div>\n                <!-- /.First row -->\n            </section>\n            <!--/Section: Services-->\n        </div>\n    </div>\n    <!--Second container-->\n</main>\n<!--/.Main layout-->\n<!--Footer-->\n<footer class=\"page-footer center-on-small-only mt-0 mdb-color\">\n    <!--Footer links-->\n    <div class=\"container\">\n        <div class=\"row mt-4\">\n            <!--First column-->\n            <div class=\"col-lg-3 col-md-6\">\n                <p>Material Design (codenamed Quantum Paper) is a design language developed by Google.</p>\n                <p>Material Design for Bootstrap (MDB) is a powerful Material Design UI KIT for most popular HTML, CSS, and JS framework - Bootstrap.</p>\n            </div>\n            <!--/.First column-->\n            <hr class=\"w-100 clearfix d-sm-none\">\n            <!--Second column-->\n            <div class=\"col-lg-2 col-md-6 ml-auto\">\n                <h5 class=\"title mb-3\"><strong>First column</strong></h5>\n                <ul>\n                    <li>\n                        <a href=\"#!\">Link 1</a>\n                    </li>\n                    <li>\n                        <a href=\"#!\">Link 2</a>\n                    </li>\n                    <li>\n                        <a href=\"#!\">Link 3</a>\n                    </li>\n                    <li>\n                        <a href=\"#!\">Link 4</a>\n                    </li>\n                </ul>\n            </div>\n            <!--/.Second column-->\n            <hr class=\"w-100 clearfix d-sm-none\">\n            <!--Third column-->\n            <div class=\"col-lg-2 col-md-6 ml-auto\">\n                <h5 class=\"title mb-3\"><strong>Second column</strong></h5>\n                <ul>\n                    <li>\n                        <a href=\"#!\">Link 1</a>\n                    </li>\n                    <li>\n                        <a href=\"#!\">Link 2</a>\n                    </li>\n                    <li>\n                        <a href=\"#!\">Link 3</a>\n                    </li>\n                    <li>\n                        <a href=\"#!\">Link 4</a>\n                    </li>\n                </ul>\n            </div>\n            <!--/.Third column-->\n            <hr class=\"w-100 clearfix d-sm-none\">\n            <!--Fourth column-->\n            <div class=\"col-lg-2 col-md-6 ml-auto\">\n                <h5 class=\"title mb-3\"><strong>Third column</strong></h5>\n                <ul>\n                    <li>\n                        <a href=\"#!\">Link 1</a>\n                    </li>\n                    <li>\n                        <a href=\"#!\">Link 2</a>\n                    </li>\n                    <li>\n                        <a href=\"#!\">Link 3</a>\n                    </li>\n                    <li>\n                        <a href=\"#!\">Link 4</a>\n                    </li>\n                </ul>\n            </div>\n            <!--/.Fourth column-->\n        </div>\n    </div>\n    <!--/.Footer links-->\n    <hr>\n    <!--Call to action-->\n    <div class=\"call-to-action\">\n        <h4 class=\"mb-5\">Material Design for Bootstrap</h4>\n        <ul>\n            <li>\n                <h5>Get our UI KIT for free</h5>\n            </li>\n            <li>\n                <a class=\"btn btn-danger\" href=\"https://mdbootstrap.com/getting-started/\" rel=\"nofollow\" target=\"_blank\">Sign up!</a>\n            </li>\n            <li>\n                <a class=\"btn btn-info\" href=\"https://mdbootstrap.com/material-design-for-bootstrap/\" rel=\"nofollow\" target=\"_blank\">Learn more</a>\n            </li>\n        </ul>\n    </div>\n    <!--/.Call to action-->\n    <!--Copyright-->\n    <div class=\"footer-copyright\">\n        <div class=\"container-fluid\">\n            © 2015 Copyright: <a href=\"https://www.MDBootstrap.com\">MDBootstrap.com</a>\n        </div>\n    </div>\n    <!--/.Copyright-->\n</footer>\n<!--/.Footer-->"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main {\n  padding-top: 3rem;\n  padding-bottom: 2rem; }\n\n.extra-margins {\n  margin-top: 1rem;\n  margin-bottom: 2.5rem; }\n\n.navbar {\n  background-color: #1daed3; }\n\n.nav-link {\n  font-weight: bolder; }\n\nfooter.page-footer {\n  background-color: #3b3b3f;\n  margin-top: 2rem; }\n\n.navbar .btn-group .dropdown-menu a:hover {\n  color: #000 !important; }\n\n.navbar .btn-group .dropdown-menu a:active {\n  color: #fff !important; }\n\n.top-nav-collapse {\n  background-color: #fff !important; }\n\n.navbar:not(.top-nav-collapse) {\n  background: transparent !important; }\n\n@media (max-width: 768px) {\n  .navbar:not(.top-nav-collapse) {\n    background: #fff !important; } }\n\n@media (max-width: 768px) {\n  .display-1 {\n    font-size: 4rem; } }\n\n.spacing {\n  letter-spacing: 3px; }\n\n@media (max-width: 740px) {\n  .full-height,\n  .full-height body,\n  .full-height header,\n  .full-height header .view {\n    height: 700px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map