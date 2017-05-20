import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { Chonburi } from '../pages/chonburi/chonburi';
import { Chaingmai } from '../pages/chaingmai/chaingmai';
import { Phuket } from '../pages/phuket/phuket';
import { Alogo  } from '../pages/alogo/alogo';
import { CProvince  } from '../pages/cProvince/cProvince';
import { CProvincesouth  } from '../pages/cProvincesouth/cProvincesouth';
import { CProvincenorth  } from '../pages/cProvincenorth/cProvincenorth';
import { CProvincewest  } from '../pages/cProvincewest/cProvincewest';
import { bpakPage } from '../pages/bpak/bpak';
import { TabsPage } from '../pages/tabs/tabs';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage  ;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  } 
}


import {HostListener, Directive} from '@angular/core';
@Directive({
    selector: '[elastic]'
})
export class Elastic {
    @HostListener('input',['$event.target'])
    onInput(nativeElement: any): void {
        nativeElement.style.height = nativeElement.scrollHeight + "px";
    }
}