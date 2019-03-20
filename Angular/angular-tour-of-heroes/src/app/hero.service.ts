import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

//inject the messages services 
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  /*
    add observable HeroService, to synchoronus the data 
    Send a message when heroes is Fetched from Service
  */
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  constructor(private messageService: MessageService) { } //
}
//[NOTE] Inject the injection: you inject the MessageService to HeroService
//        HeroService injected to HeroesComponent