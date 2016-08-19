import {Component} from '@angular/core';

import {NavController, Toast, Loading, ViewController, Modal} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/contact/register.html'
})

export class Register {

  public user = {
    username: '',
    password: '',
    passwords: '',
    email: '',
    phone: ''
  }

  constructor(private navCtrl: NavController,private viewCtrl: ViewController) {
  }

  //取消注册
  dismiss(){
    this.viewCtrl.dismiss();
  }
  //点击注册
  register(){
    var text = this.user.username;
    var textp = this.user.password;
    var textps = this.user.passwords;
    var textPhone = this.user.phone;
    if(text == '' || /^[a-zA-Z][a-zA-Z-0-9]{4,30}$/.test(text) == false){
      let toast = Toast.create({
        message: '只能输入5-30个以字母开头的字串',
        duration: 3000
      });
      this.navCtrl.present(toast);
    }else if(textp == '' || /^(\w){6,20}$/.test(textp) == false){
      let toast = Toast.create({
        message: '密码只能输入6-20个字母、数字、下划线',
        duration: 3000
      });
      this.navCtrl.present(toast);
    }else if(textps != textp){
      let toast = Toast.create({
        message: '两次输入的密码必须相同！',
        duration: 3000
      });
      this.navCtrl.present(toast);
    }else if(textPhone == '' || /^1(3|4|5|7|8)[0-9]{9}$/.test(textPhone) == false){
      let toast = Toast.create({
        message: '请输入有效的11位手机号码',
        duration: 3000
      });
      this.navCtrl.present(toast);
    }else{
      //正常是后台API返回值之后
      let loading = Loading.create({
        content: '注册成功！',
        duration: 3000
      });
      this.navCtrl.present(loading);
    }
  }
}
