import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleDetailsComponent } from './title-details.component';

describe('TitleDetailsComponent', () => {
  let component: TitleDetailsComponent;
  let fixture: ComponentFixture<TitleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
