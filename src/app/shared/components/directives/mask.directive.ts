import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';

import {
  NG_VALUE_ACCESSOR, ControlValueAccessor
} from '@angular/forms';

@Directive({
  selector: '[inputMask]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MaskDirective,
    multi: true
  }]
})
export class MaskDirective implements ControlValueAccessor {

  onTouched: any;
  onChange: any;

  @Input() inputMask: string;
  @Output() retornoMask = new EventEmitter();

  constructor() { }

  writeValue(value: any): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
    var valor = $event.target.value.replace(/\D/g, '');
    var pad = this.inputMask.replace(/\D/g, '').replace(/9/g, '_');
    var valorMask = valor + pad.substring(0, pad.length - valor.length);
 
    if ($event.keyCode === 8) {
      this.onChange(valor);
      return;
    }
 
    if (valor.length <= pad.length) {
      this.onChange(valor);
    }
 
    var valorMaskPos = 0;
    valor = '';
    for (var i = 0; i < this.inputMask.length; i++) {
      if (isNaN(parseInt(this.inputMask.charAt(i)))) {
        valor += this.inputMask.charAt(i);
      } else {
        valor += valorMask[valorMaskPos++];
      }
    }
    
    if (valor.indexOf('_') > -1) {
      valor = valor.substr(0, valor.indexOf('_'));
    }
 
    $event.target.value = valor;
    this.retornoMask.emit($event.target.value);
  }

  @HostListener('blur', ['$event'])
  onBlur($event: any) {
    if ($event.target.value.length === this.inputMask.length) {
      return;
    }
    this.onChange('');
    $event.target.value = '';
    this.retornoMask.emit($event.target.value);
  }

}