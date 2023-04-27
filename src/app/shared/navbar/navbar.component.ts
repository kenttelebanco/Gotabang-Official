import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showFiller = false;
  displayName = 'User';
  

  onToggleChange() {
    if (this.displayName == "User") {
      this.displayName = 'Admin';
      this.router.navigate(['/adminView/dashboard']);
    } else {
      this.displayName = 'User';
      this.router.navigate(['/homescreen/dashboard']);
    }
  }

  constructor(private router: Router){}
  


  ngOnInit(): void { 
  }


}
