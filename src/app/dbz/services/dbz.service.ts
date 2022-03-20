import { Injectable } from "@angular/core";
import { Player } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
    private _players: Player[] = [{name: 'Goku', power: 9000}, {name: 'Vegeta', power: 7500}]

    get players(): Player[] {
      return [...this._players]; 
    };

    constructor() {
    }

    addPlayer(player: Player) {
      this._players.push(player);
    }
}