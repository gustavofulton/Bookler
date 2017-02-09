import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SellPage } from '../sell/sell';
import { BuyPage } from '../buy/buy';
import { AboutPage } from '../about/about';
import { MessagePage } from '../message/message';
import { ProfilePage } from '../profile/profile';
import { ChoosecolPage } from '../choosecol/choosecol';

import firebase from 'firebase';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  user = firebase.auth().currentUser;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = SellPage;
  tab2Root: any = BuyPage;
  tab3Root: any = MessagePage;
  tab4Root: any = ProfilePage;

  constructor(public nav: NavController) {
    if (this.user!=null) {
      console.log(this.user.uid);
      firebase.database().ref('users/'+this.user.uid).on('value', function(snapshot){
          console.log(snapshot.val().school);
      });
    }
    // console.log(this.nav.length());
    // console.log();
    // this.nav.popToRoot();
  }
}
