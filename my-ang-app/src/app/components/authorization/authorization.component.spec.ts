import { AuthorizationComponent } from './authorization.component';
import { AuthorizationService } from './authorization.service';


describe('AuthorizationComponent', () => {
	const authorizationService: AuthorizationService = new AuthorizationService();
	const component: AuthorizationComponent = new AuthorizationComponent(authorizationService);
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
