import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageViewComponent } from '../image-view/image-view.component';

@Component({
  selector: 'app-curtains',
  templateUrl: './curtains.component.html',
  styleUrls: ['./curtains.component.scss']
})
export class CurtainsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  viewImage(event:any){
    const dialogRef = this.dialog.open(ImageViewComponent, {
      data: {event},
      width:'100%',
      height:'90%'
    });
    
  }

}
