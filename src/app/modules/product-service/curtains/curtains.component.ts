import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { ServService } from '../service/serv.service';

@Component({
  selector: 'app-curtains',
  templateUrl: './curtains.component.html',
  styleUrls: ['./curtains.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CurtainsComponent implements OnInit {

  electric:boolean = true;
  drapery:boolean = false;
  ring:boolean = false;
  pleat:boolean = false;
  abstract:boolean = false;

  constructor(private ds:ServService) { }

  ngOnInit(): void {
    this.ds.getValue().subscribe(value =>{
      this.change(value)
    })
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

  change(num:Number){
    if (num == 1) {
      this.electric = true;
      this.drapery = false;
      this.ring = false;
      this.pleat = false;
      this.abstract = false;
    } else if (num == 2) {
      this.electric = false;
      this.drapery = true;
      this.ring = false;
      this.pleat = false;
      this.abstract = false;
    } else if(num == 3){
      this.electric = false;
      this.drapery = false;
      this.ring = true;
      this.pleat = false;
      this.abstract = false;
    } else if (num == 4) {
      this.electric = false;
      this.drapery = false;
      this.ring = false;
      this.pleat = true;
      this.abstract = false;
    }else if (num == 5) {
      this.electric = false;
      this.drapery = false;
      this.ring = false;
      this.pleat = false;
      this.abstract = true;
    }
  }


}


