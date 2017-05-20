import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { HomePage } from '../home/home';
import { CProvincenorth  } from '../cProvincenorth/cProvincenorth';


@Component({
  selector: 'page-chaingmai',
  templateUrl: 'chaingmai.html'
})
export class Chaingmai {
list=['Elephant Park'];
list1=['Wat Chedi Luang'];
list2=['The Phae Gate'];
list3=['Anchan Noodle'];
list4=['Klua Khai'];
list5=['Le Grand Lanna'];
list6=['Le Merdian'];
list7=['Holiday Inn'];
list8=['Shangri-La'];
constructor(public navCtrl: NavController) {

  }
  
nav(){
    this.navCtrl.push(HomePage);
  }

  elephant(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  wat(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  thePhae(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  unChun(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  kluaKhai(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  le(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  merdien(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  holiday(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  shang(item){
    this.navCtrl.push(DetailsPage,{
          'value':item
    });
  }

  nextProvinceNorth(){
    this.navCtrl.push(CProvincenorth);
  }



}

