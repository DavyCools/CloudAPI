import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Common/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authservice: AuthService) { }

  ngOnInit() {
  }

}