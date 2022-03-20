import { Component } from '@angular/core';
import { Player } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  newPlayer: Player = {
    name: '',
    power: 0
  }

  addNewPlayer(event: Player) {
    //this.players.push(event);
  }
  // add() {
  //   console.log(this.newPlayer);
  //   this.players.push(this.newPlayer);
  //   this.newPlayer = {
  //     name: '',
  //     power: 0
  //   }
  // }
  constructor() {
  }
}
