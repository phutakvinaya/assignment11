import { Component } from '@angular/core';
import { StringService } from '../string.service';
@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers:[StringService]
})
export class Child2Component {
  countlenghth:any;
  stringsentences:string="Hello World";
    constructor(private obj:StringService){
      this.countlenghth = this.obj.countcapital(this.stringsentences);
      console.log(this.countlenghth);
    }

}
