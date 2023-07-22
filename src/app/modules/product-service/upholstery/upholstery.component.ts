import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upholstery',
  templateUrl: './upholstery.component.html',
  styleUrls: ['./upholstery.component.scss']
})
export class UpholsteryComponent implements OnInit {

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
