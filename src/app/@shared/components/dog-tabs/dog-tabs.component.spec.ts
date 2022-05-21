import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogTabsComponent } from './dog-tabs.component';

describe('DogTabsComponent', () => {
  let component: DogTabsComponent;
  let fixture: ComponentFixture<DogTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogTabsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
