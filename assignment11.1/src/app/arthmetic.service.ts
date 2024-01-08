import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArthmeticService {

  constructor() { }

  add(value1:number,value2:number){
    return value1 + value2 ;
  }
  sub(value1:number,value2:number){
    return value1 - value2;
  }
}
