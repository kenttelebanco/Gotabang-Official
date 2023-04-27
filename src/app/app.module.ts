import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { FirebaseService } from './auth/firebase.service';
import { SigninComponent } from './auth/signin/signin.component';
import { AlertDialogComponent } from './home/components/alert-dialog/alert-dialog.component';
import { AlertFileComponent } from './home/components/alert-file/alert-file.component';
import { LevelFileComponent } from './home/components/level-file/level-file.component';
import { PostDisasterComponent } from './home/components/post-disaster/post-disaster.component';
import { TypeFileComponent } from './home/components/type-file/type-file.component';
import { UploadDialogComponent } from './home/components/upload-dialog/upload-dialog.component';
import { UploadFileComponent } from './home/components/upload-file/upload-file.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './route/app-routing.module';
import { AngularModule } from './shared/angular/angular-material.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadFileComponent,
    NavbarComponent,
    SigninComponent,
    UploadDialogComponent,
    AlertFileComponent,
    AlertDialogComponent,
    TypeFileComponent,
    LevelFileComponent,
    ToolbarComponent,
    PostDisasterComponent,
    AdminComponent,
    AdminNavbarComponent,
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    MatDividerModule,
    BrowserAnimationsModule,
    AngularModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyBM-LFSIhLFRpKM63cWpJeWWJwdNQKcgqo",
        authDomain: "gotabang.firebaseapp.com",
        projectId: "gotabang",
        storageBucket: "gotabang.appspot.com",
        messagingSenderId: "160977774494",
        appId: "1:160977774494:web:2449ac00278a754122d88f"
      }
    ),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [
    AuthService,
    FirebaseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
