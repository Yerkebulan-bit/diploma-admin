import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {EventComponent} from "../event/event.component";
import {ModalComponent} from "../event/event.modal.component";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {UserTableComponent} from "../user/user.component";
import {UserModalComponent} from "../user/user_modal.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterModule, RouterOutlet} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FeedbackComponent} from "../feedback/feedback.component";
import {FeedbackModalComponent} from "../feedback/feedback.modal.component";
import {HttpClientModule} from "@angular/common/http";
import {EmailFormComponent} from "../email/email.component";

export const routes =  [
  { path: 'events', component: EventComponent, label: 'События' },
  { path: 'users', component: UserTableComponent, label: 'Пользователи' },
  { path: 'feedbacks', component: FeedbackComponent, label: 'Сообщения' },
  { path: 'email', component: EmailFormComponent, label: 'Email' },
];

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    ModalComponent,
    UserTableComponent,
    UserModalComponent,
    FeedbackComponent,
    FeedbackModalComponent,
    EmailFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatSidenavModule,
    RouterOutlet,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatListModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
