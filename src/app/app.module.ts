import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { BirthdayService } from '../services/birthday.service';
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




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    Chonburi,
    Chaingmai,
    Phuket,
    Alogo,
    CProvince,
    CProvincesouth,
    CProvincenorth,
    CProvincewest,
    bpakPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    Chonburi,
    Chaingmai,
    Phuket,
    Alogo,
    CProvince,
    CProvincesouth,
    CProvincenorth,
    CProvincewest,
    bpakPage,
    TabsPage
  ],
  providers: [
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}, BirthdayService]}
    )
export class AppModule {}
