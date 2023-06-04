import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {ModalComponent} from "./event.modal.component";
import {EventToSave} from "../model/EventToSave";
import {EventController} from "../controllers/event.controller";

@Component({
  selector: 'app-data-table',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'name',
    'type',
    'shortDescription',
    'time',
    'runningTime',
    'constraints',
    'limit',
    'isMain',
    'startedAt',
    'actions'
  ];

  dataSource: MatTableDataSource<EventToSave>;
  events: EventToSave[] = [];

  constructor(public dialog: MatDialog,
              private eventController: EventController) {
    this.dataSource = new MatTableDataSource(this.events);
  }

  ngOnInit() {
    this.eventController.loadEvents()
      .subscribe(
      events => this.dataSource.data = events
      )
  }

  openModal(item?: EventToSave): void {
      const dialogRef = this.dialog.open(ModalComponent, {
        width: '400px',
        enterAnimationDuration: '300ms',
        data: item ? {...item} : null
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          if (result.id) {
            // Update existing item
            const index = this.events.findIndex(i => i.id === result.id);
            if (index >= 0) {
              this.events[index] = result;
              this.dataSource.data = this.events;
            }
          } else {
            // Create new item
            result.id = this.events.length + 1;
            this.events.push(result);
            this.dataSource.data = this.events;
          }
        }
      });
  }

  deleteItem(id: string): void {
    const index = this.events.findIndex(item => item.id === id);
    if (index >= 0) {
      this.events.splice(index, 1);
      this.dataSource.data = this.events;
    }
  }

}
