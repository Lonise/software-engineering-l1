import { AuthorizationComponent } from './authorization.component';
import { AuthorizationService } from './authorization.service';


describe('AuthorizationComponent', () => {
	let authorizationService: AuthorizationService = new AuthorizationService();
	let component: AuthorizationComponent = new AuthorizationComponent(authorizationService);
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
