import { Component } from '@angular/core';
import { NumberService } from '../number.service';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers:[NumberService]
})
export class ChildComponent {
  primeno:any;
  inputno:any = 11;
  returnmessage:any;
constructor(private obj:NumberService){
this.primeno = this.obj.ChkPrime(this.inputno);
console.log(this.primeno)
this.returnmessage = this.primeno ? "It is prime number":"It is not prime number"
}
}
