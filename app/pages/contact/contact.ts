import {Component} from '@angular/core';
import {NavController, Toast, Loading, ViewController, Modal, Storage, LocalStorage} from 'ionic-angular';
import {Http} from '@angular/http';

import {Register} from '../contact/register';
import {UserCenter} from '../contact/usercenter';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {

  public user = {
    username : "",
    password : ""
  }

  constructor(private navCtrl: NavController,private http: Http) {
    // this.http.get('http://api.gugujiankong/account/Login?email=1@qq.com&password=1')
    //   .subscribe(data => {
    //     console.log(data);
    //   });
  }
  //点击登录时，判断
  local;
  showFill(){
    if(this.user.username == ''){
        let toast = Toast.create({
          message: '用户名不能为空！',
          duration: 1500
        });
        this.navCtrl.present(toast);
    }else{
        let loading = Loading.create({
          content: '正在登录...',
          //duration: 3000,
          dismissOnPageChange: true
        });
        this.navCtrl.present(loading);

        if(this.user.password == '123456'){
          this.local = new Storage(LocalStorage);
          this.local.set("logined",'true');
          this.local.set('password',this.user.password);
          this.local.set('username',this.user.username);
          setTimeout(() => {
            this.user.username = '';
            this.user.password = '';
            loading.dismiss(this.user.username);
            this.navCtrl.push(UserCenter);
          },1000);
        }else{
          let toast = Toast.create({
            message: '用户名或密码错误！',
            duration: 1500
          });
          this.navCtrl.present(toast);
        }

    }
  }

  //点击注册时，跳转
  openRegisterPage(){
    let modal = Modal.create(Register);
    this.navCtrl.present(modal);
  }

}
