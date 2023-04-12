import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedInfoComponent } from './extended-info.component';

describe('ExtendedInfoComponent', () => {
  let component: ExtendedInfoComponent;
  let fixture: ComponentFixture<ExtendedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
