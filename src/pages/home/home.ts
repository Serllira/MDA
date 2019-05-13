import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthService } from '../../services/auth.service';
import * as firebase from 'firebase/app';
import {ReservasPage} from '../reservas/reservas';
import {VerReservasPage} from "../ver-reservas/ver-reservas";

import {HorarioPage} from "../horario/horario";
import {VerHorariosPage} from "../ver-horarios/ver-horarios";
import {VerVentajasPage} from "../ver-ventajas/ver-ventajas";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  reservas(){

    this.navCtrl.push(ReservasPage);
  }

  verReservas(){
    this.navCtrl.push(VerReservasPage);
  }

  verHorario(){
    this.navCtrl.push(HorarioPage);
  }

  verHoras(){
    this.navCtrl.push(VerHorariosPage);
  }

  verVentajas(){
    this.navCtrl.push(VerVentajasPage);
  }

}
