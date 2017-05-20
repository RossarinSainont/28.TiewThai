import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { HomePage } from '../home/home';
import { BirthdayService } from '../../services/birthday.service';
import { CProvince  } from '../cProvince/cProvince';


@Component({
  selector: 'page-chonburi',
  templateUrl: 'chonburi.html'
})
export class Chonburi {
list=['Jontien Beach'];
list1=['Cartoon Network'];
list2=['Walking Street'];
list3=['The Glass House'];
list4=['In A Good Mood'];
list5=['Sea Salt'];
list6=['Hilton Pattaya'];
list7=['Chon Inter'];
list8=['Bang Saen'];
constructor(public navCtrl: NavController) {

  }
  
nav(){
    this.navCtrl.push(HomePage);
  }

  jomTien(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  cartoonNetwork(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  walkingStreet(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

theGlassHouse(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  inAGoodMood(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }
  
seaSalt(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  hilton(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  chonInter(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

   bangsaen(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  nextEast(){
    this.navCtrl.push(CProvince);
  }
  

}

