import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelFixComponent } from './tel-fix.component';

describe('TelFixComponent', () => {
  let component: TelFixComponent;
  let fixture: ComponentFixture<TelFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelFixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
