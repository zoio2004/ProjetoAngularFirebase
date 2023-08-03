import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    this.getData();
  }

  getData(){
    fetch('http://localhost/api/usuario/listar-todos')
    // .then(T => T.json())
    .then(console.log)
  }

}
