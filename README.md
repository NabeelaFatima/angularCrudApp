Feature List:
1. Get Records Implemented using angular-datatable and in-memory webapi.
    How to use: pass title:'ColumnHeading' that will be shown in table's column heading and data:'ColumnNames', which will consists of Database tables column names; in the column object of the component options. Don't forget to add columns data in data.service file as it contain the Database data which are present in column object of the component options.
2. Add Record Implemented and,
3. Edit Record Implemented.
    How to use: pass visible: true/false for fields which will be hidden in form and will be not-required fields(set all primaryid Database columns as false) in the column object of the component options.
4. Delete Record Implemented.