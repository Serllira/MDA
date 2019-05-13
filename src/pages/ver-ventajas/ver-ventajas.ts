import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as firebase from "firebase";
import {AuthService} from "../../services/auth.service";
import {snapshotToArray} from "../reservas/reservas";

/**
 * Generated class for the VerVentajasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-ventajas',
  templateUrl: 'ver-ventajas.html',
})
export class VerVentajasPage {

  abonados=[];

  ref = firebase.database().ref('abonados/');

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController,public auth: AuthService) {

    this.ref.on('value', resp => {
      this.abonados = [];
      this.abonados = snapshotToArray(resp);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerVentajasPage');
  }

  presentAlert() {
    let alert = this.alertController.create({
      title: 'Abonado correctamente',
      subTitle: 'Usted esta abonado, pero aún está pendiento de pago',
      buttons: ['OK']
    });
    alert.present();
  }

  presentAlert2() {
    let alert = this.alertController.create({
      title: 'Error',
      subTitle: 'Usted ya está abonado',
      buttons: ['OK']
    });
    alert.present();
  }

  abonarse(){
    let alert = this.alertController.create({
      title: 'Abonarse',
      message: '¿Estás seguro de que quieres abonarte?',
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
            let abono=false;
            for(let abonado of this.abonados){
              if(abonado.email = this.auth.getEmail()){
                this.presentAlert2()
                abono=true;
              }
            }
            if(!abono){
              let newData = this.ref.push();
              newData.set({
                email: this.auth.getEmail(),
                pagado: false
              });

              this.presentAlert();
            }

          }
        }
      ]
    });
    alert.present();
  }

}
