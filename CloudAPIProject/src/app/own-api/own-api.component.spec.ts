import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnAPIComponent } from './own-api.component';

describe('OwnAPIComponent', () => {
  let component: OwnAPIComponent;
  let fixture: ComponentFixture<OwnAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
