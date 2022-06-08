import { TestBed } from '@angular/core/testing';

import { TaskApiServiceService } from './task-api-service.service';

describe('TaskApiServiceService', () => {
  let service: TaskApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
