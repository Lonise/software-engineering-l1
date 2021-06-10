(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-courses-routing-module"],{

/***/ "2tVE":
/*!***************************************************!*\
  !*** ./src/app/modules/courses-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CoursesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesRoutingModule", function() { return CoursesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
<<<<<<< HEAD
/* harmony import */ var _components_main_courses_pages_add_course_page_add_course_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/main/courses-pages/add-course-page/add-course-page.component */ "/RYb");
/* harmony import */ var _components_main_courses_pages_courses_buffer_courses_buffer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/main/courses-pages/courses-buffer/courses-buffer.component */ "9rZT");
=======
/* harmony import */ var _components_main_courses_pages_course_list_page_course_list_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/main/courses-pages/course-list-page/course-list-page.component */ "ODOa");
/* harmony import */ var _components_main_courses_pages_add_course_page_add_course_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/main/courses-pages/add-course-page/add-course-page.component */ "/RYb");
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const coursesRoutes = [
<<<<<<< HEAD
    { path: '', component: _components_main_courses_pages_courses_buffer_courses_buffer_component__WEBPACK_IMPORTED_MODULE_2__["CoursesBufferComponent"] },
    { path: 'new', component: _components_main_courses_pages_add_course_page_add_course_page_component__WEBPACK_IMPORTED_MODULE_1__["AddCoursePageComponent"] },
    { path: ':id', component: _components_main_courses_pages_add_course_page_add_course_page_component__WEBPACK_IMPORTED_MODULE_1__["AddCoursePageComponent"] },
=======
    { path: '', component: _components_main_courses_pages_course_list_page_course_list_page_component__WEBPACK_IMPORTED_MODULE_1__["CoursesListPageComponent"] },
    { path: 'new', component: _components_main_courses_pages_add_course_page_add_course_page_component__WEBPACK_IMPORTED_MODULE_2__["AddCoursePageComponent"] },
    { path: ':id', component: _components_main_courses_pages_add_course_page_add_course_page_component__WEBPACK_IMPORTED_MODULE_2__["AddCoursePageComponent"] },
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8
];
class CoursesRoutingModule {
}
CoursesRoutingModule.ɵfac = function CoursesRoutingModule_Factory(t) { return new (t || CoursesRoutingModule)(); };
CoursesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CoursesRoutingModule });
CoursesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(coursesRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CoursesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-courses-routing-module.js.map