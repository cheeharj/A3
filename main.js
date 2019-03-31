(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-detail></app-detail>\n<app-footer></app-footer>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'cheeharj-A3';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/detail/detail.component.css":
/*!*********************************************!*\
  !*** ./src/app/detail/detail.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (orientation: landscape) {\r\n\r\n    #grid_nav {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 5fr 5fr;\r\n        grid-template-rows: 1fr;\r\n        height: 25px;\r\n        justify-items: center;\r\n        align-items: center;\r\n        grid-gap: 2px;\r\n        background-image: linear-gradient(#fff7e6, #fff2cc); \r\n        \r\n        border: 1px solid black;\r\n        border-radius: 5px;\r\n    }\r\n    #grid_nav {\r\n       padding: 12px;\r\n    }\r\n\r\n\r\n    #grid_display {\r\n        display: grid;\r\n        grid-template-columns: 2fr 3fr; \r\n    }\r\n    #grid_left {\r\n        border: 1px solid black;\r\n        height: 200px;\r\n    }\r\n    img{\r\n        height: 100%;\r\n        width: 100%;\r\n    }\r\n\r\n    #grid_right {\r\n        border: 1px solid black;\r\n        height: 200px;\r\n        background-image: linear-gradient(#fff7e6, #fff2cc); \r\n        border-radius: 5px;\r\n    }\r\n    \r\n    #grid_nav, #grid_display, #grid_left, #grid_right {\r\n        padding: 3px;\r\n        margin:  3px;\r\n    }\r\n\r\n    #detail_table {\r\n        margin: 0 auto;\r\n        width: 80%;\r\n        height: 80%\r\n    }\r\n    #td_left {\r\n        width: 50%;\r\n        text-align: right;\r\n        padding-right: 10px;\r\n    }\r\n    #td_right {\r\n        width: 50%;\r\n        color: blue;\r\n    }\r\n\r\n    #nav_table {\r\n        width: 100%;\r\n    }\r\n\r\n    #grid_nav  input {\r\n        height: 100%;\r\n        width: 100px;\r\n    }\r\n\r\n    #grid_nav > label > label {\r\n        color: black;\r\n    }\r\n\r\n  }\r\n\r\n  @media screen and (orientation: portrait) {\r\n    \r\n    #grid_nav {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-template-rows: 1fr 1fr;\r\n        height: 70px;\r\n        justify-items: center;\r\n        align-items: center;\r\n        grid-gap: 2px;\r\n        background-image: linear-gradient(#fff7e6, #fff2cc); \r\n        \r\n        border: 1px solid black;\r\n        border-radius: 5px;\r\n    }\r\n    #grid_nav {\r\n       padding: 12px;\r\n    }\r\n\r\n\r\n    #grid_display {\r\n        display: grid;\r\n        grid-template-columns: 1fr; \r\n        grid-template-rows: 1fr; \r\n    }\r\n    #grid_left {\r\n        border: 1px solid black;\r\n        height: 280px;\r\n    }\r\n    img{\r\n        height: 100%;\r\n        width: 100%;\r\n    }\r\n\r\n    #grid_right {\r\n        border: 1px solid black;\r\n        height: 150px;\r\n        background-image: linear-gradient(#fff7e6, #fff2cc); \r\n        border-radius: 5px;\r\n    }\r\n    \r\n    #grid_nav, #grid_display, #grid_left, #grid_right {\r\n        padding: 3px;\r\n        margin:  3px;\r\n    }\r\n\r\n    #detail_table {\r\n        margin: 0 auto;\r\n        width: 80%;\r\n        height: 80%\r\n    }\r\n    #td_left {\r\n        width: 50%;\r\n        text-align: right;\r\n        padding-right: 10px;\r\n    }\r\n    #td_right {\r\n        width: 50%;\r\n        color: blue;\r\n    }\r\n\r\n    #nav_table {\r\n        width: 100%;\r\n    }\r\n\r\n    #grid_nav  input {\r\n        height: 100%;\r\n        width: 100px;\r\n    }\r\n\r\n    #grid_nav > label > label {\r\n        color: black;\r\n    }\r\n    \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJO1FBQ0ksYUFBYTtRQUNiLHNDQUFzQztRQUN0Qyx1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLG1EQUFtRDs7UUFFbkQsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtJQUN0QjtJQUNBO09BQ0csYUFBYTtJQUNoQjs7O0lBR0E7UUFDSSxhQUFhO1FBQ2IsOEJBQThCO0lBQ2xDO0lBQ0E7UUFDSSx1QkFBdUI7UUFDdkIsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7SUFDZjs7SUFFQTtRQUNJLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2IsbURBQW1EO1FBQ25ELGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksY0FBYztRQUNkLFVBQVU7UUFDVjtJQUNKO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsaUJBQWlCO1FBQ2pCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFlBQVk7UUFDWixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7RUFFRjs7RUFFQTs7SUFFRTtRQUNJLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsMkJBQTJCO1FBQzNCLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixtREFBbUQ7O1FBRW5ELHVCQUF1QjtRQUN2QixrQkFBa0I7SUFDdEI7SUFDQTtPQUNHLGFBQWE7SUFDaEI7OztJQUdBO1FBQ0ksYUFBYTtRQUNiLDBCQUEwQjtRQUMxQix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHVCQUF1QjtRQUN2QixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmOztJQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixtREFBbUQ7UUFDbkQsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsVUFBVTtRQUNWO0lBQ0o7SUFDQTtRQUNJLFVBQVU7UUFDVixpQkFBaUI7UUFDakIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztJQUNmOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztFQUVGIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcblxyXG4gICAgI2dyaWRfbmF2IHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciA1ZnIgNWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBncmlkLWdhcDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZmZmN2U2LCAjZmZmMmNjKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgI2dyaWRfbmF2IHtcclxuICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICNncmlkX2Rpc3BsYXkge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyOyBcclxuICAgIH1cclxuICAgICNncmlkX2xlZnQge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICNncmlkX3JpZ2h0IHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZmZmN2U2LCAjZmZmMmNjKTsgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjZ3JpZF9uYXYsICNncmlkX2Rpc3BsYXksICNncmlkX2xlZnQsICNncmlkX3JpZ2h0IHtcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgbWFyZ2luOiAgM3B4O1xyXG4gICAgfVxyXG5cclxuICAgICNkZXRhaWxfdGFibGUge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4MCVcclxuICAgIH1cclxuICAgICN0ZF9sZWZ0IHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAjdGRfcmlnaHQge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgI25hdl90YWJsZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgI2dyaWRfbmF2ICBpbnB1dCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAjZ3JpZF9uYXYgPiBsYWJlbCA+IGxhYmVsIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgXHJcbiAgICAjZ3JpZF9uYXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ3JpZC1nYXA6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2ZmZjdlNiwgI2ZmZjJjYyk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICAgICNncmlkX25hdiB7XHJcbiAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAjZ3JpZF9kaXNwbGF5IHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyBcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjsgXHJcbiAgICB9XHJcbiAgICAjZ3JpZF9sZWZ0IHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAjZ3JpZF9yaWdodCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2ZmZjdlNiwgI2ZmZjJjYyk7IFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI2dyaWRfbmF2LCAjZ3JpZF9kaXNwbGF5LCAjZ3JpZF9sZWZ0LCAjZ3JpZF9yaWdodCB7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIG1hcmdpbjogIDNweDtcclxuICAgIH1cclxuXHJcbiAgICAjZGV0YWlsX3RhYmxlIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGhlaWdodDogODAlXHJcbiAgICB9XHJcbiAgICAjdGRfbGVmdCB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgI3RkX3JpZ2h0IHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgfVxyXG5cclxuICAgICNuYXZfdGFibGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICNncmlkX25hdiAgaW5wdXQge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2dyaWRfbmF2ID4gbGFiZWwgPiBsYWJlbCB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/detail/detail.component.html":
/*!**********************************************!*\
  !*** ./src/app/detail/detail.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n\n  <div id=\"grid_nav\">\n    <div><input id=\"nav_item\" type=\"button\" value=\"Back\" (click)=\"changeSong(-1)\"></div>\n    <div><input id=\"nav_item\" type=\"button\" value=\"Next\" (click)=\"changeSong(1)\"></div>\n    <div><label id=\"song_nav_previous\"></label></div>\n    <div><label id=\"song_nav_next\"></label></div>\n  </div>\n\n  <div id=\"grid_display\">\n    <div id=\"grid_left\">\n      <img id=\"song_picture\" src=\"\">\n    </div>\n    <div id=\"grid_right\">\n      <table id=\"detail_table\">\n        <tr>\n          <td id=\"td_left\">Name : </td>\n          <td id=\"td_right\"><label id=\"song_name\"></label></td>\n        </tr>\n        <tr>\n          <td id=\"td_left\">Artist:</td>\n          <td id=\"td_right\"><label id=\"song_artist\"></label></td>\n        </tr>\n        <tr>\n          <td id=\"td_left\">Genre:</td>\n          <td id=\"td_right\"><label id=\"song_genre\"></label></td>\n        </tr>\n        <tr>\n          <td id=\"td_left\">Year:</td>\n          <td id=\"td_right\"><label id=\"song_year\"></label></td>\n        </tr>\n      </table>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailComponent = /** @class */ (function () {
    function DetailComponent() {
        this.song1 = {
            name: "Suns Out",
            artist: "Allen Iversom",
            genre: "Hip-Hop",
            year: "2017",
            picture: "assets/images/1.jpg"
        };
        this.song2 = {
            name: "Orange",
            artist: "Siny",
            genre: "Hip-Hop",
            year: "2017",
            picture: "assets/images/2.jpg"
        };
        this.song3 = {
            name: "Sunlite",
            artist: "Chief",
            genre: "Hip-Hop",
            year: "2018",
            picture: "assets/images/3.jpg"
        };
        this.song4 = {
            name: "Goodbye",
            artist: "Pslam Trees",
            genre: "Hip-Hop",
            year: "2017",
            picture: "assets/images/4.jpg"
        };
    }
    DetailComponent.prototype.ngOnInit = function () {
        var songsArray = [this.song1, this.song2, this.song3, this.song4];
        localStorage.setItem('songsArray', JSON.stringify(songsArray));
        localStorage.setItem("songIndex", JSON.stringify(0));
        this.changeSong(1);
    };
    DetailComponent.prototype.changeSong = function (index) {
        var songIndex = JSON.parse(localStorage.getItem("songIndex"));
        var songsArray = JSON.parse(localStorage.getItem('songsArray'));
        console.log("Current index: " + songIndex);
        //Picks the next or previous song based on the button clicked.
        if (index == 1) {
            songIndex++;
        }
        else if (index == -1) {
            songIndex--;
        }
        if (songIndex == -1) {
            songIndex = 3;
        }
        if (songIndex == 4) { //Resets the array index to restart the track list/order
            songIndex = 0;
        }
        localStorage.setItem("songIndex", JSON.stringify(songIndex));
        //Sets all of the new songs HTML
        if (songIndex == 0) {
            document.getElementById("song_nav_next").innerHTML = "Next Song: " + songsArray[songIndex + 1].name;
            document.getElementById("song_nav_previous").innerHTML = "Last Song: " + songsArray[3].name;
        }
        else if (songIndex == 3) {
            document.getElementById("song_nav_next").innerHTML = "Next Song: " + songsArray[0].name;
            document.getElementById("song_nav_previous").innerHTML = "Last Song: " + songsArray[2].name;
        }
        else {
            document.getElementById("song_nav_next").innerHTML = "Next Song: " + songsArray[songIndex + 1].name;
            document.getElementById("song_nav_previous").innerHTML = "Last Song: " + songsArray[songIndex - 1].name;
        }
        document.getElementById("song_picture").setAttribute('src', songsArray[songIndex].picture);
        document.getElementById("song_name").innerHTML = songsArray[songIndex].name;
        document.getElementById("song_artist").innerHTML = songsArray[songIndex].artist;
        document.getElementById("song_genre").innerHTML = songsArray[songIndex].genre;
        document.getElementById("song_year").innerHTML = songsArray[songIndex].year;
        console.log("New Index: " + songIndex);
    };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.css */ "./src/app/detail/detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    text-align: center;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    margin: 3px;\r\n    margin-top: 5px;\r\n    padding: 5px;\r\n    background-image: linear-gradient(#fff7e6, #fff2cc); \r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osbURBQW1EOztBQUV2RCIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZmZmN2U2LCAjZmZmMmNjKTsgXHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{cheeharj.cname}} / {{cheeharj.cid}} / {{cheeharj.clogin}} / {{cheeharj.ccampus}}</p>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.cheeharj = {
            cid: 991419255,
            cname: "Harjinder Cheema",
            ccampus: "Davis",
            clogin: "cheeharj",
            cassignment: "Assignment 3"
        };
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    text-align: center;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    margin: 3px;\r\n    margin-bottom: 5px;\r\n    padding: 5px;\r\n    background-image: linear-gradient(#fff7e6, #fff2cc); \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbURBQW1EO0FBQ3ZEIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNmZmY3ZTYsICNmZmYyY2MpOyBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{cheeharj.cassignment}} / {{cheeharj.cname}}</p>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.cheeharj = {
            cid: 991419255,
            cname: "Harjinder Cheema",
            ccampus: "Davis",
            clogin: "cheeharj",
            cassignment: "Assignment 3"
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Harjinder\Documents\angular\cheeharj-A3\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map