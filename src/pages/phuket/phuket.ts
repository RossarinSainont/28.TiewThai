import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { HomePage } from '../home/home';
import { CProvincesouth  } from '../cProvincesouth/cProvincesouth';

@Component({
  selector: 'page-phuket',
  templateUrl: 'phuket.html'
})
export class Phuket {
list=['Splash Jungle'];
list1=['Big Buddha'];
list2=['Promthep Cape'];
list3=['Bollywood Phuket'];
list4=['The 9th Floor'];
list5=['Blue Elephant'];
list6=['Amatara Wellness'];
list7=['Cape Panwa'];
list8=['Novotel Phuket'];
constructor(public navCtrl: NavController) {

  }
  
  nav(){
    this.navCtrl.push(HomePage);
  }

  splash(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  big(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  promthep(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  bollywood(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  th9(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  blue(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  amatara(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  cape(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  novotel(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  nextSouth(){
    this.navCtrl.push(CProvincesouth);
  }


}

