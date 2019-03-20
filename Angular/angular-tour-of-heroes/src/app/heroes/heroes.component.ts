import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  
  //Handle click event on view
  selectedHero: Hero;
  onSelect(hero : Hero){
    this.selectedHero = hero; 
  }

  //variable to retrieve the list of hero 
  heroes: Hero[];
  constructor(private heroService: HeroService) { }
  
  //function to retrieve the heroes from services
  getHeroes(): void {
    //HeroService.getHeroes() is ASynchoronous operation
    //it return a Observable because HttpClient.get() returns an Observable.
    
    //this.heroes = this.heroService.getHeroes(); 


    //this version can load page before the heroes load from Services - Asynchoronus
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);

    

  }

  ngOnInit() {
    this.getHeroes();
  }

}
