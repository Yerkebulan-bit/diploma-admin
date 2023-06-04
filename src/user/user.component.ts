import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import {User} from "../model/User";
import {UserModalComponent} from "./user_modal.component";
import {UserController} from "../controllers/user.controller";

@Component({
  selector: 'app-user-table',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'surname', 'username', 'actions'];
  dataSource: MatTableDataSource<User>;
  items: User[] = [];

  constructor(public dialog: MatDialog,
              private userController: UserController) {
    this.dataSource = new MatTableDataSource(this.items);
  }

  ngOnInit() {
    this.userController.loadUsers().subscribe(
      users => this.dataSource.data = users)
  }

  openModal(item?: User): void {
    const dialogRef = this.dialog.open(UserModalComponent, {
      width: '400px',
      data: item ? { ...item } : null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.id) {
          // Update existing item
          const index = this.items.findIndex(i => i.id === result.id);
          if (index >= 0) {
            this.items[index] = result;
            this.dataSource.data = this.items;
          }
        } else {
          // Create new item
          result.id = this.items.length + 1;
          this.items.push(result);
          this.dataSource.data = this.items;
        }
      }
    });
  }

  deleteItem(id: string): void {
    const index = this.items.findIndex(item => item.id === id);
    if (index >= 0) {
      this.items.splice(index, 1);
      this.dataSource.data = this.items;
    }
  }
}
