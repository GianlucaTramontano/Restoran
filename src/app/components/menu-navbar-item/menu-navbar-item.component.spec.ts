import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavbarItemComponent } from './menu-navbar-item.component';

describe('MenuNavbarItemComponent', () => {
  let component: MenuNavbarItemComponent;
  let fixture: ComponentFixture<MenuNavbarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuNavbarItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuNavbarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
