import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScanFileComponent } from '../home/components/scan-file/scan-file.component';
import { UploadFileComponent } from '../home/components/upload-file/upload-file.component';
import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { AlertFileComponent } from '../home/components/alert-file/alert-file.component';


const routes: Routes = [

  {path: '', redirectTo: 'signin', pathMatch: 'full' },
  {path: 'signin', component: SigninComponent},
  {path: 'upload', component: UploadFileComponent},
  {path: 'homescreen', component:  NavbarComponent,
    children: [
      { path: 'dashboard', component:  HomeComponent},
      { path: 'upload2', component:  UploadFileComponent},
      { path: 'scan', component:  ScanFileComponent},
      { path: 'alert', component:  AlertFileComponent}

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
  declarations: [],

})
export class AppRoutingModule { }
