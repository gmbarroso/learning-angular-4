import { TestBed, inject } from '@angular/core/testing';

import { RoteiristasService } from './roteiristas.service';

describe('RoteiristasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoteiristasService]
    });
  });

  it('should be created', inject([RoteiristasService], (service: RoteiristasService) => {
    expect(service).toBeTruthy();
  }));
});
