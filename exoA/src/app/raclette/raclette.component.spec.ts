import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacletteComponent } from './raclette.component';

describe('RacletteComponent', () => {
  let component: RacletteComponent;
  let fixture: ComponentFixture<RacletteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RacletteComponent]
    });
    fixture = TestBed.createComponent(RacletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
