import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  cards: any;
  category: string = 'genel'

  constructor(private navCtrl: NavController) {
    this.cards = new Array(10)
  }

}
