import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CProvincenorth  } from '../cProvincenorth/cProvincenorth';
import { CProvince  } from '../cProvince/cProvince';
import { CProvincewest  } from '../cProvincewest/cProvincewest';
import { CProvincesouth  } from '../cProvincesouth/cProvincesouth';

@Component({
  selector: 'page-bpak',
  templateUrl: 'bpak.html'
})
export class bpakPage {

  constructor(public navCtrl: NavController) {

  }

nextNorth(){
  this.navCtrl.push(CProvincenorth)
}

nextEast(){
  this.navCtrl.push(CProvince)
}

nextWest(){
  this.navCtrl.push(CProvincewest )
}

nextSouth(){
  this.navCtrl.push(CProvincesouth  )
}

}
