import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouravDasComponent } from './sourav-das.component';

describe('SouravDasComponent', () => {
  let component: SouravDasComponent;
  let fixture: ComponentFixture<SouravDasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouravDasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SouravDasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
