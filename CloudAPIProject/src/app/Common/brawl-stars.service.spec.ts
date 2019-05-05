import { TestBed } from '@angular/core/testing';

import { BrawlStarsService } from './brawl-stars.service';

describe('BrawlStarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrawlStarsService = TestBed.get(BrawlStarsService);
    expect(service).toBeTruthy();
  });
});
