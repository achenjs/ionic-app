import {Component} from '@angular/core';
import {NavController, Storage, LocalStorage} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/contact/usercenter.html'
})

export class UserCenter {
  public user = {
    headface: ''
  }
  local;
  constructor(private navCtrl: NavController) {
    this.local = new Storage(LocalStorage);
    this.local.get('logined').then((res) => {
      if(res == 'true'){
        this.local.get('username').then((res) => {
          this.user.headface = res;
        })
      }
    })

  }

  //点击注销
  logout(){
    this.navCtrl.pop();
  }
}
