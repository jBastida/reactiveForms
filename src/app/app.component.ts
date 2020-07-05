import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formGroup: FormGroup;
  comboOptions: KeyValue<string, string>[];

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      input: ['Input enabled', (val: FormControl) => val.value.length < 5 ? {minLength: true} : null],
      inputDisabled: [{value: 'Input disabled', disabled: true}],
      combo: '0',
      comboDisabled: [{value: '0', disabled: true}]
    });
    this.comboOptions = [{key: '0', value: 'Option 1'}, {key: '1', value: 'Option 2'}, {key: '2', value: 'Option 3'}];
  }

  setValue(controlName: string, value: string): void {
    this.formGroup.get(controlName).setValue(value);
  }
}
