import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UploadFileComponent } from './home/components/upload-file/upload-file.component';
import { ScanFileComponent } from './home/components/scan-file/scan-file.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularModule } from './shared/angular/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './route/app-routing.module';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { UploadDialogComponent } from './home/components/upload-dialog/upload-dialog.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat'
import { FirebaseService } from './auth/firebase.service';
import { AlertFileComponent } from './alert-file/alert-file.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadFileComponent,
    ScanFileComponent,
    NavbarComponent,
    SigninComponent,
    UploadDialogComponent,
    AlertFileComponent,
  ],
  imports: [
    BrowserModule,
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
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
