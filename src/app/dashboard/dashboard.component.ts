import { Component, OnInit, Renderer2 } from '@angular/core';

declare const $ : any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private renderer : Renderer2) { }

  ngAfterViewInit(): void{
    this.renderer.removeClass(document.body, "login-page");
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");

    //$('[data-widget="treeview"]').Treeview("init"); //to enable the side-menu item drip down
  }

  ngOnInit(): void {
  }

}
