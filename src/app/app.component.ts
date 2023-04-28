import { Component, OnInit } from '@angular/core';
import { POKEMONS  } from './mock-pokemon'
import { Pokemon } from './pokemon';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined


  ngOnInit(){
    console.table(this.pokemonList);
  
    
  }

  

selectPokemon(pokemonId: string){
  const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)


  if(pokemon) {
    console.log(`vous avez demandé ${pokemon.name}`);
    
  }
else{
  console.log('vous avez demander un qui existe pas');
  
}

  
  
  
}


}
