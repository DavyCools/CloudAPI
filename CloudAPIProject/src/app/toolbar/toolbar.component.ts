import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Common/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

}
