import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input/input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AbstractComponent} from './abstract/abstract.component';
import { ComboComponent } from './combo/combo.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
    exports: [
        InputComponent,
        ComboComponent
    ],
  declarations: [
    InputComponent,
    AbstractComponent,
    ComboComponent
  ]
})
export class ComponentsModule {
}
