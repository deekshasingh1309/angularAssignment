import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-input-user',
  templateUrl: './input-user.component.html',
  styleUrls: ['./input-user.component.css']
})
export class InputUserComponent implements OnInit {
  registered = false;
  submitted = false;
  userForm: FormGroup;
  public users: Array<Object>;


  constructor(private formBuilder: FormBuilder, private ServerService: ServerService) { }

  invalidFirstName() {
    return (this.submitted && this.userForm.controls.first_name.errors != null);
  }

  invalidLastName() {
    return (this.submitted && this.userForm.controls.last_name.errors != null);
  }

  invalidGender(){
    return (this.submitted && this.userForm.controls.gender.errors != null);
  }

  invalidAddress() {
    return (this.submitted && this.userForm.controls.address.errors != null);
  }

  invalidCity() {
    return (this.submitted && this.userForm.controls.city.errors != null);
  }

  invalidState() {
    return (this.submitted && this.userForm.controls.state.errors != null);
  }


  ngOnInit() {
    this.userForm = this.formBuilder.group({
      first_name: ['', [Validators.required, Validators.pattern('^[A-Z][a-z]*$')]],
      last_name: ['', [Validators.required, Validators.pattern('^[A-Z][a-z]*$')]],
      address: ['', [Validators.required, Validators.pattern('^[0-9a-zA-Z]+$')]],
      city: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$')]],
      state: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$')]],
      gender: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    else {
      this.registered = true;
      const { first_name, last_name, address, city, state, gender } = this.userForm.value
      const formData = {first_name, last_name, address, city, state, gender }
      this.ServerService.postRequest(formData).subscribe((data) => {
        alert("User added successfully")
        console.log(data)
      })
    }

  }
}
