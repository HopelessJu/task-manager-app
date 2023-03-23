import { TestBed } from '@angular/core/testing';

import { SingleBoardService } from './single-board.service';

describe('SingleBoardService', () => {
  let service: SingleBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
