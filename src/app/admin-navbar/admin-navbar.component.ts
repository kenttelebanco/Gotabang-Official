import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {
  showFiller = false;
  displayName = 'Admin';
  

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
}
