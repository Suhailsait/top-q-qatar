import { Component, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-curtains',
  templateUrl: './curtains.component.html',
  styleUrls: ['./curtains.component.scss']
})
export class CurtainsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  settings = {
    counter: false,
    plugins: [lgZoom],
};
onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
};


}


