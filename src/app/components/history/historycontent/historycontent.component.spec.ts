import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorycontentComponent } from './historycontent.component';

describe('HistorycontentComponent', () => {
  let component: HistorycontentComponent;
  let fixture: ComponentFixture<HistorycontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorycontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorycontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
