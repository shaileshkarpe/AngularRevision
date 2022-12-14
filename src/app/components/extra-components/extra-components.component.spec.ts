import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraComponentsComponent } from './extra-components.component';

describe('ExtraComponentsComponent', () => {
  let component: ExtraComponentsComponent;
  let fixture: ComponentFixture<ExtraComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
