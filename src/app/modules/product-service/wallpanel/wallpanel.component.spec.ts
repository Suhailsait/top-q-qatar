import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallpanelComponent } from './wallpanel.component';

describe('WallpanelComponent', () => {
  let component: WallpanelComponent;
  let fixture: ComponentFixture<WallpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WallpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
