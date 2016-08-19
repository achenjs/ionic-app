import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/about/aboutInfo.html'
})

export class AboutInfo {
  item;

  constructor(private navCtrl: NavController,private params: NavParams) {
    this.item = params.data.item;
  }

  goBack(){
      this.navCtrl.pop();
  }

}
