import { TestBed, inject } from '@angular/core/testing';

import { TaxillaAPIPocService } from './taxilla-api-poc.service';

describe('TaxillaAPIPocService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaxillaAPIPocService]
    });
  });

  it('should be created', inject([TaxillaAPIPocService], (service: TaxillaAPIPocService) => {
    expect(service).toBeTruthy();
  }));
});
