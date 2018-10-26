import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxillaLibraryPocComponent } from './taxilla-library-poc.component';

describe('TaxillaLibraryPocComponent', () => {
  let component: TaxillaLibraryPocComponent;
  let fixture: ComponentFixture<TaxillaLibraryPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxillaLibraryPocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxillaLibraryPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
