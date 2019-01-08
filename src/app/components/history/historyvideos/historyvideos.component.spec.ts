import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryvideosComponent } from './historyvideos.component';

describe('HistoryvideosComponent', () => {
  let component: HistoryvideosComponent;
  let fixture: ComponentFixture<HistoryvideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryvideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
