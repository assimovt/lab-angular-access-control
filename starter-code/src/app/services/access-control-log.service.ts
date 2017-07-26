import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logs: Array<{person: string, message: string, createdAt: Date}> = [];

  constructor() { }

  getAccessLog() {
    return this.logs;
  }

  addAccessItem(person: string, message: string): number {
    this.logs.push({person, message, createdAt: new Date()});
    console.log('Added log item for person:', person);

    return this.logs.length;
  }
}
