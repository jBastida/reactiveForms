import {Component, forwardRef, Input} from '@angular/core';
import {AbstractComponent} from '../abstract/abstract.component';
import {KeyValue} from '@angular/common';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ComboComponent),
      multi: true
    }
  ]
})
export class ComboComponent extends AbstractComponent {

  @Input()
  public options: KeyValue<string, string>[];

}
