import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {EventToSave} from "../model/EventToSave";
import {EventController} from "../controllers/event.controller";

@Component({
  selector: 'app-event-modal',
  templateUrl: './event.modal.component.html',
  styleUrls: ['./event.modal.component.css']
})
export class ModalComponent implements OnInit {
  item: EventToSave;

  constructor(
    private eventController: EventController,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EventToSave) {
    this.item = { ...data };
  }

  ngOnInit() {
  }

  onSave(): void {
    this.dialogRef.close(this.item);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  setAsMain() {
    this.data.isMain = true;
    this.eventController.setAsMain(this.data.id).subscribe();
  }

  unsetAsMain() {
    this.data.isMain = false;
    this.eventController.unsetAsMain(this.data.id).subscribe()
  }

}
