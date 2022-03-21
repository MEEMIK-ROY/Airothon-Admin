import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllClothComponent } from './all-cloth.component';

describe('AllClothComponent', () => {
  let component: AllClothComponent;
  let fixture: ComponentFixture<AllClothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllClothComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllClothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
