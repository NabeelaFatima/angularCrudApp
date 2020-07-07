import { Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { Subject } from 'rxjs';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { DataTableDirective } from 'angular-datatables';

import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
<<<<<<< HEAD
  styleUrls: ['./datatable.component.css'],
=======
  styleUrls: ['./datatable.component.css']
>>>>>>> 1c0fc0f0fde925139007733581c7b9565be24775
})
export class DatatableComponent implements OnInit, OnDestroy {

  records: any[] = [];
  columns: any[] = [];
  modalLabel: string = "Add";

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  crudForm: FormGroup;
  @Input('options') options = {
    BaseAPIUrl: "",
    Get: "",
    edit: "",
    add: "",
    delete: "",
    dataTableOptions: {
      Columns: []
    },
    events: {
      edited: function () { },
      added: function () { },
      deleted: function () { },
    }
  };

  constructor(
    private crudService: CrudService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.columns = this.options.dataTableOptions.Columns;
    this.createForm();
    this.crudService.setBaseURL(this.options.BaseAPIUrl, this.options.Get, this.options.add, this.options.edit, this.options.delete);

    //Set Default dtOptions for datatable
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      responsive: true,
      dom: 'Bfrtip',
<<<<<<< HEAD
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td:last-child', row).find('button.edit').unbind('click');
        $('td:last-child', row).find('button.edit').on('click', () => {
          self.modalLabel = "Edit";
          console.log("Edit button clicked");
          self.setFormData(data);
        });
        $('td:last-child', row).find('button.delete').unbind('click');
        $('td:last-child', row).find('button.delete').on('click', () => {
          console.log("Delete button clicked");
          self.deleteRecord(data["id"]);
=======
      rowCallback: (row: Node, item: any, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td', row).unbind('click');
        $('td', row).find('button.edit').bind('click', () => {
          self.modalLabel = "Edit";
          console.log("Edit button clicked");
          self.setFormData(item);
        });
        $('td', row).find('button.delete').bind('click', () => {
          console.log("Delete button clicked");
          self.deleteRecord(item.id);
>>>>>>> 1c0fc0f0fde925139007733581c7b9565be24775
        });
        return row;
      }
    };

    //Get Records
    this.crudService.getRecords().subscribe((res: any) => {
      if (res.data) {
        if (res.status == "success") {
          this.records = res.data;
        }
        else {
          console.log("Data Not found!");
          return;
        }
      }
      else {
        this.records = res;
      }
      this.dtOptions.data = this.records;

      //Load columns in dtoptions and add extra Action column
      this.dtOptions.columns = this.columns;
      this.dtOptions.columns.push({
        title: "Actions",
        data: "",
        render: function (data: any, type: any, row: any) {
          return `<div class="d-flex justify-content-around"> 
                <button type="button" class="btn btn-primary edit mr-1" 
                  data-toggle="modal" data-target="#addEditModal">
                  Edit
                </button>
                <button type="button" class="btn btn-primary delete" >
                  Delete
                </button>
              </div>`
        },
      });

      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    })
  }

  createForm(): void {
    //Make form using columns
    let group = {}
    this.columns.forEach((ele) => {
      group[ele.data] = new FormControl((ele.visible == false) ? null : '', (ele.visible == false) ? null : Validators.required);
    })
    this.crudForm = this.formBuilder.group(group);
  }

  resetDashbord(): void {
    this.crudService.getRecords().subscribe((res: any) => {
      if (res.data) {
        if (res.status == "success") {
          this.records = res.data;
        }
        else {
          console.log("Data Not found!");
          return;
        }
      }
      else {
        this.records = res;
      }
      //Rerender the table
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        this.dtOptions.data = this.records;
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      });

    })
  }

  emptyFormData(): void {
    this.columns.forEach((ele) => {
      this.crudForm.patchValue({
        [ele.data]: null
      });
    })
  }

  setFormData(item: any): void {
    this.columns.forEach((ele) => {
      this.crudForm.patchValue({
        [ele.data]: item[ele.data]
      });
    })
  }

  submit(): void {
    if (this.crudForm.value.id)
      this.updateRecord(this.crudForm.value);
    else
      this.createRecord(this.crudForm.value);
    (<any>$('#addEditModal')).modal('hide');
  }

  deleteRecord(Id): void {
    this.crudService.deleteRecord(<number>Id).subscribe();
    this.options.events.deleted();
    this.resetDashbord();
  }


  updateRecord(data): void {
    let dataToSend = {};
    this.columns.forEach((item) => {
      dataToSend[item.data] = (item.format === "number") ? Number(data[item.data]) : data[item.data]
    });
    this.crudService.updateRecord(dataToSend).subscribe((res) => {
      this.options.events.edited();
      this.resetDashbord();
    });
  }

  createRecord(data): void {
    this.crudService.createRecord(data).subscribe((res) => {
      this.options.events.added();
      this.resetDashbord();
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
