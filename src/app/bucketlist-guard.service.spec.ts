import { TestBed, inject } from '@angular/core/testing';

import { BucketlistGuardService } from './bucketlist-guard.service';

describe('BucketlistGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BucketlistGuardService]
    });
  });

  it('should ...', inject([BucketlistGuardService], (service: BucketlistGuardService) => {
    expect(service).toBeTruthy();
  }));
});
