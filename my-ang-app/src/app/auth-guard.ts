import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Observable } from "rxjs";
import { AuthorizationService } from "./components/authorization/authorization.service";

@Injectable()
export class AuthGuard implements CanActivate{
		constructor(private authorizationService: AuthorizationService) {}

		canActivate(): Observable<boolean> | Promise<boolean> | boolean {
				return this.authorizationService.isAuthorized;
		}
}
