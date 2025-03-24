import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateEgComponent } from './ng-template-eg.component';

describe('NgTemplateEgComponent', () => {
  let component: NgTemplateEgComponent;
  let fixture: ComponentFixture<NgTemplateEgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTemplateEgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTemplateEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
