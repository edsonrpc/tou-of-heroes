import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../heroe.model';
import { HeroService } from '../services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.scss']
})
export class HeroesDetailComponent implements OnInit {

  hero!: Heroe;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHeroes(id).subscribe(hero => {
      this.hero = hero;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
