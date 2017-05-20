import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Phuket } from '../phuket/phuket';

@Component({
  selector: 'page-cProvincesouth',
  templateUrl: 'cProvincesouth.html'
})
export class CProvincesouth {

  constructor(public navCtrl: NavController) {

  }

  nextPhuket(){
    this.navCtrl.push(Phuket);
  }

}
