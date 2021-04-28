import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth-guard';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { NotFoundPageComponent } from './components/main/not-found-page/not-found-page.component';

const routes: Routes = [
	{ path: '', redirectTo: 'courses', pathMatch: 'full' },
	{ path: 'courses', loadChildren: () => import('./modules/courses-routing.module')
		.then(module => module.CoursesRoutingModule ),
		canLoad: [AuthGuard]
	},
	{ path: 'authorization', component: AuthorizationComponent },
	{ path: '**', component: NotFoundPageComponent },

];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
