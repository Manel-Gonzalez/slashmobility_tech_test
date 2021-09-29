import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  /*
  * Creates an insance of formBuilder
  */
  constructor(private formBuilder: FormBuilder) { }

  /*
  * Initialize the formBuilder for the registerForm, incluiding: username, email, gender and bio.
  */
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender:'',
      bio:''
    });
  }

  /*
  * Easily returns the controls of the registerForm
  * @returns registerForm controls
  */
  get f() { return this.registerForm.controls; };

  /*
  * Gets the values of the registerForm, and print them in an alert message only if they are valid.
  * It is applied when clicking on the submit form button
  */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }
}
