import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AuthService} from "../../services/auth.service";
import * as firebase from 'firebase/app';
import {AngularFireDatabase} from '@angular/fire/database';

/**
 * Generated class for the RemoveReservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-remove-reserva',
  templateUrl: 'gestionar-reserva.html',
})
export class GestionarReservaPage {

  fecha: string;
  key: any;
  hora: any;
  dia: any;
  disponible:any;

  data = { fecha:'',email:'', id:''};
  ref = firebase.database().ref('fechasReservadas/');
  ref2 = firebase.database().ref('prueba2/Lunes');
  ref3 = firebase.database().ref('prueba2/Martes');
  ref4 = firebase.database().ref('prueba2/Miércoles//'); //Martes
  ref5 = firebase.database().ref('prueba2/Jueves/'); //Martes
  ref6 = firebase.database().ref('prueba2/Viernes/'); //Martes
  ref7 = firebase.database().ref('prueba2/Sábado/'); //Martes
  ref8 = firebase.database().ref('prueba2/Domingo/'); //Martes

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService, public afDB: AngularFireDatabase, public alertController: AlertController) {
    this.fecha= this.navParams.get("fecha");
    this.key= this.navParams.get("key");
    this.hora= this.navParams.get("hora");
    this.dia = this.navParams.get("dia");
    this.disponible = this.navParams.get("disponible");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemoveReservaPage');
  }

  presentAlert() {
    let alert = this.alertController.create({
      title: 'Estado de Reserva',
      subTitle: 'La reserva se ha realizado con exito',
      buttons: ['OK']
    });
    alert.present();
  }

  presentAlert2() {
    let alert = this.alertController.create({
      title: 'Estado de Reserva',
      subTitle: 'La reserva no esta disponible',
      buttons: ['OK']
    });
    alert.present();
  }

  borrarSelectedFecha(key,dia){
    if(dia==="Lunes") {
      this.afDB.database.ref('prueba/Lunes/' + key).remove();
      this.navCtrl.pop();
    }

    if(dia==="Martes") {
      this.afDB.database.ref('prueba/Martes/' + key).remove();
      this.navCtrl.pop();
    }

    if(dia==="Miércoles") {
      this.afDB.database.ref('prueba/Miércoles/' + key).remove();
      this.navCtrl.pop();
    }

    if(dia==="Jueves") {
      this.afDB.database.ref('prueba/Jueves/' + key).remove();
      this.navCtrl.pop();
    }

    if(dia==="Viernes") {
      this.afDB.database.ref('prueba/Viernes/' + key).remove();
      this.navCtrl.pop();
    }

    if(dia==="Sábado") {
      this.afDB.database.ref('prueba/Sábado/' + key).remove();
      this.navCtrl.pop();
    }

    if(dia==="Domingo") {
      this.afDB.database.ref('prueba/Domingo/' + key).remove();
      this.navCtrl.pop();
    }

  }

  reservarSelectedFecha(fecha, email, key){
    let newData = this.ref.push();
    newData.set({


      fecha: fecha,
      email: email
    });
    this.afDB.database.ref('fechasDisponibles/'+key).remove();
    this.presentAlert()
    this.navCtrl.pop();
  }

  reservarSelectedFecha2(hora, email, key, dia, disponible){

    if(dia==="Lunes"){
      if(!disponible){
          this.presentAlert2();
      }else{
        let newData = this.ref2.push();
        newData.set({


          hora: hora,
          email: email,
          dia: dia
        });
        //this.afDB.database.ref('prueba/Lunes/'+key).remove();
        this.afDB.database.ref('prueba/Lunes/'+key).update({disponibilidad: false});
        this.presentAlert()
        this.navCtrl.pop();
      }

    }

    if(dia==="Martes"){
      if(!disponible){
        this.presentAlert2();
      }else{
        let newData = this.ref3.push();
        newData.set({


          hora: hora,
          email: email,
          dia: dia
        });
        //this.afDB.database.ref('prueba/Lunes/'+key).remove();
        this.afDB.database.ref('prueba/Martes/'+key).update({disponibilidad: false});
        this.presentAlert()
        this.navCtrl.pop();
      }
    }

    if(dia==="Miércoles"){
      if(!disponible){
        this.presentAlert2();
      }else{
        let newData = this.ref4.push();
        newData.set({


          hora: hora,
          email: email,
          dia: dia
        });
        //this.afDB.database.ref('prueba/Lunes/'+key).remove();
        this.afDB.database.ref('prueba/Miércoles/'+key).update({disponibilidad: false});
        this.presentAlert()
        this.navCtrl.pop();
      }
    }

    if(dia==="Jueves"){
      if(!disponible){
        this.presentAlert2();
      }else{
        let newData = this.ref5.push();
        newData.set({


          hora: hora,
          email: email,
          dia: dia
        });
        //this.afDB.database.ref('prueba/Lunes/'+key).remove();
        this.afDB.database.ref('prueba/Jueves/'+key).update({disponibilidad: false});
        this.presentAlert()
        this.navCtrl.pop();
      }
    }

    if(dia==="Viernes"){
      if(!disponible){
        this.presentAlert2();
      }else{
        let newData = this.ref6.push();
        newData.set({


          hora: hora,
          email: email,
          dia: dia
        });
        //this.afDB.database.ref('prueba/Lunes/'+key).remove();
        this.afDB.database.ref('prueba/Viernes/'+key).update({disponibilidad: false});
        this.presentAlert()
        this.navCtrl.pop();
      }
    }

    if(dia==="Sábado"){
      if(!disponible){
        this.presentAlert2();
      }else{
        let newData = this.ref7.push();
        newData.set({


          hora: hora,
          email: email,
          dia: dia
        });
        //this.afDB.database.ref('prueba/Lunes/'+key).remove();
        this.afDB.database.ref('prueba/Sábado/'+key).update({disponibilidad: false});
        this.presentAlert()
        this.navCtrl.pop();
      }
    }

    if(dia==="Domingo"){
      if(!disponible){
        this.presentAlert2();
      }else{
        let newData = this.ref8.push();
        newData.set({


          hora: hora,
          email: email,
          dia: dia
        });
        //this.afDB.database.ref('prueba/Lunes/'+key).remove();
        this.afDB.database.ref('prueba/Domingo/'+key).update({disponibilidad: false});
        this.presentAlert()
        this.navCtrl.pop();
      }
    }

  }

}
