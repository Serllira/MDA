import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';
import {snapshotToArray} from "../reservas/reservas";
import {AuthService} from "../../services/auth.service";
import {GestionarReserva2Page} from "../gestionar-reserva2/gestionar-reserva2";

/**
 * Generated class for the VerReservasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-reservas',
  templateUrl: 'ver-reservas.html',
})
export class VerReservasPage {

  fechas = [];
  ref = firebase.database().ref('fechasReservadas/');

  fechas2 = [];  //Lunes
  fechas3 = [];  //Martes
  fechas4 = [];  //Miércoles
  fechas5 = [];  //Jueves
  fechas6 = [];  //Viernes
  fechas7 = [];  //Sábado
  fechas8 = [];  //Domingo

  ref2 = firebase.database().ref('prueba2/Lunes/');  //Lunes
  ref3 = firebase.database().ref('prueba2/Martes/'); //Martes
  ref4 = firebase.database().ref('prueba2/Miércoles//'); //Martes
  ref5 = firebase.database().ref('prueba2/Jueves/'); //Martes
  ref6 = firebase.database().ref('prueba2/Viernes/'); //Martes
  ref7 = firebase.database().ref('prueba2/Sábado/'); //Martes
  ref8 = firebase.database().ref('prueba2/Domingo/'); //Martes

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService) {
    this.ref.on('value', resp => {
      this.fechas = [];
      this.fechas = snapshotToArray(resp);
    });

    this.ref2.on('value', resp => {
      this.fechas2 = [];
      this.fechas2 = snapshotToArray(resp);
    });

    this.ref3.on('value', resp => {
      this.fechas3 = [];
      this.fechas3 = snapshotToArray(resp);
    });

    this.ref4.on('value', resp => {
      this.fechas4 = [];
      this.fechas4 = snapshotToArray(resp);
    });

    this.ref5.on('value', resp => {
      this.fechas5 = [];
      this.fechas5 = snapshotToArray(resp);
    });

    this.ref6.on('value', resp => {
      this.fechas6 = [];
      this.fechas6 = snapshotToArray(resp);
    });

    this.ref7.on('value', resp => {
      this.fechas7 = [];
      this.fechas7 = snapshotToArray(resp);
    });

    this.ref8.on('value', resp => {
      this.fechas8 = [];
      this.fechas8 = snapshotToArray(resp);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerReservasPage');
  }

  selectFecha2(key,hora,dia,disponible){
    this.navCtrl.push(GestionarReserva2Page, {
      key:key,
      hora:hora,
      dia:dia,
      disponible:disponible
    });
  }

}
