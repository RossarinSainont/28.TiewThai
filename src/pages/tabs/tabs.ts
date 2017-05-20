import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { bpakPage } from '../bpak/bpak';
import { HomePage } from '../home/home';

@Component({
  selector: 'alogo-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

   bpakPage =bpakPage;
  homePage=HomePage;



}
