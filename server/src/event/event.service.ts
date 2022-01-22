import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Event } from '@The-Iron-Marble-Company/model';

@Injectable()
export class EventService {
  constructor(private eventEmitter: EventEmitter2) {}

  emit(event: Event): void {
    this.eventEmitter.emit(event.id, event);
  }
}
