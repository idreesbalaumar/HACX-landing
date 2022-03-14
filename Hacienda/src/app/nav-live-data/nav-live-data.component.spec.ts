import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLiveDataComponent } from './nav-live-data.component';

describe('NavLiveDataComponent', () => {
  let component: NavLiveDataComponent;
  let fixture: ComponentFixture<NavLiveDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavLiveDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLiveDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
