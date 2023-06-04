import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FeedbackMessage} from "../model/FeedbackMessage";

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback.modal.component.html',
  styleUrls: ['./feedback.modal.component.css']
})
export class FeedbackModalComponent implements OnInit {
  item: FeedbackMessage;

  constructor(
    public dialogRef: MatDialogRef<FeedbackModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FeedbackMessage) {
    this.item = {...data};
  }

  ngOnInit() {
  }

  save(): void {
    this.dialogRef.close(this.item);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
