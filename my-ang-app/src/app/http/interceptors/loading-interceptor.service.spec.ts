import { TestBed } from '@angular/core/testing';

import { LoadingInterceptor } from './loading-interceptor.service';

describe('AuthInterceptorService', () => {
	let service: LoadingInterceptor;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(LoadingInterceptor);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
