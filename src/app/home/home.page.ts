import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isLoading: boolean = false;

  constructor() {
    this.getData();
  }


  getData(){
    this.isLoading = true;

    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then( dados => dados.json() )
    .then(dados => { console.log(dados)})
    .catch( erro => { console.log(erro) })
    .finally( () => { this.isLoading = false; })
  }

}
