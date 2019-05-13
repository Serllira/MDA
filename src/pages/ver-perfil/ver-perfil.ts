import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import {PerfilPage} from "../perfil/perfil";

/**
 * Generated class for the VerPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-perfil',
  templateUrl: 'ver-perfil.html',
})
export class VerPerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerPerfilPage');
  }

  modificarCampo(){
    console.log('Soy modificar campo');
  }

  modificarFoto(){
    console.log('Soy modificar foto');
  }

  editarPerfil(){
    this.navCtrl.push(PerfilPage);
  }

}
