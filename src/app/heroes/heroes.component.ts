import { Component, OnInit } from '@angular/core';
import { Heroe } from './../heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroe: Heroe = {
    id: 1,
    name: 'Wolverine'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
