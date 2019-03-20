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
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit() {
    this.getHeroes();
  }

}
