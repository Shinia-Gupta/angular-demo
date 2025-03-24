import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForAndSwitchComponent } from './for-and-switch.component';

describe('ForAndSwitchComponent', () => {
  let component: ForAndSwitchComponent;
  let fixture: ComponentFixture<ForAndSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForAndSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForAndSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
