import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from './components/authorization/authorization.service';

@Injectable()
export class AuthGuard implements CanLoad{
		constructor( private authorizationService: AuthorizationService ) {}

		canLoad(): Observable<boolean> | Promise<boolean> | boolean {
			return this.authorizationService.isAuthorized;
		}
}
