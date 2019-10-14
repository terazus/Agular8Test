import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './heroes/hero';
import { HEROES } from './heroes/mock-heroes';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})

export class HeroService {

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  constructor(private messageService: MessageService) { }
}
