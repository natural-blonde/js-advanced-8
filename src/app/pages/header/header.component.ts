import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menu = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {
    if (this.menu === false) this.menu = true;
    else if (this.menu === true) this.menu = false; 
  }

  hideMenu() {
    this.menu = false;
  }
}