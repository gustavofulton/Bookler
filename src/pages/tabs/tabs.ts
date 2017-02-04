import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SellPage } from '../sell/sell';
import { BuyPage } from '../buy/buy';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = SellPage;
  tab2Root: any = BuyPage;
  tab3Root: any = ContactPage;

  constructor(public nav: NavController) {
    // console.log(this.nav.length());
    // this.nav.popToRoot();
  }
}
