import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.sass']
})
export class ContactusComponent implements OnInit {

  submitted= false;
 
  registerform!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.registerform = this.formBuilder.group(
      {
        FirstName: ['', Validators.required],
        lname: ['', Validators.required],
        Cuntry:['', Validators.required],
  })

}
get f(): { [key: string]: AbstractControl } {
  return this.registerform.controls;
}
onSubmit(){
  this.submitted = true;

  if (this.registerform.invalid) {
    return;
  }
  if (this.registerform.valid) {
    this.router.navigate(['/home']);
}
}
}