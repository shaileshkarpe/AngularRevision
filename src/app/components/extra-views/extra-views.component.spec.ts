import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraViewsComponent } from './extra-views.component';

describe('ExtraViewsComponent', () => {
  let component: ExtraViewsComponent;
  let fixture: ComponentFixture<ExtraViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraViewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
