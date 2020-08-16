import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-colored-box',
  templateUrl: './colored-box.component.html',
  styleUrls: ['./colored-box.component.css']
})
export class ColoredBoxComponent implements OnInit {

  @Output() onValueSubmitted: EventEmitter<any> = new EventEmitter<any>();
   myInput = '';
  constructor() { }

  public showValue(): void{
    console.log('child has sent the data');
    this.onValueSubmitted.emit(this.myInput);
  }
  ngOnInit(): void {
  }

}
