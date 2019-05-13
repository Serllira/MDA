import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgxErrorsModule } from '@ultimate/ngxerrors';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";

import { environment } from '../environments/environment';

import {AuthService} from "../services/auth.service";
import {ReservasPage} from "../pages/reservas/reservas";
import {AddReservasPage} from "../pages/add-reservas/add-reservas";
import {GestionarReservaPage} from "../pages/gestionar-reserva/gestionar-reserva";
import {VerReservasPage} from "../pages/ver-reservas/ver-reservas";
import {GestionarReserva2Page} from "../pages/gestionar-reserva2/gestionar-reserva2";

import {HorarioPage} from "../pages/horario/horario";
import {SignupPage} from "../pages/signup/signup";
import {SignupEquipoPage} from "../pages/signup-equipo/signup-equipo";
import {VerHorariosPage} from "../pages/ver-horarios/ver-horarios";
import {VerVentajasPage} from "../pages/ver-ventajas/ver-ventajas";
import {ListadoComponent} from "../components/listado/listado";
import {InstalacionPage} from "../pages/instalacion/instalacion";
import {VerPerfilPage} from "../pages/ver-perfil/ver-perfil";
import {ContactoPage} from "../pages/contacto/contacto";
import {ModificarReservaPage} from "../pages/modificar-reserva/modificar-reserva";
import {VerPagosPage} from "../pages/ver-pagos/ver-pagos";
import {PerfilPage} from "../pages/perfil/perfil";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ReservasPage,
    AddReservasPage,
    GestionarReservaPage,
    VerReservasPage,
    GestionarReserva2Page,
    SignupPage,
    SignupEquipoPage,
    HorarioPage,
    VerHorariosPage,
    VerVentajasPage,
    InstalacionPage,
    ListadoComponent,
    VerPerfilPage,
    ContactoPage,
    ModificarReservaPage,
    VerPagosPage,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxErrorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ReservasPage,
    AddReservasPage,
    GestionarReservaPage,
    VerReservasPage,
    GestionarReserva2Page,
    HorarioPage,
    SignupPage,
    SignupEquipoPage,
    VerHorariosPage,
    VerVentajasPage,
    InstalacionPage,
    VerPerfilPage,
    ContactoPage,
    ModificarReservaPage,
    VerPagosPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    AngularFireAuthModule,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
