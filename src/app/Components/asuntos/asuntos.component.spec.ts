import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsuntosComponent } from './asuntos.component';

describe('AsuntosComponent', () => {
  let component: AsuntosComponent;
  let fixture: ComponentFixture<AsuntosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsuntosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
