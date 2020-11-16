import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data/data.service';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-intro-form',
  templateUrl: './intro-form.component.html',
  styleUrls: ['./intro-form.component.scss'],
})
export class IntroFormComponent implements OnInit {
  @Input() editMode: boolean;

  faChevronDown = faChevronDown;
  show: boolean;
  collapsed: boolean;
  skipWorkForm: boolean;
  introductionMaxLength: number = 80;

  editorStyle = {
    height: '235px',
    'border-radius': '0.25rem',
    'font-size': '20px',
  };

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {}

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

  ngOnInit(): void {
    this.skipWorkForm = this.dataService.skipWorkForm;
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

  onEditorCreated(quill) {
    quill.root.blur();
  }

  saveChanges() {
    this.dataService.setIntroductionInfo(this.introductionForm.value);
    if (this.editMode) {
      this.showEditSuccessMessage();
      return;
    }
    if (this.skipWorkForm) {
      this.router.navigate(['/portfolio']);
      return;
    }
    this.router.navigate(['/forms', { outlets: { forms: 'workinfo' } }]);
  }

  validateTextInput(input: AbstractControl): Boolean {
    return input.touched && (input.invalid || input.value.trim().length === 0);
  }

  showEditSuccessMessage() {
    this.show = true;
    setTimeout(() => (this.show = false), 3000);
  }
}
