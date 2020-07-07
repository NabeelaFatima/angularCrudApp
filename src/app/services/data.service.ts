import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {

    let records = [
      { id: 1, user_name: 'User 1', description: 'First User.', amount: 1000 },
      { id: 2, user_name: 'User 2', description: 'Second User.', amount: 2000 },
      { id: 3, user_name: 'User 3', description: 'Third User.', amount: 3000 },
      { id: 4, user_name: 'User 4', description: 'Fourth User.', amount: 4000 }
    ];

    return { records };

  }
}
