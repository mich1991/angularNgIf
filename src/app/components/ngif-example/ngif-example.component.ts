import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ngif-example',
  templateUrl: './ngif-example.component.html',
  styleUrls: ['./ngif-example.component.scss']
})
export class NgifExampleComponent implements OnInit{
  firstCounter:number = 0
  secondCounter:number = 0
  thirdCounter:number = 0
  firstBool: boolean = false;
  secondBool: boolean = false;
  thirdBool: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.firstBool = true;
    this.secondBool = true;
    this.thirdBool = true;
  }

  byFunction() {
    this.firstCounter++
    console.log('byFunction triggered', this.firstCounter, 'times')
   return this.firstBool
  }

  get byGetter() {
    this.secondCounter++
    console.log('byGetter triggered', this.secondCounter, 'times')
    return this.secondBool
  }

}
