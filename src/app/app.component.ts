import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
<<<<<<< HEAD
  
=======
>>>>>>> 1c0fc0f0fde925139007733581c7b9565be24775
  title = 'AngularCRUD-App';

  options = {
    BaseAPIUrl: "api",
    Get: "records",
    edit: "records",
    add: "records",
    delete: "records",
    dataTableOptions: {
      Columns: [
        { title: "ID", name: "id", data: "id", format:"number", visible: false },
        { title: "Name", name: "user_name", data: "user_name" , format:"text", visible: true },
        { title: "Description", name: "description", data: "description", format:"text", visible: true  },
        { title: "Amount", name: "amount", data: "amount", format:"amount", visible: true  }
      ]
    },
    events: {
      edited: function () { 
        console.log("Record Edited Callback.");
      },
      added: function () { 
        console.log("Record Added Callback.");
      },
      deleted: function () {
        console.log("Record Deleted Callback.");
      },
    }
  };

  constructor() { }
}
