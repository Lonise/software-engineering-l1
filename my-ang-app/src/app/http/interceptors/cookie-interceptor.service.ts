import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../../components/authorization/authorization.service';

@Injectable()
export class CookieInterceptorService {

	constructor(public authorizationService: AuthorizationService) { }

	intercept( request: HttpRequest<unknown>, next: HttpHandler ): Observable<HttpEvent<unknown>> {

		const customHeader = this.authorizationService.getTokenInCookie();
		const customHeaderValue = typeof customHeader === 'undefined' ? '' : customHeader;
		const authReq = request.clone({
			headers: request.headers.set('Session-token', customHeaderValue),
		});
		return next.handle(authReq);
	}
}
