import { TestBed, inject } from '@angular/core/testing';

import { RootscopeService } from './rootscope.service';

describe('RootscopeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RootscopeService]
    });
  });

  it('should be created', inject([RootscopeService], (service: RootscopeService) => {
    expect(service).toBeTruthy();
  }));
});
