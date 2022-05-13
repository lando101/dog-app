import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDogsComponent } from './search-dogs.component';

describe('SearchDogsComponent', () => {
  let component: SearchDogsComponent;
  let fixture: ComponentFixture<SearchDogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchDogsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
