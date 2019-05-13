import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {HomePage} from "../home/home";

@IonicPage()
@Component({
  selector: 'page-signup-equipo',
  templateUrl: 'signup-equipo.html',
})

export class SignupEquipoPage {
  signupTeamError: string;
  form: FormGroup;
  deporte: String;


  constructor(
    fb: FormBuilder,
    private navCtrl: NavController,
    private auth: AuthService
  ) {
    this.form = fb.group({
      nombreEquipo: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(16), Validators.pattern('[a-zA-Z ]*')])],
      categoria: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(16), Validators.pattern('[a-zA-Z]*')])],
      sport: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern('[a-zA-Z ]*')])],
      ficha: ['', Validators.compose([Validators.required, Validators.minLength(15), Validators.maxLength(16)])],
      tlf: ['', Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(10)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupEquipoPage');
  }

  signupTeam() {
    let data = this.form.value;
    let credentials = {
      email: data.email,
      password: data.password
    };
    let datos = {
      email: data.email,
      tlf:data.tlf,
      nombreEquipo: data.nombreEquipo,
      categoria:data.categoria,
      sport: data.sport,
      ficha: data.ficha
    };
    this.auth.signUpTeam(credentials).then(
      () => {this.auth.signUpT(datos); this.navCtrl.setRoot(HomePage)},
      error => this.signupTeamError = error.message
    );
  }

}
