import { Component, Input } from '@angular/core';
import { Heroe } from '../heroe.model';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.scss']
})
export class HeroesDetailComponent {

  @Input() hero?: Heroe;

}
