import { Component } from '@angular/core';
import { EmployeeService } from './shared/employee.service';


export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private service: EmployeeService) { }

  onSubmit() {
    if (this.service.form.valid) {
      console.log(this.service.form);
    }
    else {
      console.log(this.service.form)
    }
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
  
}
