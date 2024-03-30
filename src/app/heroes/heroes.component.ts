import { Component, OnInit } from '@angular/core';
import { Heroe } from './../heroe.model';
import { HeroService } from '../services/hero.service';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private heroeService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
     this.heroeService.getHero().subscribe(heroe => this.heroes = heroe);
  }

}
