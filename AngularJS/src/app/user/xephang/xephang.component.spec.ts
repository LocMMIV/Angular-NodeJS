import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XephangComponent } from './xephang.component';

describe('XephangComponent', () => {
  let component: XephangComponent;
  let fixture: ComponentFixture<XephangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XephangComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XephangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
