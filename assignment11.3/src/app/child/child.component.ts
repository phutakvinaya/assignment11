import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers:[NumberService,StringService]
})
export class ChildComponent {
  primeno:any;
  inputno:any = 30;
  returnmessage:any;
  countlenghth:any;
  stringsentences:string="Marvellous Infosystems";
constructor(private obj:NumberService , private obj1:StringService){
  this.primeno = this.obj.ChkPrime(this.inputno);
  console.log(this.primeno)
  this.returnmessage = this.primeno ? "It is prime number":"It is not prime number"

  this.countlenghth = this.obj1.countcapital(this.stringsentences);
  console.log(this.countlenghth);

}
}
