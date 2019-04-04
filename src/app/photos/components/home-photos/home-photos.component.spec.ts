import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePhotosComponent } from './home-photos.component';

describe('HomePhotosComponent', () => {
  let component: HomePhotosComponent;
  let fixture: ComponentFixture<HomePhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
