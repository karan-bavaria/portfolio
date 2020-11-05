import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data/data.service';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-intro-form',
  templateUrl: './intro-form.component.html',
  styleUrls: ['./intro-form.component.scss'],
})
export class IntroFormComponent implements OnInit {
  @Input() editMode: boolean;

  collapsed: boolean;
  faChevronDown = faChevronDown;
  show: boolean;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.editMode) {
      this.introduction.setValue(
        this.dataService.userData.introductionInfo.introduction
      );
      this.coverLetter.setValue(
        this.dataService.userData.introductionInfo.coverLetter
      );
      this.collapsed = true;
    }
  }

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
    if (this.editMode) {
      this.show = true;
      setTimeout(() => (this.show = false), 3000);
      return;
    }
    this.router.navigate(['/forms', { outlets: { forms: 'workinfo' } }]);
  }

  validateTextInput(input: AbstractControl): Boolean {
    return input.touched && (input.invalid || input.value.trim().length === 0);
  }
}
