import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navMenu: boolean = true;
  condition: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let navbar = document.querySelector('.navbar') as HTMLElement;
    let icon = document.querySelector('.close-icon') as HTMLElement;
    let navLeft = document.querySelector('.menu-name') as HTMLElement;
    let logo = document.querySelector('.logo') as HTMLElement;
    let navListbox = document.querySelector('.nav-item-box') as HTMLElement;
    let navRight = document.querySelector('.right-head-name') as HTMLElement;

    if (window.pageYOffset > 64) {
      this.condition = true;
      navbar.classList.add('navBackground');
      icon.classList.add('addIcon');
      navRight.classList.add('navRightColor');
      navLeft.classList.add('pColor');
      logo.classList.add('logoShow');
    } else {
      this.condition = false;
      navbar.classList.remove('navBackground');
      icon.classList.remove('addIcon');
      navRight.classList.remove('navRightColor');
      navLeft.classList.remove('pColor');
      logo.classList.remove('logoShow');
      if (navListbox?.classList) {
        navListbox.classList.forEach((data) => {
          if (data === 'nav-item-box') {
            navbar.classList.add('navBackground');
            navRight.classList.add('navRightColor');
            navLeft.classList.add('pColor');
            logo.classList.add('logoShow');
            icon.classList.add('addIcon');
          }
        });
      }
    }
  }

  navAction() {
    this.navMenu = !this.navMenu;
    let icon = document.querySelector('.close-icon') as HTMLElement;
    let navList = document.querySelector('.navListHide') as HTMLElement;
    let navbar = document.querySelector('.navbar') as HTMLElement;
    let navLeft = document.querySelector('.menu-name') as HTMLElement;
    let logo = document.querySelector('.logo') as HTMLElement;
    let navRight = document.querySelector('.right-head-name') as HTMLElement;
    if (this.navMenu) {
      navList.classList.remove('nav-item-box');
      icon.classList.remove('addIcon');
      navLeft.classList.add('pColor');
      if (window.pageYOffset > 64) {
        navbar.classList.add('navBackground');
        logo.classList.add('logoShow');
      } else {
        navbar.classList.remove('navBackground');
        logo.classList.remove('logoShow');
        navRight.classList.remove('navRightColor');
      }
    } else {
      navList.classList.add('nav-item-box');
      if (window.pageYOffset < 64) {
        navbar.classList.add('navBackground');
      }
      navRight.classList.add('navRightColor');
      icon.classList.add('addIcon');
      logo.classList.add('logoShow');
    }
  }
}
