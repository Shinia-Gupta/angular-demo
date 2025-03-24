import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContainerEgComponent } from './ng-container-eg.component';

describe('NgContainerEgComponent', () => {
  let component: NgContainerEgComponent;
  let fixture: ComponentFixture<NgContainerEgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgContainerEgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgContainerEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
