(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Desktop\angular-epam\Angular\software-engineering-l1\my-ang-app\src\main.ts */"zUnb");


/***/ }),

/***/ "043T":
/*!*****************************************************************************!*\
  !*** ./src/app/components/main/courses-page/order-by-creation-date.pipe.ts ***!
  \*****************************************************************************/
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

/***/ "0aUh":
/*!*************************************************************************!*\
  !*** ./src/app/components/main/courses-page/course/course.component.ts ***!
  \*************************************************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _course_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course.directive */ "9cev");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _duration_course_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./duration-course.pipe */ "mdcl");





function CourseComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
} }
const _c0 = function (a0) { return { topRatedCourse: a0 }; };
class CourseComponent {
    constructor() {
        this.deletedCourse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    deleteCourse(id) {
        this.deletedCourse.emit(id);
    }
    ngOnDestroy() {
        console.log('Removed course id ' + this.course.id);
    }
}
CourseComponent.ɵfac = function CourseComponent_Factory(t) { return new (t || CourseComponent)(); };
CourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseComponent, selectors: [["app-course"]], inputs: { course: "course" }, outputs: { deletedCourse: "deletedCourse" }, decls: 20, vars: 16, consts: [["appCourse", "", 1, "courses-list_item", 3, "ngClass", "courseCreationDate"], [1, "course-content"], [1, "course-title"], [1, "course-name"], ["src", "../../../../../assets/starCourse.svg", "alt", "star", 4, "ngIf"], [1, "course-info"], [1, "course-buttons"], [1, "course-button"], [1, "course-button", 3, "click"], ["src", "../../../../../assets/starCourse.svg", "alt", "star"]], template: function CourseComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
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
    } }, directives: [_course_directive__WEBPACK_IMPORTED_MODULE_1__["CourseDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], _duration_course_pipe__WEBPACK_IMPORTED_MODULE_3__["DurationCoursePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".courses-list_item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border: 2px solid black;\n  border-radius: 5px;\n  margin: 15px 15px;\n  padding: 10px;\n  background-color: rgba(252, 208, 142, 0.7);\n}\n\n.course-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.course-name[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n}\n\n.course-buttons[_ngcontent-%COMP%] {\n  width: 250px;\n  margin-left: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.course-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.topRatedCourse[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#ff682c, #ffbd42);\n}\n\n.greenBorder[_ngcontent-%COMP%] {\n  border: 4px solid #34C924;\n  box-shadow: 0 0 10px #19fa00;\n}\n\n.blueBorder[_ngcontent-%COMP%] {\n  border: 4px solid #1560BD;\n  box-shadow: 0 0 10px #0073ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtBQUNEOztBQUNBO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0FBRUQ7O0FBQUE7RUFDQyxnQkFBQTtBQUdEOztBQURBO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFJRDs7QUFBQztFQUNDLFdBQUE7QUFHRjs7QUFBQTtFQUNDLG1EQUFBO0FBR0Q7O0FBQUE7RUFDQyx5QkFBQTtFQUNBLDRCQUFBO0FBR0Q7O0FBQUE7RUFDQyx5QkFBQTtFQUNBLDRCQUFBO0FBR0QiLCJmaWxlIjoiY291cnNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdXJzZXMtbGlzdF9pdGVtIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0bWFyZ2luOiAxNXB4IDE1cHg7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZjZDA4ZSwgJGFscGhhOiAwLjcpO1xyXG59XHJcbi5jb3Vyc2UtdGl0bGUge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5jb3Vyc2UtbmFtZSB7XHJcblx0Zm9udC1zaXplOiAxLjNlbTtcclxufVxyXG4uY291cnNlLWJ1dHRvbnMge1xyXG5cdHdpZHRoOiAyNTBweDtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuLmNvdXJzZS1idXR0b24ge1xyXG5cclxuXHRidXR0b24ge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG59XHJcbi50b3BSYXRlZENvdXJzZSB7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigyNTUsIDEwNCwgNDQpLCByZ2IoMjU1LCAxODksIDY2KSk7XHJcbn1cclxuXHJcbi5ncmVlbkJvcmRlciB7XHJcblx0Ym9yZGVyOiA0cHggc29saWQgIzM0QzkyNDtcclxuXHRib3gtc2hhZG93OjAgMCAxMHB4ICMxOWZhMDA7XHJcbn1cclxuXHJcbi5ibHVlQm9yZGVye1xyXG5cdGJvcmRlcjogNHB4IHNvbGlkICMxNTYwQkQ7XHJcblx0Ym94LXNoYWRvdzowIDAgMTBweCAjMDA3M2ZmO1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user/user */ "fny8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authorization/authorization.service */ "rWs1");



class HeaderComponent {
    constructor(authorization) {
        this.authorization = authorization;
        this.userExample = new _user_user__WEBPACK_IMPORTED_MODULE_0__["User"]({ id: 1, firstName: 'Nikita', lastName: 'Loshkarev' });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 11, vars: 1, consts: [[1, "header"], [1, "logo"], [1, "logo_image"], ["src", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/120px-Angular_full_color_logo.svg.png", "alt", "Angular", "width", "50"], [1, "logo_title"], [1, "account"], [1, "account_user"], [3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Super courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_9_listener() { return ctx.authorization.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Log out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.authorization.getUserInfo(), " ");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeErrorComponent", function AuthorizationComponent_app_authorization_error_0_Template_app_authorization_error_closeErrorComponent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.authorization.toggleErrorComponent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AuthorizationComponent {
    constructor(authorization) {
        this.authorization = authorization;
    }
    backDropClick(event) {
        console.log(event.currentTarget);
    }
    toggleLogIn() {
        this.authorization.login();
    }
}
AuthorizationComponent.ɵfac = function AuthorizationComponent_Factory(t) { return new (t || AuthorizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"])); };
AuthorizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthorizationComponent, selectors: [["app-authorization"]], decls: 17, vars: 3, consts: [[3, "closeErrorComponent", 4, "appValidation"], [1, "backdrop", 3, "click"], [1, "logInWrapper", "modalWrapper"], [1, "close", 3, "click"], [1, "LogInSignUp__title"], [1, ""], ["type", "text", "placeholder", "name", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "password", "required", "", 3, "ngModel", "ngModelChange"], [3, "click"], [3, "closeErrorComponent"]], template: function AuthorizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AuthorizationComponent_app_authorization_error_0_Template, 1, 0, "app-authorization-error", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorizationComponent_Template_div_click_1_listener($event) { return ctx.backDropClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorizationComponent_Template_div_click_3_listener() { return ctx.toggleLogIn(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AuthorizationComponent_Template_input_ngModelChange_10_listener($event) { return ctx.authorization.userNameInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AuthorizationComponent_Template_input_ngModelChange_14_listener($event) { return ctx.authorization.userPasswordInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorizationComponent_Template_button_click_15_listener() { return ctx.authorization.submitAuthorization(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appValidation", ctx.authorization.isErrorModalVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.authorization.userNameInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.authorization.userPasswordInput);
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

/***/ "9cev":
/*!*************************************************************************!*\
  !*** ./src/app/components/main/courses-page/course/course.directive.ts ***!
  \*************************************************************************/
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
        else if (differenceDatesInDay < 0) {
            this.elementRef.nativeElement.className = this.elementRef.nativeElement.className + src_app_constants__WEBPACK_IMPORTED_MODULE_0__["blueBorderClass"];
        }
    }
}
CourseDirective.ɵfac = function CourseDirective_Factory(t) { return new (t || CourseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
CourseDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CourseDirective, selectors: [["", "appCourse", ""]], inputs: { courseCreationDate: "courseCreationDate" } });


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
/* harmony import */ var _courses_page_courses_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courses-page/courses-page.component */ "W2Jh");



class MainComponent {
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 3, vars: 0, consts: [[1, "breadcrumbs-container"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-breadcrumbs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-courses-page");
    } }, directives: [_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbsComponent"], _courses_page_courses_page_component__WEBPACK_IMPORTED_MODULE_2__["CoursesPageComponent"]], styles: [".breadcrumbs-container[_ngcontent-%COMP%] {\n  height: 5vh;\n  padding: 0 15px;\n  border-bottom: 2px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUNEIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWRjcnVtYnMtY29udGFpbmVyIHtcclxuXHRoZWlnaHQ6IDV2aDtcclxuXHRwYWRkaW5nOiAwIDE1cHg7XHJcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbiJdfQ== */"] });


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

/***/ "S33y":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/main/courses-page/add-course-page/add-course-page.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddCoursePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCoursePageComponent", function() { return AddCoursePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _course_duration_course_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../course/duration-course.pipe */ "mdcl");




class AddCoursePageComponent {
    constructor() {
        this.toggleAddNewCourse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newCourse = {
            id: 0,
            title: '',
            description: '',
            creationDate: new Date(),
            duration: 0,
            isTopRated: false,
        };
    }
    createNewCourse() {
        console.log(this.newCourse);
    }
    closeNewCourseForm() {
        this.toggleAddNewCourse.emit();
    }
}
AddCoursePageComponent.ɵfac = function AddCoursePageComponent_Factory(t) { return new (t || AddCoursePageComponent)(); };
AddCoursePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCoursePageComponent, selectors: [["app-add-course-page"]], outputs: { toggleAddNewCourse: "toggleAddNewCourse" }, decls: 30, vars: 7, consts: [[1, "newCourseForm"], [1, "inputContainer"], [1, "inputContainer_input"], ["type", "text roundedBorders", "placeholder", "title", 1, "wideInput", "roundedBorders", 3, "ngModel", "ngModelChange"], ["rows", "5", "placeholder", "description", 1, "wideInput", "roundedBorders", 3, "ngModel", "ngModelChange"], ["type", "date", 1, "roundedBorders", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "duration min", 1, "roundedBorders", 3, "ngModel", "ngModelChange"], [1, "durationCourse"], ["type", "authors", "placeholder", "", 1, "roundedBorders", "wideInput"], [1, "buttonsContainer"], [1, "buttonsContainer_button", 3, "click"]], template: function AddCoursePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCoursePageComponent_Template_input_ngModelChange_5_listener($event) { return ctx.newCourse.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCoursePageComponent_Template_textarea_ngModelChange_9_listener($event) { return ctx.newCourse.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCoursePageComponent_Template_input_ngModelChange_13_listener($event) { return ctx.newCourse.creationDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Duration:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCoursePageComponent_Template_input_ngModelChange_17_listener($event) { return ctx.newCourse.duration = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "durationCourse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Authors:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCoursePageComponent_Template_button_click_26_listener() { return ctx.createNewCourse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCoursePageComponent_Template_button_click_28_listener() { return ctx.closeNewCourseForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newCourse.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newCourse.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newCourse.creationDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newCourse.duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 5, ctx.newCourse.duration));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], pipes: [_course_duration_course_pipe__WEBPACK_IMPORTED_MODULE_2__["DurationCoursePipe"]], styles: [".newCourseForm[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.inputContainer[_ngcontent-%COMP%] {\n  height: calc(80vh - 40px);\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  border: 2px solid black;\n  border-radius: 5px;\n  background-image: linear-gradient(#ffae00, #fcc867);\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.buttonsContainer[_ngcontent-%COMP%] {\n  width: 40%;\n  margin: 10px;\n  display: flex;\n  justify-content: space-around;\n}\n\n.buttonsContainer_button[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\n.durationCourse[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n.wideInput[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFkZC1jb3Vyc2UtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7QUFDRDs7QUFFQTtFQUNDLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1EQUFBO0FBQ0Q7O0FBRUE7RUFDQyxVQUFBO0FBQ0Q7O0FBRUE7RUFDQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUNEOztBQUNDO0VBQ0MsV0FBQTtBQUNGOztBQUdBO0VBQ0MsY0FBQTtBQUFEOztBQUdBO0VBQ0EsV0FBQTtBQUFBIiwiZmlsZSI6ImFkZC1jb3Vyc2UtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdDb3Vyc2VGb3JtIHtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uaW5wdXRDb250YWluZXIge1xyXG5cdGhlaWdodDogY2FsYyg4MHZoIC0gNDBweCk7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMjU1LCAxNzQsIDApLCByZ2IoMjUyLCAyMDAsIDEwMykpO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcblx0d2lkdGg6IDMwJTtcclxufVxyXG5cclxuLmJ1dHRvbnNDb250YWluZXIge1xyXG5cdHdpZHRoOiA0MCU7XHJcblx0bWFyZ2luOiAxMHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG5cdCZfYnV0dG9uIHtcclxuXHRcdHdpZHRoOiA4MHB4O1xyXG5cdH1cclxufVxyXG5cclxuLmR1cmF0aW9uQ291cnNlIHtcclxuXHRtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuLndpZGVJbnB1dCB7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/authorization/authorization.component */ "8A2Y");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");







function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-authorization");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_app_main_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main");
} }
class AppComponent {
    constructor(authorization) {
        this.authorization = authorization;
        this.title = 'my-ang-app';
        this.authorization.takeUserLoginFromLocalStorage();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"])); };
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authorization.userLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authorization.userLogin);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _components_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_5__["AuthorizationComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 80vw;\n  box-sizing: content-box;\n  border: 2px solid black;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n.header-container[_ngcontent-%COMP%] {\n  height: 10vh;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  height: 85vh;\n}\n\n.footer-container[_ngcontent-%COMP%] {\n  height: 5vh;\n  background: bisque;\n  bottom: 0;\n  position: sticky;\n  text-align: right;\n}\n\n.body[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow-y: hidden;\n  background: linear-gradient(#ffaa2a, #ff7626);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMENBQUE7QUFDRDs7QUFFQTtFQUNDLFlBQUE7QUFDRDs7QUFDQTtFQUNDLFlBQUE7QUFFRDs7QUFBQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBR0Q7O0FBQUE7RUFDQyxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQUdEIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHR3aWR0aDogODB2dztcclxuXHRib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmZmZmZjgwLCAkYWxwaGE6IDAuNyk7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFpbmVyIHtcclxuXHRoZWlnaHQ6IDEwdmg7XHJcbn1cclxuLm1haW4tY29udGFpbmVyIHtcclxuXHRoZWlnaHQ6IDg1dmg7XHJcbn1cclxuLmZvb3Rlci1jb250YWluZXIge1xyXG5cdGhlaWdodDogNXZoO1xyXG5cdGJhY2tncm91bmQ6IGJpc3F1ZTtcclxuXHRib3R0b206IDA7XHJcblx0cG9zaXRpb246IHN0aWNreTtcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmJvZHkge1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0b3ZlcmZsb3cteTogaGlkZGVuO1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoMjU1LCAxNzAsIDQyKSwgcmdiKDI1NSwgMTE4LCAzOCkpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "UvTf":
/*!********************************************************!*\
  !*** ./src/app/components/main/courses-page/course.ts ***!
  \********************************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
class Course {
    constructor(course) {
        this.id = course.id;
        this.title = course.title;
        this.creationDate = course.creationDate;
        this.duration = course.duration;
        this.description = course.description;
        this.isTopRated = course.isTopRated;
    }
}


/***/ }),

/***/ "W2Jh":
/*!************************************************************************!*\
  !*** ./src/app/components/main/courses-page/courses-page.component.ts ***!
  \************************************************************************/
/*! exports provided: CoursesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesPageComponent", function() { return CoursesPageComponent; });
/* harmony import */ var _courses_list_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses-list.service */ "m2BS");
/* harmony import */ var _search_add_filter_courses_by_input_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-add/filter-courses-by-input.pipe */ "uxcK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _search_add_search_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-add/search-add.component */ "fxme");
/* harmony import */ var _add_course_page_add_course_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-course-page/add-course-page.component */ "S33y");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course/course.component */ "0aUh");
/* harmony import */ var _order_by_creation_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-by-creation-date.pipe */ "043T");









function CoursesPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CoursesPageComponent_div_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.toggleConfirmModalToDeleteCourse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Do you really want to delete this course?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CoursesPageComponent_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.removeCourse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CoursesPageComponent_div_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.toggleConfirmModalToDeleteCourse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CoursesPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-search-add", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("searchCourses", function CoursesPageComponent_div_2_Template_app_search_add_searchCourses_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.searchCourses($event); })("toggleAddNewCourse", function CoursesPageComponent_div_2_Template_app_search_add_toggleAddNewCourse_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.toggleAddNewCourse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("coursesCatalog", ctx_r1.coursesCatalog);
} }
function CoursesPageComponent_app_add_course_page_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-add-course-page", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("toggleAddNewCourse", function CoursesPageComponent_app_add_course_page_3_Template_app_add_course_page_toggleAddNewCourse_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.toggleAddNewCourse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CoursesPageComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " no data. feel free to add new course. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CoursesPageComponent_div_4_app_course_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-course", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("deletedCourse", function CoursesPageComponent_div_4_app_course_2_Template_app_course_deletedCourse_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const i_r17 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r18.toggleConfirmModalToDeleteCourse(ctx_r18.coursesCatalog[i_r17].id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r17 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("course", ctx_r15.coursesCatalog[i_r17]);
} }
function CoursesPageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CoursesPageComponent_div_4_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CoursesPageComponent_div_4_app_course_2_Template, 1, 1, "app-course", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "orderByCreationDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.isCourseListEmpty);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, ctx_r3.coursesCatalog));
} }
function CoursesPageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CoursesPageComponent_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.showMoreCourses(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "load more");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r4.isCourseListEmpty);
} }
class CoursesPageComponent {
    constructor(coursesList) {
        this.coursesList = coursesList;
        this.coursesCatalog = this.coursesList.getCourseList();
        this.isCourseListEmpty = this.coursesList.isCourseListDataEmpty;
        this.isDeleteCourseContainerVisible = false;
        this.isCourseListVisible = true;
        this.isAddCourseVisible = false;
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
    removeCourse() {
        this.isDeleteCourseContainerVisible = false;
        this.coursesList.removeCourse(this.currentDeletionCourseId);
        this.isCourseListEmpty = this.coursesList.isCourseListDataEmpty;
    }
    searchCourses(currentInput) {
        this.coursesCatalog = this.coursesList.getFilteredCourseList(currentInput);
    }
    toggleAddNewCourse() {
        this.isCourseListVisible = !this.isCourseListVisible;
        this.isAddCourseVisible = !this.isAddCourseVisible;
    }
}
CoursesPageComponent.ɵfac = function CoursesPageComponent_Factory(t) { return new (t || CoursesPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_courses_list_service__WEBPACK_IMPORTED_MODULE_0__["CoursesListService"])); };
CoursesPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CoursesPageComponent, selectors: [["app-courses-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_courses_list_service__WEBPACK_IMPORTED_MODULE_0__["CoursesListService"], _search_add_filter_courses_by_input_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterCoursesByInputPipe"]])], decls: 6, vars: 5, consts: [[1, "deleteCoursePopup-container"], ["class", "backdrop", 4, "ngIf"], ["class", "searchAdd-container", 4, "ngIf"], [3, "toggleAddNewCourse", 4, "ngIf"], ["class", "courseList", 4, "ngIf"], ["class", "loadMore-container", 4, "ngIf"], [1, "backdrop"], [1, "confirmationModal", "modalWrapper"], [1, "close", 3, "click"], [1, "confirmationMessage"], [1, ""], [3, "click"], [1, "searchAdd-container"], [3, "coursesCatalog", "searchCourses", "toggleAddNewCourse"], [3, "toggleAddNewCourse"], [1, "courseList"], ["class", "courseList__empty", 4, "ngIf"], [3, "course", "deletedCourse", 4, "ngFor", "ngForOf"], [1, "courseList__empty"], [3, "course", "deletedCourse"], [1, "loadMore-container"], [1, "loadMoreButton", 3, "disabled", "click"]], template: function CoursesPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CoursesPageComponent_div_1_Template, 11, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CoursesPageComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CoursesPageComponent_app_add_course_page_3_Template, 1, 0, "app-add-course-page", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CoursesPageComponent_div_4_Template, 4, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CoursesPageComponent_div_5_Template, 3, 1, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDeleteCourseContainerVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isAddCourseVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAddCourseVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isCourseListVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isAddCourseVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _search_add_search_add_component__WEBPACK_IMPORTED_MODULE_4__["SearchAddComponent"], _add_course_page_add_course_page_component__WEBPACK_IMPORTED_MODULE_5__["AddCoursePageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _course_course_component__WEBPACK_IMPORTED_MODULE_6__["CourseComponent"]], pipes: [_order_by_creation_date_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderByCreationDatePipe"]], styles: [".searchAdd-container[_ngcontent-%COMP%] {\n  height: 7vh;\n  padding: 1vh 15px;\n}\n\n.loadMore-container[_ngcontent-%COMP%] {\n  height: 5vh;\n  padding: 1vh 15px;\n  width: calc(100% - 30px);\n}\n\n.loadMoreButton[_ngcontent-%COMP%] {\n  width: 100%;\n  text-transform: uppercase;\n}\n\n.courseList[_ngcontent-%COMP%] {\n  height: 65vh;\n  background-color: rgba(48, 48, 48, 0.116);\n  overflow-y: hidden;\n  overflow-y: scroll;\n}\n\n.courseList[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\n  background-color: #ffbd5b;\n  border-radius: 10px;\n}\n\n.courseList[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n\n.courseList[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #924200;\n}\n\n.courseList__empty[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.confirmationModal[_ngcontent-%COMP%] {\n  width: 35vw;\n  height: 20vh;\n  background-color: #ffb62e;\n}\n\n.confirmationMessage[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 50px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY291cnNlcy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNDLFdBQUE7RUFDQSxpQkFBQTtBQWpCRDs7QUFvQkE7RUFDQyxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQWpCRDs7QUFvQkE7RUFDQyxXQUFBO0VBQ0EseUJBQUE7QUFqQkQ7O0FBb0JBO0VBQ0MsWUFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWpCRDs7QUFwQkU7RUFFRSw0Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFxQko7O0FBbkJFO0VBRUUsV0FBQTtBQW9CSjs7QUFsQkU7RUFFRSxtQkFBQTtFQUNBLHlCQUFBO0FBbUJKOztBQVNBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTkQ7O0FBU0E7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBTkQ7O0FBU0E7RUFDQyxrQkFBQTtBQU5EOztBQVNBO0VBQ0MsV0FBQTtFQUNBLGVBQUE7QUFORCIsImZpbGUiOiJjb3Vyc2VzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gc2Nyb2xsU3R5bGVzICgpIHtcclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFja1xyXG4gIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTg5LCA5MSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICAmOjotd2Via2l0LXNjcm9sbGJhclxyXG4gIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gIH1cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYlxyXG4gIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNDYsIDY2LCAwKTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2hBZGQtY29udGFpbmVyIHtcclxuXHRoZWlnaHQ6IDd2aDtcclxuXHRwYWRkaW5nOiAxdmggMTVweDtcclxufVxyXG5cclxuLmxvYWRNb3JlLWNvbnRhaW5lciB7XHJcblx0aGVpZ2h0OiA1dmg7XHJcblx0cGFkZGluZzogMXZoIDE1cHg7XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG59XHJcblxyXG4ubG9hZE1vcmVCdXR0b24ge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jb3Vyc2VMaXN0IHtcclxuXHRoZWlnaHQ6IDY1dmg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OCwgNDgsIDQ4LCAwLjExNik7XHJcblx0b3ZlcmZsb3cteTogaGlkZGVuO1xyXG5cdG92ZXJmbG93LXk6c2Nyb2xsO1xyXG5cdEBpbmNsdWRlIHNjcm9sbFN0eWxlcygpO1xyXG59XHJcblxyXG4uY291cnNlTGlzdF9fZW1wdHkge1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb25maXJtYXRpb25Nb2RhbCB7XHJcblx0d2lkdGg6IDM1dnc7XHJcblx0aGVpZ2h0OiAyMHZoO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE4MiwgNDYpO1xyXG59XHJcblxyXG4uY29uZmlybWF0aW9uTWVzc2FnZSB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG5cdHdpZHRoOiA1MHB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"], changeDetection: 0 });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _components_main_courses_page_courses_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/courses-page/courses-page.component */ "W2Jh");
/* harmony import */ var _components_main_courses_page_course_course_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main/courses-page/course/course.component */ "0aUh");
/* harmony import */ var _components_main_courses_page_search_add_search_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main/courses-page/search-add/search-add.component */ "fxme");
/* harmony import */ var _components_main_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main/breadcrumbs/breadcrumbs.component */ "uGCx");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_main_courses_page_course_course_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main/courses-page/course/course.directive */ "9cev");
/* harmony import */ var _components_main_courses_page_course_duration_course_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/main/courses-page/course/duration-course.pipe */ "mdcl");
/* harmony import */ var _components_main_courses_page_order_by_creation_date_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/main/courses-page/order-by-creation-date.pipe */ "043T");
/* harmony import */ var _components_main_courses_page_search_add_filter_courses_by_input_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/main/courses-page/search-add/filter-courses-by-input.pipe */ "uxcK");
/* harmony import */ var _components_authorization_validation_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/authorization/validation.directive */ "939I");
/* harmony import */ var _components_authorization_authorization_error_authorization_error_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/authorization/authorization-error/authorization-error.component */ "yXZF");
/* harmony import */ var _components_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/authorization/authorization.component */ "8A2Y");
/* harmony import */ var _components_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/authorization/authorization.service */ "rWs1");
/* harmony import */ var _components_main_courses_page_add_course_page_add_course_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/main/courses-page/add-course-page/add-course-page.component */ "S33y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [_components_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_18__["AuthorizationService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
        _components_main_courses_page_courses_page_component__WEBPACK_IMPORTED_MODULE_6__["CoursesPageComponent"],
        _components_main_courses_page_course_course_component__WEBPACK_IMPORTED_MODULE_7__["CourseComponent"],
        _components_main_courses_page_search_add_search_add_component__WEBPACK_IMPORTED_MODULE_8__["SearchAddComponent"],
        _components_main_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsComponent"],
        _components_main_courses_page_course_course_directive__WEBPACK_IMPORTED_MODULE_11__["CourseDirective"],
        _components_main_courses_page_course_duration_course_pipe__WEBPACK_IMPORTED_MODULE_12__["DurationCoursePipe"],
        _components_main_courses_page_order_by_creation_date_pipe__WEBPACK_IMPORTED_MODULE_13__["OrderByCreationDatePipe"],
        _components_main_courses_page_search_add_filter_courses_by_input_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterCoursesByInputPipe"],
        _components_authorization_validation_directive__WEBPACK_IMPORTED_MODULE_15__["ValidationDirective"],
        _components_authorization_authorization_error_authorization_error_component__WEBPACK_IMPORTED_MODULE_16__["AuthorizationErrorComponent"],
        _components_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_17__["AuthorizationComponent"],
        _components_main_courses_page_add_course_page_add_course_page_component__WEBPACK_IMPORTED_MODULE_19__["AddCoursePageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]] }); })();


/***/ }),

/***/ "fny8":
/*!*****************************************!*\
  !*** ./src/app/components/user/user.ts ***!
  \*****************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(user) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
    }
}


/***/ }),

/***/ "fxme":
/*!*********************************************************************************!*\
  !*** ./src/app/components/main/courses-page/search-add/search-add.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SearchAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAddComponent", function() { return SearchAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _courses_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../courses-list.service */ "m2BS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class SearchAddComponent {
    constructor(coursesListService) {
        this.coursesListService = coursesListService;
        this.searchCourses = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleAddNewCourse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputSearchCourses = '';
        this.newCourseFormVisible = false;
        this.newCourse = {
            id: 10,
            title: '',
            creationDate: new Date(),
            duration: 0,
            description: '',
            isTopRated: false,
        };
    }
    emitTextForSearching() {
        console.log(`Input value \'${this.inputSearchCourses}\'`);
        this.searchCourses.emit(this.inputSearchCourses);
    }
    showAddCoursePage() {
        this.toggleAddNewCourse.emit();
    }
}
SearchAddComponent.ɵfac = function SearchAddComponent_Factory(t) { return new (t || SearchAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_courses_list_service__WEBPACK_IMPORTED_MODULE_1__["CoursesListService"])); };
SearchAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchAddComponent, selectors: [["app-search-add"]], inputs: { coursesCatalog: "coursesCatalog" }, outputs: { searchCourses: "searchCourses", toggleAddNewCourse: "toggleAddNewCourse" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_courses_list_service__WEBPACK_IMPORTED_MODULE_1__["CoursesListService"]])], decls: 7, vars: 1, consts: [[1, "search-add"], [1, "search-control"], ["type", "text", "placeholder", "Searching courses", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function SearchAddComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".search-add[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.search-add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .search-add[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n}\n.search-add[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.search-control[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNlYXJjaC1hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7QUFDRDtBQUNDO0VBQ0MsaUJBQUE7QUFDRjtBQUVDO0VBQ0MsVUFBQTtBQUFGO0FBSUE7RUFDQyxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBREQiLCJmaWxlIjoic2VhcmNoLWFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtYWRkIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcblx0YnV0dG9uLCBpbnB1dCB7XHJcblx0XHRwYWRkaW5nOiA1cHggMTBweDtcclxuXHR9O1xyXG5cclxuXHRpbnB1dCB7XHJcblx0XHR3aWR0aDogODAlO1xyXG5cdH07XHJcbn07XHJcblxyXG4uc2VhcmNoLWNvbnRyb2wge1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuIl19 */"] });


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

/***/ "m2BS":
/*!**********************************************************************!*\
  !*** ./src/app/components/main/courses-page/courses-list.service.ts ***!
  \**********************************************************************/
/*! exports provided: CoursesListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesListService", function() { return CoursesListService; });
/* harmony import */ var _course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course */ "UvTf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _search_add_filter_courses_by_input_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-add/filter-courses-by-input.pipe */ "uxcK");



class CoursesListService {
    constructor(filterCoursesByInputPipe) {
        this.filterCoursesByInputPipe = filterCoursesByInputPipe;
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
        this.isCourseListDataEmpty = false;
    }
    getCourseList() {
        return this.courseListData;
    }
    getIsEmptyCourseList() {
        this.isCourseListDataEmpty = !this.courseListData.length;
        return this.isCourseListDataEmpty;
    }
    // TO DO
    // public addCourse(course: ICourseProperties) {
    // 	this.courseListData.push(new Course(course));
    // };
    getCourseById(courseId) {
        for (let i = 0; i < this.courseListData.length; i++) {
            if (this.courseListData[i].id === courseId) {
                return this.courseListData[i];
            }
        }
        return 'incorrect id';
    }
    // TO DO
    // public updateCourse( course: Course, id: number ) {
    // }
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
    getFilteredCourseList(inputValue) {
        if (inputValue.trim() === '') {
            return this.getCourseList();
        }
        else {
            return this.filterCoursesByInputPipe.transform(this.courseListData, inputValue);
        }
    }
}
CoursesListService.ɵfac = function CoursesListService_Factory(t) { return new (t || CoursesListService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_search_add_filter_courses_by_input_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterCoursesByInputPipe"])); };
CoursesListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CoursesListService, factory: CoursesListService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "mdcl":
/*!*****************************************************************************!*\
  !*** ./src/app/components/main/courses-page/course/duration-course.pipe.ts ***!
  \*****************************************************************************/
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

/***/ "rWs1":
/*!*******************************************************************!*\
  !*** ./src/app/components/authorization/authorization.service.ts ***!
  \*******************************************************************/
/*! exports provided: AuthorizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationService", function() { return AuthorizationService; });
class AuthorizationService {
    constructor() {
        this.userKey = 'user';
        this.userNameInput = '';
        this.userPasswordInput = '';
        this.isErrorModalVisible = false;
        this.validationUserName = new RegExp(/^([\w\-\.])+\@([\w\-\.])+\.([A-Za-z]{2,4})$/);
        this.validationPassword = new RegExp(/^\w{1,5}$/);
    }
    takeUserLoginFromLocalStorage() {
        this.userLogin = window.localStorage.getItem(this.userKey);
    }
    validationIsNoPass() {
        return (!this.validationUserName.test(this.userNameInput) ||
            !this.validationPassword.test(this.userPasswordInput));
    }
    submitAuthorization() {
        if (this.validationIsNoPass()) {
            this.toggleErrorComponent();
        }
        else {
            this.login(this.userNameInput);
        }
    }
    toggleErrorComponent() {
        this.isErrorModalVisible = !this.isErrorModalVisible;
    }
    login(login) {
        if (!login) {
            console.log('isAuthenticated = false');
            return;
        }
        else {
            window.localStorage.setItem(this.userKey, login);
            this.userLogin = login;
            console.log(this.userLogin);
        }
    }
    logout() {
        window.localStorage.clear();
        this.userLogin = null;
    }
    getUserInfo() {
        return this.userLogin;
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BreadcrumbsComponent {
}
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(); };
BreadcrumbsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbsComponent, selectors: [["app-breadcrumbs"]], decls: 3, vars: 0, consts: [[1, "breadcrumbs"]], template: function BreadcrumbsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1icy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "uxcK":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/main/courses-page/search-add/filter-courses-by-input.pipe.ts ***!
  \*****************************************************************************************/
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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