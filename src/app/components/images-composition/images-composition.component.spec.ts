import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesCompositionComponent } from './images-composition.component';

describe('ImagesCompositionComponent', () => {
  let component: ImagesCompositionComponent;
  let fixture: ComponentFixture<ImagesCompositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesCompositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
