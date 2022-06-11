import { Component, OnInit, Input, ContentChild, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms'

@Component({
  selector: 'app-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string;
  @Input() errorMessage: string;
  @Input() showTip: boolean = true;
  @Input() loading: boolean = false;
  @Input() customError: string;

  input: NgModel | FormControlName;
  isCustomError: boolean = false;

  @ContentChild(NgModel) model: NgModel
  @ContentChild(FormControlName) control: FormControlName

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.input = this.model || this.control
    if (this.input === undefined)
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou formControlName');
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }
}
