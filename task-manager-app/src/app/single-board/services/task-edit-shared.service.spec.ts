import { TestBed } from '@angular/core/testing';

import { TaskEditSharedService } from './task-edit-shared.service';

describe('TaskEditSharedService', () => {
  let service: TaskEditSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskEditSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
