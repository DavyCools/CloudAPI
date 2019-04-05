import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAPIComponent } from './movie-api.component';

describe('MovieAPIComponent', () => {
  let component: MovieAPIComponent;
  let fixture: ComponentFixture<MovieAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
