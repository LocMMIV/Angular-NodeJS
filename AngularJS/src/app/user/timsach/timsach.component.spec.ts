import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimsachComponent } from './timsach.component';

describe('TimsachComponent', () => {
  let component: TimsachComponent;
  let fixture: ComponentFixture<TimsachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimsachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimsachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
