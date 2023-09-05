import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage {
  isLoading: boolean = false;
  clientes: any;

  getClientes(){
    this.isLoading = true;
    fetch('http://localhost/api/clientes/listar.php')
    .then(resp => resp.json())
    .then(dados =>{
      this.clientes = dados['clientes'];
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() =>{
      this.isLoading = false;
      console.log('processo finalizado');
    })
  }

  removerCliente(CodCli: any){
    this.isLoading = true;
    fetch('http://localhost/api/clientes/remover.php', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({CodCli: CodCli}),

    })
    .then(resp => resp.json())
    .then(dados =>{
      this.clientes = dados['clientes'];
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() =>{
      this.isLoading = false;
      console.log('processo finalizado');
    })
  }

  

}
