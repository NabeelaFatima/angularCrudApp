import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {

    let records = [
<<<<<<< HEAD
      { id: 1, user_name: 'User 1', description: 'First User', amount: 1000 },
      { id: 2, user_name: 'User 2', description: 'Second User', amount: 2000 },
      { id: 3, user_name: 'User 3', description: 'Third User', amount: 3000 },
      { id: 4, user_name: 'User 4', description: 'Fourth User', amount: 4000 },
      { id: 5, user_name: 'User 5', description: 'Fifth User', amount: 5000 },
      { id: 6, user_name: 'User 6', description: 'Sixth User', amount: 6000 },
      { id: 7, user_name: 'User 7', description: 'Seventh User', amount: 7000 },
      { id: 8, user_name: 'User 8', description: 'Eighth User', amount: 8000 },
      { id: 9, user_name: 'User 9', description: 'Nineth User', amount: 9000 },
      { id: 10, user_name: 'User 10', description: 'Tenth User', amount: 10000 },
    ];

    return { records };
    
=======
      { id: 1, user_name: 'User 1', description: 'First User.', amount: 1000 },
      { id: 2, user_name: 'User 2', description: 'Second User.', amount: 2000 },
      { id: 3, user_name: 'User 3', description: 'Third User.', amount: 3000 },
      { id: 4, user_name: 'User 4', description: 'Fourth User.', amount: 4000 }
    ];

    return { records };

>>>>>>> 1c0fc0f0fde925139007733581c7b9565be24775
  }
}
