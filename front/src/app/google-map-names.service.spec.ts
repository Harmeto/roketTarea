import { TestBed } from '@angular/core/testing';

import { GoogleMapNamesService } from './google-map-names.service';

describe('GoogleMapNamesService', () => {
  let service: GoogleMapNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleMapNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
