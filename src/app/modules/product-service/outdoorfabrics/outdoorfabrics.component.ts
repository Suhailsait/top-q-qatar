import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageViewComponent } from '../image-view/image-view.component';

@Component({
  selector: 'app-outdoorfabrics',
  templateUrl: './outdoorfabrics.component.html',
  styleUrls: ['./outdoorfabrics.component.scss']
})
export class OutdoorfabricsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  viewImage(event:any){
    const dialogRef = this.dialog.open(ImageViewComponent, {
      data: {event},
      width:'95%',
      height:'90%'
    });
    
  }

}
