import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTwilioComponent } from './create-twilio/create-twilio.component'
import { ListTwilioComponent } from './list-twilio/list-twilio.component'

const routes: Routes = [
  { path: 'create', component: CreateTwilioComponent },
  { path: 'list', component: ListTwilioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwilioRoutingModule { }
