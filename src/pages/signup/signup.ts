import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {HomePage} from "../home/home";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
  signupError: string;
  form: FormGroup;

  constructor(
    fb: FormBuilder,
    private navCtrl: NavController,
    private auth: AuthService
  ) {
    this.form = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      tlf: ['', Validators.compose([Validators.required, Validators.maxLength(9)])],
      nombre: [],
      apellido: []
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


  signup() {
    let data = this.form.value;
    let credentials = {
      email: data.email,
      password: data.password
    };
    let datos = {
      email: data.email,
      tlf:data.tlf,
      nombre: data.nombre,
      apellido:data.apellido,
      admin: false
    };
    this.auth.signUp(credentials).then(
      () => {this.auth.signup2(datos); this.navCtrl.setRoot(HomePage)},
      error => this.signupError = error.message
    );
  }

}
