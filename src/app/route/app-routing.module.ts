import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UploadFileComponent } from '../home/components/upload-file/upload-file.component';
import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { AlertFileComponent } from '../home/components/alert-file/alert-file.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [

  {path: '', redirectTo: 'signin', pathMatch: 'full' },
  {path: 'signin', component: SigninComponent},
  {path: 'homescreen', component:  NavbarComponent, canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component:  HomeComponent, canActivate: [AuthGuard]},
      { path: 'upload2', component:  UploadFileComponent,canActivate: [AuthGuard] },
      { path: 'alert', component:  AlertFileComponent, canActivate: [AuthGuard]}

    ]}
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers:[
    AuthGuard
  ],
  declarations: [],

})
export class AppRoutingModule { }
