import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data/data.service';
import { slideInAnimation } from '../common/animations/animations';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  animations: [slideInAnimation],
})
export class FormsComponent implements OnInit {
  constructor(public dataService: DataService, private route: Router) {}

  onPersonalForm: boolean = true;
  onIntroForm: boolean = false;
  onWorkForm: boolean = false;
  skipWorkForm: boolean = false;

  ngOnInit(): void {
    this.updateStepViewer();
    this.updateStepCount();
  }

  updateStepCount() {
    this.dataService.skipWorkFormObservable.subscribe(
      (skipWorkForm: boolean) => {
        this.skipWorkForm = skipWorkForm;
      }
    );
  }

  updateStepViewer() {
    this.route.events.subscribe((events) => {
      if (this.route.url === '/forms') {
        this.onPersonalForm = true;
      }
      if (this.route.url === '/forms/(forms:intro)') {
        this.onIntroForm = true;
        this.onPersonalForm = false;
      }
      if (this.route.url === '/forms/(forms:workinfo)') {
        this.onWorkForm = true;
        this.onIntroForm = false;
        this.onPersonalForm = false;
      }
    });
  }
}
