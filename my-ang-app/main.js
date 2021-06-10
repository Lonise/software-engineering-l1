(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/9jC":
/*!**************************************************************************!*\
  !*** ./src/app/components/main/courses-pages/course/course.component.ts ***!
  \**************************************************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
<<<<<<< HEAD
/* harmony import */ var src_app_store_courses_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/courses.action */ "aNRM");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _coming_courses_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coming-courses.directive */ "YkKD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _duration_course_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./duration-course.pipe */ "uCPB");


=======
/* harmony import */ var _coming_courses_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coming-courses.directive */ "YkKD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _duration_course_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./duration-course.pipe */ "uCPB");
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8





function CourseComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} }
const _c0 = function (a0) { return { topRatedCourse: a0 }; };
class CourseComponent {
    constructor(store) {
        this.store = store;
        this.deletedCourse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editToCourse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    deleteCourse(id) {
        this.deletedCourse.emit(id);
    }
    editCourse(course) {
<<<<<<< HEAD
        this.store.dispatch(src_app_store_courses_action__WEBPACK_IMPORTED_MODULE_1__["CoursesActions"].activateCourse({ activeCourse: course }));
        this.editToCourse.emit(course);
    }
}
CourseComponent.ɵfac = function CourseComponent_Factory(t) { return new (t || CourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
CourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseComponent, selectors: [["app-course"]], inputs: { course: "course" }, outputs: { deletedCourse: "deletedCourse", editToCourse: "editToCourse" }, decls: 20, vars: 16, consts: [["courseDateDirective", "", 1, "courses-list_item", 3, "ngClass", "courseCreationDate"], [1, "course-content"], [1, "course-title"], [1, "course-name"], ["src", "../../../../../assets/starCourse.svg", "alt", "star", 4, "ngIf"], [1, "course-info"], [1, "course-buttons"], [1, "course-button", 3, "click"], ["src", "../../../../../assets/starCourse.svg", "alt", "star"]], template: function CourseComponent_Template(rf, ctx) { if (rf & 1) {
=======
        this.editToCourse.emit(course);
    }
    ngOnDestroy() {
        console.log('Removed course id ' + this.course.id);
    }
}
CourseComponent.ɵfac = function CourseComponent_Factory(t) { return new (t || CourseComponent)(); };
CourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseComponent, selectors: [["app-course"]], inputs: { course: "course" }, outputs: { deletedCourse: "deletedCourse", editToCourse: "editToCourse" }, decls: 20, vars: 16, consts: [["appCourse", "", 1, "courses-list_item", 3, "ngClass", "courseCreationDate"], [1, "course-content"], [1, "course-title"], [1, "course-name"], ["src", "../../../../../assets/starCourse.svg", "alt", "star", 4, "ngIf"], [1, "course-info"], [1, "course-buttons"], [1, "course-button", 3, "click"], ["src", "../../../../../assets/starCourse.svg", "alt", "star"]], template: function CourseComponent_Template(rf, ctx) { if (rf & 1) {
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CourseComponent_img_6_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "durationCourse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_Template_div_click_14_listener() { return ctx.editCourse(ctx.course); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_Template_div_click_17_listener() { return ctx.deleteCourse(ctx.course.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.course.isTopRated))("courseCreationDate", ctx.course.creationDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, ctx.course.title), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.course.isTopRated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, ctx.course.duration), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 11, ctx.course.creationDate, "dd.MM.yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.course.description, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, enim cupiditate maiores ad repellendus magni tempore adipisci commodi eveniet voluptate modi placeat s oluta cumque neque totam quis. Nesciunt, voluptatem ipsa. ");
<<<<<<< HEAD
    } }, directives: [_coming_courses_directive__WEBPACK_IMPORTED_MODULE_3__["CourseDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"], _duration_course_pipe__WEBPACK_IMPORTED_MODULE_5__["DurationCoursePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".courses-list_item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border: 2px solid black;\n  border-radius: 5px;\n  margin: 15px 15px;\n  padding: 10px;\n  background-color: rgba(252, 208, 142, 0.7);\n}\n\n.course-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.course-name[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n}\n\n.course-buttons[_ngcontent-%COMP%] {\n  width: 250px;\n  margin-left: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.course-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.topRatedCourse[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#ff682c, #ffbd42);\n}\n\n.greenBorder[_ngcontent-%COMP%] {\n  border: 4px solid #34C924;\n  box-shadow: 0 0 10px #19fa00;\n}\n\n.blueBorder[_ngcontent-%COMP%] {\n  border: 4px solid #1560BD;\n  box-shadow: 0 0 10px #0073ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtBQUNEOztBQUNBO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0FBRUQ7O0FBQUE7RUFDQyxnQkFBQTtBQUdEOztBQURBO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFJRDs7QUFBQztFQUNDLFdBQUE7QUFHRjs7QUFBQTtFQUNDLG1EQUFBO0FBR0Q7O0FBQUE7RUFDQyx5QkFBQTtFQUNBLDRCQUFBO0FBR0Q7O0FBQUE7RUFDQyx5QkFBQTtFQUNBLDRCQUFBO0FBR0QiLCJmaWxlIjoiY291cnNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdXJzZXMtbGlzdF9pdGVtIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0bWFyZ2luOiAxNXB4IDE1cHg7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZjZDA4ZSwgJGFscGhhOiAwLjcpO1xyXG59XHJcbi5jb3Vyc2UtdGl0bGUge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5jb3Vyc2UtbmFtZSB7XHJcblx0Zm9udC1zaXplOiAxLjNlbTtcclxufVxyXG4uY291cnNlLWJ1dHRvbnMge1xyXG5cdHdpZHRoOiAyNTBweDtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuLmNvdXJzZS1idXR0b24ge1xyXG5cclxuXHRidXR0b24ge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG59XHJcbi50b3BSYXRlZENvdXJzZSB7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigyNTUsIDEwNCwgNDQpLCByZ2IoMjU1LCAxODksIDY2KSk7XHJcbn1cclxuXHJcbi5ncmVlbkJvcmRlciB7XHJcblx0Ym9yZGVyOiA0cHggc29saWQgIzM0QzkyNDtcclxuXHRib3gtc2hhZG93OjAgMCAxMHB4ICMxOWZhMDA7XHJcbn1cclxuXHJcbi5ibHVlQm9yZGVye1xyXG5cdGJvcmRlcjogNHB4IHNvbGlkICMxNTYwQkQ7XHJcblx0Ym94LXNoYWRvdzowIDAgMTBweCAjMDA3M2ZmO1xyXG59XHJcbiJdfQ== */"], changeDetection: 0 });
=======
    } }, directives: [_coming_courses_directive__WEBPACK_IMPORTED_MODULE_1__["CourseDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], _duration_course_pipe__WEBPACK_IMPORTED_MODULE_3__["DurationCoursePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".courses-list_item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border: 2px solid black;\n  border-radius: 5px;\n  margin: 15px 15px;\n  padding: 10px;\n  background-color: rgba(252, 208, 142, 0.7);\n}\n\n.course-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.course-name[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n}\n\n.course-buttons[_ngcontent-%COMP%] {\n  width: 250px;\n  margin-left: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.course-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.topRatedCourse[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#ff682c, #ffbd42);\n}\n\n.greenBorder[_ngcontent-%COMP%] {\n  border: 4px solid #34C924;\n  box-shadow: 0 0 10px #19fa00;\n}\n\n.blueBorder[_ngcontent-%COMP%] {\n  border: 4px solid #1560BD;\n  box-shadow: 0 0 10px #0073ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtBQUNEOztBQUNBO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0FBRUQ7O0FBQUE7RUFDQyxnQkFBQTtBQUdEOztBQURBO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFJRDs7QUFBQztFQUNDLFdBQUE7QUFHRjs7QUFBQTtFQUNDLG1EQUFBO0FBR0Q7O0FBQUE7RUFDQyx5QkFBQTtFQUNBLDRCQUFBO0FBR0Q7O0FBQUE7RUFDQyx5QkFBQTtFQUNBLDRCQUFBO0FBR0QiLCJmaWxlIjoiY291cnNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdXJzZXMtbGlzdF9pdGVtIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0bWFyZ2luOiAxNXB4IDE1cHg7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZjZDA4ZSwgJGFscGhhOiAwLjcpO1xyXG59XHJcbi5jb3Vyc2UtdGl0bGUge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5jb3Vyc2UtbmFtZSB7XHJcblx0Zm9udC1zaXplOiAxLjNlbTtcclxufVxyXG4uY291cnNlLWJ1dHRvbnMge1xyXG5cdHdpZHRoOiAyNTBweDtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuLmNvdXJzZS1idXR0b24ge1xyXG5cclxuXHRidXR0b24ge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG59XHJcbi50b3BSYXRlZENvdXJzZSB7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigyNTUsIDEwNCwgNDQpLCByZ2IoMjU1LCAxODksIDY2KSk7XHJcbn1cclxuXHJcbi5ncmVlbkJvcmRlciB7XHJcblx0Ym9yZGVyOiA0cHggc29saWQgIzM0QzkyNDtcclxuXHRib3gtc2hhZG93OjAgMCAxMHB4ICMxOWZhMDA7XHJcbn1cclxuXHJcbi5ibHVlQm9yZGVye1xyXG5cdGJvcmRlcjogNHB4IHNvbGlkICMxNTYwQkQ7XHJcblx0Ym94LXNoYWRvdzowIDAgMTBweCAjMDA3M2ZmO1xyXG59XHJcbiJdfQ== */"], changeDetection: 0 });
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8


/***/ }),

/***/ "/ML/":
/*!**************************************************************************!*\
  !*** ./src/app/components/main/courses-pages/courses-pages.component.ts ***!
  \**************************************************************************/
/*! exports provided: CoursesPagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesPagesComponent", function() { return CoursesPagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
<<<<<<< HEAD


class CoursesPagesComponent {
    constructor() { }
}
CoursesPagesComponent.ɵfac = function CoursesPagesComponent_Factory(t) { return new (t || CoursesPagesComponent)(); };
CoursesPagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoursesPagesComponent, selectors: [["app-courses-pages"]], decls: 1, vars: 0, template: function CoursesPagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2VzLXBhZ2VzLmNvbXBvbmVudC5zY3NzIn0= */"] });
=======


class CoursesPagesComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
CoursesPagesComponent.ɵfac = function CoursesPagesComponent_Factory(t) { return new (t || CoursesPagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CoursesPagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoursesPagesComponent, selectors: [["app-courses-pages"]], decls: 1, vars: 0, template: function CoursesPagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2VzLXBhZ2VzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "/RYb":
/*!********************************************************************************************!*\
  !*** ./src/app/components/main/courses-pages/add-course-page/add-course-page.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AddCoursePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCoursePageComponent", function() { return AddCoursePageComponent; });
/* harmony import */ var _course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../course */ "9tKW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _courses_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../courses-list.service */ "vQOT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _course_duration_course_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../course/duration-course.pipe */ "uCPB");






class AddCoursePageComponent {
    constructor(coursesListService, route) {
        this.coursesListService = coursesListService;
        this.route = route;
        this.newCourse = {
            id: this.coursesListService.getCourseListLength() + 1,
            title: '',
            description: '',
            creationDate: new Date(),
            duration: 0,
            isTopRated: false,
        };
        this.isNewCourse = true;
    }
    checkCurrentRoute(id) {
        this.coursesListService.isAddCourseVisible = true;
        this.coursesListService.isCourseListVisible = false;
        if (typeof id !== 'undefined') {
            this.currentCourse = this.coursesListService.getCourseById(+id);
            if (typeof this.currentCourse !== 'string') {
                this.isNewCourse = false;
                this.newCourse = this.currentCourse;
            }
        }
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.checkCurrentRoute(params.id);
        });
    }
    createNewCourse() {
        if (this.isNewCourse) {
            this.coursesListService.addCourse(new _course__WEBPACK_IMPORTED_MODULE_0__["Course"](this.newCourse));
        }
        else {
            this.newCourse.creationDate = new Date(this.newCourse.creationDate);
        }
        this.coursesListService.toggleAddNewCourse();
    }
}
AddCoursePageComponent.ɵfac = function AddCoursePageComponent_Factory(t) { return new (t || AddCoursePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_courses_list_service__WEBPACK_IMPORTED_MODULE_2__["CoursesListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
AddCoursePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddCoursePageComponent, selectors: [["app-add-course-page"]], decls: 30, vars: 7, consts: [[1, "newCourseForm"], [1, "inputContainer"], [1, "inputContainer_input"], ["type", "text roundedBorders", "placeholder", "title", 1, "wideInput", "roundedBorders", 3, "ngModel", "ngModelChange"], ["rows", "5", "placeholder", "description", 1, "wideInput", "roundedBorders", 3, "ngModel", "ngModelChange"], ["type", "date", 1, "roundedBorders", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "duration min", 1, "roundedBorders", 3, "ngModel", "ngModelChange"], [1, "durationCourse"], ["type", "authors", "placeholder", "", 1, "roundedBorders", "wideInput"], [1, "buttonsContainer"], [1, "buttonsContainer_button", 3, "click"]], template: function AddCoursePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCoursePageComponent_Template_input_ngModelChange_5_listener($event) { return ctx.newCourse.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCoursePageComponent_Template_textarea_ngModelChange_9_listener($event) { return ctx.newCourse.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCoursePageComponent_Template_input_ngModelChange_13_listener($event) { return ctx.newCourse.creationDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Duration:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCoursePageComponent_Template_input_ngModelChange_17_listener($event) { return ctx.newCourse.duration = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "durationCourse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Authors:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddCoursePageComponent_Template_button_click_26_listener() { return ctx.createNewCourse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddCoursePageComponent_Template_button_click_28_listener() { return ctx.coursesListService.toggleAddNewCourse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newCourse.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newCourse.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newCourse.creationDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newCourse.duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 5, ctx.newCourse.duration));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"]], pipes: [_course_duration_course_pipe__WEBPACK_IMPORTED_MODULE_5__["DurationCoursePipe"]], styles: [".newCourseForm[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.inputContainer[_ngcontent-%COMP%] {\n  height: calc(80vh - 40px);\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  border: 2px solid black;\n  border-radius: 5px;\n  background-image: linear-gradient(#ffae00, #fcc867);\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.buttonsContainer[_ngcontent-%COMP%] {\n  width: 40%;\n  margin: 10px;\n  display: flex;\n  justify-content: space-around;\n}\n\n.buttonsContainer_button[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\n.durationCourse[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n.wideInput[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFkZC1jb3Vyc2UtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7QUFDRDs7QUFFQTtFQUNDLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1EQUFBO0FBQ0Q7O0FBRUE7RUFDQyxVQUFBO0FBQ0Q7O0FBRUE7RUFDQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUNEOztBQUNDO0VBQ0MsV0FBQTtBQUNGOztBQUdBO0VBQ0MsY0FBQTtBQUFEOztBQUdBO0VBQ0EsV0FBQTtBQUFBIiwiZmlsZSI6ImFkZC1jb3Vyc2UtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdDb3Vyc2VGb3JtIHtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uaW5wdXRDb250YWluZXIge1xyXG5cdGhlaWdodDogY2FsYyg4MHZoIC0gNDBweCk7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMjU1LCAxNzQsIDApLCByZ2IoMjUyLCAyMDAsIDEwMykpO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcblx0d2lkdGg6IDMwJTtcclxufVxyXG5cclxuLmJ1dHRvbnNDb250YWluZXIge1xyXG5cdHdpZHRoOiA0MCU7XHJcblx0bWFyZ2luOiAxMHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG5cdCZfYnV0dG9uIHtcclxuXHRcdHdpZHRoOiA4MHB4O1xyXG5cdH1cclxufVxyXG5cclxuLmR1cmF0aW9uQ291cnNlIHtcclxuXHRtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuLndpZGVJbnB1dCB7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Desktop\angular-epam\dev\software-engineering-l1\my-ang-app\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorization/authorization.service */ "rWs1");


class HeaderComponent {
    constructor(authorizationService) {
        this.authorizationService = authorizationService;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 11, vars: 1, consts: [[1, "header"], [1, "logo"], [1, "logo_image"], ["src", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/120px-Angular_full_color_logo.svg.png", "alt", "Angular", "width", "50"], [1, "logo_title"], [1, "account"], [1, "account_user"], [3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Super courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_9_listener() { return ctx.authorizationService.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Log out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.authorizationService.getUserInfo(), " ");
    } }, styles: [".header[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 15px;\n  display: flex;\n  border-bottom: 2px solid black;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(255, 136, 0, 0.5);\n}\n\n.logo[_ngcontent-%COMP%], .account[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.account_user[_ngcontent-%COMP%], .logo_title[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtBQUNEOztBQUVBO0VBQ0MsYUFBQTtBQUNEOztBQUVBO0VBQ0MsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNEIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmc6IDAgMTVweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmODgwMDgwLCAkYWxwaGE6IDAuNSk7XHJcbn1cclxuXHJcbi5sb2dvLCAuYWNjb3VudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmFjY291bnRfdXNlciwgLmxvZ29fdGl0bGUge1xyXG5cdG1hcmdpbjogMCAxMHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8


/***/ }),

/***/ "/RYb":
/*!********************************************************************************************!*\
  !*** ./src/app/components/main/courses-pages/add-course-page/add-course-page.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AddCoursePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCoursePageComponent", function() { return AddCoursePageComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Interfaces_and_classes_course_course__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Interfaces-and-classes/course/course */ "B16k");
/* harmony import */ var _input_date_date_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-date/date-validator */ "Lg+l");
/* harmony import */ var _input_duration_duration_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-duration/duration-validator */ "qzLD");
/* harmony import */ var src_app_store_courses_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/courses.action */ "aNRM");
/* harmony import */ var src_app_store_courses_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/courses.selector */ "sPvx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _courses_list_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../courses-list.service */ "vQOT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_http_authors_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/http/authors-http.service */ "gLtC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _input_date_input_date_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./input-date/input-date.component */ "g9Zw");
/* harmony import */ var _input_duration_input_duration_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./input-duration/input-duration.component */ "u/VD");
/* harmony import */ var _input_authors_input_authors_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./input-authors/input-authors.component */ "1UMN");
/* harmony import */ var _course_duration_course_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../course/duration-course.pipe */ "uCPB");





<<<<<<< HEAD
=======
function AuthorizationComponent_app_authorization_error_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-authorization-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeErrorComponent", function AuthorizationComponent_app_authorization_error_0_Template_app_authorization_error_closeErrorComponent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.authorizationService.toggleErrorComponent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AuthorizationComponent {
    constructor(authorizationService) {
        this.authorizationService = authorizationService;
    }
    backDropClick(event) {
        console.log(event.currentTarget);
    }
    toggleLogIn() {
        this.authorizationService.login();
    }
    closeLogIn() {
        if (this.authorizationService.isAuthorized) {
            this.authorizationService.closeLogIn();
        }
    }
}
AuthorizationComponent.ɵfac = function AuthorizationComponent_Factory(t) { return new (t || AuthorizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"])); };
AuthorizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthorizationComponent, selectors: [["app-authorization"]], decls: 17, vars: 3, consts: [[3, "closeErrorComponent", 4, "appValidation"], [1, "backdrop", 3, "click"], [1, "logInWrapper", "modalWrapper"], [1, "close", 3, "click"], [1, "LogInSignUp__title"], [1, ""], ["type", "text", "placeholder", "name", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "password", "required", "", 3, "ngModel", "ngModelChange"], [3, "click"], [3, "closeErrorComponent"]], template: function AuthorizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AuthorizationComponent_app_authorization_error_0_Template, 1, 0, "app-authorization-error", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorizationComponent_Template_div_click_1_listener($event) { return ctx.backDropClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorizationComponent_Template_div_click_3_listener() { return ctx.closeLogIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "UserName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AuthorizationComponent_Template_input_ngModelChange_10_listener($event) { return ctx.authorizationService.userNameInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AuthorizationComponent_Template_input_ngModelChange_14_listener($event) { return ctx.authorizationService.userPasswordInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorizationComponent_Template_button_click_15_listener() { return ctx.authorizationService.submitAuthorization(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appValidation", ctx.authorizationService.isErrorModalVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.authorizationService.userNameInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.authorizationService.userPasswordInput);
    } }, directives: [_validation_directive__WEBPACK_IMPORTED_MODULE_2__["ValidationDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _authorization_error_authorization_error_component__WEBPACK_IMPORTED_MODULE_4__["AuthorizationErrorComponent"]], styles: [".logInWrapper[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 300px;\n  background-color: #6cbdff;\n}\n\n.LogInSignUp__title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ninput[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\ninput[_ngcontent-%COMP%]:invalid, input[_ngcontent-%COMP%]:invalid:required {\n  border: 2px solid red;\n  border-radius: 5px;\n  background-color: #ff9595;\n}\n\ninput[_ngcontent-%COMP%]:valid {\n  border: 2px solid black;\n  border-radius: 5px;\n}\n\n.errorMessage[_ngcontent-%COMP%] {\n  margin: 20px;\n  text-align: center;\n}\n\n.closeErrorMessageButton[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhdXRob3JpemF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUNEOztBQUNBO0VBQ0Msa0JBQUE7QUFFRDs7QUFDQTtFQUNDLFlBQUE7QUFFRDs7QUFDQTtFQUNFLHFCQUFBO0VBQ0Qsa0JBQUE7RUFDQSx5QkFBQTtBQUVEOztBQUNBO0VBQ0UsdUJBQUE7RUFDRCxrQkFBQTtBQUVEOztBQUNBO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0FBRUQ7O0FBQUE7RUFDQyxhQUFBO0FBR0QiLCJmaWxlIjoiYXV0aG9yaXphdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dJbldyYXBwZXIge1xyXG5cdHdpZHRoOiAyNTBweDtcclxuXHRoZWlnaHQ6IDMwMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigxMDgsIDE4OSwgMjU1KTtcclxufVxyXG4uTG9nSW5TaWduVXBfX3RpdGxlIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuXHRwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbmlucHV0OmludmFsaWQsIGlucHV0OmludmFsaWQ6cmVxdWlyZWR7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNDksIDE0OSk7XHJcbn1cclxuXHJcbmlucHV0OnZhbGlkIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5lcnJvck1lc3NhZ2Uge1xyXG5cdG1hcmdpbjogMjBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNsb3NlRXJyb3JNZXNzYWdlQnV0dG9uIHtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8








<<<<<<< HEAD




function AddCoursePageComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " invalid title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AddCoursePageComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " invalid description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AddCoursePageComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " invalid year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AddCoursePageComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " invalid duration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AddCoursePageComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " invalid authors ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class AddCoursePageComponent {
    constructor(store, coursesListService, route, formBuilder, authorsHttpService) {
        this.store = store;
        this.coursesListService = coursesListService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.authorsHttpService = authorsHttpService;
        this.authorsArray = [];
        this.isNewCourse = true;
        this.authorsFromBackEnd = this.authorsHttpService.getAuthors();
        this.store.select(src_app_store_courses_selector__WEBPACK_IMPORTED_MODULE_5__["CoursesSelectors"].activeCourse).subscribe(activeCourse => {
            this.currentCourse = activeCourse;
        });
        this.courseControl = this.formBuilder.group({
            _id: [''],
            id: [''],
            title: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50)
                ]],
            description: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(500)
                ]],
            creationDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, Object(_input_date_date_validator__WEBPACK_IMPORTED_MODULE_2__["DateValidator"])()]],
            duration: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, Object(_input_duration_duration_validator__WEBPACK_IMPORTED_MODULE_3__["DurationValidator"])()]],
            authors: this.formBuilder.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            isTopRated: [false],
        });
        this.dateControl = this.courseControl.controls.creationDate;
        this.durationControl = this.courseControl.controls.duration;
        this.authorsControl = this.courseControl.controls.authors;
        this.authorsFromBackEnd.subscribe(value => {
            value.forEach(author => {
                this.authorsArray.push(author);
            });
        });
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.checkCurrentRoute(params.id);
        });
    }
    get _title() {
        return this.courseControl.get('title');
    }
    get _description() {
        return this.courseControl.get('description');
    }
    get _date() {
        return this.courseControl.get('creationDate');
    }
    get _duration() {
        return this.courseControl.get('duration');
    }
    get _authors() {
        return this.courseControl.get('authors');
    }
    get _isTopRated() {
        return this.courseControl.get('isTopRated');
    }
    checkCurrentRoute(id) {
        this.coursesListService.isCourseListVisible = false;
        if (typeof this.currentCourse !== 'undefined') {
            if (typeof this.currentCourse !== 'string') {
                this.isNewCourse = false;
                this.courseControl.controls.id.setValue(this.currentCourse.id);
                this.courseControl.controls.title.setValue(this.currentCourse.title);
                this.courseControl.controls.description.setValue(this.currentCourse.description);
                this.courseControl.controls.creationDate.setValue(this.currentCourse.creationDate);
                this.courseControl.controls.duration.setValue(this.currentCourse.duration);
                this.courseControl.controls.isTopRated.setValue(this.currentCourse.isTopRated);
                this.currentCourse.authors.forEach(author => {
                    this.courseControl.controls.authors.controls.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](author));
                });
            }
        }
    }
    closeAddCoursePage() {
        this.store.dispatch(src_app_store_courses_action__WEBPACK_IMPORTED_MODULE_4__["CoursesActions"].deactivateCourse());
        this.coursesListService.toggleAddNewCourse();
    }
    createNewCourse() {
        if (this.isNewCourse) {
            this.store.dispatch(src_app_store_courses_action__WEBPACK_IMPORTED_MODULE_4__["CoursesActions"].addNewCourse({ course: new _Interfaces_and_classes_course_course__WEBPACK_IMPORTED_MODULE_1__["Course"](this.courseControl.value) }));
        }
        else {
            this.store.dispatch(src_app_store_courses_action__WEBPACK_IMPORTED_MODULE_4__["CoursesActions"].putCourse({ course: this.courseControl.value, id: this.courseControl.value.id }));
        }
        this.closeAddCoursePage();
    }
}
AddCoursePageComponent.ɵfac = function AddCoursePageComponent_Factory(t) { return new (t || AddCoursePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_courses_list_service__WEBPACK_IMPORTED_MODULE_8__["CoursesListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_http_authors_http_service__WEBPACK_IMPORTED_MODULE_10__["AuthorsHttpService"])); };
AddCoursePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AddCoursePageComponent, selectors: [["app-add-course-page"]], decls: 41, vars: 14, consts: [[1, "newCourseForm"], [1, "inputContainer"], [3, "formGroup"], [1, "inputContainer_input"], [4, "ngIf"], ["formControlName", "title", "type", "text", "placeholder", "title"], ["formControlName", "description", "type", "text", "placeholder", "description"], [3, "dateControl"], [3, "durationControl"], [1, "durationCourse"], [3, "authorsArray", "authorsControl"], [1, "buttonsContainer"], [1, "buttonsContainer_button", 3, "disabled", "click"], [1, "buttonsContainer_button", 3, "click"]], template: function AddCoursePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AddCoursePageComponent_span_7_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, AddCoursePageComponent_span_13_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, AddCoursePageComponent_span_19_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "app-input-date", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Duration:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, AddCoursePageComponent_span_25_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "app-input-duration", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](29, "durationCourse");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Authors:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, AddCoursePageComponent_span_34_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "app-input-authors", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddCoursePageComponent_Template_button_click_37_listener() { return ctx.createNewCourse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddCoursePageComponent_Template_button_click_39_listener() { return ctx.closeAddCoursePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.courseControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx._title == null ? null : ctx._title.invalid) && ((ctx._title == null ? null : ctx._title.touched) || (ctx._title == null ? null : ctx._title.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx._description == null ? null : ctx._description.invalid) && ((ctx._description == null ? null : ctx._description.touched) || (ctx._description == null ? null : ctx._description.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx._date == null ? null : ctx._date.invalid) && ((ctx._date == null ? null : ctx._date.touched) || (ctx._date == null ? null : ctx._date.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dateControl", ctx.dateControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx._duration == null ? null : ctx._duration.invalid) && ((ctx._duration == null ? null : ctx._duration.touched) || (ctx._duration == null ? null : ctx._duration.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("durationControl", ctx.durationControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](29, 12, ctx.courseControl.controls["duration"].value));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx._authors == null ? null : ctx._authors.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("authorsArray", ctx.authorsArray)("authorsControl", ctx.authorsControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.courseControl.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _input_date_input_date_component__WEBPACK_IMPORTED_MODULE_12__["InputDateComponent"], _input_duration_input_duration_component__WEBPACK_IMPORTED_MODULE_13__["InputDurationComponent"], _input_authors_input_authors_component__WEBPACK_IMPORTED_MODULE_14__["InputAuthorsComponent"]], pipes: [_course_duration_course_pipe__WEBPACK_IMPORTED_MODULE_15__["DurationCoursePipe"]], styles: [".newCourseForm[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.inputContainer[_ngcontent-%COMP%] {\n  height: calc(80vh - 40px);\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  border: 2px solid black;\n  border-radius: 5px;\n  background-image: linear-gradient(#ffae00, #fcc867);\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.buttonsContainer[_ngcontent-%COMP%] {\n  width: 40%;\n  margin: 10px;\n  display: flex;\n  justify-content: space-around;\n}\n\n.buttonsContainer_button[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\n.durationCourse[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n.wideInput[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFkZC1jb3Vyc2UtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7QUFDRDs7QUFFQTtFQUNDLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1EQUFBO0FBQ0Q7O0FBRUE7RUFDQyxVQUFBO0FBQ0Q7O0FBRUE7RUFDQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUNEOztBQUNDO0VBQ0MsV0FBQTtBQUNGOztBQUdBO0VBQ0MsY0FBQTtBQUFEOztBQUdBO0VBQ0EsV0FBQTtBQUFBIiwiZmlsZSI6ImFkZC1jb3Vyc2UtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdDb3Vyc2VGb3JtIHtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uaW5wdXRDb250YWluZXIge1xyXG5cdGhlaWdodDogY2FsYyg4MHZoIC0gNDBweCk7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMjU1LCAxNzQsIDApLCByZ2IoMjUyLCAyMDAsIDEwMykpO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcblx0d2lkdGg6IDMwJTtcclxufVxyXG5cclxuLmJ1dHRvbnNDb250YWluZXIge1xyXG5cdHdpZHRoOiA0MCU7XHJcblx0bWFyZ2luOiAxMHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG5cdCZfYnV0dG9uIHtcclxuXHRcdHdpZHRoOiA4MHB4O1xyXG5cdH1cclxufVxyXG5cclxuLmR1cmF0aW9uQ291cnNlIHtcclxuXHRtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuLndpZGVJbnB1dCB7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });
=======
/***/ "9tKW":
/*!*********************************************************!*\
  !*** ./src/app/components/main/courses-pages/course.ts ***!
  \*********************************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
class Course {
    constructor(course) {
        this.id = course.id;
        this.title = course.title;
        this.creationDate = new Date(course.creationDate);
        this.duration = course.duration;
        this.description = course.description;
        this.isTopRated = course.isTopRated;
    }
}
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Desktop\angular-epam\dev\software-engineering-l1\my-ang-app\src\main.ts */"zUnb");


/***/ }),

<<<<<<< HEAD
/***/ "1LyM":
/*!******************************************!*\
  !*** ./src/app/store/courses.reducer.ts ***!
  \******************************************/
/*! exports provided: reducer */
=======
/***/ "CvBj":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/main/courses-pages/course-list-page/search-add/search-add.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: SearchAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAddComponent", function() { return SearchAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class SearchAddComponent {
    constructor() {
        this.searchCourses = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleAddNewCourse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputSearchCourses = '';
        this.newCourseFormVisible = false;
    }
    emitTextForSearching() {
        console.log(`Input value \'${this.inputSearchCourses}\'`);
        this.searchCourses.emit(this.inputSearchCourses);
    }
    showAddCoursePage() {
        this.toggleAddNewCourse.emit();
    }
}
SearchAddComponent.ɵfac = function SearchAddComponent_Factory(t) { return new (t || SearchAddComponent)(); };
SearchAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchAddComponent, selectors: [["app-search-add"]], outputs: { searchCourses: "searchCourses", toggleAddNewCourse: "toggleAddNewCourse" }, decls: 7, vars: 1, consts: [[1, "search-add"], [1, "search-control"], ["type", "text", "placeholder", "Searching courses", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function SearchAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchAddComponent_Template_input_ngModelChange_2_listener($event) { return ctx.inputSearchCourses = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchAddComponent_Template_button_click_3_listener() { return ctx.emitTextForSearching(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchAddComponent_Template_button_click_5_listener() { return ctx.showAddCoursePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputSearchCourses);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".search-add[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.search-add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .search-add[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n}\n.search-add[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.search-control[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzZWFyY2gtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0FBQ0Q7QUFDQztFQUNDLGlCQUFBO0FBQ0Y7QUFFQztFQUNDLFVBQUE7QUFBRjtBQUlBO0VBQ0MsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUREIiwiZmlsZSI6InNlYXJjaC1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWFkZCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG5cdGJ1dHRvbiwgaW5wdXQge1xyXG5cdFx0cGFkZGluZzogNXB4IDEwcHg7XHJcblx0fTtcclxuXHJcblx0aW5wdXQge1xyXG5cdFx0d2lkdGg6IDgwJTtcclxuXHR9O1xyXG59O1xyXG5cclxuLnNlYXJjaC1jb250cm9sIHtcclxuXHR3aWR0aDogNTAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Huzx":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/main/courses-pages/course-list-page/order-by-creation-date.pipe.ts ***!
  \***********************************************************************************************/
/*! exports provided: OrderByCreationDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByCreationDatePipe", function() { return OrderByCreationDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class OrderByCreationDatePipe {
    transform(coursesList) {
        return coursesList.sort((currentCourse, nextCourse) => {
            return (currentCourse.creationDate < nextCourse.creationDate) ? -1
                : (currentCourse.creationDate > nextCourse.creationDate) ? 1 : 0;
        });
    }
}
OrderByCreationDatePipe.ɵfac = function OrderByCreationDatePipe_Factory(t) { return new (t || OrderByCreationDatePipe)(); };
OrderByCreationDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "orderByCreationDate", type: OrderByCreationDatePipe, pure: true });


/***/ }),

/***/ "IURz":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _courses_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses.action */ "aNRM");
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumbs/breadcrumbs.component */ "uGCx");
/* harmony import */ var _courses_pages_courses_pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courses-pages/courses-pages.component */ "/ML/");



class MainComponent {
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 3, vars: 0, consts: [[1, "breadcrumbs-container"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-breadcrumbs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-courses-pages");
    } }, directives: [_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbsComponent"], _courses_pages_courses_pages_component__WEBPACK_IMPORTED_MODULE_2__["CoursesPagesComponent"]], styles: [".breadcrumbs-container[_ngcontent-%COMP%] {\n  height: 5vh;\n  padding: 0 15px;\n  border-bottom: 2px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUNEIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWRjcnVtYnMtY29udGFpbmVyIHtcclxuXHRoZWlnaHQ6IDV2aDtcclxuXHRwYWRkaW5nOiAwIDE1cHg7XHJcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8


const initialState = {
    courseList: [],
    activeCourse: undefined,
    pageSize: 5,
    pagesNumbers: [1, 2],
    currentPage: 1,
};
const exampleReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_courses_action__WEBPACK_IMPORTED_MODULE_1__["CoursesActions"].activateCourse, (state, data) => (Object.assign(Object.assign({}, state), { activeCourse: data.activeCourse }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_courses_action__WEBPACK_IMPORTED_MODULE_1__["CoursesActions"].deactivateCourse, (state) => (Object.assign(Object.assign({}, state), { activeCourse: undefined }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_courses_action__WEBPACK_IMPORTED_MODULE_1__["CoursesActions"].getCoursesDataSuccess, (state, { data }) => (Object.assign(Object.assign({}, state), { courseList: data.list, pagesNumbers: data.pagesNumbers }))));
function reducer(state, action) {
    return exampleReducer(state, action);
}


/***/ }),

<<<<<<< HEAD
/***/ "1UMN":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/main/courses-pages/add-course-page/input-authors/input-authors.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: InputAuthorsComponent */
=======
/***/ "ODOa":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/main/courses-pages/course-list-page/course-list-page.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CoursesListPageComponent */
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputAuthorsComponent", function() { return InputAuthorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesListPageComponent", function() { return CoursesListPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _courses_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../courses-list.service */ "vQOT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _search_add_search_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-add/search-add.component */ "CvBj");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../course/course.component */ "/9jC");
/* harmony import */ var _order_by_creation_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-by-creation-date.pipe */ "Huzx");
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8




<<<<<<< HEAD
function InputAuthorsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputAuthorsComponent_div_2_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removeAuthorTag(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authorTag_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", authorTag_r3.value.firstName, " ", authorTag_r3.value.lastName, " ");
} }
function InputAuthorsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputAuthorsComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const author_r7 = ctx.$implicit; const i_r8 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.pushAuthorToArray(author_r7, i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const author_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", author_r7.firstName, " ", author_r7.lastName, " ");
} }
class InputAuthorsComponent {
    constructor() {
        this.suggestAuthors = [];
    }
    removeAuthorTag(index) {
        this.suggestAuthors.push(this.authorsControl.controls[index].value);
        this.authorsControl.removeAt(index);
    }
    pushAuthorToArray(author, index) {
        this.authorsControl.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](author));
        this.suggestAuthors.splice(index, 1);
    }
    isSuggestAuthor(value, author) {
        let resultOfFirstName = !!author.firstName.match(new RegExp(value, 'i'));
        resultOfFirstName = resultOfFirstName && !this.authorsControl.value.includes(author.firstName);
        let resultOfSecondName = !!author.lastName.match(new RegExp(value, 'i'));
        resultOfSecondName = resultOfSecondName && !this.authorsControl.value.includes(author.lastName);
        return resultOfFirstName || resultOfSecondName;
    }
    searchAuthorsInArray(searchingValue) {
        if (searchingValue.trim() === '') {
            this.suggestAuthors = [];
        }
        else {
            this.suggestAuthors = this.authorsArray.filter(author => this.isSuggestAuthor(searchingValue, author));
        }
=======


function CoursesListPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesListPageComponent_div_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.toggleConfirmModalToDeleteCourse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Do you really want to delete this course?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesListPageComponent_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removeCourse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesListPageComponent_div_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.toggleConfirmModalToDeleteCourse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoursesListPageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " no data. feel free to add new course. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoursesListPageComponent_app_course_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-course", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deletedCourse", function CoursesListPageComponent_app_course_6_Template_app_course_deletedCourse_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const i_r8 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.toggleConfirmModalToDeleteCourse(ctx_r9.coursesCatalog[i_r8].id); })("editToCourse", function CoursesListPageComponent_app_course_6_Template_app_course_editToCourse_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const i_r8 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.openEditToCourse(ctx_r11.coursesCatalog[i_r8]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("course", ctx_r2.coursesCatalog[i_r8]);
} }
class CoursesListPageComponent {
    constructor(coursesList) {
        this.coursesList = coursesList;
        this.coursesCatalog = this.coursesList.getCourseList();
        this.isCourseListEmpty = this.coursesList.isCourseListDataEmpty;
        this.isDeleteCourseContainerVisible = false;
    }
    showMoreCourses() {
        console.log('Load more');
    }
    toggleConfirmModalToDeleteCourse(id) {
        this.isDeleteCourseContainerVisible = !this.isDeleteCourseContainerVisible;
        if (id) {
            this.currentDeletionCourseId = id;
        }
    }
    openEditToCourse(course) {
        this.coursesList.openEditCourse(course);
    }
    removeCourse() {
        this.isDeleteCourseContainerVisible = false;
        this.coursesList.removeCourse(this.currentDeletionCourseId);
        this.isCourseListEmpty = this.coursesList.isCourseListDataEmpty;
    }
    searchCourses(currentInput) {
        this.coursesCatalog = this.coursesList.getFilteredCourseList(currentInput);
    }
    toggleAddNewCourse() {
        this.coursesList.toggleAddNewCourse();
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8
    }
    writeValue() { }
    registerOnChange(fn) { }
    registerOnTouched(fn) { }
}
<<<<<<< HEAD
InputAuthorsComponent.ɵfac = function InputAuthorsComponent_Factory(t) { return new (t || InputAuthorsComponent)(); };
InputAuthorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputAuthorsComponent, selectors: [["app-input-authors"]], inputs: { authorsArray: "authorsArray", authorsControl: "authorsControl" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => InputAuthorsComponent),
                multi: true
            }])], decls: 7, vars: 2, consts: [[1, "authors"], [1, "tagContainer"], ["class", "authors_tag", 4, "ngFor", "ngForOf"], ["type", "text", 1, "authors_input", 3, "input"], ["authorNameInput", ""], [1, "container-authors_suggested"], ["class", "authors_suggested", 3, "click", 4, "ngFor", "ngForOf"], [1, "authors_tag"], [1, "authors_tag_name"], [1, "authors_tag_remove", 3, "click"], [1, "authors_suggested", 3, "click"]], template: function InputAuthorsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputAuthorsComponent_div_2_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputAuthorsComponent_Template_input_input_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.searchAuthorsInArray(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InputAuthorsComponent_div_6_Template, 2, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.authorsControl.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.suggestAuthors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".authors[_ngcontent-%COMP%] {\n  margin: 10px;\n  background: white;\n}\n\n.tagContainer[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 5px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.authors_tag[_ngcontent-%COMP%] {\n  margin: 2px;\n  padding: 2px;\n  border: 1px solid black;\n  display: flex;\n  align-items: center;\n  border-radius: 3px;\n  background: #ffbd66;\n}\n\n.authors_tag[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.authors_tag_remove[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n\n.authors_input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 5px;\n  outline: none;\n  border: 0;\n}\n\n.authors_suggested[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0);\n}\n\n.authors_suggested[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  border-bottom: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxpbnB1dC1hdXRob3JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0FBQ0Q7O0FBRUE7RUFDQyx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNEOztBQUVBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRDs7QUFFQTtFQUNDLGVBQUE7QUFDRDs7QUFFQTtFQUNDLHdCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBQ0Q7O0FBRUE7RUFDQywrQ0FBQTtBQUNEOztBQUVBO0VBQ0MsZUFBQTtFQUNBLDhCQUFBO0FBQ0QiLCJmaWxlIjoiaW5wdXQtYXV0aG9ycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRob3JzIHtcclxuXHRtYXJnaW46IDEwcHg7XHJcblx0YmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi50YWdDb250YWluZXIge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG5cdHBhZGRpbmc6IDVweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmF1dGhvcnNfdGFnIHtcclxuXHRtYXJnaW46IDJweDtcclxuXHRwYWRkaW5nOiAycHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxODksIDEwMik7XHJcbn1cclxuXHJcbi5hdXRob3JzX3RhZzpob3ZlciB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYXV0aG9yc190YWdfcmVtb3ZlIHtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi5hdXRob3JzX2lucHV0IHtcclxuXHRmbGV4OiAxO1xyXG5cdHBhZGRpbmc6IDVweDtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGJvcmRlcjogMDtcclxufVxyXG5cclxuLmF1dGhvcnNfc3VnZ2VzdGVkIHtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxufVxyXG5cclxuLmF1dGhvcnNfc3VnZ2VzdGVkOmhvdmVyIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorization/authorization.service */ "rWs1");


class HeaderComponent {
    constructor(authorizationService) {
        this.authorizationService = authorizationService;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 11, vars: 1, consts: [[1, "header"], [1, "logo"], [1, "logo_image"], ["src", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/120px-Angular_full_color_logo.svg.png", "alt", "Angular", "width", "50"], [1, "logo_title"], [1, "account"], [1, "account_user"], [3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Super courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_9_listener() { return ctx.authorizationService.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Log out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.authorizationService.userLogin, " ");
    } }, styles: [".header[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 15px;\n  display: flex;\n  border-bottom: 2px solid black;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(255, 136, 0, 0.5);\n}\n\n.logo[_ngcontent-%COMP%], .account[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.account_user[_ngcontent-%COMP%], .logo_title[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtBQUNEOztBQUVBO0VBQ0MsYUFBQTtBQUNEOztBQUVBO0VBQ0MsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNEIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmc6IDAgMTVweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmODgwMDgwLCAkYWxwaGE6IDAuNSk7XHJcbn1cclxuXHJcbi5sb2dvLCAuYWNjb3VudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmFjY291bnRfdXNlciwgLmxvZ29fdGl0bGUge1xyXG5cdG1hcmdpbjogMCAxMHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "35Jx":
/*!*******************************************!*\
  !*** ./src/app/store/putCourse.effect.ts ***!
  \*******************************************/
/*! exports provided: PutCourseEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PutCourseEffects", function() { return PutCourseEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _courses_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./courses.action */ "aNRM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_courses_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http/courses-http.service */ "ugVf");







class PutCourseEffects {
    constructor(action$, coursesHttpService) {
        this.action$ = action$;
        this.coursesHttpService = coursesHttpService;
        this.putCourse$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_courses_action__WEBPACK_IMPORTED_MODULE_3__["CoursesActions"].putCourse), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((course) => this.coursesHttpService.putCourse(course.id, course.course).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => _courses_action__WEBPACK_IMPORTED_MODULE_3__["CoursesActions"].getCoursesData()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"])))));
    }
}
PutCourseEffects.ɵfac = function PutCourseEffects_Factory(t) { return new (t || PutCourseEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_http_courses_http_service__WEBPACK_IMPORTED_MODULE_5__["CoursesHttpService"])); };
PutCourseEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PutCourseEffects, factory: PutCourseEffects.ɵfac });


/***/ }),

/***/ "3z/U":
/*!******************************************************************!*\
  !*** ./src/app/http/interceptors/loading-interceptor.service.ts ***!
  \******************************************************************/
/*! exports provided: LoadingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingInterceptor", function() { return LoadingInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _courses_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../courses-http.service */ "ugVf");



class LoadingInterceptor {
    constructor(coursesHttpService) {
        this.coursesHttpService = coursesHttpService;
    }
    intercept(request, next) {
        this.coursesHttpService.show();
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(() => {
            this.coursesHttpService.hide();
        }));
    }
}
LoadingInterceptor.ɵfac = function LoadingInterceptor_Factory(t) { return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_courses_http_service__WEBPACK_IMPORTED_MODULE_2__["CoursesHttpService"])); };
LoadingInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoadingInterceptor, factory: LoadingInterceptor.ɵfac });


/***/ }),

/***/ "8A2Y":
/*!*********************************************************************!*\
  !*** ./src/app/components/authorization/authorization.component.ts ***!
  \*********************************************************************/
/*! exports provided: AuthorizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationComponent", function() { return AuthorizationComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorization.service */ "rWs1");
/* harmony import */ var _validation_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation.directive */ "939I");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _authorization_error_authorization_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authorization-error/authorization-error.component */ "yXZF");







function AuthorizationComponent_app_authorization_error_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-authorization-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closeErrorComponent", function AuthorizationComponent_app_authorization_error_0_Template_app_authorization_error_closeErrorComponent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.authorizationService.toggleErrorComponent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AuthorizationComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "invalid name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AuthorizationComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AuthorizationComponent_div_8_div_1_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "UserName");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AuthorizationComponent_div_8_Template_input_input_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.checkUserInput(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1._name == null ? null : ctx_r1._name.invalid) && ((ctx_r1._name == null ? null : ctx_r1._name.touched) || (ctx_r1._name == null ? null : ctx_r1._name.dirty)));
} }
function AuthorizationComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "invalid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AuthorizationComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "invalid password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AuthorizationComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Log In");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AuthorizationComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AuthorizationComponent {
    constructor(authorizationService, formBuilder) {
        this.authorizationService = authorizationService;
        this.formBuilder = formBuilder;
        this.isButtonDisabled = true;
        this.authControl = this.formBuilder.group({
            userName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)
                ]],
            userEmail: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.authorizationService.validationUserEmail)
                ]],
            userPassword: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)
                ]],
        });
    }
    get _name() {
        return this.authControl.get('userName');
    }
    get _email() {
        return this.authControl.get('userEmail');
    }
    get _password() {
        return this.authControl.get('userPassword');
    }
    switchCheckbox() {
        this.authorizationService.isLogIn = !this.authorizationService.isLogIn;
        this.checkUserInput();
    }
    checkUserInput() {
        var _a, _b, _c;
        this.isButtonDisabled = !!((_a = this._password) === null || _a === void 0 ? void 0 : _a.invalid);
        this.isButtonDisabled = this.isButtonDisabled || !!((_b = this._email) === null || _b === void 0 ? void 0 : _b.invalid);
        if (!this.authorizationService.isLogIn) {
            this.isButtonDisabled = this.isButtonDisabled || !!((_c = this._name) === null || _c === void 0 ? void 0 : _c.invalid);
        }
    }
    submitAuth() {
        this.authorizationService.submitAuth(this.authControl);
    }
    closeLogIn() {
        if (this.authorizationService.isAuthorized) {
            this.authorizationService.closeLogIn();
        }
    }
}
AuthorizationComponent.ɵfac = function AuthorizationComponent_Factory(t) { return new (t || AuthorizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
AuthorizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuthorizationComponent, selectors: [["app-authorization"]], decls: 24, vars: 8, consts: [[3, "closeErrorComponent", 4, "appValidation"], [1, "backdrop"], [1, "logInWrapper", "modalWrapper"], [1, "close", 3, "click"], [1, "LogInSignUp__title"], ["type", "checkbox", 1, "toggle", 3, "click"], [3, "formGroup"], [4, "ngIf"], ["formControlName", "userEmail", "type", "text", "placeholder", "name", 3, "input"], ["formControlName", "userPassword", "type", "text", "placeholder", "password", 3, "input"], [3, "disabled", "click"], [3, "closeErrorComponent"], ["formControlName", "userName", "type", "text", "placeholder", "name", 3, "input"]], template: function AuthorizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AuthorizationComponent_app_authorization_error_0_Template, 1, 0, "app-authorization-error", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthorizationComponent_Template_div_click_3_listener() { return ctx.closeLogIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthorizationComponent_Template_input_click_6_listener() { return ctx.switchCheckbox(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AuthorizationComponent_div_8_Template, 6, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AuthorizationComponent_div_10_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AuthorizationComponent_Template_input_input_14_listener() { return ctx.checkUserInput(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AuthorizationComponent_div_16_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AuthorizationComponent_Template_input_input_20_listener() { return ctx.checkUserInput(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthorizationComponent_Template_button_click_21_listener() { return ctx.submitAuth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AuthorizationComponent_span_22_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AuthorizationComponent_span_23_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appValidation", ctx.authorizationService.isErrorModalVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.authControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.authorizationService.isLogIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx._email == null ? null : ctx._email.invalid) && ((ctx._email == null ? null : ctx._email.touched) || (ctx._email == null ? null : ctx._email.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx._password == null ? null : ctx._password.invalid) && ((ctx._password == null ? null : ctx._password.touched) || (ctx._password == null ? null : ctx._password.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isButtonDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authorizationService.isLogIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.authorizationService.isLogIn);
    } }, directives: [_validation_directive__WEBPACK_IMPORTED_MODULE_3__["ValidationDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _authorization_error_authorization_error_component__WEBPACK_IMPORTED_MODULE_5__["AuthorizationErrorComponent"]], styles: [".logInWrapper[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 450px;\n  background-color: #6cbdff;\n}\n\n.LogInSignUp__title[_ngcontent-%COMP%] {\n  display: flex;\n  width: 80%;\n  justify-content: space-around;\n  text-align: center;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: rgba(43, 255, 0, 0.671);\n  border: 2px solid black;\n}\n\ninput[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\ninput[_ngcontent-%COMP%]:invalid, input[_ngcontent-%COMP%]:invalid:required {\n  border: 2px solid red;\n  border-radius: 5px;\n  background-color: #ff9595;\n}\n\ninput[_ngcontent-%COMP%]:valid {\n  border: 2px solid black;\n  border-radius: 5px;\n}\n\n.errorMessage[_ngcontent-%COMP%] {\n  margin: 20px;\n  text-align: center;\n}\n\n.closeErrorMessageButton[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhdXRob3JpemF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUNEOztBQUVBO0VBQ0MsYUFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBQ0Q7O0FBRUE7RUFDQyx5Q0FBQTtFQUNBLHVCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxZQUFBO0FBQ0Q7O0FBRUE7RUFDRSxxQkFBQTtFQUNELGtCQUFBO0VBQ0EseUJBQUE7QUFDRDs7QUFFQTtFQUNFLHVCQUFBO0VBQ0Qsa0JBQUE7QUFDRDs7QUFFQTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtBQUNEOztBQUNBO0VBQ0MsYUFBQTtBQUVEIiwiZmlsZSI6ImF1dGhvcml6YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nSW5XcmFwcGVyIHtcclxuXHR3aWR0aDogMzAwcHg7XHJcblx0aGVpZ2h0OiA0NTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA4LCAxODksIDI1NSk7XHJcbn1cclxuXHJcbi5Mb2dJblNpZ25VcF9fdGl0bGUge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0d2lkdGg6IDgwJTtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDI1NSwgMCwgMC42NzEpO1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcblx0cGFkZGluZzogNXB4O1xyXG59XHJcblxyXG5pbnB1dDppbnZhbGlkLCBpbnB1dDppbnZhbGlkOnJlcXVpcmVke1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTQ5LCAxNDkpO1xyXG59XHJcblxyXG5pbnB1dDp2YWxpZCB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uZXJyb3JNZXNzYWdlIHtcclxuXHRtYXJnaW46IDIwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jbG9zZUVycm9yTWVzc2FnZUJ1dHRvbiB7XHJcblx0cGFkZGluZzogMTBweDtcclxufVxyXG4iXX0= */", ".toggle[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  position: relative;\n  cursor: pointer;\n  width: 180px;\n  height: 54px;\n  box-shadow: -4px -4px 8px rgba(255, 255, 255, 0.5), 4px 4px 8px rgba(0, 0, 0, 0.3);\n  text-decoration: none;\n}\n.toggle[_ngcontent-%COMP%]::before, .toggle[_ngcontent-%COMP%]::after {\n  font-size: 17px;\n  text-align: center;\n  line-height: 34px;\n  position: absolute;\n  width: 77.5px;\n  height: 34px;\n  top: 10px;\n  transition: all 0.15s;\n}\n.toggle[_ngcontent-%COMP%]::before {\n  content: \"LOG IN\";\n  left: 10px;\n  color: #ac0000;\n  box-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5), -2px -2px 4px rgba(0, 0, 0, 0.3);\n  text-decoration: underline;\n}\n.toggle[_ngcontent-%COMP%]::after {\n  content: \"SIGN UP\";\n  left: 92.5px;\n  color: #000000c0;\n  box-shadow: none;\n  text-decoration: none;\n}\n.toggle[_ngcontent-%COMP%]:checked::before {\n  color: #000000c0;\n  box-shadow: none;\n  text-decoration: none;\n}\n.toggle[_ngcontent-%COMP%]:checked::after {\n  color: #ac0000;\n  box-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5), -2px -2px 4px rgba(0, 0, 0, 0.3);\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi1zaWdudXAtdG9nZ2xlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJBO0VBR0Usd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFuQ007RUFvQ04sWUFuQ087RUFLUCxrRkFBQTtFQUNELHFCQUFBO0FBQ0Q7QUE4QkU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFWVztFQVdYLGtCQUFBO0VBQ0EsYUFiVTtFQWNWLFlBYlc7RUFjWCxTQUFBO0VBQ0EscUJBQUE7QUE1Qko7QUE4QkU7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxjQWhESztFQVFQLGtGQUFBO0VBRUQsMEJBQUE7QUFZRDtBQTZCRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQXZETztFQWVULGdCQUFBO0VBQ0QscUJBQUE7QUFjRDtBQTZCSTtFQUNFLGdCQTVESztFQWVULGdCQUFBO0VBQ0QscUJBQUE7QUFtQkQ7QUE0Qkk7RUFDRSxjQS9ERztFQVFQLGtGQUFBO0VBRUQsMEJBQUE7QUE2QkQiLCJmaWxlIjoibG9naW4tc2lnbnVwLXRvZ2dsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdpZHRoOiAxODBweDtcclxuJGhlaWdodDogJHdpZHRoICogLjM7XHJcbiRpbmFjdGl2ZTogIzAwMDAwMGMwO1xyXG4kYWN0aXZlOiAjYWMwMDAwO1xyXG5cclxuQG1peGluIHJhaXNlIHtcclxuICBib3gtc2hhZG93OiAtNHB4IC00cHggOHB4IHJnYmEoI2ZmZiwgLjUpLCA0cHggNHB4IDhweCByZ2JhKCMwMDAsIC4zKTtcclxuXHR0ZXh0LWRlY29yYXRpb246bm9uZVxyXG59XHJcblxyXG5AbWl4aW4gc2luayB7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgjZmZmLCAuNSksIC0ycHggLTJweCA0cHggcmdiYSgjMDAwLCAuMyk7XHJcblxyXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5AbWl4aW4gZmxhdCB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuXHR0ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG5cclxuQG1peGluIGNvdmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udG9nZ2xlIHtcclxuICAkdGlja1dpZHRoOiAoJHdpZHRoIC0gMjUpIC8gMjtcclxuICAkdGlja0hlaWdodDogJGhlaWdodCAtIDIwO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogJHdpZHRoO1xyXG4gIGhlaWdodDogJGhlaWdodDtcclxuICBAaW5jbHVkZSByYWlzZTtcclxuICAmOjpiZWZvcmUsICY6OmFmdGVyIHtcclxuICAgIGZvbnQtc2l6ZTogJHRpY2tIZWlnaHQgKiAuNTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAkdGlja0hlaWdodDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAkdGlja1dpZHRoO1xyXG4gICAgaGVpZ2h0OiAkdGlja0hlaWdodDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMTVzO1xyXG4gIH1cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ0xPRyBJTic7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6ICRhY3RpdmU7XHJcbiAgICBAaW5jbHVkZSBzaW5rO1xyXG4gIH1cclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnU0lHTiBVUCc7XHJcbiAgICBsZWZ0OiAkdGlja1dpZHRoICsgMTU7XHJcbiAgICBjb2xvcjogJGluYWN0aXZlO1xyXG4gICAgQGluY2x1ZGUgZmxhdDtcclxuICB9XHJcbiAgJjpjaGVja2VkIHtcclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGNvbG9yOiAkaW5hY3RpdmU7XHJcbiAgICAgIEBpbmNsdWRlIGZsYXQ7XHJcbiAgICB9XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbG9yOiAkYWN0aXZlO1xyXG4gICAgICBAaW5jbHVkZSBzaW5rO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "939I":
/*!******************************************************************!*\
  !*** ./src/app/components/authorization/validation.directive.ts ***!
  \******************************************************************/
/*! exports provided: ValidationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationDirective", function() { return ValidationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ValidationDirective {
    constructor(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    set appValidation(isError) {
        if (isError) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }
    }
}
ValidationDirective.ɵfac = function ValidationDirective_Factory(t) { return new (t || ValidationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
ValidationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ValidationDirective, selectors: [["", "appValidation", ""]], inputs: { appValidation: "appValidation" } });


/***/ }),

/***/ "9rZT":
/*!******************************************************************************************!*\
  !*** ./src/app/components/main/courses-pages/courses-buffer/courses-buffer.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CoursesBufferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesBufferComponent", function() { return CoursesBufferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _courses_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../courses-list.service */ "vQOT");
/* harmony import */ var _course_list_page_search_add_search_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../course-list-page/search-add/search-add.component */ "CvBj");
/* harmony import */ var _course_list_page_course_list_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../course-list-page/course-list-page.component */ "ODOa");




class CoursesBufferComponent {
    constructor(coursesList) {
        this.coursesList = coursesList;
    }
    toggleAddNewCourse() {
        this.coursesList.toggleAddNewCourse();
    }
}
CoursesBufferComponent.ɵfac = function CoursesBufferComponent_Factory(t) { return new (t || CoursesBufferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_courses_list_service__WEBPACK_IMPORTED_MODULE_1__["CoursesListService"])); };
CoursesBufferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoursesBufferComponent, selectors: [["app-courses-buffer"]], decls: 3, vars: 0, consts: [[1, "searchAdd-container"], [3, "toggleAddNewCourse"]], template: function CoursesBufferComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-search-add", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleAddNewCourse", function CoursesBufferComponent_Template_app_search_add_toggleAddNewCourse_1_listener() { return ctx.toggleAddNewCourse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-course-list-page");
    } }, directives: [_course_list_page_search_add_search_add_component__WEBPACK_IMPORTED_MODULE_2__["SearchAddComponent"], _course_list_page_course_list_page_component__WEBPACK_IMPORTED_MODULE_3__["CoursesListPageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2VzLWJ1ZmZlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "AytR":
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

/***/ "B16k":
/*!********************************************************************!*\
  !*** ./src/app/components/Interfaces-and-classes/course/course.ts ***!
  \********************************************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
class Course {
    constructor(course) {
        this._id = course._id;
        this.id = course.id;
        this.title = course.title;
        this.creationDate = new Date(course.creationDate);
        this.duration = course.duration;
        this.description = course.description;
        this.isTopRated = course.isTopRated;
        this.authors = course.authors;
    }
}


/***/ }),

/***/ "CvBj":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/main/courses-pages/course-list-page/search-add/search-add.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: SearchAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAddComponent", function() { return SearchAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_store_courses_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/courses.action */ "aNRM");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class SearchAddComponent {
    constructor(store) {
        this.store = store;
        this.toggleAddNewCourse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputSearchCourses = '';
        this.newCourseFormVisible = false;
    }
    inputSearching() {
        this.store.dispatch(src_app_store_courses_action__WEBPACK_IMPORTED_MODULE_1__["CoursesActions"].searchCourses({ userInput: this.inputSearchCourses }));
    }
    showAddCoursePage() {
        this.store.dispatch(src_app_store_courses_action__WEBPACK_IMPORTED_MODULE_1__["CoursesActions"].activateCourse({ activeCourse: 'NEW' }));
        this.toggleAddNewCourse.emit();
    }
}
SearchAddComponent.ɵfac = function SearchAddComponent_Factory(t) { return new (t || SearchAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
SearchAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchAddComponent, selectors: [["app-search-add"]], outputs: { toggleAddNewCourse: "toggleAddNewCourse" }, decls: 5, vars: 1, consts: [[1, "search-add"], [1, "search-control"], ["type", "text", "placeholder", "Searching courses", 3, "ngModel", "ngModelChange", "input"], [3, "click"]], template: function SearchAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchAddComponent_Template_input_ngModelChange_2_listener($event) { return ctx.inputSearchCourses = $event; })("input", function SearchAddComponent_Template_input_input_2_listener() { return ctx.inputSearching(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchAddComponent_Template_button_click_3_listener() { return ctx.showAddCoursePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add course");
=======
CoursesListPageComponent.ɵfac = function CoursesListPageComponent_Factory(t) { return new (t || CoursesListPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_courses_list_service__WEBPACK_IMPORTED_MODULE_1__["CoursesListService"])); };
CoursesListPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoursesListPageComponent, selectors: [["app-course-list-page"]], decls: 11, vars: 6, consts: [[1, "deleteCoursePopup-container"], ["class", "backdrop", 4, "ngIf"], [1, "searchAdd-container"], [3, "searchCourses", "toggleAddNewCourse"], [1, "courseList"], ["class", "courseList__empty", 4, "ngIf"], [3, "course", "deletedCourse", "editToCourse", 4, "ngFor", "ngForOf"], [1, "loadMore-container"], [1, "loadMoreButton", 3, "disabled", "click"], [1, "backdrop"], [1, "confirmationModal", "modalWrapper"], [1, "close", 3, "click"], [1, "confirmationMessage"], [1, ""], [3, "click"], [1, "courseList__empty"], [3, "course", "deletedCourse", "editToCourse"]], template: function CoursesListPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CoursesListPageComponent_div_1_Template, 11, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-search-add", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchCourses", function CoursesListPageComponent_Template_app_search_add_searchCourses_3_listener($event) { return ctx.searchCourses($event); })("toggleAddNewCourse", function CoursesListPageComponent_Template_app_search_add_toggleAddNewCourse_3_listener() { return ctx.toggleAddNewCourse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CoursesListPageComponent_div_5_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CoursesListPageComponent_app_course_6_Template, 1, 1, "app-course", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "orderByCreationDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
<<<<<<< HEAD
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputSearchCourses);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".search-add[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.search-add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .search-add[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n}\n.search-add[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.search-control[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzZWFyY2gtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0FBQ0Q7QUFDQztFQUNDLGlCQUFBO0FBQ0Y7QUFFQztFQUNDLFVBQUE7QUFBRjtBQUlBO0VBQ0MsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUREIiwiZmlsZSI6InNlYXJjaC1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWFkZCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG5cdGJ1dHRvbiwgaW5wdXQge1xyXG5cdFx0cGFkZGluZzogNXB4IDEwcHg7XHJcblx0fTtcclxuXHJcblx0aW5wdXQge1xyXG5cdFx0d2lkdGg6IDgwJTtcclxuXHR9O1xyXG59O1xyXG5cclxuLnNlYXJjaC1jb250cm9sIHtcclxuXHR3aWR0aDogNTAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Dk4x":
/*!****************************************!*\
  !*** ./src/app/store/search.effect.ts ***!
  \****************************************/
/*! exports provided: SearchEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchEffects", function() { return SearchEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _courses_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./courses.action */ "aNRM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_courses_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http/courses-http.service */ "ugVf");







class SearchEffects {
    constructor(action$, coursesHttpService) {
        this.action$ = action$;
        this.coursesHttpService = coursesHttpService;
        this.url = 'https://super-courses.herokuapp.com/courses?search=';
        this.searchCourses$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000), Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_courses_action__WEBPACK_IMPORTED_MODULE_3__["CoursesActions"].searchCourses), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((action) => this.coursesHttpService.getCourses(this.url + action.userInput).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => _courses_action__WEBPACK_IMPORTED_MODULE_3__["CoursesActions"].getCoursesDataSuccess({ data })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"])))));
    }
}
SearchEffects.ɵfac = function SearchEffects_Factory(t) { return new (t || SearchEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_http_courses_http_service__WEBPACK_IMPORTED_MODULE_5__["CoursesHttpService"])); };
SearchEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SearchEffects, factory: SearchEffects.ɵfac });


/***/ }),

/***/ "E3+u":
/*!********************************************!*\
  !*** ./src/app/store/getCourses.effect.ts ***!
  \********************************************/
/*! exports provided: GetCoursesEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCoursesEffect", function() { return GetCoursesEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _courses_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./courses.action */ "aNRM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_courses_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http/courses-http.service */ "ugVf");







class GetCoursesEffect {
    constructor(action$, coursesHttpService) {
        this.action$ = action$;
        this.coursesHttpService = coursesHttpService;
        this.getCourses$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_courses_action__WEBPACK_IMPORTED_MODULE_3__["CoursesActions"].getCoursesData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.coursesHttpService.getCourses().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => _courses_action__WEBPACK_IMPORTED_MODULE_3__["CoursesActions"].getCoursesDataSuccess({ data })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"])))));
    }
}
GetCoursesEffect.ɵfac = function GetCoursesEffect_Factory(t) { return new (t || GetCoursesEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_http_courses_http_service__WEBPACK_IMPORTED_MODULE_5__["CoursesHttpService"])); };
GetCoursesEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: GetCoursesEffect, factory: GetCoursesEffect.ɵfac });


/***/ }),

/***/ "F5nt":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/authorization/authorization.service */ "rWs1");
/* harmony import */ var _http_authorization_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http/authorization-http.service */ "m+50");




class AppService {
    constructor(router, authorizationService, authorizationHttpService) {
        this.router = router;
        this.authorizationService = authorizationService;
        this.authorizationHttpService = authorizationHttpService;
    }
    appStart() {
        const cookieToken = this.authorizationService.getTokenInCookie();
        if (typeof cookieToken !== 'undefined') {
            this.authorizationHttpService.getUserByActiveSessionToken(cookieToken).subscribe((userData) => {
                this.authorizationService.userDataFromBE = userData;
                this.authorizationService.userLogin = userData.name;
                this.authorizationService.isAuthorized = true;
                this.router.navigate(['courses']);
            }, error => {
                console.log('current error is ', error);
                this.router.navigate(['authorization']);
            });
        }
        else {
            this.router.navigate(['authorization']);
        }
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_components_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_authorization_http_service__WEBPACK_IMPORTED_MODULE_3__["AuthorizationHttpService"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac });


/***/ }),

/***/ "FhyZ":
/*!***************************************************!*\
  !*** ./src/app/http/interceptors/Interceptors.ts ***!
  \***************************************************/
/*! exports provided: Interceptors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interceptors", function() { return Interceptors; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _cookie_interceptor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookie-interceptor.service */ "tCr/");
/* harmony import */ var _loading_interceptor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading-interceptor.service */ "3z/U");



const Interceptors = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _loading_interceptor_service__WEBPACK_IMPORTED_MODULE_2__["LoadingInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _cookie_interceptor_service__WEBPACK_IMPORTED_MODULE_1__["CookieInterceptorService"], multi: true }
];


/***/ }),

/***/ "Huzx":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/main/courses-pages/course-list-page/order-by-creation-date.pipe.ts ***!
  \***********************************************************************************************/
/*! exports provided: OrderByCreationDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByCreationDatePipe", function() { return OrderByCreationDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class OrderByCreationDatePipe {
    transform(coursesList) {
        return coursesList.sort((currentCourse, nextCourse) => {
            return (currentCourse.creationDate < nextCourse.creationDate) ? -1
                : (currentCourse.creationDate > nextCourse.creationDate) ? 1 : 0;
        });
    }
}
OrderByCreationDatePipe.ɵfac = function OrderByCreationDatePipe_Factory(t) { return new (t || OrderByCreationDatePipe)(); };
OrderByCreationDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "orderByCreationDate", type: OrderByCreationDatePipe, pure: true });


/***/ }),

/***/ "IURz":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumbs/breadcrumbs.component */ "uGCx");
/* harmony import */ var _courses_pages_courses_pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courses-pages/courses-pages.component */ "/ML/");



class MainComponent {
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 3, vars: 0, consts: [[1, "breadcrumbs-container"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-breadcrumbs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-courses-pages");
    } }, directives: [_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbsComponent"], _courses_pages_courses_pages_component__WEBPACK_IMPORTED_MODULE_2__["CoursesPagesComponent"]], styles: [".breadcrumbs-container[_ngcontent-%COMP%] {\n  height: 5vh;\n  padding: 0 15px;\n  border-bottom: 2px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUNEIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWRjcnVtYnMtY29udGFpbmVyIHtcclxuXHRoZWlnaHQ6IDV2aDtcclxuXHRwYWRkaW5nOiAwIDE1cHg7XHJcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Lg+l":
/*!********************************************************************************************!*\
  !*** ./src/app/components/main/courses-pages/add-course-page/input-date/date-validator.ts ***!
  \********************************************************************************************/
/*! exports provided: DateValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateValidator", function() { return DateValidator; });
function DateValidator() {
    return (control) => {
        const currentYear = (new Date()).getFullYear();
        const incomingValue = new Date(control.value);
        return (incomingValue.getFullYear() < currentYear ||
            incomingValue.getFullYear() > (currentYear + 2)) ? { incomingValue: { invalid: true } } : null;
    };
}


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Copyright \u00A9 Video courses, All Rights Reserved\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  padding: 0 15px;\n  border-top: 2px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxlQUFBO0VBQ0EsMkJBQUE7QUFDRCIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuXHRwYWRkaW5nOiAwIDE1cHg7XHJcblx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "NFqI":
/*!*******************************************!*\
  !*** ./src/app/store/addCourse.effect.ts ***!
  \*******************************************/
/*! exports provided: AddCourseEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCourseEffects", function() { return AddCourseEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _courses_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./courses.action */ "aNRM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_courses_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http/courses-http.service */ "ugVf");







class AddCourseEffects {
    constructor(action$, coursesHttpService) {
        this.action$ = action$;
        this.coursesHttpService = coursesHttpService;
        this.addCourse$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_courses_action__WEBPACK_IMPORTED_MODULE_3__["CoursesActions"].addNewCourse), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((course) => this.coursesHttpService.postCourse(course.course).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => _courses_action__WEBPACK_IMPORTED_MODULE_3__["CoursesActions"].getCoursesData()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"])))));
    }
}
AddCourseEffects.ɵfac = function AddCourseEffects_Factory(t) { return new (t || AddCourseEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_http_courses_http_service__WEBPACK_IMPORTED_MODULE_5__["CoursesHttpService"])); };
AddCourseEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AddCourseEffects, factory: AddCourseEffects.ɵfac });


/***/ }),

/***/ "ODOa":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/main/courses-pages/course-list-page/course-list-page.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CoursesListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesListPageComponent", function() { return CoursesListPageComponent; });
/* harmony import */ var src_app_store_courses_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/courses.action */ "aNRM");
/* harmony import */ var src_app_store_courses_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/courses.selector */ "sPvx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _courses_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../courses-list.service */ "vQOT");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../course/course.component */ "/9jC");







function CoursesListPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CoursesListPageComponent_div_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.toggleConfirmModalToDeleteCourse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Do you really want to delete this course?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CoursesListPageComponent_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.removeCourse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CoursesListPageComponent_div_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.toggleConfirmModalToDeleteCourse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CoursesListPageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " no data. feel free to add new course. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CoursesListPageComponent_app_course_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-course", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("deletedCourse", function CoursesListPageComponent_app_course_4_Template_app_course_deletedCourse_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const course_r8 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.toggleConfirmModalToDeleteCourse(course_r8.id); })("editToCourse", function CoursesListPageComponent_app_course_4_Template_app_course_editToCourse_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const course_r8 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.openEditToCourse(course_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("course", course_r8);
} }
function CoursesListPageComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CoursesListPageComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const pageNumber_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.goToPage(pageNumber_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageNumber_r13 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selectedPage", ctx_r3.currentPage === pageNumber_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", pageNumber_r13, " ");
} }
class CoursesListPageComponent {
    constructor(coursesList, store) {
        this.coursesList = coursesList;
        this.store = store;
        this.pageSize = 5;
        this.isDeleteCourseContainerVisible = false;
        this.courseStream$ = this.store.select(src_app_store_courses_selector__WEBPACK_IMPORTED_MODULE_1__["CoursesSelectors"].courses);
        this.store.select(src_app_store_courses_selector__WEBPACK_IMPORTED_MODULE_1__["CoursesSelectors"].currentPage).subscribe(v => this.currentPage = v);
        this.pagesCount = this.store.select(src_app_store_courses_selector__WEBPACK_IMPORTED_MODULE_1__["CoursesSelectors"].pagesNumbers);
        this.courseStream$.subscribe(courses => this.isCourseListEmpty = courses ? courses.length === 0 : true);
        this.store.dispatch(src_app_store_courses_action__WEBPACK_IMPORTED_MODULE_0__["CoursesActions"].getCoursesData());
    }
    goToPage(page) {
        const coursesStart = (page - 1) * this.pageSize;
        this.currentPage = page;
        this.store.dispatch(src_app_store_courses_action__WEBPACK_IMPORTED_MODULE_0__["CoursesActions"].goToPage({ start: coursesStart, count: this.pageSize }));
    }
    toggleConfirmModalToDeleteCourse(id) {
        this.isDeleteCourseContainerVisible = !this.isDeleteCourseContainerVisible;
        if (id) {
            this.currentDeletionCourseId = id;
        }
    }
    openEditToCourse(course) {
        this.coursesList.openEditCourse(course);
    }
    removeCourse() {
        this.isDeleteCourseContainerVisible = false;
        this.store.dispatch(src_app_store_courses_action__WEBPACK_IMPORTED_MODULE_0__["CoursesActions"].deleteCourse({ courseId: this.currentDeletionCourseId }));
    }
}
CoursesListPageComponent.ɵfac = function CoursesListPageComponent_Factory(t) { return new (t || CoursesListPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_courses_list_service__WEBPACK_IMPORTED_MODULE_3__["CoursesListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
CoursesListPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CoursesListPageComponent, selectors: [["app-course-list-page"]], decls: 10, vars: 8, consts: [[1, "deleteCoursePopup-container"], ["class", "backdrop", 4, "ngIf"], [1, "courseList"], ["class", "courseList__empty", 4, "ngIf"], [3, "course", "deletedCourse", "editToCourse", 4, "ngFor", "ngForOf"], [1, "loadMore-container"], [1, ""], [3, "selectedPage", "click", 4, "ngFor", "ngForOf"], [1, "backdrop"], [1, "confirmationModal", "modalWrapper"], [1, "close", 3, "click"], [1, "confirmationMessage"], [3, "click"], [1, "courseList__empty"], [3, "course", "deletedCourse", "editToCourse"]], template: function CoursesListPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CoursesListPageComponent_div_1_Template, 11, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CoursesListPageComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CoursesListPageComponent_app_course_4_Template, 1, 1, "app-course", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CoursesListPageComponent_button_8_Template, 2, 3, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDeleteCourseContainerVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isCourseListEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 4, ctx.courseStream$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 6, ctx.pagesCount));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _course_course_component__WEBPACK_IMPORTED_MODULE_6__["CourseComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".searchAdd-container[_ngcontent-%COMP%] {\n  height: 7vh;\n  padding: 1vh 15px;\n}\n\n.loadMore-container[_ngcontent-%COMP%] {\n  height: 5vh;\n  padding: 1vh 15px;\n  width: calc(100% - 30px);\n}\n\n.loadMoreButton[_ngcontent-%COMP%] {\n  width: 100%;\n  text-transform: uppercase;\n}\n\n.courseList[_ngcontent-%COMP%] {\n  height: 65vh;\n  background-color: rgba(48, 48, 48, 0.116);\n  overflow-y: hidden;\n  overflow-y: scroll;\n}\n\n.courseList[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\n  background-color: #ffbd5b;\n  border-radius: 10px;\n}\n\n.courseList[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n\n.courseList[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #924200;\n}\n\n.courseList__empty[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.confirmationModal[_ngcontent-%COMP%] {\n  width: 35vw;\n  height: 20vh;\n  background-color: #ffb62e;\n}\n\n.confirmationMessage[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 50px;\n  cursor: pointer;\n}\n\n.selectedPage[_ngcontent-%COMP%] {\n  font-weight: bold;\n  background-color: rgba(255, 103, 83, 0.63);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvdXJzZS1saXN0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0FBakJEOztBQW9CQTtFQUNDLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FBakJEOztBQW9CQTtFQUNDLFdBQUE7RUFDQSx5QkFBQTtBQWpCRDs7QUFvQkE7RUFDQyxZQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBakJEOztBQXBCRTtFQUVFLDRDQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQXFCSjs7QUFuQkU7RUFFRSxXQUFBO0FBb0JKOztBQWxCRTtFQUVFLG1CQUFBO0VBQ0EseUJBQUE7QUFtQko7O0FBU0E7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFORDs7QUFTQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFORDs7QUFTQTtFQUNDLGtCQUFBO0FBTkQ7O0FBU0E7RUFDQyxXQUFBO0VBQ0EsZUFBQTtBQU5EOztBQVNBO0VBQ0MsaUJBQUE7RUFDQSwwQ0FBQTtBQU5EIiwiZmlsZSI6ImNvdXJzZS1saXN0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gc2Nyb2xsU3R5bGVzICgpIHtcclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFja1xyXG4gIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTg5LCA5MSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICAmOjotd2Via2l0LXNjcm9sbGJhclxyXG4gIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gIH1cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYlxyXG4gIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNDYsIDY2LCAwKTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2hBZGQtY29udGFpbmVyIHtcclxuXHRoZWlnaHQ6IDd2aDtcclxuXHRwYWRkaW5nOiAxdmggMTVweDtcclxufVxyXG5cclxuLmxvYWRNb3JlLWNvbnRhaW5lciB7XHJcblx0aGVpZ2h0OiA1dmg7XHJcblx0cGFkZGluZzogMXZoIDE1cHg7XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG59XHJcblxyXG4ubG9hZE1vcmVCdXR0b24ge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jb3Vyc2VMaXN0IHtcclxuXHRoZWlnaHQ6IDY1dmg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OCwgNDgsIDQ4LCAwLjExNik7XHJcblx0b3ZlcmZsb3cteTogaGlkZGVuO1xyXG5cdG92ZXJmbG93LXk6c2Nyb2xsO1xyXG5cdEBpbmNsdWRlIHNjcm9sbFN0eWxlcygpO1xyXG59XHJcblxyXG4uY291cnNlTGlzdF9fZW1wdHkge1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb25maXJtYXRpb25Nb2RhbCB7XHJcblx0d2lkdGg6IDM1dnc7XHJcblx0aGVpZ2h0OiAyMHZoO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE4MiwgNDYpO1xyXG59XHJcblxyXG4uY29uZmlybWF0aW9uTWVzc2FnZSB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG5cdHdpZHRoOiA1MHB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNlbGVjdGVkUGFnZSB7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEwMywgODMsIDAuNjMpO1xyXG59XHJcbiJdfQ== */"], changeDetection: 0 });
=======
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesListPageComponent_Template_button_click_9_listener() { return ctx.showMoreCourses(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "load more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDeleteCourseContainerVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCourseListEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx.coursesCatalog));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isCourseListEmpty);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _search_add_search_add_component__WEBPACK_IMPORTED_MODULE_3__["SearchAddComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _course_course_component__WEBPACK_IMPORTED_MODULE_4__["CourseComponent"]], pipes: [_order_by_creation_date_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderByCreationDatePipe"]], styles: [".searchAdd-container[_ngcontent-%COMP%] {\n  height: 7vh;\n  padding: 1vh 15px;\n}\n\n.loadMore-container[_ngcontent-%COMP%] {\n  height: 5vh;\n  padding: 1vh 15px;\n  width: calc(100% - 30px);\n}\n\n.loadMoreButton[_ngcontent-%COMP%] {\n  width: 100%;\n  text-transform: uppercase;\n}\n\n.courseList[_ngcontent-%COMP%] {\n  height: 65vh;\n  background-color: rgba(48, 48, 48, 0.116);\n  overflow-y: hidden;\n  overflow-y: scroll;\n}\n\n.courseList[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\n  background-color: #ffbd5b;\n  border-radius: 10px;\n}\n\n.courseList[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n\n.courseList[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #924200;\n}\n\n.courseList__empty[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.confirmationModal[_ngcontent-%COMP%] {\n  width: 35vw;\n  height: 20vh;\n  background-color: #ffb62e;\n}\n\n.confirmationMessage[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 50px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvdXJzZS1saXN0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0FBakJEOztBQW9CQTtFQUNDLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FBakJEOztBQW9CQTtFQUNDLFdBQUE7RUFDQSx5QkFBQTtBQWpCRDs7QUFvQkE7RUFDQyxZQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBakJEOztBQXBCRTtFQUVFLDRDQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQXFCSjs7QUFuQkU7RUFFRSxXQUFBO0FBb0JKOztBQWxCRTtFQUVFLG1CQUFBO0VBQ0EseUJBQUE7QUFtQko7O0FBU0E7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFORDs7QUFTQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFORDs7QUFTQTtFQUNDLGtCQUFBO0FBTkQ7O0FBU0E7RUFDQyxXQUFBO0VBQ0EsZUFBQTtBQU5EIiwiZmlsZSI6ImNvdXJzZS1saXN0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gc2Nyb2xsU3R5bGVzICgpIHtcclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFja1xyXG4gIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTg5LCA5MSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICAmOjotd2Via2l0LXNjcm9sbGJhclxyXG4gIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gIH1cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYlxyXG4gIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNDYsIDY2LCAwKTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2hBZGQtY29udGFpbmVyIHtcclxuXHRoZWlnaHQ6IDd2aDtcclxuXHRwYWRkaW5nOiAxdmggMTVweDtcclxufVxyXG5cclxuLmxvYWRNb3JlLWNvbnRhaW5lciB7XHJcblx0aGVpZ2h0OiA1dmg7XHJcblx0cGFkZGluZzogMXZoIDE1cHg7XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG59XHJcblxyXG4ubG9hZE1vcmVCdXR0b24ge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jb3Vyc2VMaXN0IHtcclxuXHRoZWlnaHQ6IDY1dmg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OCwgNDgsIDQ4LCAwLjExNik7XHJcblx0b3ZlcmZsb3cteTogaGlkZGVuO1xyXG5cdG92ZXJmbG93LXk6c2Nyb2xsO1xyXG5cdEBpbmNsdWRlIHNjcm9sbFN0eWxlcygpO1xyXG59XHJcblxyXG4uY291cnNlTGlzdF9fZW1wdHkge1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb25maXJtYXRpb25Nb2RhbCB7XHJcblx0d2lkdGg6IDM1dnc7XHJcblx0aGVpZ2h0OiAyMHZoO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE4MiwgNDYpO1xyXG59XHJcblxyXG4uY29uZmlybWF0aW9uTWVzc2FnZSB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG5cdHdpZHRoOiA1MHB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"], changeDetection: 0 });
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8


/***/ }),

/***/ "OroL":
/*!****************************************************************************!*\
  !*** ./src/app/components/main/not-found-page/not-found-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


class NotFoundPageComponent {
    constructor(location) {
        this.location = location;
    }
    goToPreviousPage() {
        this.location.back();
    }
}
NotFoundPageComponent.ɵfac = function NotFoundPageComponent_Factory(t) { return new (t || NotFoundPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); };
NotFoundPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundPageComponent, selectors: [["app-not-found-page"]], decls: 8, vars: 0, consts: [[1, "page404-container"], [1, "page404"], [3, "click"]], template: function NotFoundPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404 Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Oops! Something is wrong.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotFoundPageComponent_Template_button_click_6_listener() { return ctx.goToPreviousPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "< Previous page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".page404-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 65vh;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n\n.page404[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm90LWZvdW5kLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxVQUFBO0VBQ0EsY0FBQTtBQUVEIiwiZmlsZSI6Im5vdC1mb3VuZC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2U0MDQtY29udGFpbmVyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDY1dmg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucGFnZTQwNCB7XHJcblx0d2lkdGg6IDYwJTtcclxuXHRtYXJnaW46ICAwIGF1dG87XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/authorization/authorization.service */ "rWs1");
<<<<<<< HEAD
/* harmony import */ var _http_courses_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http/courses-http.service */ "ugVf");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "F5nt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/authorization/authorization.component */ "8A2Y");
/* harmony import */ var _components_loading_block_loading_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/loading-block/loading-block.component */ "qSak");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");


=======
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/authorization/authorization.component */ "8A2Y");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8








function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-authorization");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_app_loading_block_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading-block");
} }
function AppComponent_app_main_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main");
} }
class AppComponent {
<<<<<<< HEAD
    constructor(authorizationService, coursesHttpService, appService) {
        this.authorizationService = authorizationService;
        this.coursesHttpService = coursesHttpService;
        this.appService = appService;
        this.title = 'my-ang-app';
        this.appService.appStart();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_http_courses_http_service__WEBPACK_IMPORTED_MODULE_2__["CoursesHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 3, consts: [["class", "", 4, "ngIf"], [1, "body"], [4, "ngIf"], [1, "wrapper"], [1, "header-container"], [1, "main-container"], [1, "footer-container"], [1, ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
=======
    constructor(authorizationService, router) {
        this.authorizationService = authorizationService;
        this.router = router;
        this.title = 'my-ang-app';
        this.authorizationService.takeUserLoginFromLocalStorage();
        if (!this.authorizationService.isAuthorized) {
            this.router.navigate(['authorization']);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 2, consts: [["class", "", 4, "ngIf"], [1, "body"], [1, "wrapper"], [1, "header-container"], [1, "main-container"], [4, "ngIf"], [1, "footer-container"], [1, ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_loading_block_2_Template, 1, 0, "app-loading-block", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_app_main_7_Template, 1, 0, "app-main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authorizationService.userLogin);
<<<<<<< HEAD
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.coursesHttpService.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authorizationService.userLogin);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _components_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_7__["AuthorizationComponent"], _components_loading_block_loading_block_component__WEBPACK_IMPORTED_MODULE_8__["LoadingBlockComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 80vw;\n  box-sizing: content-box;\n  border: 2px solid black;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n.header-container[_ngcontent-%COMP%] {\n  height: 10vh;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  height: 85vh;\n}\n\n.footer-container[_ngcontent-%COMP%] {\n  height: 5vh;\n  background: bisque;\n  bottom: 0;\n  position: sticky;\n  text-align: right;\n}\n\n.body[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow-y: hidden;\n  background: linear-gradient(#ffaa2a, #ff7626);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMENBQUE7QUFDRDs7QUFFQTtFQUNDLFlBQUE7QUFDRDs7QUFDQTtFQUNDLFlBQUE7QUFFRDs7QUFBQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBR0Q7O0FBQUE7RUFDQyxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQUdEIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHR3aWR0aDogODB2dztcclxuXHRib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmZmZmZjgwLCAkYWxwaGE6IDAuNyk7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFpbmVyIHtcclxuXHRoZWlnaHQ6IDEwdmg7XHJcbn1cclxuLm1haW4tY29udGFpbmVyIHtcclxuXHRoZWlnaHQ6IDg1dmg7XHJcbn1cclxuLmZvb3Rlci1jb250YWluZXIge1xyXG5cdGhlaWdodDogNXZoO1xyXG5cdGJhY2tncm91bmQ6IGJpc3F1ZTtcclxuXHRib3R0b206IDA7XHJcblx0cG9zaXRpb246IHN0aWNreTtcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmJvZHkge1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0b3ZlcmZsb3cteTogaGlkZGVuO1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoMjU1LCAxNzAsIDQyKSwgcmdiKDI1NSwgMTE4LCAzOCkpO1xyXG59XHJcbiJdfQ== */"] });
=======
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authorizationService.userLogin);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_6__["AuthorizationComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 80vw;\n  box-sizing: content-box;\n  border: 2px solid black;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n.header-container[_ngcontent-%COMP%] {\n  height: 10vh;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  height: 85vh;\n}\n\n.footer-container[_ngcontent-%COMP%] {\n  height: 5vh;\n  background: bisque;\n  bottom: 0;\n  position: sticky;\n  text-align: right;\n}\n\n.body[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow-y: hidden;\n  background: linear-gradient(#ffaa2a, #ff7626);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMENBQUE7QUFDRDs7QUFFQTtFQUNDLFlBQUE7QUFDRDs7QUFDQTtFQUNDLFlBQUE7QUFFRDs7QUFBQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBR0Q7O0FBQUE7RUFDQyxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQUdEIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHR3aWR0aDogODB2dztcclxuXHRib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmZmZmZjgwLCAkYWxwaGE6IDAuNyk7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFpbmVyIHtcclxuXHRoZWlnaHQ6IDEwdmg7XHJcbn1cclxuLm1haW4tY29udGFpbmVyIHtcclxuXHRoZWlnaHQ6IDg1dmg7XHJcbn1cclxuLmZvb3Rlci1jb250YWluZXIge1xyXG5cdGhlaWdodDogNXZoO1xyXG5cdGJhY2tncm91bmQ6IGJpc3F1ZTtcclxuXHRib3R0b206IDA7XHJcblx0cG9zaXRpb246IHN0aWNreTtcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmJvZHkge1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0b3ZlcmZsb3cteTogaGlkZGVuO1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoMjU1LCAxNzAsIDQyKSwgcmdiKDI1NSwgMTE4LCAzOCkpO1xyXG59XHJcbiJdfQ== */"] });
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8


/***/ }),

/***/ "U3wg":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/main/courses-pages/course-list-page/search-add/filter-courses-by-input.pipe.ts ***!
  \***********************************************************************************************************/
/*! exports provided: FilterCoursesByInputPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCoursesByInputPipe", function() { return FilterCoursesByInputPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilterCoursesByInputPipe {
    transform(coursesList, inputValue) {
        return coursesList.filter(course => course.title.indexOf(inputValue.toUpperCase()) > -1);
    }
}
FilterCoursesByInputPipe.ɵfac = function FilterCoursesByInputPipe_Factory(t) { return new (t || FilterCoursesByInputPipe)(); };
FilterCoursesByInputPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterCoursesByInput", type: FilterCoursesByInputPipe, pure: true });


/***/ }),

/***/ "WG8K":
/*!*******************************!*\
  !*** ./src/app/auth-guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/authorization/authorization.service */ "rWs1");


class AuthGuard {
    constructor(authorizationService) {
        this.authorizationService = authorizationService;
    }
    canLoad() {
        return this.authorizationService.isAuthorized;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_components_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ "YkKD":
/*!**********************************************************************************!*\
  !*** ./src/app/components/main/courses-pages/course/coming-courses.directive.ts ***!
  \**********************************************************************************/
/*! exports provided: CourseDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDirective", function() { return CourseDirective; });
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants */ "l207");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CourseDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.currentDate = new Date();
    }
    ngAfterViewInit() {
<<<<<<< HEAD
        const differenceDatesInDay = Math.floor((+this.currentDate - +(new Date(this.courseCreationDate))) / src_app_constants__WEBPACK_IMPORTED_MODULE_0__["millisecondsInDay"]);
=======
        const differenceDatesInDay = Math.floor((+this.currentDate - +this.courseCreationDate) / src_app_constants__WEBPACK_IMPORTED_MODULE_0__["millisecondsInDay"]);
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8
        if (differenceDatesInDay > 0 && differenceDatesInDay <= src_app_constants__WEBPACK_IMPORTED_MODULE_0__["daysInTwoWeek"]) {
            this.elementRef.nativeElement.className = this.elementRef.nativeElement.className + src_app_constants__WEBPACK_IMPORTED_MODULE_0__["greenBorderClass"];
        }
        else if (differenceDatesInDay <= 0) {
            this.elementRef.nativeElement.className = this.elementRef.nativeElement.className + src_app_constants__WEBPACK_IMPORTED_MODULE_0__["blueBorderClass"];
        }
    }
}
CourseDirective.ɵfac = function CourseDirective_Factory(t) { return new (t || CourseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
<<<<<<< HEAD
CourseDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CourseDirective, selectors: [["", "courseDateDirective", ""]], inputs: { courseCreationDate: "courseCreationDate" } });
=======
CourseDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CourseDirective, selectors: [["", "appCourse", ""]], inputs: { courseCreationDate: "courseCreationDate" } });
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
<<<<<<< HEAD
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _components_main_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main/breadcrumbs/breadcrumbs.component */ "uGCx");
/* harmony import */ var _components_authorization_validation_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/authorization/validation.directive */ "939I");
/* harmony import */ var _components_authorization_authorization_error_authorization_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/authorization/authorization-error/authorization-error.component */ "yXZF");
/* harmony import */ var _components_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/authorization/authorization.component */ "8A2Y");
/* harmony import */ var _components_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/authorization/authorization.service */ "rWs1");
/* harmony import */ var _components_main_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/main/not-found-page/not-found-page.component */ "OroL");
/* harmony import */ var _components_main_courses_pages_courses_list_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/main/courses-pages/courses-list.service */ "vQOT");
/* harmony import */ var _modules_courses_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/courses.module */ "t9/W");
/* harmony import */ var _http_authorization_http_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./http/authorization-http.service */ "m+50");
/* harmony import */ var _components_loading_block_loading_block_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/loading-block/loading-block.component */ "qSak");
/* harmony import */ var _http_interceptors_Interceptors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./http/interceptors/Interceptors */ "FhyZ");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.service */ "F5nt");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_courses_reducer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./store/courses.reducer */ "1LyM");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _store_getCourses_effect__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./store/getCourses.effect */ "E3+u");
/* harmony import */ var _store_search_effect__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./store/search.effect */ "Dk4x");
/* harmony import */ var _store_deleteCourse_effect__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./store/deleteCourse.effect */ "d8tg");
/* harmony import */ var _store_addCourse_effect__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./store/addCourse.effect */ "NFqI");
/* harmony import */ var _store_putCourse_effect__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./store/putCourse.effect */ "35Jx");
/* harmony import */ var _store_navigatePage_effect__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./store/navigatePage.effect */ "lZvD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ "fXoL");































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({ providers: [_components_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_11__["AuthorizationService"], _components_main_courses_pages_courses_list_service__WEBPACK_IMPORTED_MODULE_13__["CoursesListService"], _http_authorization_http_service__WEBPACK_IMPORTED_MODULE_15__["AuthorizationHttpService"], _app_service__WEBPACK_IMPORTED_MODULE_18__["AppService"], _http_interceptors_Interceptors__WEBPACK_IMPORTED_MODULE_17__["Interceptors"]], imports: [[
            _modules_courses_module__WEBPACK_IMPORTED_MODULE_14__["CoursesModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_19__["StoreModule"].forRoot({ coursesStore: _store_courses_reducer__WEBPACK_IMPORTED_MODULE_20__["reducer"] }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_21__["EffectsModule"].forRoot([
                _store_getCourses_effect__WEBPACK_IMPORTED_MODULE_22__["GetCoursesEffect"],
                _store_search_effect__WEBPACK_IMPORTED_MODULE_23__["SearchEffects"],
                _store_deleteCourse_effect__WEBPACK_IMPORTED_MODULE_24__["DeleteCourseEffects"],
                _store_addCourse_effect__WEBPACK_IMPORTED_MODULE_25__["AddCourseEffects"],
                _store_putCourse_effect__WEBPACK_IMPORTED_MODULE_26__["PutCourseEffects"],
                _store_navigatePage_effect__WEBPACK_IMPORTED_MODULE_27__["NavigatePage"],
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
        _components_main_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsComponent"],
        _components_authorization_validation_directive__WEBPACK_IMPORTED_MODULE_8__["ValidationDirective"],
        _components_authorization_authorization_error_authorization_error_component__WEBPACK_IMPORTED_MODULE_9__["AuthorizationErrorComponent"],
        _components_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_10__["AuthorizationComponent"],
        _components_main_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundPageComponent"],
        _components_loading_block_loading_block_component__WEBPACK_IMPORTED_MODULE_16__["LoadingBlockComponent"]], imports: [_modules_courses_module__WEBPACK_IMPORTED_MODULE_14__["CoursesModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_19__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_21__["EffectsRootModule"]] }); })();


/***/ }),

/***/ "aNRM":
/*!*****************************************!*\
  !*** ./src/app/store/courses.action.ts ***!
  \*****************************************/
/*! exports provided: CoursesActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesActions", function() { return CoursesActions; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var CoursesActions;
(function (CoursesActions) {
    CoursesActions.goToPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GOT_TO_PAGE', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    CoursesActions.activateCourse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('ACTIVATE_COURSE', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    CoursesActions.deactivateCourse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('DEACTIVATE_COURSE');
    CoursesActions.addNewCourse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('ADD_NEW_COURSE', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    CoursesActions.deleteCourse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('DELETE_COURSE', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    CoursesActions.putCourse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('PUT_COURSE', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    CoursesActions.getCoursesData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GET_COURSES_DATA');
    CoursesActions.searchCourses = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SEARCH_COURSES', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    CoursesActions.getCoursesDataSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GET_COURSES_DATA_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
})(CoursesActions || (CoursesActions = {}));


/***/ }),

/***/ "d8tg":
/*!**********************************************!*\
  !*** ./src/app/store/deleteCourse.effect.ts ***!
  \**********************************************/
/*! exports provided: DeleteCourseEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCourseEffects", function() { return DeleteCourseEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _courses_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./courses.action */ "aNRM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_courses_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http/courses-http.service */ "ugVf");







class DeleteCourseEffects {
    constructor(action$, coursesHttpService) {
        this.action$ = action$;
        this.coursesHttpService = coursesHttpService;
        this.deleteCourses$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_courses_action__WEBPACK_IMPORTED_MODULE_3__["CoursesActions"].deleteCourse), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((id) => this.coursesHttpService.deleteCourse(id.courseId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => _courses_action__WEBPACK_IMPORTED_MODULE_3__["CoursesActions"].getCoursesData()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"])))));
    }
}
DeleteCourseEffects.ɵfac = function DeleteCourseEffects_Factory(t) { return new (t || DeleteCourseEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_http_courses_http_service__WEBPACK_IMPORTED_MODULE_5__["CoursesHttpService"])); };
DeleteCourseEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DeleteCourseEffects, factory: DeleteCourseEffects.ɵfac });


/***/ }),

/***/ "g9Zw":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/main/courses-pages/add-course-page/input-date/input-date.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: InputDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDateComponent", function() { return InputDateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class InputDateComponent {
    writeValue() { }
    registerOnChange(fn) { }
    registerOnTouched(fn) { }
}
InputDateComponent.ɵfac = function InputDateComponent_Factory(t) { return new (t || InputDateComponent)(); };
InputDateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputDateComponent, selectors: [["app-input-date"]], inputs: { dateControl: "dateControl" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => InputDateComponent),
                multi: true
            }])], decls: 2, vars: 1, consts: [["type", "date", 3, "formControl"]], template: function InputDateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.dateControl);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC1kYXRlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "gLtC":
/*!**********************************************!*\
  !*** ./src/app/http/authors-http.service.ts ***!
  \**********************************************/
/*! exports provided: AuthorsHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorsHttpService", function() { return AuthorsHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class AuthorsHttpService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'https://super-courses.herokuapp.com/authors';
    }
    getAuthors() {
        return this.httpClient.get(this.url);
    }
    getAuthorsByName(searchingAuthor) {
        return this.httpClient.get(`${this.url}/name?search=${searchingAuthor}`);
    }
}
AuthorsHttpService.ɵfac = function AuthorsHttpService_Factory(t) { return new (t || AuthorsHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthorsHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthorsHttpService, factory: AuthorsHttpService.ɵfac });


/***/ }),

/***/ "l207":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: millisecondsInDay, minutesInHour, daysInTwoWeek, greenBorderClass, blueBorderClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "millisecondsInDay", function() { return millisecondsInDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minutesInHour", function() { return minutesInHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysInTwoWeek", function() { return daysInTwoWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greenBorderClass", function() { return greenBorderClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blueBorderClass", function() { return blueBorderClass; });
const millisecondsInDay = 86400000;
const minutesInHour = 60;
const daysInTwoWeek = 14;
const greenBorderClass = ' greenBorder';
const blueBorderClass = ' blueBorder';


/***/ }),

/***/ "lZvD":
/*!**********************************************!*\
  !*** ./src/app/store/navigatePage.effect.ts ***!
  \**********************************************/
/*! exports provided: NavigatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatePage", function() { return NavigatePage; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _courses_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./courses.action */ "aNRM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_courses_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http/courses-http.service */ "ugVf");




=======
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _components_main_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/breadcrumbs/breadcrumbs.component */ "uGCx");
/* harmony import */ var _components_authorization_validation_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/authorization/validation.directive */ "939I");
/* harmony import */ var _components_authorization_authorization_error_authorization_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/authorization/authorization-error/authorization-error.component */ "yXZF");
/* harmony import */ var _components_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/authorization/authorization.component */ "8A2Y");
/* harmony import */ var _components_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/authorization/authorization.service */ "rWs1");
/* harmony import */ var _components_main_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main/not-found-page/not-found-page.component */ "OroL");
/* harmony import */ var _components_main_courses_pages_courses_list_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/main/courses-pages/courses-list.service */ "vQOT");
/* harmony import */ var _modules_courses_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/courses.module */ "t9/W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8



class NavigatePage {
    constructor(action$, coursesHttpService) {
        this.action$ = action$;
        this.coursesHttpService = coursesHttpService;
        this.getCourses$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_courses_action__WEBPACK_IMPORTED_MODULE_3__["CoursesActions"].goToPage), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((page) => this.coursesHttpService.getPathOfCourses(page.start, page.count).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => _courses_action__WEBPACK_IMPORTED_MODULE_3__["CoursesActions"].getCoursesDataSuccess({ data })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"])))));
    }
}
NavigatePage.ɵfac = function NavigatePage_Factory(t) { return new (t || NavigatePage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_http_courses_http_service__WEBPACK_IMPORTED_MODULE_5__["CoursesHttpService"])); };
NavigatePage.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: NavigatePage, factory: NavigatePage.ɵfac });


/***/ }),

/***/ "m+50":
/*!****************************************************!*\
  !*** ./src/app/http/authorization-http.service.ts ***!
  \****************************************************/
/*! exports provided: AuthorizationHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationHttpService", function() { return AuthorizationHttpService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AuthorizationHttpService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'https://super-courses.herokuapp.com/authorization/';
        this.loginPath = 'login';
        this.signUpPath = 'signup';
        this.logoutUpPath = 'logout';
        this.options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Access-Control-Allow-Credentials': 'true',
                withCredentials: 'true'
            })
        };
    }
    getUserByActiveSessionToken(token) {
        return this.httpClient.get(this.url + token);
    }
    postAuthorization(userData) {
        return this.httpClient.post(this.url + this.loginPath, userData, this.options);
    }
    postAuthentication(userData) {
        return this.httpClient.post(this.url + this.signUpPath, userData, this.options);
    }
    putUpdateUser(token, userData) {
        return this.httpClient.put(this.url + token, userData);
    }
    deleteActiveSession() {
        return this.httpClient.delete(this.url + this.logoutUpPath);
    }
}
AuthorizationHttpService.ɵfac = function AuthorizationHttpService_Factory(t) { return new (t || AuthorizationHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AuthorizationHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthorizationHttpService, factory: AuthorizationHttpService.ɵfac });


/***/ }),

/***/ "qSak":
/*!*********************************************************************!*\
  !*** ./src/app/components/loading-block/loading-block.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoadingBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingBlockComponent", function() { return LoadingBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoadingBlockComponent {
}
<<<<<<< HEAD
LoadingBlockComponent.ɵfac = function LoadingBlockComponent_Factory(t) { return new (t || LoadingBlockComponent)(); };
LoadingBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingBlockComponent, selectors: [["app-loading-block"]], decls: 2, vars: 0, consts: [[1, "loading-wrapper"], [1, "loading", "loading_run"]], template: function LoadingBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".loading-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(124, 124, 124, 0.562);\n  z-index: 5;\n}\n\n.loading_run[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: #ddd;\n  position: relative;\n  animation-name: loading_run;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n}\n\n.loading_run[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  background: #ddd;\n  position: absolute;\n  left: 30px;\n  top: 0;\n  animation-name: loading_run;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-delay: 0.3s;\n}\n\n.loading_run[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  background: #ddd;\n  position: absolute;\n  left: 60px;\n  top: 0;\n  animation-name: loading_run;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-delay: 0.6s;\n}\n\n@keyframes loading_run {\n  0% {\n    background: #777;\n  }\n  90% {\n    background: #ddd;\n  }\n  100% {\n    background: #777;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2FkaW5nLWJsb2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFDQSxVQUFBO0FBQ0Q7O0FBQ0E7RUFDRSxxQkFBQTtFQUNELFdBQUE7RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7QUFHRjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0FBSUY7O0FBRkE7RUFDRTtJQUNFLGdCQUFBO0VBS0Y7RUFIQTtJQUNFLGdCQUFBO0VBS0Y7RUFIQTtJQUNFLGdCQUFBO0VBS0Y7QUFDRiIsImZpbGUiOiJsb2FkaW5nLWJsb2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmctd3JhcHBlciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjQsIDEyNCwgMTI0LCAwLjU2Mik7XHJcblx0ei1pbmRleDogNTtcclxufVxyXG4ubG9hZGluZ19ydW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2RkZDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGxvYWRpbmdfcnVuO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuLmxvYWRpbmdfcnVuOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDMwcHg7XHJcbiAgdG9wOiAwO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBsb2FkaW5nX3J1bjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLjNzO1xyXG59XHJcbi5sb2FkaW5nX3J1bjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDYwcHg7XHJcbiAgdG9wOiAwO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBsb2FkaW5nX3J1bjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLjZzO1xyXG59XHJcbkBrZXlmcmFtZXMgbG9hZGluZ19ydW4ge1xyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQ6ICM3Nzc7XHJcbiAgfVxyXG4gIDkwJSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQ6ICM3Nzc7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
=======
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [_components_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_10__["AuthorizationService"], _components_main_courses_pages_courses_list_service__WEBPACK_IMPORTED_MODULE_12__["CoursesListService"]], imports: [[
            _modules_courses_module__WEBPACK_IMPORTED_MODULE_13__["CoursesModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
        _components_main_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsComponent"],
        _components_authorization_validation_directive__WEBPACK_IMPORTED_MODULE_7__["ValidationDirective"],
        _components_authorization_authorization_error_authorization_error_component__WEBPACK_IMPORTED_MODULE_8__["AuthorizationErrorComponent"],
        _components_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_9__["AuthorizationComponent"],
        _components_main_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundPageComponent"]], imports: [_modules_courses_module__WEBPACK_IMPORTED_MODULE_13__["CoursesModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]] }); })();
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8


/***/ }),

<<<<<<< HEAD
/***/ "qzLD":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/main/courses-pages/add-course-page/input-duration/duration-validator.ts ***!
  \****************************************************************************************************/
/*! exports provided: DurationValidator */
=======
/***/ "l207":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: millisecondsInDay, minutesInHour, daysInTwoWeek, greenBorderClass, blueBorderClass */
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationValidator", function() { return DurationValidator; });
function DurationValidator() {
    return (control) => {
        const incomingValue = control.value;
        const minimumDuration = 30;
        const maximumDuration = 1200;
        return (incomingValue > maximumDuration ||
            incomingValue < minimumDuration) ? { incomingValue: { invalid: true } } : null;
    };
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "millisecondsInDay", function() { return millisecondsInDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minutesInHour", function() { return minutesInHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysInTwoWeek", function() { return daysInTwoWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greenBorderClass", function() { return greenBorderClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blueBorderClass", function() { return blueBorderClass; });
const millisecondsInDay = 86400000;
const minutesInHour = 60;
const daysInTwoWeek = 14;
const greenBorderClass = ' greenBorder';
const blueBorderClass = ' blueBorder';


/***/ }),

/***/ "rWs1":
/*!*******************************************************************!*\
  !*** ./src/app/components/authorization/authorization.service.ts ***!
  \*******************************************************************/
/*! exports provided: AuthorizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationService", function() { return AuthorizationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AuthorizationService {
    constructor(router) {
        this.router = router;
        this.userKey = 'user';
        this.userNameInput = '';
        this.userPasswordInput = '';
        this.isErrorModalVisible = false;
        this.isAuthorized = false;
        this.validationUserName = new RegExp(/^([\w\-\.])+\@([\w\-\.])+\.([A-Za-z]{2,4})$/);
        this.validationPassword = new RegExp(/^\w{1,5}$/);
    }
    takeUserLoginFromLocalStorage() {
        this.userLogin = window.localStorage.getItem(this.userKey);
        this.isAuthorized = !!this.userLogin;
    }
    validationIsNoPass() {
        return (!this.validationUserName.test(this.userNameInput) ||
            !this.validationPassword.test(this.userPasswordInput));
    }
    toggleErrorComponent() {
        this.isErrorModalVisible = !this.isErrorModalVisible;
    }
    closeLogIn() {
        this.router.navigate(['']);
    }
    submitAuthorization() {
        if (this.validationIsNoPass()) {
            this.toggleErrorComponent();
        }
        else {
            this.login(this.userNameInput);
            this.isAuthorized = true;
            this.closeLogIn();
        }
    }
    login(login) {
        if (login) {
            window.localStorage.setItem(this.userKey, login);
            this.userLogin = login;
        }
    }
    logout() {
        window.localStorage.clear();
        this.userLogin = null;
        this.isAuthorized = false;
        this.router.navigate(['authorization']);
    }
    getUserInfo() {
        return this.userLogin;
    }
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8
}
AuthorizationService.ɵfac = function AuthorizationService_Factory(t) { return new (t || AuthorizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthorizationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthorizationService, factory: AuthorizationService.ɵfac });


/***/ }),

<<<<<<< HEAD
/***/ "rWs1":
/*!*******************************************************************!*\
  !*** ./src/app/components/authorization/authorization.service.ts ***!
  \*******************************************************************/
/*! exports provided: AuthorizationService */
=======
/***/ "t9/W":
/*!*******************************************!*\
  !*** ./src/app/modules/courses.module.ts ***!
  \*******************************************/
/*! exports provided: CoursesModule */
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationService", function() { return AuthorizationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _http_authorization_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http/authorization-http.service */ "m+50");



class AuthorizationService {
    constructor(router, authorizationHttpService) {
        this.router = router;
        this.authorizationHttpService = authorizationHttpService;
        this.nameTokenInCookie = 'coursesCookie';
        this.userInput = {
            id: '',
            name: '',
            email: '',
            password: '',
        };
        this.isErrorModalVisible = false;
        this.isAuthorized = false;
        this.isLogIn = true;
        this.validationUserEmail = new RegExp(/^([\w\-\.])+\@([\w\-\.])+\.([A-Za-z]{2,4})$/);
        this.validationUserName = new RegExp(/^\w{1,5}$/);
        this.validationPassword = new RegExp(/^\w{1,5}$/);
    }
    getTokenInCookie() {
        const currentCookies = document.cookie
            .match(new RegExp('(?:^|; )' +
            this.nameTokenInCookie.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
        return currentCookies ? decodeURIComponent(currentCookies[1]) : undefined;
    }
    validationIsNoPass() {
        let resultValidation = (!this.validationUserEmail.test(this.userInput.email) ||
            !this.validationPassword.test(this.userInput.password));
        if (!this.isLogIn) {
            resultValidation = resultValidation || !this.validationUserName.test(this.userInput.name);
        }
        return resultValidation;
    }
    toggleErrorComponent() {
        this.isErrorModalVisible = !this.isErrorModalVisible;
    }
    closeLogIn() {
        this.router.navigate(['courses']);
    }
    verifiedAuth() {
        this.userLogin = this.userInput.email;
        this.isAuthorized = true;
        this.closeLogIn();
    }
    submitAuth(authControl) {
        this.userInput.email = authControl.value.userEmail;
        this.userInput.password = authControl.value.userPassword;
        if (!this.isLogIn) {
            this.userInput.name = authControl.value.userName;
            this.authorizationHttpService.postAuthentication(this.userInput).subscribe(value => {
                document.cookie = `${this.nameTokenInCookie}=${value}`;
                this.verifiedAuth();
            }, error => {
                console.log('authentication error ', error);
                this.toggleErrorComponent();
            });
        }
        else {
            this.authorizationHttpService.postAuthorization(this.userInput).subscribe(value => {
                document.cookie = `${this.nameTokenInCookie}=${value}`;
                this.verifiedAuth();
            }, error => {
                console.log('authorization error ', error);
                this.toggleErrorComponent();
            });
        }
    }
    logout() {
        this.authorizationHttpService.deleteActiveSession().subscribe(() => {
            this.userLogin = null;
            this.isAuthorized = false;
            document.cookie = `${this.nameTokenInCookie}==;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
            this.router.navigate(['authorization']);
        });
    }
}
AuthorizationService.ɵfac = function AuthorizationService_Factory(t) { return new (t || AuthorizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_authorization_http_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationHttpService"])); };
AuthorizationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthorizationService, factory: AuthorizationService.ɵfac });
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesModule", function() { return CoursesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_main_courses_pages_course_list_page_course_list_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/main/courses-pages/course-list-page/course-list-page.component */ "ODOa");
/* harmony import */ var _components_main_courses_pages_course_course_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/main/courses-pages/course/course.component */ "/9jC");
/* harmony import */ var _components_main_courses_pages_course_list_page_search_add_search_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/main/courses-pages/course-list-page/search-add/search-add.component */ "CvBj");
/* harmony import */ var _components_main_courses_pages_course_duration_course_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/main/courses-pages/course/duration-course.pipe */ "uCPB");
/* harmony import */ var _components_main_courses_pages_course_list_page_order_by_creation_date_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/main/courses-pages/course-list-page/order-by-creation-date.pipe */ "Huzx");
/* harmony import */ var _components_main_courses_pages_course_coming_courses_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/main/courses-pages/course/coming-courses.directive */ "YkKD");
/* harmony import */ var _components_main_courses_pages_course_list_page_search_add_filter_courses_by_input_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/main/courses-pages/course-list-page/search-add/filter-courses-by-input.pipe */ "U3wg");
/* harmony import */ var _components_main_courses_pages_add_course_page_add_course_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/main/courses-pages/add-course-page/add-course-page.component */ "/RYb");
/* harmony import */ var _components_main_courses_pages_courses_pages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/main/courses-pages/courses-pages.component */ "/ML/");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../auth-guard */ "WG8K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















class CoursesModule {
}
CoursesModule.ɵfac = function CoursesModule_Factory(t) { return new (t || CoursesModule)(); };
CoursesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: CoursesModule });
CoursesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [_components_main_courses_pages_course_list_page_search_add_filter_courses_by_input_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterCoursesByInputPipe"], _auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](CoursesModule, { declarations: [_components_main_courses_pages_courses_pages_component__WEBPACK_IMPORTED_MODULE_12__["CoursesPagesComponent"],
        _components_main_courses_pages_course_list_page_course_list_page_component__WEBPACK_IMPORTED_MODULE_4__["CoursesListPageComponent"],
        _components_main_courses_pages_course_course_component__WEBPACK_IMPORTED_MODULE_5__["CourseComponent"],
        _components_main_courses_pages_course_coming_courses_directive__WEBPACK_IMPORTED_MODULE_9__["CourseDirective"],
        _components_main_courses_pages_course_list_page_search_add_search_add_component__WEBPACK_IMPORTED_MODULE_6__["SearchAddComponent"],
        _components_main_courses_pages_course_duration_course_pipe__WEBPACK_IMPORTED_MODULE_7__["DurationCoursePipe"],
        _components_main_courses_pages_course_list_page_order_by_creation_date_pipe__WEBPACK_IMPORTED_MODULE_8__["OrderByCreationDatePipe"],
        _components_main_courses_pages_course_list_page_search_add_filter_courses_by_input_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterCoursesByInputPipe"],
        _components_main_courses_pages_add_course_page_add_course_page_component__WEBPACK_IMPORTED_MODULE_11__["AddCoursePageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]], exports: [_components_main_courses_pages_courses_pages_component__WEBPACK_IMPORTED_MODULE_12__["CoursesPagesComponent"]] }); })();
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8


/***/ }),

<<<<<<< HEAD
/***/ "sPvx":
/*!*******************************************!*\
  !*** ./src/app/store/courses.selector.ts ***!
  \*******************************************/
/*! exports provided: CoursesSelectors */
=======
/***/ "uCPB":
/*!******************************************************************************!*\
  !*** ./src/app/components/main/courses-pages/course/duration-course.pipe.ts ***!
  \******************************************************************************/
/*! exports provided: DurationCoursePipe */
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesSelectors", function() { return CoursesSelectors; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var CoursesSelectors;
(function (CoursesSelectors) {
    CoursesSelectors.state = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('coursesStore');
    CoursesSelectors.activeCourse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(CoursesSelectors.state, (state) => state.activeCourse);
    CoursesSelectors.currentPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(CoursesSelectors.state, (state) => state.currentPage);
    CoursesSelectors.pagesNumbers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(CoursesSelectors.state, (state) => state.pagesNumbers);
    CoursesSelectors.courses = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(CoursesSelectors.state, (state) => state.courseList);
})(CoursesSelectors || (CoursesSelectors = {}));
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationCoursePipe", function() { return DurationCoursePipe; });
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants */ "l207");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DurationCoursePipe {
    transform(duration) {
        if (duration >= 60) {
            const hours = Math.floor(duration / src_app_constants__WEBPACK_IMPORTED_MODULE_0__["minutesInHour"]);
            const minutes = duration % src_app_constants__WEBPACK_IMPORTED_MODULE_0__["minutesInHour"];
            return hours + 'h ' + minutes + 'min';
        }
        return duration + 'min';
    }
}
DurationCoursePipe.ɵfac = function DurationCoursePipe_Factory(t) { return new (t || DurationCoursePipe)(); };
DurationCoursePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "durationCourse", type: DurationCoursePipe, pure: true });
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8


/***/ }),

<<<<<<< HEAD
/***/ "t9/W":
/*!*******************************************!*\
  !*** ./src/app/modules/courses.module.ts ***!
  \*******************************************/
/*! exports provided: CoursesModule */
=======
/***/ "uGCx":
/*!**********************************************************************!*\
  !*** ./src/app/components/main/breadcrumbs/breadcrumbs.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _courses_pages_courses_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../courses-pages/courses-list.service */ "vQOT");




class BreadcrumbsComponent {
    constructor(router, coursesListService) {
        this.router = router;
        this.coursesListService = coursesListService;
    }
    updateBreadcrumbsPath(event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
            this.breadcrumbsPath = event.urlAfterRedirects.slice(1).split('/');
            if (this.coursesListService.activeCourse) {
                this.breadcrumbsPath[this.breadcrumbsPath.length - 1] = this.coursesListService.activeCourse.title;
            }
            this.breadcrumbsPath = this.breadcrumbsPath.join(' > ').toUpperCase();
        }
    }
    ngOnInit() {
        this.router.events.subscribe(event => this.updateBreadcrumbsPath(event));
    }
}
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_courses_pages_courses_list_service__WEBPACK_IMPORTED_MODULE_2__["CoursesListService"])); };
BreadcrumbsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BreadcrumbsComponent, selectors: [["app-breadcrumbs"]], decls: 3, vars: 1, consts: [[1, "breadcrumbs"]], template: function BreadcrumbsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.breadcrumbsPath);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1icy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "vQOT":
/*!***********************************************************************!*\
  !*** ./src/app/components/main/courses-pages/courses-list.service.ts ***!
  \***********************************************************************/
/*! exports provided: CoursesListService */
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesModule", function() { return CoursesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_main_courses_pages_course_list_page_course_list_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/main/courses-pages/course-list-page/course-list-page.component */ "ODOa");
/* harmony import */ var _components_main_courses_pages_course_course_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/main/courses-pages/course/course.component */ "/9jC");
/* harmony import */ var _components_main_courses_pages_course_list_page_search_add_search_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/main/courses-pages/course-list-page/search-add/search-add.component */ "CvBj");
/* harmony import */ var _components_main_courses_pages_course_duration_course_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/main/courses-pages/course/duration-course.pipe */ "uCPB");
/* harmony import */ var _components_main_courses_pages_course_list_page_order_by_creation_date_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/main/courses-pages/course-list-page/order-by-creation-date.pipe */ "Huzx");
/* harmony import */ var _components_main_courses_pages_course_coming_courses_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/main/courses-pages/course/coming-courses.directive */ "YkKD");
/* harmony import */ var _components_main_courses_pages_course_list_page_search_add_filter_courses_by_input_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/main/courses-pages/course-list-page/search-add/filter-courses-by-input.pipe */ "U3wg");
/* harmony import */ var _components_main_courses_pages_add_course_page_add_course_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/main/courses-pages/add-course-page/add-course-page.component */ "/RYb");
/* harmony import */ var _components_main_courses_pages_courses_pages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/main/courses-pages/courses-pages.component */ "/ML/");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../auth-guard */ "WG8K");
/* harmony import */ var _http_courses_http_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../http/courses-http.service */ "ugVf");
/* harmony import */ var _components_main_courses_pages_courses_buffer_courses_buffer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/main/courses-pages/courses-buffer/courses-buffer.component */ "9rZT");
/* harmony import */ var _components_main_courses_pages_add_course_page_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/main/courses-pages/add-course-page/input-date/input-date.component */ "g9Zw");
/* harmony import */ var _components_main_courses_pages_add_course_page_input_duration_input_duration_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/main/courses-pages/add-course-page/input-duration/input-duration.component */ "u/VD");
/* harmony import */ var _components_main_courses_pages_add_course_page_input_authors_input_authors_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/main/courses-pages/add-course-page/input-authors/input-authors.component */ "1UMN");
/* harmony import */ var _http_authors_http_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../http/authors-http.service */ "gLtC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");





















class CoursesModule {
}
CoursesModule.ɵfac = function CoursesModule_Factory(t) { return new (t || CoursesModule)(); };
CoursesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: CoursesModule });
CoursesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [_components_main_courses_pages_course_list_page_search_add_filter_courses_by_input_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterCoursesByInputPipe"], _auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"], _http_courses_http_service__WEBPACK_IMPORTED_MODULE_14__["CoursesHttpService"], _http_authors_http_service__WEBPACK_IMPORTED_MODULE_19__["AuthorsHttpService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](CoursesModule, { declarations: [_components_main_courses_pages_courses_buffer_courses_buffer_component__WEBPACK_IMPORTED_MODULE_15__["CoursesBufferComponent"],
        _components_main_courses_pages_courses_pages_component__WEBPACK_IMPORTED_MODULE_12__["CoursesPagesComponent"],
        _components_main_courses_pages_course_list_page_course_list_page_component__WEBPACK_IMPORTED_MODULE_4__["CoursesListPageComponent"],
        _components_main_courses_pages_course_course_component__WEBPACK_IMPORTED_MODULE_5__["CourseComponent"],
        _components_main_courses_pages_course_coming_courses_directive__WEBPACK_IMPORTED_MODULE_9__["CourseDirective"],
        _components_main_courses_pages_course_list_page_search_add_search_add_component__WEBPACK_IMPORTED_MODULE_6__["SearchAddComponent"],
        _components_main_courses_pages_course_duration_course_pipe__WEBPACK_IMPORTED_MODULE_7__["DurationCoursePipe"],
        _components_main_courses_pages_course_list_page_order_by_creation_date_pipe__WEBPACK_IMPORTED_MODULE_8__["OrderByCreationDatePipe"],
        _components_main_courses_pages_course_list_page_search_add_filter_courses_by_input_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterCoursesByInputPipe"],
        _components_main_courses_pages_add_course_page_add_course_page_component__WEBPACK_IMPORTED_MODULE_11__["AddCoursePageComponent"],
        _components_main_courses_pages_add_course_page_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_16__["InputDateComponent"],
        _components_main_courses_pages_add_course_page_input_duration_input_duration_component__WEBPACK_IMPORTED_MODULE_17__["InputDurationComponent"],
        _components_main_courses_pages_add_course_page_input_authors_input_authors_component__WEBPACK_IMPORTED_MODULE_18__["InputAuthorsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]], exports: [_components_main_courses_pages_courses_pages_component__WEBPACK_IMPORTED_MODULE_12__["CoursesPagesComponent"]] }); })();


/***/ }),

/***/ "tCr/":
/*!*****************************************************************!*\
  !*** ./src/app/http/interceptors/cookie-interceptor.service.ts ***!
  \*****************************************************************/
/*! exports provided: CookieInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieInterceptorService", function() { return CookieInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/authorization/authorization.service */ "rWs1");


class CookieInterceptorService {
    constructor(authorizationService) {
        this.authorizationService = authorizationService;
    }
    intercept(request, next) {
        const customHeader = this.authorizationService.getTokenInCookie();
        const customHeaderValue = typeof customHeader === 'undefined' ? '' : customHeader;
        const authReq = request.clone({
            headers: request.headers.set('Session-token', customHeaderValue),
        });
        return next.handle(authReq);
    }
}
CookieInterceptorService.ɵfac = function CookieInterceptorService_Factory(t) { return new (t || CookieInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_components_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"])); };
CookieInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CookieInterceptorService, factory: CookieInterceptorService.ɵfac });


/***/ }),

/***/ "u/VD":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/main/courses-pages/add-course-page/input-duration/input-duration.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: InputDurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDurationComponent", function() { return InputDurationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class InputDurationComponent {
    writeValue() { }
    registerOnChange(fn) { }
    registerOnTouched(fn) { }
}
InputDurationComponent.ɵfac = function InputDurationComponent_Factory(t) { return new (t || InputDurationComponent)(); };
InputDurationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputDurationComponent, selectors: [["app-input-duration"]], inputs: { durationControl: "durationControl" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => InputDurationComponent),
                multi: true
            }])], decls: 1, vars: 1, consts: [["type", "number", "min", "0", 3, "formControl"]], template: function InputDurationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.durationControl);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC1kdXJhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "uCPB":
/*!******************************************************************************!*\
  !*** ./src/app/components/main/courses-pages/course/duration-course.pipe.ts ***!
  \******************************************************************************/
/*! exports provided: DurationCoursePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationCoursePipe", function() { return DurationCoursePipe; });
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants */ "l207");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DurationCoursePipe {
    transform(duration) {
        if (duration >= 60) {
            const hours = Math.floor(duration / src_app_constants__WEBPACK_IMPORTED_MODULE_0__["minutesInHour"]);
            const minutes = duration % src_app_constants__WEBPACK_IMPORTED_MODULE_0__["minutesInHour"];
            return hours + 'h ' + minutes + 'min';
        }
        return duration + 'min';
    }
}
DurationCoursePipe.ɵfac = function DurationCoursePipe_Factory(t) { return new (t || DurationCoursePipe)(); };
DurationCoursePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "durationCourse", type: DurationCoursePipe, pure: true });


/***/ }),

/***/ "uGCx":
/*!**********************************************************************!*\
  !*** ./src/app/components/main/breadcrumbs/breadcrumbs.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_store_courses_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/courses.selector */ "sPvx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");





class BreadcrumbsComponent {
    constructor(router, store) {
        this.router = router;
        this.store = store;
        this.store.select(src_app_store_courses_selector__WEBPACK_IMPORTED_MODULE_1__["CoursesSelectors"].activeCourse).subscribe(activeCourse => {
            if (typeof activeCourse === 'object') {
                this.activeCourseTitle = activeCourse.title;
            }
            else {
                this.activeCourseTitle = undefined;
            }
        });
    }
    updateBreadcrumbsPath(event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
            this.breadcrumbsPath = event.urlAfterRedirects.slice(1).split('/');
            if (this.activeCourseTitle) {
                this.breadcrumbsPath[this.breadcrumbsPath.length - 1] = this.activeCourseTitle;
            }
            this.breadcrumbsPath = this.breadcrumbsPath.join(' > ').toUpperCase();
        }
    }
    ngOnInit() {
        this.router.events.subscribe(event => this.updateBreadcrumbsPath(event));
    }
}
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
BreadcrumbsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BreadcrumbsComponent, selectors: [["app-breadcrumbs"]], decls: 3, vars: 1, consts: [[1, "breadcrumbs"]], template: function BreadcrumbsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.breadcrumbsPath);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1icy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "ugVf":
/*!**********************************************!*\
  !*** ./src/app/http/courses-http.service.ts ***!
  \**********************************************/
/*! exports provided: CoursesHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesHttpService", function() { return CoursesHttpService; });
/* harmony import */ var _components_Interfaces_and_classes_course_course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Interfaces-and-classes/course/course */ "B16k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CoursesHttpService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'https://super-courses.herokuapp.com/courses/';
        this.isLoading = false;
    }
    getCourses(url = this.url) {
        return this.httpClient.get(url);
    }
    getPathOfCourses(start, count) {
        return this.httpClient.get(`${this.url}?start=${start}&count=${count}`);
    }
    postCourse(course) {
        return this.httpClient.post(this.url, course);
    }
    putCourse(courseId, course) {
        const changedCourse = new _components_Interfaces_and_classes_course_course__WEBPACK_IMPORTED_MODULE_0__["Course"](Object.assign(Object.assign({}, course), { _id: undefined }));
        return this.httpClient.put(this.url + courseId, changedCourse);
    }
    deleteCourse(courseId) {
        return this.httpClient.delete(this.url + courseId);
    }
    show() {
        this.isLoading = true;
    }
    hide() {
        this.isLoading = false;
    }
}
CoursesHttpService.ɵfac = function CoursesHttpService_Factory(t) { return new (t || CoursesHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CoursesHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CoursesHttpService, factory: CoursesHttpService.ɵfac });


/***/ }),

/***/ "vQOT":
/*!***********************************************************************!*\
  !*** ./src/app/components/main/courses-pages/courses-list.service.ts ***!
  \***********************************************************************/
/*! exports provided: CoursesListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesListService", function() { return CoursesListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class CoursesListService {
    constructor(router) {
        this.router = router;
        this.isCourseListVisible = true;
    }
    toggleAddNewCourse() {
        this.isCourseListVisible = !this.isCourseListVisible;
        if (this.isCourseListVisible) {
            this.router.navigate(['courses']);
        }
        else {
            this.router.navigate(['courses/new']);
        }
    }
    openEditCourse(course) {
        this.router.navigate(['courses', `${course.id}`]);
    }
}
CoursesListService.ɵfac = function CoursesListService_Factory(t) { return new (t || CoursesListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CoursesListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CoursesListService, factory: CoursesListService.ɵfac });
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesListService", function() { return CoursesListService; });
/* harmony import */ var _course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course */ "9tKW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _course_list_page_search_add_filter_courses_by_input_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-list-page/search-add/filter-courses-by-input.pipe */ "U3wg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class CoursesListService {
    constructor(filterCoursesByInputPipe, router) {
        this.filterCoursesByInputPipe = filterCoursesByInputPipe;
        this.router = router;
        this.courseListData = [
            new _course__WEBPACK_IMPORTED_MODULE_0__["Course"]({
                id: 1,
                title: 'HTML course',
                creationDate: new Date(2021, 5, 28),
                duration: 90,
                description: 'HTML course HTML course',
                isTopRated: true
            }),
            new _course__WEBPACK_IMPORTED_MODULE_0__["Course"]({
                id: 2,
                title: 'CSS course',
                creationDate: new Date(2021, 2, 25),
                duration: 115,
                description: 'CSS course CSS course',
                isTopRated: false
            }),
            new _course__WEBPACK_IMPORTED_MODULE_0__["Course"]({
                id: 3,
                title: 'JS course',
                creationDate: new Date(2021, 2, 15),
                duration: 25,
                description: 'JS course JS course',
                isTopRated: true
            }),
            new _course__WEBPACK_IMPORTED_MODULE_0__["Course"]({
                id: 4,
                title: 'JSX course',
                creationDate: new Date(2021, 3, 10),
                duration: 75,
                description: 'JSX course JSX course',
                isTopRated: false
            }),
            new _course__WEBPACK_IMPORTED_MODULE_0__["Course"]({
                id: 5,
                title: 'TS course',
                creationDate: new Date(2021, 1, 20),
                duration: 40,
                description: 'TS course TS course',
                isTopRated: true
            }),
        ];
        this.isCourseListVisible = true;
        this.isAddCourseVisible = false;
        this.isCourseListDataEmpty = false;
    }
    getCourseListLength() {
        return this.courseListData.length;
    }
    toggleAddNewCourse() {
        this.activeCourse = undefined;
        this.isCourseListVisible = !this.isCourseListVisible;
        this.isAddCourseVisible = !this.isAddCourseVisible;
        if (this.isCourseListVisible) {
            this.router.navigate(['courses']);
        }
        else {
            this.router.navigate(['courses/new']);
        }
    }
    openEditCourse(course) {
        this.activeCourse = course;
        this.router.navigate(['courses', `${course.id}`]);
    }
    getIsEmptyCourseList() {
        this.isCourseListDataEmpty = !this.courseListData.length;
        return this.isCourseListDataEmpty;
    }
    addCourse(course) {
        this.courseListData.push(course);
        this.isCourseListDataEmpty = false;
    }
    getCourseById(courseId) {
        for (let i = 0; i < this.courseListData.length; i++) {
            if (this.courseListData[i].id === courseId) {
                return this.courseListData[i];
            }
        }
        return 'incorrect id';
    }
    removeCourse(id) {
        this.courseListData.forEach((element, index) => {
            if (element.id === id) {
                this.courseListData.splice(index, 1);
            }
        });
        if (this.courseListData.length === 0) {
            this.isCourseListDataEmpty = true;
        }
    }
    getCourseList() {
        return this.courseListData;
    }
    getFilteredCourseList(inputValue) {
        if (inputValue.trim() === '') {
            return this.getCourseList();
        }
        else {
            return this.filterCoursesByInputPipe.transform(this.courseListData, inputValue);
        }
    }
}
CoursesListService.ɵfac = function CoursesListService_Factory(t) { return new (t || CoursesListService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_course_list_page_search_add_filter_courses_by_input_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterCoursesByInputPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CoursesListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CoursesListService, factory: CoursesListService.ɵfac });
>>>>>>> a21cc9de6cc2d0377528ad2b6e8647667b11a7d8


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-guard */ "WG8K");
/* harmony import */ var _components_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/authorization/authorization.component */ "8A2Y");
/* harmony import */ var _components_main_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/not-found-page/not-found-page.component */ "OroL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    { path: 'courses', loadChildren: () => __webpack_require__.e(/*! import() | modules-courses-routing-module */ "modules-courses-routing-module").then(__webpack_require__.bind(null, /*! ./modules/courses-routing.module */ "2tVE"))
            .then(module => module.CoursesRoutingModule),
        canLoad: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    { path: 'authorization', component: _components_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_2__["AuthorizationComponent"] },
    { path: '**', component: _components_main_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundPageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "yXZF":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/authorization/authorization-error/authorization-error.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AuthorizationErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationErrorComponent", function() { return AuthorizationErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthorizationErrorComponent {
    constructor() {
        this.closeErrorComponent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    closeError() {
        this.closeErrorComponent.emit();
    }
}
AuthorizationErrorComponent.ɵfac = function AuthorizationErrorComponent_Factory(t) { return new (t || AuthorizationErrorComponent)(); };
AuthorizationErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthorizationErrorComponent, selectors: [["app-authorization-error"]], outputs: { closeErrorComponent: "closeErrorComponent" }, decls: 11, vars: 0, consts: [[1, "backdrop"], [1, "errorWrapper", "modalWrapper"], [1, "close", 3, "click"], [1, "errorMessage"], [1, "closeErrorMessageButton", 3, "click"]], template: function AuthorizationErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorizationErrorComponent_Template_div_click_2_listener() { return ctx.closeError(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Your user name or password is incorrect.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorizationErrorComponent_Template_button_click_9_listener() { return ctx.closeError(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Try again");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".backdrop[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\n.errorWrapper[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 200px;\n  background-color: #ff7e7e;\n  border: 5px solid #ff3e3e;\n}\n\n.errorMessage[_ngcontent-%COMP%] {\n  margin: 20px;\n  text-align: center;\n}\n\n.closeErrorMessageButton[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXV0aG9yaXphdGlvbi1lcnJvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFVBQUE7QUFDRDs7QUFFQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUNEOztBQUVBO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxhQUFBO0FBQ0QiLCJmaWxlIjoiYXV0aG9yaXphdGlvbi1lcnJvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZHJvcCB7XHJcblx0ei1pbmRleDogMjtcclxufVxyXG5cclxuLmVycm9yV3JhcHBlciB7XHJcblx0d2lkdGg6IDQwMHB4O1xyXG5cdGhlaWdodDogMjAwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTI2LCAxMjYpO1xyXG5cdGJvcmRlcjogNXB4IHNvbGlkIHJnYigyNTUsIDYyLCA2Mik7XHJcbn1cclxuXHJcbi5lcnJvck1lc3NhZ2Uge1xyXG5cdG1hcmdpbjogMjBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jbG9zZUVycm9yTWVzc2FnZUJ1dHRvbiB7XHJcblx0cGFkZGluZzogMTBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map