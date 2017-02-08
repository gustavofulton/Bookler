import { Component, NgZone } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

import firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  zone: NgZone;


  constructor(platform: Platform) {
    firebase.initializeApp({
      apiKey: "AIzaSyAzOR2Ky-BMBR8GsfyNaqsH8BCaemuu43k",
      authDomain: "bookler-45168.firebaseapp.com",
      databaseURL: "https://bookler-45168.firebaseio.com",
      storageBucket: "bookler-45168.appspot.com",
      messagingSenderId: "1062030417489"
    });


    firebase.auth().onAuthStateChanged( user => {
      if (!user) {
        this.rootPage = LoginPage;
        console.log("There's not a logged in user!");
      }
    });

    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
