import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input() moduleName: string="";

  constructor(private router : Router) {
    
  }

  signOut() : void {
    var userId = sessionStorage.getItem("userId");
    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }

}
