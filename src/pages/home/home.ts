import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthService } from '../../services/auth.service';
import * as firebase from 'firebase/app';
import {ReservasPage} from '../reservas/reservas';
import {VerReservasPage} from "../ver-reservas/ver-reservas";
import {LoginPage} from "../login/login";
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';


import {HorarioPage} from "../horario/horario";
import {VerHorariosPage} from "../ver-horarios/ver-horarios";
import {VerVentajasPage} from "../ver-ventajas/ver-ventajas";
import {Profile} from "../../models/profile";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  datosPerfil: AngularFireObject<Profile>

  constructor(private afAuth: AngularFireAuth,private toast: ToastController, public navCtrl: NavController, public navParams: NavParams, private auth: AuthService, private afDatabase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewWillLoad(){
    this.afAuth.authState.take(1).subscribe(data =>{
      if(data && data.email && data.uid) {
        this.toast.create({
          message: 'Bienvenido a ReservasApp '+ data.email,
          duration: 5000
        }).present();

        this.datosPerfil = this.afDatabase.object('users/${id}')
      }else{
        this.toast.create({
          message: 'No se han encontrado datos de usuario',
          duration: 5000
        })
      }
    })
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
