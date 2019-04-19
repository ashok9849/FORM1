import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  form: FormGroup = new FormGroup({
    // $key: new FormControl(null),
    venderName :new FormControl('', Validators.required),
    serverName :new FormControl('', Validators.required),
    companyName :new FormControl('', Validators.required),
    documentNo :new FormControl('', Validators.required),
    dateOfDonetion :new FormControl('', Validators.required),
    receiptNumber :new FormControl('', Validators.required),
    AmountContribute:new FormControl('', Validators.required),
    catagory:new FormControl('', Validators.required), 
    remark:new FormControl('', Validators.required), 
    rate:new FormControl('', Validators.required), 


  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      venderName: '',
      serverName:'',
      companyName:'',
      documentNo:'',
      dateOfDonetion:'',
      receiptNumber:'',
      AmountContribute:'',
      catagory:'',
      remark:'',
      rate:'',
    });
  }

  
}
