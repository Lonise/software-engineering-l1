import { AuthorizationService } from './authorization.service';

describe('AuthorizationService', () => {
	let authorizationService: AuthorizationService;

	beforeEach(() => {
		authorizationService = new AuthorizationService();
	});

	describe('AuthorizationService.validationIsNoPass()', () => {

		it('should return true if userNameInput and userPasswordInput incorrect', () => {
			authorizationService.userNameInput = '';
			authorizationService.userPasswordInput = '';
			expect(authorizationService.validationIsNoPass()).toEqual(true);
		});

		it('should return true if userNameInput incorrect', () => {
			authorizationService.userNameInput = 'incorrect';
			authorizationService.userPasswordInput = 'ok';
			expect(authorizationService.validationIsNoPass()).toEqual(true);
		});

		it('should return true if userPasswordInput incorrect', () => {
			authorizationService.userNameInput = 'correct@ok.okey';
			authorizationService.userPasswordInput = '';
			expect(authorizationService.validationIsNoPass()).toEqual(true);
		});

		it('should return false if user login and password correct', () => {
			authorizationService.userNameInput = 'correct@ma.il';
			authorizationService.userPasswordInput = 'pass';
			expect(authorizationService.validationIsNoPass()).toEqual(false);
		});
	})

	describe('AuthorizationService.getUserInfo()', () => {

		it('should return userLogin if user authorized', () => {
			authorizationService.userLogin = 'Nick'
			expect(authorizationService.getUserInfo()).toEqual('Nick');
		});

		it('should return null if user non authorized', () => {
			expect(authorizationService.getUserInfo()).toBeNull();
		});
	})

	describe('AuthorizationService.toggleErrorComponent()', () => {

		it('should change "isErrorModalVisible" value from true to false and from false to true', () => {
			expect(authorizationService.isErrorModalVisible).toBeFalse();
			authorizationService.toggleErrorComponent();
			expect(authorizationService.isErrorModalVisible).toBeTrue();
		});
	})

	describe('AuthorizationService.takeUserLoginFromLocalStorage()', () => {
		beforeEach(()=>{
			spyOn(window.localStorage, 'getItem');
		})
		it('should call window.localStorage.getItem with authorizationService.userKey', () => {
			authorizationService.userKey = 'exampleUserKey';
			authorizationService.takeUserLoginFromLocalStorage();
			expect(window.localStorage.getItem).toHaveBeenCalledWith('exampleUserKey');
		})
	})

	describe('AuthorizationService.login', () => {
		beforeEach(() => {
			spyOn(console, 'log');
			spyOn(window.localStorage, 'setItem');
		})

		describe('AuthorizationService.login() call with no args', () => {
			it('should call console.log with "isAuthenticated = false" if login is undefined', () => {
				authorizationService.login();
				expect(console.log).toHaveBeenCalledWith('isAuthenticated = false');
			})
		})

		describe('AuthorizationService.login( login: string )', () => {
			beforeEach(() => {
				authorizationService.login('login');
			})
			it(`should call window.localStorage.setItem with (authorizationService.userKey, 'login') if login is defined`, () => {
				expect(window.localStorage.setItem).toHaveBeenCalledWith(authorizationService.userKey, 'login')
			})

			it(`should call console.log with authorizationService.userLogin if login is defined`, () => {
				expect(console.log).toHaveBeenCalledWith(authorizationService.userLogin);
			})
		})
	})

	describe('AuthorizationService.submitAuthorization()', () => {

		describe('authorizationService.validationIsNoPass() return true', () => {
			beforeEach(() => {
				spyOn(authorizationService, 'validationIsNoPass').and.returnValue(true);
				spyOn(authorizationService, 'toggleErrorComponent');
				authorizationService.submitAuthorization();
			})

			it('should call authorizationService.validationIsNoPass', () => {
				expect(authorizationService.validationIsNoPass).toHaveBeenCalled();
			})

			it('should call authorizationService.toggleErrorComponent', () => {
				expect(authorizationService.toggleErrorComponent).toHaveBeenCalled();
			})
		})

		describe('authorizationService.validationIsNoPass() return false', () => {
			beforeEach(() => {
				authorizationService.userNameInput = 'Joe';
				spyOn(authorizationService, 'validationIsNoPass').and.returnValue(false);
				spyOn(authorizationService, 'login');
				authorizationService.submitAuthorization();
			})

			it('should call authorizationService.login(authorizationService.userNameInput)', () => {
				expect(authorizationService.login).toHaveBeenCalledWith('Joe');
			})
		})



	})

	describe('AuthorizationService.logout()', () => {
		beforeEach(() => {
			spyOn(window.localStorage, 'clear')
			authorizationService.logout()
		})
		it('should call window.localStorage.clear() localStorage and rewrite userLogin value to null', () => {
			expect(window.localStorage.clear).toHaveBeenCalled()
		})

		it('should rewrite authorizationService.userLogin value to null', () => {
			expect(authorizationService.userLogin).toBeNull()
		})
	})

});
