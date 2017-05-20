import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chaingmai } from '../chaingmai/chaingmai';

@Component({
  selector: 'page-cProvincenorth',
  templateUrl: 'cProvincenorth.html'
})
export class CProvincenorth {

  constructor(public navCtrl: NavController) {

  }

  nextChiangmai(){
    this.navCtrl.push(Chaingmai);
  }

}
