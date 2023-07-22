import { Component, OnInit } from '@angular/core';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-outdoorfabrics',
  templateUrl: './outdoorfabrics.component.html',
  styleUrls: ['./outdoorfabrics.component.scss']
})
export class OutdoorfabricsComponent implements OnInit {

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
onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
};


}
