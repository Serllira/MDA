import {Component, ViewChild} from '@angular/core';
import {Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';

import {LoginPage} from "../pages/login/login";
import {AuthService} from "../services/auth.service";
import {HomePage} from "../pages/home/home";
import {InstalacionPage} from "../pages/instalacion/instalacion";
import {VerPerfilPage} from "../pages/ver-perfil/ver-perfil";
import {ContactoPage} from "../pages/contacto/contacto";
import {VerPagosPage} from "../pages/ver-pagos/ver-pagos";


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  pages;
  rootPage;

  private platform;
  private menu: MenuController;

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform,
              menu: MenuController,
              private statusBar: StatusBar,
              private auth: AuthService) {

    this.menu = menu;
    this.platform = platform;
    this.initializeApp();
    this.pages = [
      {title: 'Principal', component: HomePage, icon: 'home'},
      {title: 'Ver Perfil', component: VerPerfilPage, icon: 'person'},
      {title: 'Instalaciones', component: InstalacionPage, icon: 'football'},
      {title: 'Contacto', component: ContactoPage, icon: 'call'},
      {title: 'Ver Pagos', component: VerPagosPage, icon: 'logo-usd'},
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });

    this.auth.afAuth.authState
      .subscribe(
        user => {
          if (user) {
            this.rootPage = HomePage;
          } else {
            this.rootPage = LoginPage;
          }
        },
        () => {
          this.rootPage = LoginPage;
        }
      );
  }

  logout() {
    this.menu.close();
    this.auth.signOut();
    this.nav.setRoot(LoginPage);
  }

  openPage(page) {
    this.menu.close();
    this.nav.push(page.component);
  }

}
