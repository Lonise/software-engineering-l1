import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { AuthorizationService } from './components/authorization/authorization.service';
import { ICanLoad } from './types';

@Injectable()
export class AuthGuard implements CanLoad{
		constructor( private authorizationService: AuthorizationService ) {}

		canLoad(): ICanLoad{
			return this.authorizationService.isAuthorized;
		}
}
