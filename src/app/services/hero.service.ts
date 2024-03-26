import { Injectable } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Heroe } from '../heroe.model';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessagesService) {}

  getHero(): Observable<Heroe[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: Feched heroes');
    return heroes;
  }
}
