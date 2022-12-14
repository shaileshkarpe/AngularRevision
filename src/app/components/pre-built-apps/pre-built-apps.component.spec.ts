import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreBuiltAppsComponent } from './pre-built-apps.component';

describe('PreBuiltAppsComponent', () => {
  let component: PreBuiltAppsComponent;
  let fixture: ComponentFixture<PreBuiltAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreBuiltAppsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreBuiltAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
