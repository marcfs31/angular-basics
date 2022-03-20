import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Input() newPlayer: Player = {
      name: '',
      power: 0
    };
  // @Output() onNewPlayer: EventEmitter<Player> = new EventEmitter();
  
  constructor(private dbzService: DbzService) {}

  add() {
    if(this.newPlayer.name.trim().length === 0) {return;}
    
    console.log(this.newPlayer);
    this.dbzService.addPlayer(this.newPlayer);
    //this.onNewPlayer.emit(this.newPlayer);
    this.newPlayer = {
      name: '',
      power: 0
    }
  }

}
