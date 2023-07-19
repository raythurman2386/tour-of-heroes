import { TestBed } from '@angular/core/testing';
import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a message to the messages array', () => {
    const message = 'Test message';
    service.add(message);
    expect(service.messages).toContain(message);
  });

  it('should clear the messages array', () => {
    service.messages = ['Message 1', 'Message 2', 'Message 3'];
    service.clear();
    expect(service.messages.length).toBe(0);
  });
});
