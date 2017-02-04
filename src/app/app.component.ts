import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

import firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  zone: NgZone;

  constructor(platform: Platform) {
    firebase.initializeApp({
      apiKey: "AIzaSyAzOR2Ky-BMBR8GsfyNaqsH8BCaemuu43k",
      authDomain: "bookler-45168.firebaseapp.com",
      databaseURL: "https://bookler-45168.firebaseio.com",
      storageBucket: "bookler-45168.appspot.com",
      messagingSenderId: "1062030417489"
    });

    platform.ready().then(() => {
      this.zone = new NgZone({});
      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        this.zone.run( () => {
          if (!user) {
            this.rootPage = LoginPage;
            unsubscribe();
          } else {
            this.rootPage = TabsPage;
            unsubscribe();
          }
        });
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
