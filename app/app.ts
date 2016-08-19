import {Component} from '@angular/core';
import {Platform, ionicBootstrap, Alert} from 'ionic-angular';
import {StatusBar, LocalNotifications, ImagePicker, Device, Camera, BarcodeScanner} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  public page = [
    { icon: 'cloud', container: '我的天气', id: '1' },
    { icon: 'qr-scanner', container: '扫描二维码', id: '2' },
    { icon: 'images', container: '我的相册', id: '3' },
    { icon: 'briefcase', container: '我的钱包', id: '4' },
    { icon: 'compass', container: '我的位置', id: '5' },
    { icon: 'clipboard', container: '设备信息', id: '6' },
    { icon: 'camera', container: '拍照', id: '7'}
  ]

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      //本地推送功能
      LocalNotifications.schedule({
        text: "您的朋友刚刚发布了一条新的消息，赶快去点赞吧！",
        at: new Date(new Date().getTime() + 3000),
        sound: null
      });
    });
  }
  //点击调用cordva
  clickPages(event, p) {
    console.log(p.id);
    switch (p.id) {
      case '1':
        break;
      case '2':
        BarcodeScanner.scan().then((barcodeData) => {
            // Success! Barcode data is here
        }, (err) => {
            // An error occurred
        });
        break;
      case '3':
        let options = {
          width: 50,
          height: 50,
          quality: 100
        };
        ImagePicker.getPictures(options).then((results) => {
          for (var i = 0; i < results.length; i++) {
            console.log('Image URI: ' + results[i]);
          }
        }, (err) => { });
        break;
      case '5':
        break;
      case '6':
        alert(Device.device.uuid);
        break;
      case '7':
        Camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
          let base64Image = 'data:image/jpeg;base64,' + imageData;
          }, (err) => {
          // Handle error
        });
      break;
    }
  }

}


ionicBootstrap(MyApp);
