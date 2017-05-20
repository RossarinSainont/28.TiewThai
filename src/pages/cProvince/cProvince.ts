import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chonburi } from '../chonburi/chonburi';


@Component({
  selector: 'page-cProvince',
  templateUrl: 'cProvince.html'
})
export class CProvince {

  constructor(public navCtrl: NavController) {

  }

 nextChonburi(){
   this.navCtrl.push(Chonburi);
 }

}
