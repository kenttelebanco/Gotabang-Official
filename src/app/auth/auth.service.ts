import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = new BehaviorSubject<boolean>(false);;
  redirectUrl!: string;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.firebaseAuth.authState.subscribe((user) => {
      if (user) {
        this.isLoggedIn.next(true);

        if(this.redirectUrl) {
          this.router.navigate([this.redirectUrl]);
        }
      } else {
        this.isLoggedIn.next(false);
      }
  }
    )
}

  isAuthenticated(){
    return this.isLoggedIn;
  }

}
