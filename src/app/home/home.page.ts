import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  peso: string;
  altura: string;
  resImc: number;
  resImcArred: string;
  sexo: string;
  erro: string;
  constructor() {}
  inserir(){
    if(this.sexo === 'm'|| this.sexo === 'M'){
      this.resImc= (72.7 * parseFloat(this.altura)) - 50;
      this.resImcArred = this.resImc.toFixed(2);
    }else if(this.sexo === 'f'|| this.sexo === 'F'){
      this.resImc= ((62.1 * parseFloat(this.altura)) - 44.7);
      this.resImcArred = this.resImc.toFixed(2);
    }else{
      this.erro='Você deve escolher entre "M" para Masculino ou "F" para Feminino';
      return;
    }
  }

}
