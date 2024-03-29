import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UploadFileComponent } from './home/components/upload-file/upload-file.component';
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
import { AngularFireModule } from '@angular/fire/compat'
import { FirebaseService } from './auth/firebase.service';
import { AlertDialogComponent } from './home/components/alert-dialog/alert-dialog.component';
import { AlertFileComponent } from './home/components/alert-file/alert-file.component';
import { TypeFileComponent } from './home/components/type-file/type-file.component';
import { LevelFileComponent } from './home/components/level-file/level-file.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { PostDisasterComponent } from './home/components/post-disaster/post-disaster.component';

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
    FirebaseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
