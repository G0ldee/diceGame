import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceViewComponent } from './dice-view.component';

describe('DiceViewComponent', () => {
  let component: DiceViewComponent;
  let fixture: ComponentFixture<DiceViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiceViewComponent]
    });
    fixture = TestBed.createComponent(DiceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
