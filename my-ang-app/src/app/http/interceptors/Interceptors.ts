import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CookieInterceptorService } from "./cookie-interceptor.service";
import { LoadingInterceptor } from "./loading-interceptor.service";

export const Interceptors = [
	{ provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
	{ provide: HTTP_INTERCEPTORS, useClass: CookieInterceptorService, multi: true }
]
