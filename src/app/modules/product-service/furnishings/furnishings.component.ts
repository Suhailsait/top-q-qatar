import { Component, OnInit } from '@angular/core';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-furnishings',
  templateUrl: './furnishings.component.html',
  styleUrls: ['./furnishings.component.scss']
})
export class FurnishingsComponent implements OnInit {

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
}
