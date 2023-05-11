import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylingToolComponent } from './styling-tool.component';

describe('StylingToolComponent', () => {
  let component: StylingToolComponent;
  let fixture: ComponentFixture<StylingToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylingToolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylingToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
