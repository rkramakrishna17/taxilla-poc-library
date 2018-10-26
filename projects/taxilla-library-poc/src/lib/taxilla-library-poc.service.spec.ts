import { TestBed, inject } from '@angular/core/testing';

import { TaxillaLibraryPocService } from './taxilla-library-poc.service';

describe('TaxillaLibraryPocService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaxillaLibraryPocService]
    });
  });

  it('should be created', inject([TaxillaLibraryPocService], (service: TaxillaLibraryPocService) => {
    expect(service).toBeTruthy();
  }));
});
