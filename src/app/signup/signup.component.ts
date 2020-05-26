import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SignupComponent>) { }

  ngOnInit() {
  }
  onSubmit() {
    this.dialogRef.close();
  }
}
