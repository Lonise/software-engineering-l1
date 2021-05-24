import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { AuthorizationHttpService } from './http/authorization-http.service';
import { LoadingBlockComponent } from './components/loading-block/loading-block.component';
import { Interceptors } from './http/interceptors/Interceptors';
import { AppService } from './app.service';

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
		LoadingBlockComponent
	],
	entryComponents: [AuthorizationComponent],
	imports: [
		CoursesModule,
		BrowserModule,
		FormsModule,
		HttpClientModule
	],
	providers: [ AuthorizationService, CoursesListService, AuthorizationHttpService, AppService, Interceptors],
	bootstrap: [AppComponent]
})
export class AppModule { }
