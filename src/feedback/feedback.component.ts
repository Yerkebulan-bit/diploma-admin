import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {EventToSave} from "../model/EventToSave";
import {FeedbackMessage} from "../model/FeedbackMessage";
import {FeedbackModalComponent} from "./feedback.modal.component";
import {FeedbackController} from "../controllers/feedback.controller";

@Component({
  selector: 'app-feedback-table',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'hearFrom',
    'message',
    'actions'
  ];

  dataSource: MatTableDataSource<FeedbackMessage>;
  feedbacks: FeedbackMessage[] = [];

  constructor(public dialog: MatDialog,
              private feedbackController: FeedbackController) {
    this.dataSource = new MatTableDataSource(this.feedbacks);
  }

  ngOnInit() {
    this.feedbackController.loadMessages().subscribe(
      messages => this.dataSource.data = messages)
  }

  openModal(item?: EventToSave): void {
    const dialogRef = this.dialog.open(FeedbackModalComponent, {
      width: '400px',
      data: item ? {...item} : null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.id) {
          // Update existing item
          const index = this.feedbacks.findIndex(i => i.id === result.id);
          if (index >= 0) {
            this.feedbacks[index] = result;
            this.dataSource.data = this.feedbacks;
          }
        } else {
          // Create new item
          result.id = this.feedbacks.length + 1;
          this.feedbacks.push(result);
          this.dataSource.data = this.feedbacks;
        }
      }
    });
  }

  deleteItem(id: string): void {
    const index = this.feedbacks.findIndex(item => item.id === id);
    if (index >= 0) {
      this.feedbacks.splice(index, 1);
      this.dataSource.data = this.feedbacks;
    }
  }
}
