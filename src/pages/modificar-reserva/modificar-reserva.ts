import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {snapshotToArray} from "../reservas/reservas";
import * as firebase from "firebase";
import {GestionarReservaPage} from "../gestionar-reserva/gestionar-reserva";
import {AngularFireDatabase} from '@angular/fire/database';
import {AuthService} from "../../services/auth.service";
import {VerReservasPage} from "../ver-reservas/ver-reservas";

/**
 * Generated class for the ModificarReservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modificar-reserva',
  templateUrl: 'modificar-reserva.html',
})
export class ModificarReservaPage {

  key:any;
  hora:any;
  dia:any;

  fechas = [];

  fechas2 = [];  //Lunes
  fechas3 = [];  //Martes
  fechas4 = [];  //Miércoles
  fechas5 = [];  //Jueves
  fechas6 = [];  //Viernes
  fechas7 = [];  //Sábado
  fechas8 = [];  //Domingo

  ref2 = firebase.database().ref('prueba/Lunes/');  //Lunes
  ref3 = firebase.database().ref('prueba/Martes/'); //Martes
  ref4 = firebase.database().ref('prueba/Miércoles//'); //Martes
  ref5 = firebase.database().ref('prueba/Jueves/'); //Martes
  ref6 = firebase.database().ref('prueba/Viernes/'); //Martes
  ref7 = firebase.database().ref('prueba/Sábado/'); //Martes
  ref8 = firebase.database().ref('prueba/Domingo/'); //Martes

  ref = firebase.database().ref('fechasDisponibles/');

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController, public afDB: AngularFireDatabase, public auth: AuthService) {
    this.key = this.navParams.get("key");
    this.hora = this.navParams.get("hora");
    this.dia = this.navParams.get("dia");

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
    console.log('ionViewDidLoad ModificarReservaPage');
  }

  selectFecha2(key,hora,dia,disponible){
    console.log(disponible);
    if(disponible){
      let alert = this.alertController.create({
        title: 'Modificar reserva',
        message: '¿Estás seguro de que quieres modificar tu reserva por el ' + dia + ' de ' + hora,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Aceptar',
            handler: () => {

              this.afDB.database.ref('prueba2/Lunes/'+this.key).remove();
              this.afDB.database.ref('prueba2/Martes/'+this.key).remove();
              this.afDB.database.ref('prueba2/Miércoles/'+this.key).remove();
              this.afDB.database.ref('prueba2/Jueves/'+this.key).remove();
              this.afDB.database.ref('prueba2/Viernes/'+this.key).remove();
              this.afDB.database.ref('prueba2/Sábado/'+this.key).remove();
              this.afDB.database.ref('prueba2/Domingo/'+this.key).remove();

              for(let fecha of this.fechas2){
                if(fecha.dia === dia && fecha.hora === hora){
                  this.afDB.database.ref('prueba/Lunes/'+fecha.key).update({disponibilidad: false});
                }
                console.log("Día: " + this.dia + " Hora: " + this.hora);
                if(fecha.dia === this.dia && fecha.hora === this.hora){
                  this.afDB.database.ref('prueba/Lunes/'+fecha.key).update({disponibilidad: true});
                }
              }

              for(let fecha of this.fechas3){
                if(fecha.dia === dia && fecha.hora === hora){
                  this.afDB.database.ref('prueba/Martes/'+fecha.key).update({disponibilidad: false});
                }
                console.log("Día: " + this.dia + " Hora: " + this.hora);
                if(fecha.dia === this.dia && fecha.hora === this.hora){
                  console.log("hola");
                  this.afDB.database.ref('prueba/Martes/'+fecha.key).update({disponibilidad: true});
                }
              }

              for(let fecha of this.fechas4){
                if(fecha.dia === dia && fecha.hora === hora){
                  this.afDB.database.ref('prueba/Miércoles/'+fecha.key).update({disponibilidad: false});
                }
                console.log("Día: " + this.dia + " Hora: " + this.hora);
                if(fecha.dia === this.dia && fecha.hora === this.hora){
                  console.log("hola");
                  this.afDB.database.ref('prueba/Miércoles/'+fecha.key).update({disponibilidad: true});
                }
              }

              for(let fecha of this.fechas5){
                if(fecha.dia === dia && fecha.hora === hora){
                  this.afDB.database.ref('prueba/Jueves/'+fecha.key).update({disponibilidad: false});
                }
                console.log("Día: " + this.dia + " Hora: " + this.hora);
                if(fecha.dia === this.dia && fecha.hora === this.hora){
                  console.log("hola");
                  this.afDB.database.ref('prueba/Jueves/'+fecha.key).update({disponibilidad: true});
                }
              }

              for(let fecha of this.fechas6){
                if(fecha.dia === dia && fecha.hora === hora){
                  this.afDB.database.ref('prueba/Viernes/'+fecha.key).update({disponibilidad: false});
                }
                console.log("Día: " + this.dia + " Hora: " + this.hora);
                if(fecha.dia === this.dia && fecha.hora === this.hora){
                  console.log("hola");
                  this.afDB.database.ref('prueba/Viernes/'+fecha.key).update({disponibilidad: true});
                }
              }

              for(let fecha of this.fechas7){
                if(fecha.dia === dia && fecha.hora === hora){
                  this.afDB.database.ref('prueba/Sábado/'+fecha.key).update({disponibilidad: false});
                }
                console.log("Día: " + this.dia + " Hora: " + this.hora);
                if(fecha.dia === this.dia && fecha.hora === this.hora){
                  console.log("hola");
                  this.afDB.database.ref('prueba/Sábado/'+fecha.key).update({disponibilidad: true});
                }
              }

              for(let fecha of this.fechas8){
                if(fecha.dia === dia && fecha.hora === hora){
                  this.afDB.database.ref('prueba/Domingo/'+fecha.key).update({disponibilidad: false});
                }
                console.log("Día: " + this.dia + " Hora: " + this.hora);
                if(fecha.dia === this.dia && fecha.hora === this.hora){
                  console.log("hola");
                  this.afDB.database.ref('prueba/Domingo/'+fecha.key).update({disponibilidad: true});
                }
              }

              if(dia=="Lunes"){

                let newData = this.afDB.database.ref('prueba2/Lunes').push();
                newData.set({
                  dia:dia,
                  email: this.auth.getEmail(),
                  hora: hora
                });

              }

              if(dia=="Martes"){
                let newData = this.afDB.database.ref('prueba2/Martes').push();
                newData.set({
                  dia:dia,
                  email: this.auth.getEmail(),
                  hora: hora
                });
              }

              if(dia=="Miércoles"){
                let newData = this.afDB.database.ref('prueba2/Miércoles').push();
                newData.set({
                  dia:dia,
                  email: this.auth.getEmail(),
                  hora: hora
                });
              }

              if(dia=="Jueves"){
                let newData = this.afDB.database.ref('prueba2/Jueves').push();
                newData.set({
                  dia:dia,
                  email: this.auth.getEmail(),
                  hora: hora
                });
              }

              if(dia=="Viernes"){
                let newData = this.afDB.database.ref('prueba2/Viernes').push();
                newData.set({
                  dia:dia,
                  email: this.auth.getEmail(),
                  hora: hora
                });
              }

              if(dia=="Sábado"){
                let newData = this.afDB.database.ref('prueba2/Sábado').push();
                newData.set({
                  dia:dia,
                  email: this.auth.getEmail(),
                  hora: hora
                });
              }

              if(dia=="Domingo"){
                let newData = this.afDB.database.ref('prueba2/Domingo').push();
                newData.set({
                  dia:dia,
                  email: this.auth.getEmail(),
                  hora: this.hora,
                  Edu: "Edu"
                });
              }
              this.navCtrl.pop();
              this.navCtrl.pop();
            }
          }
        ]
      });
      alert.present();
    }else{
      this.presentAlert();
    }

  }

  presentAlert() {
    let alert = this.alertController.create({
      title: 'Reserva no disponible',
      subTitle: 'La reserva seleccionada no está disponible',
      buttons: ['OK']
    });
    alert.present();
  }

}
