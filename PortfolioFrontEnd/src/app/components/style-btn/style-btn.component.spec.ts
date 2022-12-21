import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleBtnComponent } from './style-btn.component';

describe('StyleBtnComponent', () => {
  let component: StyleBtnComponent;
  let fixture: ComponentFixture<StyleBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
