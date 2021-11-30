import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../types/backend-errors.interface';

@Component({
  selector: 'app-backend-error',
  templateUrl: './backend-error.component.html',
  styleUrls: ['./backend-error.component.scss'],
})
export class BackendErrorComponent implements OnInit {
  @Input() backendErrorsProps: BackendErrorsInterface;

  errorMessages: string[];

  constructor() { }

  ngOnInit() {
    this.initializationValues();
  }

  initializationValues(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map((name: string) => {
      const messages = this.backendErrorsProps[name];
      return `${messages}`;
    });
  }
}
