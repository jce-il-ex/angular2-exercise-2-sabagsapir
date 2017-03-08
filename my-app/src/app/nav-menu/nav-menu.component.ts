import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

myNavs =[{name:"Google",link:"http://www.google.com" },{name:"Yahoo",link:"http://www.Yahoo.com" },{name:"Walla",link:"http://www.walla.com" }]
  constructor() { }

  ngOnInit() {
  }

}
