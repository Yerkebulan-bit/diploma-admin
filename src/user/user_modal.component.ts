import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {User} from "../model/User";
import {UserController} from "../controllers/user.controller";

@Component({
  selector: 'app-user-modal',
  templateUrl: './user_modal.component.html',
  styleUrls: ['./user_modal.component.css']
})
export class UserModalComponent implements OnInit {
  item: User;

  constructor(
    private userController: UserController,
    public dialogRef: MatDialogRef<UserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) {
    this.item = { ...data };
  }

  ngOnInit() {
  }

  save(): void {
    this.dialogRef.close(this.item);
  }

  cancel(): void {
    this.dialogRef.close();
  }

  disable(): void {
    this.userController.disableUser(this.item.username).subscribe();
  }

  enable(): void {
    this.userController.enableUser(this.item.username).subscribe();
  }

}
