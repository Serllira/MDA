import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from '../../models/profile';
import { AngularFireDatabase } from '@angular/fire/database'
//import { AngularFireDatabase } from 'angularfire2/database';

import auth from "firebase";
import {AuthService} from "../../services/auth.service";
import {HomePage} from "../home/home";
/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage{
  profile = {} as Profile;

  constructor(private auth: AuthService, public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  createProfile(id){
    this.afAuth.authState.take(1).subscribe(auth =>{
      this.profile.id = id;
      this.afDatabase.database.ref('users/'+id).update(this.profile)
        .then(()=>this.navCtrl.setRoot(HomePage))
      console.log([this.profile])
    })
  }

}
