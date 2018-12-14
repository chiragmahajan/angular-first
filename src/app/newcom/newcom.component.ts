import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcom',
  template: `<div>
  <h1 class="success"> Hello {{name}}</h1>
  <h2>{{3*3}}</h2>
  <h2>{{name.length}}</h2>
  <h2 [ngClass]="messageclasses">{{name.toUpperCase()}}</h2>
  <h2 [style.color]="hasError? 'yellow' : 'blue' ">"Welcome" + {{hellouser()}}</h2>
  <h2 [class.fail]="hasError">{{port}}</h2>
  <input [id]="myid"  type="text" value="chirag">
  <input [disabled]="isDisabled" [id]="myid" type="text" value="chirag">
  </div>
  `,
  styles: [`
             .success{ color: green; }
             .fail{ color:red;}
             .special{ font-style:italic;}
         `]
})
export class NewcomComponent implements OnInit {

  constructor() { }
  public name = "chirag"
  public myid = "testId"
  public hasError=true
  public isDisabled= true
  public isSpecial = true
  public messageclasses ={
    "success":!this.hasError,
    "fail": this.hasError,
    "special":this.isSpecial

  }
  public port = window.location.href
  ngOnInit() {
  }
  hellouser(){
    return this.name
  }

}
