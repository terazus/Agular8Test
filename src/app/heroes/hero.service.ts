import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from '../messages/message.service';


@Injectable({
  providedIn: 'root'
})

export class HeroService {

  getHeroes(): Observable<Hero[]> {
    this.messageService.clear();
    this.messageService.add('HeroService: fetched heroes');
    for (let hero in HEROES){
      this.messageService.add(HEROES[hero].name)
    }
    return of(HEROES);
  }

  constructor(private messageService: MessageService) { }
}
