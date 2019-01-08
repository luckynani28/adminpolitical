import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorygalleryComponent } from './historygallery.component';

describe('HistorygalleryComponent', () => {
  let component: HistorygalleryComponent;
  let fixture: ComponentFixture<HistorygalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorygalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorygalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
