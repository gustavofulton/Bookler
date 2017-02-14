import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { SellDetailPage } from '../sell-detail/sell-detail';
import { SellCreatePage } from '../sell-create/sell-create';

import firebase from 'firebase';

/*
  Generated class for the Sell page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sell',
  templateUrl: 'sell.html'
})
export class SellPage {
  books: any[];
  user = firebase.auth().currentUser;
  ref = firebase.database().ref('/users').child(this.user.uid).child("sellingBooks");

  constructor(public nav: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.ref.once("value", (snapshot) => {
      // let ref2 = this.ref.child("CSE 231");
      snapshot.forEach((childSnapshot) => {
          console.log(JSON.stringify(childSnapshot.val()));
          // this.books.push({
          //   author: childSnapshot.val().author,
          //   class: childSnapshot.val().class,
          //   edition: childSnapshot.val().edition,
          //   name: childSnapshot.val().name,
          //   price: childSnapshot.val().price
          // });
          return false;
      });
      // this.ref2.on("value", function(snapshot2) {
        // console.log(JSON.stringify(snapshot.val()));
      // });
      // this.books.push(snapshot.val().name);

    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }

  addSellingBook() {
    let addModal = this.modalCtrl.create(SellCreatePage);
    addModal.onDidDismiss(item => {

    })
    addModal.present();
  }


  openItem() {
    this.nav.push(SellDetailPage);
  }

}
