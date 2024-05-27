import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { FormatDateDirective } from '../../diretivas/formatDate.directive';

@Component({
  selector: 'app-input-date',
  standalone: true,
  imports: [InputTextModule, CommonModule, ReactiveFormsModule, CalendarModule, FormatDateDirective],
  templateUrl: './input-date.component.html',
  styleUrl: './input-date.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputDateComponent,
      multi: true,
    },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class InputDateComponent {
  @Input()
  type: string = '';

  @Input()
  formControlName: string = '';

  @Input()
  mask: string | undefined ='';

  @Input()
  placeholder: string = '';

  @Input()
  form!: FormGroup;

  @Input()
  label: string = '';

  @Input()
  options!: any[] | undefined;

  @Input()
  fileAccept: string = '';

  constructor() {
  }

  writeValue(value: string): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
