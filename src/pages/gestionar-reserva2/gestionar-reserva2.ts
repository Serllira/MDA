import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireDatabase} from '@angular/fire/database';
import * as firebase from 'firebase/app';
import {snapshotToArray} from "../reservas/reservas";
import {ModificarReservaPage} from "../modificar-reserva/modificar-reserva";

/**
 * Generated class for the GestionarReserva2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestionar-reserva2',
  templateUrl: 'gestionar-reserva2.html',
})
export class GestionarReserva2Page {

  key: any;
  hora: any;
  dia: any;
  disponible:any;

  fechas2 = [];  //Lunes
  fechas3 = [];  //Martes
  fechas4 = [];  //Miércoles
  fechas5 = [];  //Jueves
  fechas6 = [];  //Viernes
  fechas7 = [];  //Sábado
  fechas8 = [];  //Domingo

  ref2 = firebase.database().ref('prueba/Lunes');
  ref3 = firebase.database().ref('prueba/Martes');
  ref4 = firebase.database().ref('prueba/Miércoles//'); //Martes
  ref5 = firebase.database().ref('prueba/Jueves/'); //Martes
  ref6 = firebase.database().ref('prueba/Viernes/'); //Martes
  ref7 = firebase.database().ref('prueba/Sábado/'); //Martes
  ref8 = firebase.database().ref('prueba/Domingo/'); //Martes

  constructor(public navCtrl: NavController, public navParams: NavParams,public afDB: AngularFireDatabase, public alertController: AlertController) {
    this.key= this.navParams.get("key");
    this.hora= this.navParams.get("hora");
    this.dia = this.navParams.get("dia");
    this.disponible = this.navParams.get("disponible");

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
    console.log('ionViewDidLoad GestionarReserva2Page');
  }

  presentAlert() {
    let alert = this.alertController.create({
      title: 'Estado de Reserva',
      subTitle: 'La reserva se ha eliminado con éxito',
      buttons: ['OK']
    });
    alert.present();
  }

  borrarSelectedFecha(key, hora,dia, disponible){

    if(dia==="Lunes"){
      for(let fecha of this.fechas2){
        if(fecha.dia === dia && fecha.hora === hora){
          this.afDB.database.ref('prueba/Lunes/'+fecha.key).update({disponibilidad: true});
        }
      }

        this.afDB.database.ref('prueba2/Lunes/'+key).remove();
        this.presentAlert()
        this.navCtrl.pop();

    }

    if(dia==="Martes"){
        //this.afDB.database.ref('prueba/Lunes/'+key).remove();
      for(let fecha of this.fechas3){
        if(fecha.dia === dia && fecha.hora === hora){
          this.afDB.database.ref('prueba/Martes/'+fecha.key).update({disponibilidad: true});
        }
      }

      this.afDB.database.ref('prueba2/Martes/'+key).remove();
        this.presentAlert()
        this.navCtrl.pop();

    }

    if(dia==="Miércoles"){
      for(let fecha of this.fechas4){
        if(fecha.dia === dia && fecha.hora === hora){
          this.afDB.database.ref('prueba/Miércoles/'+fecha.key).update({disponibilidad: true});
        }
      }

      this.afDB.database.ref('prueba2/Miércoles/'+key).remove();
      this.presentAlert()
      this.navCtrl.pop();
    }

    if(dia==="Jueves"){
      for(let fecha of this.fechas5){
        if(fecha.dia === dia && fecha.hora === hora){
          this.afDB.database.ref('prueba/Jueves/'+fecha.key).update({disponibilidad: true});
        }
      }

      this.afDB.database.ref('prueba2/Jueves/'+key).remove();
      this.presentAlert()
      this.navCtrl.pop();
    }

    if(dia==="Viernes"){
      for(let fecha of this.fechas6){
        if(fecha.dia === dia && fecha.hora === hora){
          this.afDB.database.ref('prueba/Viernes/'+fecha.key).update({disponibilidad: true});
        }
      }

      this.afDB.database.ref('prueba2/Viernes/'+key).remove();
      this.presentAlert()
      this.navCtrl.pop();
    }

    if(dia==="Sábado"){
      for(let fecha of this.fechas7){
        if(fecha.dia === dia && fecha.hora === hora){
          this.afDB.database.ref('prueba/Sábado/'+fecha.key).update({disponibilidad: true});
        }
      }

      this.afDB.database.ref('prueba2/Sábado/'+key).remove();
      this.presentAlert()
      this.navCtrl.pop();
    }

    if(dia==="Domingo"){
      for(let fecha of this.fechas8){
        if(fecha.dia === dia && fecha.hora === hora){
          this.afDB.database.ref('prueba/Domingo/'+fecha.key).update({disponibilidad: true});
        }
      }

      this.afDB.database.ref('prueba2/Domingo/'+key).remove();
      this.presentAlert()
      this.navCtrl.pop();
    }

  }

  modificarSelectedFecha(key, hora, dia){
    this.navCtrl.push(ModificarReservaPage, {key: key, hora: hora, dia: dia});
  }

}
