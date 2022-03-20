import { Component, Input } from '@angular/core';
import { Player } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  // @Input('data') players: Player[] = [];
  get players() {
    return this.dbzService.players;
  }

  constructor( private dbzService: DbzService ) {}
}
