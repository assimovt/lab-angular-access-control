import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logs: Array<Object> = [];

  constructor() { }

  getAccessLog() {
    return this.logs;
  }

  addAccessItem(person: string, message: string): number {
    this.logs.push({person, message, createdAt: new Date()});

    return this.logs.length;
  }
}
