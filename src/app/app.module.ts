import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { AuthInterceptor } from './auth/helper/auth.interceptor';
import { ForbiddenComponent } from './extra/forbidden/forbidden.component';
import { MenuModule } from './menu/menu.module';
import { NotfoundComponent } from './extra/notfound/notfound.component';
import { HomeComponent } from './my-home/home.component';
import { ProfileComponent } from './my-profile/my-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    ForbiddenComponent,
    NotfoundComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonToggleModule,
    BrowserAnimationsModule, // required animations module,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule,
    MenuModule,
    
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
