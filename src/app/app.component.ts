import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FirstPage } from '../pages/first/first';
import { SecondPage } from '../pages/second/second';
import { ThirdPage } from '../pages/third/third';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild("myNav") nav: NAV;

  rootPage:any = HomePage;
  public pages: Array<{ title: string, icon: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menu: MenuController) {

    this.pages = [
      { title: 'firstpage', icon: 'home', component: FirstPage },
      { title: 'secondpage', icon: 'star', component: SecondPage },
      { title: 'thirdpage', icon: 'mail', component: ThirdPage }
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  /** Navigate to another page */
  gotoNewPage(page) {
    this.menu.close();
    
    this.nav.setRoot(page.component);
  }

}