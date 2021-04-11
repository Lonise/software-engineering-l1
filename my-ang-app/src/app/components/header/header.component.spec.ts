import { HeaderComponent } from './header.component';
import { AuthorizationService } from '../authorization/authorization.service';

describe('HeaderComponent', () => {
	let authorizationService: AuthorizationService = new AuthorizationService()
	let component: HeaderComponent = new HeaderComponent(authorizationService);

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
