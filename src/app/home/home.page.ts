import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
idade: number;
msg: string;

  constructor() {}

  verificar(){
    if(this.idade < 4.9 ){
      this.msg = 'Não há categoria';
    }else if(this.idade >= 5 && this.idade < 7.9){
      this.msg = 'Infantil A';
    }else if(this.idade >= 8 && this.idade < 10.9){
      this.msg = 'Infantil B';
    }else if(this.idade >= 11 && this.idade < 13.9){
      this.msg = 'Juvenil A';
    }else if(this.idade >= 14 && this.idade < 17.9){
      this.msg = 'Juvenil B';
    }else{
      this.msg = 'Sênior';
    }
  }
}
