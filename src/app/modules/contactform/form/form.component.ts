import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(public dialogRef: MatDialogRef<FormComponent>, private fb: FormBuilder,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.form = this.fb.group({
      name: ['',[Validators.required]],
      phone_num: ['',[Validators.required]],
      email: ['', Validators.required],
      content: ['',[Validators.required]]
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  sendEmail(value: any) {
    const templateParams = {
      from_name: `${value.name}`,
      to_name: 'TOP Q Qatar',
      message: `Name:${value.name}
                Phone Number : ${value.phone_num}
                email : ${value.email}
                message : ${value.content}`
    };
    if (this.form.valid) {
      emailjs.send('service_7666syn', 'template_2grlw5q', templateParams, '--c8GTeosZSqagG7j')
        .then((result) => {
          if (result.text == "OK") {
            this.snackBar.open(' Submitted Contact You Soon',"close",{duration:3000})   
            console.log(result);
                     
          }
        }, (error) => {
          console.log(error);
        });
        this.close()
    } else {
      this.snackBar.open('Enter Valid Input',"close",{duration:3000})
      console.log(this.form);
      
    }
  }

}
