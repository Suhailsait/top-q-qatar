import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-curtains',
  templateUrl: './curtains.component.html',
  styleUrls: ['./curtains.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CurtainsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  settings = {
    counter: false,
    mobileSettings :{
      controls: true, showCloseIcon: true, download: false,
    }
  };

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  close() {

  }


}


