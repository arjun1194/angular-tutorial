import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tutorial';

  items = [
    {
      color: 'red',
      text: 'Red',
      value: '',
    },
    {
      color: 'orange',
      text: 'Orange',
      value: '',
    },
    {
      color: 'pink',
      text: 'Yobey',
      value: '',
    }
  ];

  public getValueFromChild(val, index): void {
    alert(`got ${val} from child ${index} `);
    this.items[index].value = val;
  }
}
