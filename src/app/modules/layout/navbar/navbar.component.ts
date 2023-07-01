import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @HostListener('window:scroll')
  showMenu:any = false;
  list:any = false

  isScrolled = false;

  constructor() { }

  @HostListener("window:scroll")
  scrollEvent() {
    window.pageYOffset >= 50 ? (this.isScrolled = true) : (this.isScrolled = false);
  }

  ngOnInit(): void {
    
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  showList(){
    this.list = !this.list
  }
  

}
