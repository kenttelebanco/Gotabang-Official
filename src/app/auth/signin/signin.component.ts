import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject,takeUntil } from 'rxjs';
import { UserLogin, UserRegister } from 'src/app/shared/model/auth.interface';
import { AuthService } from '../auth.service';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private unsubscribe = new Subject<void>();
  openRegister = true;
  openRecover = true;
  submitted: boolean = false;
  isSignedIn = false;
  userRegister = {} as UserRegister;
  userLogin = {} as UserLogin;
  data = {} as User;

// ------- USER FORM
  signinform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  registerform = this.fb.group({
    email: ['', [Validators.required, Validators.email,Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    checkbox: [false, [Validators.requiredTrue]],
  }, {validator: this.MustMatch('password', 'confirmPassword')
  });

  recoverPassword = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.minLength(6)]],
  })

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private fireB: FirebaseService) { }

  ngOnInit(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  // -------- GENERAL AUTH

  get f() {
    return this.registerform.controls;
  }

  MustMatch(controlName: string, matchingControlName: string) {return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {return;}
        if (control.value !== matchingControl.value) {
         matchingControl.setErrors({ mustMatch: true });
        } else {matchingControl.setErrors(null);}
  }}

 // -------- FOR USER SIGNIN
  async login(email: string, password: string) : Promise<void> {
    if(this.signinform.valid){
      this.userLogin.email = email;
      this.userLogin.password = password;
      (await this.fireB.signInUser(this.userLogin)).pipe(takeUntil(this.unsubscribe)).subscribe(async (result) => {
        console.log(result);
        if(result.data == null){
          this.router.navigate(['/signin']);
          alert("Invalid Email or Password. Try Again.")}
        else if(result.data !== null){
            this.router.navigate(['/homescreen/dashboard']);
        }

        this.isSignedIn = result!.success;
        if(this.isSignedIn){

          (await this.fireB.logUser(result.data!.id)).subscribe((user)=>{
            //console.log(this.fireB.currentUser);
            this.fireB.updateUser(user!)

          });
        }
      })
    this.authService.isLoggedIn!;
    }else {
      alert("Invalid credentials");
    }
  }

  clickToLogin() : void {
    this.openRegister = true;
    this.openRecover = true;
  }

  // -------- FOR USER REGISTRATION
  clickToRegister() : void {
    this.openRegister = false;
  }

  async register(email:string, password:string) : Promise<void> {
    if(this.registerform.valid){
    this.userRegister.email = email;
    this.userRegister.password = password;

    var output = await this.fireB.registerUser(this.userRegister);
    console.log(output);

    this.isSignedIn = output.success;
    this.authService.isLoggedIn!;
    alert("Successfully Registered");
    this.openRegister = true;
    this.openRecover = true;
    }else {
      alert("Invalid credentials");
    }
  }

  // -------- FOR USER RECOVERY
  recover() : void {
    if(this.recoverPassword.valid){
      this.openRecover = true;
    }else {
      alert("Invalid credentials");
    }
  }

  clickToRecover() : void {
    this.openRecover = false;
  }

}
