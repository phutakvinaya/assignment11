import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  countcapital(str:any){
    return str.replace(/[^A-Z]/g, "").length;
  }
}
