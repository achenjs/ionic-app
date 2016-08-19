import {Component} from '@angular/core';
import {NavController, Alert} from 'ionic-angular';

import {AboutInfo} from '../about/aboutInfo';

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {

  public contacts = [
    {"contactid":"images/1.jpg","contactname":"张三","contactphone":"15111220001"},
    {"contactid":"images/2.jpg","contactname":"李四","contactphone":"15111220002"},
    {"contactid":"images/3.jpg","contactname":"王五","contactphone":"15111220003"},
    {"contactid":"images/4.jpg","contactname":"常六","contactphone":"15111220004"},
    {"contactid":"images/5.jpg","contactname":"朱七","contactphone":"15111220005"},
    {"contactid":"images/1.jpg","contactname":"张三","contactphone":"15111220001"},
    {"contactid":"images/2.jpg","contactname":"李四","contactphone":"15111220002"},
    {"contactid":"images/3.jpg","contactname":"王五","contactphone":"15111220003"},
    {"contactid":"images/4.jpg","contactname":"常六","contactphone":"15111220004"},
    {"contactid":"images/5.jpg","contactname":"朱七","contactphone":"15111220005"}
  ]

  constructor(private navCtrl: NavController) {

  }

  itemClick(ev,contact){
      //console.log(ev);console.log(contact);

      //在点击的时候，加载详细的信息页面
      this.navCtrl.push(AboutInfo, {item: contact});
  }

  //删除
  removeContent(contact){
    let alert = Alert.create({
      title: '确定要移除吗？',
      buttons: [
        {
          text: '确定',
          handler: () => {
            for(var i=0; i<this.contacts.length; i++){
              if(this.contacts[i] == contact){
                this.contacts.splice(i,1);
                break;
              }
            }
          }
        },
        {
          text: '取消',
          handler: () => {
            console.log("取消");
          }
        }
      ]
    });
    this.navCtrl.present(alert);
  }

  //置顶
  zhiding(contact){
    let alert = Alert.create({
      title: '确定要将此联系人置顶吗？',
      buttons: [
        {
          text: '确定',
          handler: () => {
            for(var i=0; i<this.contacts.length; i++){
              if(this.contacts[i] == contact){
                this.contacts.splice(i,1);
                this.contacts.unshift(contact);
                break;
              }
            }
          }
        },
        {
          text: '取消',
          handler: () => {
            console.log("取消");
          }
        }
      ]
    });
    this.navCtrl.present(alert);
  }

  saveItem(item){
    console.log(item);
  }


}
