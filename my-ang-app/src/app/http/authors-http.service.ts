import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../components/Interfaces-and-classes/author/author';

@Injectable()
export class AuthorsHttpService {

	constructor( private httpClient: HttpClient ) { }
	private url = 'https://super-courses.herokuapp.com/authors';
	public getAuthors(): Observable<Author[]>{
		return this.httpClient.get<Author[]>(this.url);
	}

	public getAuthorsByName( searchingAuthor: string ): Observable<Author[]>{
		return this.httpClient.get<Author[]>( `${this.url}/name?search=${searchingAuthor}` );
	}

}
