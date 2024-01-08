import { Component } from '@angular/core';
import { ArthmeticService } from '../arthmetic.service';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers:[ArthmeticService]
})
export class DemoComponent {
  public additionnumber:any;
  public substractionnumber:any;
  constructor(private obj:ArthmeticService){
    this.additionnumber = this.obj.add(2,2);

    this.substractionnumber =this.obj.sub(5,3);
  }
}
