import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserProperties } from '../components/Interfaces-and-classes/user/user';

@Injectable()
export class AuthorizationHttpService {

	constructor(private httpClient: HttpClient) { }
	private url = 'https://super-courses.herokuapp.com/authorization/';
	private loginPath = 'login';
	private signUpPath = 'signup';
	private logoutUpPath = 'logout';
	private options = {
		headers: new HttpHeaders({
			'Access-Control-Allow-Credentials': 'true',
			withCredentials: 'true'
		})
	};

	public getUserByActiveSessionToken( token: string ): Observable<any>{
    return this.httpClient.get( this.url + token );
	}

	public postAuthorization( userData: IUserProperties ): Observable<any>{
    return this.httpClient.post( this.url + this.loginPath, userData, this.options);
	}

	public postAuthentication( userData: IUserProperties ): Observable<any>{
    return this.httpClient.post(this.url + this.signUpPath, userData, this.options );
	}

	public putUpdateUser( token: string, userData: IUserProperties ): Observable<any>{
    return this.httpClient.put( this.url + token, userData );
	}

	public deleteActiveSession(): Observable<any>{
    return this.httpClient.delete( this.url + this.logoutUpPath );
	}
}
