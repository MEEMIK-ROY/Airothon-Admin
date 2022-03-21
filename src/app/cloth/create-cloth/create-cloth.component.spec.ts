import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClothComponent } from './create-cloth.component';

describe('CreateClothComponent', () => {
  let component: CreateClothComponent;
  let fixture: ComponentFixture<CreateClothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClothComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
