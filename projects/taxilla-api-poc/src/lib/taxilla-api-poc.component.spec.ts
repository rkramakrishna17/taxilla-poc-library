import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxillaAPIPocComponent } from './taxilla-api-poc.component';

describe('TaxillaAPIPocComponent', () => {
  let component: TaxillaAPIPocComponent;
  let fixture: ComponentFixture<TaxillaAPIPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxillaAPIPocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxillaAPIPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
