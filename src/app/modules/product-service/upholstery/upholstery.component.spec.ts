import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpholsteryComponent } from './upholstery.component';

describe('UpholsteryComponent', () => {
  let component: UpholsteryComponent;
  let fixture: ComponentFixture<UpholsteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpholsteryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpholsteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
