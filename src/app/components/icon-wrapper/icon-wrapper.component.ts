import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-icon-wrapper',
  templateUrl: './icon-wrapper.component.html',
  styleUrls: ['./icon-wrapper.component.scss']
})
export class IconWrapperComponent implements OnInit, OnChanges {

  @Input() booleanValue!: boolean
  counter: number = 0
  ngOnInit() {
    console.log(this.booleanValue)
    this.counter++
    console.log('onInit triggered ', this.counter, 'times' )
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onChanges triggered ', this.counter, 'times' )
  }
}
