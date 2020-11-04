import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-intro-form',
  templateUrl: './intro-form.component.html',
  styleUrls: ['./intro-form.component.scss'],
})
export class IntroFormComponent {
  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  introductionMaxLength: number = 80;

  introductionForm = this.fb.group({
    introduction: [
      '',
      [Validators.required, Validators.maxLength(this.introductionMaxLength)],
    ],
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
    this.router.navigate(['/forms', { outlets: { forms: 'workinfo' } }]);
  }

  validateTextInput(input: AbstractControl): Boolean {
    return input.touched && (input.invalid || input.value.trim().length === 0);
  }
}
