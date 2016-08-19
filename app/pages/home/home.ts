import {
  Component
} from '@angular/core';
import {
  NavController, Toast
} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  public data = {
    'data1': [{
      'pic': 'images/1.jpg',
      'name': '呱呱',
      'leixing': 'iphone 6s',
      'pictrue': 'images/2.jpg',
      'content': '秋风起兮白云飞，草木黄落兮雁南归。兰有秀兮菊有芳，怀佳人兮不能忘。泛楼船兮济汾河，横中流兮扬素波。箫鼓鸣兮发棹歌，欢乐极兮哀情多。',
      'zan': '200',
      'pinlun': '20',
      'date': '1小时前'
    }, {
      'pic': 'images/2.jpg',
      'name': '汪汪',
      'leixing': 'HuaWei P9',
      'pictrue': 'images/3.jpg',
      'content': '白云飞。草木枯黄雁南归。秀美的是兰花呀，芳香的是菊花。思念美人难忘怀。乘坐着楼船行驶在汾河上，划动船桨扬起白色的波浪。吹起箫来打起鼓，欢乐过头哀伤多。年轻的日子早过去，渐渐衰老没奈何。',
      'zan': '200',
      'pinlun': '30',
      'date': '30分钟前'
    }, {
      'pic': 'images/3.jpg',
      'name': '松松',
      'leixing': 'iphone 5s',
      'pictrue': 'images/4.jpg',
      'content': '全诗比兴并用、情景交融，是中国文学史上“悲秋”的名作。这首诗的主题思想，历史上有两种不同的说法，一谓写“乐极哀来，惊心老至”，一谓“此辞有感秋摇落。系念求仙意， ‘怀佳人’句，一篇之骨”（张玉谷《古诗赏析》卷三）。',
      'zan': '200',
      'pinlun': '40',
      'date': '2小时前'
    }],
    'data2': [{
      'pic': 'images/4.jpg',
      'name': '嘻嘻',
      'leixing': 'Meizu metal',
      'pictrue': 'images/5.jpg',
      'content': '郁郁涧底松，离离山上苗。以彼径寸茎，荫此百尺条。世胄蹑高位，英俊沉下僚。地势使之然，由来非一朝。金张藉旧业，七叶珥汉貂。冯公岂不伟，白首不见招。',
      'zan': '200',
      'pinlun': '50',
      'date': '1小时前'
    }, {
      'pic': 'images/5.jpg',
      'name': '哈哈',
      'leixing': 'iphone 4',
      'pictrue': 'images/3.jpg',
      'content': '这首诗写在门阀制度下，有才能的人，因为出身寒微而受到压抑，不管有无才能的世家大族子弟占据要位，造成“上品无寒门，下品无势族”（《晋书刘毅传》）的不平现象。',
      'zan': '200',
      'pinlun': '10',
      'date': '40分钟前'
    }, {
      'pic': 'images/1.jpg',
      'name': '啦啦',
      'leixing': 'iphone 6P',
      'pictrue': 'images/2.jpg',
      'content': '左思（约250～305）字太冲，齐国临淄（今山东淄博）人。西晋著名文学家，其《三都赋》颇被当时称颂，造成“洛阳纸贵”。左思自幼其貌不扬却才华出众。晋武帝时，因妹左棻被选入宫，举家迁居洛阳，任秘书郎。',
      'zan': '200',
      'pinlun': '20',
      'date': '12小时前'
    }],
    'data3': [{
      'pic': 'images/1.jpg',
      'name': '呱呱',
      'leixing': 'iphone 6s',
      'pictrue': 'images/2.jpg',
      'content': '秋风起兮白云飞，草木黄落兮雁南归。兰有秀兮菊有芳，怀佳人兮不能忘。泛楼船兮济汾河，横中流兮扬素波。箫鼓鸣兮发棹歌，欢乐极兮哀情多。',
      'zan': '200',
      'pinlun': '20',
      'date': '1小时前'
    }, {
      'pic': 'images/2.jpg',
      'name': '汪汪',
      'leixing': 'HuaWei P9',
      'pictrue': 'images/3.jpg',
      'content': '白云飞。草木枯黄雁南归。秀美的是兰花呀，芳香的是菊花。思念美人难忘怀。乘坐着楼船行驶在汾河上，划动船桨扬起白色的波浪。吹起箫来打起鼓，欢乐过头哀伤多。年轻的日子早过去，渐渐衰老没奈何。',
      'zan': '200',
      'pinlun': '30',
      'date': '30分钟前'
    }, {
      'pic': 'images/3.jpg',
      'name': '松松',
      'leixing': 'iphone 5s',
      'pictrue': 'images/4.jpg',
      'content': '全诗比兴并用、情景交融，是中国文学史上“悲秋”的名作。这首诗的主题思想，历史上有两种不同的说法，一谓写“乐极哀来，惊心老至”，一谓“此辞有感秋摇落。系念求仙意， ‘怀佳人’句，一篇之骨”（张玉谷《古诗赏析》卷三）。',
      'zan': '200',
      'pinlun': '40',
      'date': '2小时前'
    }]
  };

  constructor(private navCtrl: NavController) {

  }

  public num = 1;
  doRefresh(refresher) {
      console.log('下拉了', refresher);
      setTimeout(() => {
        this.data.data1.splice(0,this.data.data1.length)
        this.num++;
        console.log(this.num);
        if(this.num > 3){
          this.num--;
          let toast = Toast.create({
            message: '暂时没有好友更新！',
            position: 'middle',
            duration: 1500
          })
          this.navCtrl.present(toast);
        }
        this.data.data1 = this.data.data1.concat(this.data['data'+this.num]);
        refresher.complete();
      }, 1000);
    }
    // onPageLoaded(){
    //   console.log("页面初始化的时候!");
    // }
    //
    // onPageWillEnter(){
    //   //在这里可以做页面初始化的一些事情
    //   console.log("页面将要加载的时候!");
    // }
    //
    // onPageDidEnter(){
    //   console.log("页面初始化完成之后!");
    // }
    //
    // onPageWillLeava(){
    //   console.log("离开之后执行!");
    // }
    //
    // onPageWillUnload(){
    //   console.log("DOM移除的时候执行!");
    // }
    // onPageDidUnload(){
    //   console.log("DOM移除执行完成的时候!");
    // }
}
