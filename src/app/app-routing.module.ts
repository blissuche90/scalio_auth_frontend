import { ForbiddenComponent } from './extra/forbidden/forbidden.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { NotfoundComponent } from './extra/notfound/notfound.component';
import { HomeComponent } from './my-home/home.component';
import { ProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  {path:'home',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'not-found',component:NotfoundComponent},
  {path:'forbidden',component:ForbiddenComponent},
  {
       path: '**',
       redirectTo: 'not-found'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
