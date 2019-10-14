import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageService = TestBed.get(MessageService);
    expect(service).toBeTruthy();
  });

  it('should be add messages "Hello World"', () => {
    const service: MessageService = TestBed.get(MessageService);
    service.add("Hello World");
    expect(service.messages[0]).toEqual("Hello World")
  });

  it('should clear message "Hello World"', () => {
    const service: MessageService = TestBed.get(MessageService);
    service.add("Hello World");
    service.clear();
    expect(service.messages).toEqual([]);
  });


});
