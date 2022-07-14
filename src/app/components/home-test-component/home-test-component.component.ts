import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-home-test-component',
  templateUrl: './home-test-component.component.html',
  styleUrls: ['./home-test-component.component.scss']
})
export class HomeTestComponentComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
}

  ngOnInit(): void {
  }

}
