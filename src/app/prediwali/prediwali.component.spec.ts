import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrediwaliComponent } from './prediwali.component';

describe('PrediwaliComponent', () => {
  let component: PrediwaliComponent;
  let fixture: ComponentFixture<PrediwaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrediwaliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrediwaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
