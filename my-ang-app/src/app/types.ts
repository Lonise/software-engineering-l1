import { Observable } from 'rxjs';

export type ICanLoad = Observable<boolean> | Promise<boolean> | boolean;
