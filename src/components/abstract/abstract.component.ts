import {Component} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'app-abstract-component',
  templateUrl: './abstract.component.html'
})
export class AbstractComponent implements ControlValueAccessor {

  value: string;
  isDisabled: boolean;
  private onChange: (_: string) => void;
  private onTouch: () => void;

  onInput(value: string): void {
    this.onTouch();
    this.onChange(value);
  }

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (_: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
