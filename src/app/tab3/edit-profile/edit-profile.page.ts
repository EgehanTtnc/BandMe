import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  form: FormGroup;

  public checkForm = [
    { val: 'Klasik Gitar', isChecked: false },
    { val: 'Elektro Gitar', isChecked: false },
    { val: 'Bas Gitar', isChecked: false },
    { val: 'Akustik Gitar', isChecked: false },
    { val: 'Bateri', isChecked: false },
    { val: 'Vokal', isChecked: false },
    { val: 'Keman', isChecked: false }
  ];

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      surname: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)],
      }),
      age: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)],
      }),
      gender: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      city: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      instrument: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null),
    });
  }

  imagePicked() {
    console.log("Clicked");
  }

}
