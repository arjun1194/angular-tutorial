import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredBoxComponent } from './colored-box.component';

describe('ColoredBoxComponent', () => {
  let component: ColoredBoxComponent;
  let fixture: ComponentFixture<ColoredBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoredBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoredBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
