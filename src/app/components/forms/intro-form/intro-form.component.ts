import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-intro-form',
  templateUrl: './intro-form.component.html',
  styleUrls: ['./intro-form.component.scss'],
})
export class IntroFormComponent {
  constructor(private fb: FormBuilder, private dataService: DataService) {}

  introductionForm = this.fb.group({
    introduction: ['', [Validators.required, Validators.maxLength(100)]],
    coverLetter: ['', Validators.required],
  });

  get introduction() {
    return this.introductionForm.get('introduction');
  }

  get coverLetter() {
    return this.introductionForm.get('coverLetter');
  }

  saveChanges() {
    this.dataService.setIntroductionInfo(this.introductionForm.value);
  }

  validateTextInput(input: AbstractControl): Boolean {
    return input.touched && (input.invalid || input.value.trim().length === 0);
  }
}
