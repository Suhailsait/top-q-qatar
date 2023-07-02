import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ImageViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{event:any}) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}
