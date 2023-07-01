import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorfabricsComponent } from './outdoorfabrics.component';

describe('OutdoorfabricsComponent', () => {
  let component: OutdoorfabricsComponent;
  let fixture: ComponentFixture<OutdoorfabricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutdoorfabricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutdoorfabricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
