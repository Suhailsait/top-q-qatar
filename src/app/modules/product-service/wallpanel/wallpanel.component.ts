import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallpanel',
  templateUrl: './wallpanel.component.html',
  styleUrls: ['./wallpanel.component.scss']
})
export class WallpanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  settings = {
    counter: false,
    download:false,
    mobileSettings :{
      controls: true, showCloseIcon: true, download: false,
    }
  };

}
