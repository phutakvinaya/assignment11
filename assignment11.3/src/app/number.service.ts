import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }
  ChkPrime(no:number) : boolean{
    if(no % 2 === 0){
     return false;
    }else{
     return true;
    }
   }
}
