import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddReservasPage } from './add-reservas';

@NgModule({
  declarations: [
    AddReservasPage,
  ],
  imports: [
    IonicPageModule.forChild(AddReservasPage),
  ],
})
export class AddReservasPageModule {}
