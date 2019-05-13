import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';
import {AngularFireDatabase} from '@angular/fire/database';

/**
 * Generated class for the AddReservasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-reservas',
  templateUrl: 'add-reservas.html',
})
export class AddReservasPage {

  data = { fecha:'', id:'' };
  data2 = { dia:'', hora:'', id:'' };
  ref = firebase.database().ref('fechasDisponibles/');
  ref2 = firebase.database().ref('prueba/Lunes');   //Lunes
  ref3 = firebase.database().ref('prueba/Martes');  //Martes
  ref4 = firebase.database().ref('prueba/Miércoles');  //Martes
  ref5 = firebase.database().ref('prueba/Jueves');  //Martes
  ref6 = firebase.database().ref('prueba/Viernes');  //Martes
  ref7 = firebase.database().ref('prueba/Sábado');  //Martes
  ref8 = firebase.database().ref('prueba/Domingo');  //Martes

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddReservasPage');
  }

  addReserva2(dia) {
    if(dia==="Lunes"){
      let newData = this.ref2.push();
      newData.set({
        dia:dia,
        hora: this.data2.hora,
        disponibilidad: true
      });
      this.navCtrl.pop();
    }

    if(dia==="Martes"){
      let newData = this.ref3.push();
      newData.set({
        dia:dia,
        hora: this.data2.hora,
        disponibilidad: true
      });
      this.navCtrl.pop();
    }

    if(dia==="Miércoles"){
      let newData = this.ref4.push();
      newData.set({
        dia:dia,
        hora: this.data2.hora,
        disponibilidad: true
      });
      this.navCtrl.pop();
    }

    if(dia==="Jueves"){
      let newData = this.ref5.push();
      newData.set({
        dia:dia,
        hora: this.data2.hora,
        disponibilidad: true
      });
      this.navCtrl.pop();
    }

    if(dia==="Viernes"){
      let newData = this.ref6.push();
      newData.set({
        dia:dia,
        hora: this.data2.hora,
        disponibilidad: true
      });
      this.navCtrl.pop();
    }

    if(dia==="Sábado"){
      let newData = this.ref7.push();
      newData.set({
        dia:dia,
        hora: this.data2.hora,
        disponibilidad: true
      });
      this.navCtrl.pop();
    }

    if(dia==="Domingo"){
      let newData = this.ref8.push();
      newData.set({
        dia:dia,
        hora: this.data2.hora,
        disponibilidad: true
      });
      this.navCtrl.pop();
    }

  }

  addReserva() {

    let newData = this.ref.push();
    newData.set({


      fecha:this.data.fecha,
    });
    this.navCtrl.pop();
  }
}
