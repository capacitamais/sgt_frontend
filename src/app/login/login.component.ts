import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',  
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _router: Router) { }

  goHome(event: Event) {
    console.log('goHome');
    event.preventDefault();
    this._router.navigate(['home']);
  }

}
