import { Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  addCarStatus = '';
  inputText='';

  constructor(){}

  addCar(){
    this.addCarStatus= 'Машина добавлена!';
  }

  onKeyUp({event}: { event: any }){
    if (event.code === 'Enter')
    this.inputText=event.target.value;
  }

}


