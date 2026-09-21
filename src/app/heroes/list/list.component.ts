import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ListComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America'];
  deletedHero: string = '';
  
  deleteHero():void {
    this.deletedHero = this.heroes.pop() || '';
  }
}
