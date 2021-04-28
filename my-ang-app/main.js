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
/* harmony import */ var _coming_courses_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coming-courses.directive */ "YkKD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _duration_course_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./duration-course.pipe */ "uCPB");





function CourseComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} }
const _c0 = function (a0) { return { topRatedCourse: a0 }; };
class CourseComponent {
    constructor() {
        this.deletedCourse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editToCourse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    deleteCourse(id) {
        this.deletedCourse.emit(id);
    }
    editCourse(course) {
        this.editToCourse.emit(course);
    }
    ngOnDestroy() {
        console.log('Removed course id ' + this.course.id);
    }
}
CourseComponent.ɵfac = function CourseComponent_Factory(t) { return new (t || CourseComponent)(); };
CourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseComponent, selectors: [["app-course"]], inputs: { course: "course" }, outputs: { deletedCourse: "deletedCourse", editToCourse: "editToCourse" }, decls: 20, vars: 16, consts: [["appCourse", "", 1, "courses-list_item", 3, "ngClass", "courseCreationDate"], [1, "course-content"], [1, "course-title"], [1, "course-name"], ["src", "../../../../../assets/starCourse.svg", "alt", "star", 4, "ngIf"], [1, "course-info"], [1, "course-buttons"], [1, "course-button", 3, "click"], ["src", "../../../../../assets/starCourse.svg", "alt", "star"]], template: function CourseComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_coming_courses_directive__WEBPACK_IMPORTED_MODULE_1__["CourseDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], _duration_course_pipe__WEBPACK_IMPORTED_MODULE_3__["DurationCoursePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".courses-list_item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border: 2px solid black;\n  border-radius: 5px;\n  margin: 15px 15px;\n  padding: 10px;\n  background-color: rgba(252, 208, 142, 0.7);\n}\n\n.course-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.course-name[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n}\n\n.course-buttons[_ngcontent-%COMP%] {\n  width: 250px;\n  margin-left: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.course-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.topRatedCourse[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#ff682c, #ffbd42);\n}\n\n.greenBorder[_ngcontent-%COMP%] {\n  border: 4px solid #34C924;\n  box-shadow: 0 0 10px #19fa00;\n}\n\n.blueBorder[_ngcontent-%COMP%] {\n  border: 4px solid #1560BD;\n  box-shadow: 0 0 10px #0073ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtBQUNEOztBQUNBO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0FBRUQ7O0FBQUE7RUFDQyxnQkFBQTtBQUdEOztBQURBO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFJRDs7QUFBQztFQUNDLFdBQUE7QUFHRjs7QUFBQTtFQUNDLG1EQUFBO0FBR0Q7O0FBQUE7RUFDQyx5QkFBQTtFQUNBLDRCQUFBO0FBR0Q7O0FBQUE7RUFDQyx5QkFBQTtFQUNBLDRCQUFBO0FBR0QiLCJmaWxlIjoiY291cnNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdXJzZXMtbGlzdF9pdGVtIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0bWFyZ2luOiAxNXB4IDE1cHg7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZjZDA4ZSwgJGFscGhhOiAwLjcpO1xyXG59XHJcbi5jb3Vyc2UtdGl0bGUge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5jb3Vyc2UtbmFtZSB7XHJcblx0Zm9udC1zaXplOiAxLjNlbTtcclxufVxyXG4uY291cnNlLWJ1dHRvbnMge1xyXG5cdHdpZHRoOiAyNTBweDtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuLmNvdXJzZS1idXR0b24ge1xyXG5cclxuXHRidXR0b24ge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG59XHJcbi50b3BSYXRlZENvdXJzZSB7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigyNTUsIDEwNCwgNDQpLCByZ2IoMjU1LCAxODksIDY2KSk7XHJcbn1cclxuXHJcbi5ncmVlbkJvcmRlciB7XHJcblx0Ym9yZGVyOiA0cHggc29saWQgIzM0QzkyNDtcclxuXHRib3gtc2hhZG93OjAgMCAxMHB4ICMxOWZhMDA7XHJcbn1cclxuXHJcbi5ibHVlQm9yZGVye1xyXG5cdGJvcmRlcjogNHB4IHNvbGlkICMxNTYwQkQ7XHJcblx0Ym94LXNoYWRvdzowIDAgMTBweCAjMDA3M2ZmO1xyXG59XHJcbiJdfQ== */"], changeDetection: 0 });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorization.service */ "rWs1");
/* harmony import */ var _validation_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation.directive */ "939I");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _authorization_error_authorization_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authorization-error/authorization-error.component */ "yXZF");





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

/***/ "ODOa":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/main/courses-pages/course-list-page/course-list-page.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CoursesListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesListPageComponent", function() { return CoursesListPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _courses_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../courses-list.service */ "vQOT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _search_add_search_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-add/search-add.component */ "CvBj");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../course/course.component */ "/9jC");
/* harmony import */ var _order_by_creation_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-by-creation-date.pipe */ "Huzx");






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
    }
}
CoursesListPageComponent.ɵfac = function CoursesListPageComponent_Factory(t) { return new (t || CoursesListPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_courses_list_service__WEBPACK_IMPORTED_MODULE_1__["CoursesListService"])); };
CoursesListPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoursesListPageComponent, selectors: [["app-course-list-page"]], decls: 11, vars: 6, consts: [[1, "deleteCoursePopup-container"], ["class", "backdrop", 4, "ngIf"], [1, "searchAdd-container"], [3, "searchCourses", "toggleAddNewCourse"], [1, "courseList"], ["class", "courseList__empty", 4, "ngIf"], [3, "course", "deletedCourse", "editToCourse", 4, "ngFor", "ngForOf"], [1, "loadMore-container"], [1, "loadMoreButton", 3, "disabled", "click"], [1, "backdrop"], [1, "confirmationModal", "modalWrapper"], [1, "close", 3, "click"], [1, "confirmationMessage"], [1, ""], [3, "click"], [1, "courseList__empty"], [3, "course", "deletedCourse", "editToCourse"]], template: function CoursesListPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CoursesListPageComponent_div_1_Template, 11, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-search-add", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchCourses", function CoursesListPageComponent_Template_app_search_add_searchCourses_3_listener($event) { return ctx.searchCourses($event); })("toggleAddNewCourse", function CoursesListPageComponent_Template_app_search_add_toggleAddNewCourse_3_listener() { return ctx.toggleAddNewCourse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CoursesListPageComponent_div_5_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CoursesListPageComponent_app_course_6_Template, 1, 1, "app-course", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "orderByCreationDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/authorization/authorization.component */ "8A2Y");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");








function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-authorization");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_app_main_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main");
} }
class AppComponent {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_app_main_6_Template, 1, 0, "app-main", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authorizationService.userLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authorizationService.userLogin);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_6__["AuthorizationComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 80vw;\n  box-sizing: content-box;\n  border: 2px solid black;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n.header-container[_ngcontent-%COMP%] {\n  height: 10vh;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  height: 85vh;\n}\n\n.footer-container[_ngcontent-%COMP%] {\n  height: 5vh;\n  background: bisque;\n  bottom: 0;\n  position: sticky;\n  text-align: right;\n}\n\n.body[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow-y: hidden;\n  background: linear-gradient(#ffaa2a, #ff7626);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMENBQUE7QUFDRDs7QUFFQTtFQUNDLFlBQUE7QUFDRDs7QUFDQTtFQUNDLFlBQUE7QUFFRDs7QUFBQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBR0Q7O0FBQUE7RUFDQyxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQUdEIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHR3aWR0aDogODB2dztcclxuXHRib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmZmZmZjgwLCAkYWxwaGE6IDAuNyk7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFpbmVyIHtcclxuXHRoZWlnaHQ6IDEwdmg7XHJcbn1cclxuLm1haW4tY29udGFpbmVyIHtcclxuXHRoZWlnaHQ6IDg1dmg7XHJcbn1cclxuLmZvb3Rlci1jb250YWluZXIge1xyXG5cdGhlaWdodDogNXZoO1xyXG5cdGJhY2tncm91bmQ6IGJpc3F1ZTtcclxuXHRib3R0b206IDA7XHJcblx0cG9zaXRpb246IHN0aWNreTtcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmJvZHkge1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0b3ZlcmZsb3cteTogaGlkZGVuO1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoMjU1LCAxNzAsIDQyKSwgcmdiKDI1NSwgMTE4LCAzOCkpO1xyXG59XHJcbiJdfQ== */"] });


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
        const differenceDatesInDay = Math.floor((+this.currentDate - +this.courseCreationDate) / src_app_constants__WEBPACK_IMPORTED_MODULE_0__["millisecondsInDay"]);
        if (differenceDatesInDay > 0 && differenceDatesInDay <= src_app_constants__WEBPACK_IMPORTED_MODULE_0__["daysInTwoWeek"]) {
            this.elementRef.nativeElement.className = this.elementRef.nativeElement.className + src_app_constants__WEBPACK_IMPORTED_MODULE_0__["greenBorderClass"];
        }
        else if (differenceDatesInDay <= 0) {
            this.elementRef.nativeElement.className = this.elementRef.nativeElement.className + src_app_constants__WEBPACK_IMPORTED_MODULE_0__["blueBorderClass"];
        }
    }
}
CourseDirective.ɵfac = function CourseDirective_Factory(t) { return new (t || CourseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
CourseDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CourseDirective, selectors: [["", "appCourse", ""]], inputs: { courseCreationDate: "courseCreationDate" } });


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















class AppModule {
}
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
}
AuthorizationService.ɵfac = function AuthorizationService_Factory(t) { return new (t || AuthorizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthorizationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthorizationService, factory: AuthorizationService.ɵfac });


/***/ }),

/***/ "t9/W":
/*!*******************************************!*\
  !*** ./src/app/modules/courses.module.ts ***!
  \*******************************************/
/*! exports provided: CoursesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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