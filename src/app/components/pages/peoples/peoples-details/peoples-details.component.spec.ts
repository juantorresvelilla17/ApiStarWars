import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplesDetailsComponent } from './peoples-details.component';

describe('PeoplesDetailsComponent', () => {
  let component: PeoplesDetailsComponent;
  let fixture: ComponentFixture<PeoplesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeoplesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
