import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { CoursesHttpService } from '../courses-http.service';

@Injectable()

export class LoadingInterceptor implements HttpInterceptor {

	constructor( private coursesHttpService: CoursesHttpService ) { }

	intercept( request: HttpRequest<unknown>, next: HttpHandler ): Observable<HttpEvent<unknown>> {
		this.coursesHttpService.show();
		return next.handle(request).pipe(
			finalize( () => {
				this.coursesHttpService.hide();
			})
		);
	}
}
