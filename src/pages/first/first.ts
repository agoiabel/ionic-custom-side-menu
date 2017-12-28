import { ThirdPage } from './../third/third';
import { SecondPage } from './../second/second';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }

  gotoSecondPage() {
    this.navCtrl.push(SecondPage);
  }

  gotoThirdPage() {
    this.navCtrl.push(ThirdPage);
  }

}
