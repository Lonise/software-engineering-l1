import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { BreadcrumbsComponent } from './components/main/breadcrumbs/breadcrumbs.component';
import { ValidationDirective } from './components/authorization/validation.directive';
import { AuthorizationErrorComponent } from './components/authorization/authorization-error/authorization-error.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { AuthorizationService } from './components/authorization/authorization.service';
import { NotFoundPageComponent } from './components/main/not-found-page/not-found-page.component';
import { CoursesListService } from './components/main/courses-pages/courses-list.service';
import { CoursesModule } from './modules/courses.module';
import { HttpService } from './http-service.service';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		MainComponent,
		BreadcrumbsComponent,
		ValidationDirective,
		AuthorizationErrorComponent,
		AuthorizationComponent,
		NotFoundPageComponent,
	],
	entryComponents: [AuthorizationComponent],
	imports: [
		CoursesModule,
		BrowserModule,
		FormsModule,
		HttpClientModule
	],
	providers: [ AuthorizationService, CoursesListService, HttpService ],
	bootstrap: [AppComponent]
})
export class AppModule { }
