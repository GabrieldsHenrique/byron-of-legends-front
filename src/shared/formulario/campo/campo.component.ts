import { CommonModule } from "@angular/common";
import { Component, Input, ViewEncapsulation } from "@angular/core";
import {
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from "@angular/forms";
import { CheckboxComponent } from "../checkbox/checkbox/checkbox.component";
import { InputCodigosComponent } from "../inputs/input-codigos/input-codigos.component";
import { InputDateComponent } from "../inputs/input-date/input-date.component";
import { InputNumeroComponent } from "../inputs/input-numero/input-numero.component";
import { InputPasswordComponent } from "../inputs/input-password/input-password.component";
import { InputTextComponent } from "../inputs/input-text/input-text.component";
import { SelectBancoComponent } from "../selects/select-banco/select-banco.component";
import { SelectEstadoComponent } from "../selects/select-estado/select-estado.component";
import { SelectComponent } from "../selects/select/select.component";
import { ToggleComponent } from "../toggle/toggle.component";

@Component({
  selector: "app-campo",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextComponent,
    SelectComponent,
    InputDateComponent,
    InputPasswordComponent,
    ToggleComponent,
    SelectEstadoComponent,
    CheckboxComponent,
    InputCodigosComponent,
    SelectBancoComponent,
    InputNumeroComponent
  ],
  templateUrl: "./campo.component.html",
  styleUrl: "./campo.component.scss",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CampoComponent,
      multi: true,
    },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CampoComponent {
  @Input()
  type: string = "";

  @Input()
  formControlName: string = "";

  @Input()
  mask: string | undefined = "";

  @Input()
  placeholder: string = "";

  @Input()
  form!: FormGroup;

  @Input()
  label: string = "";

  @Input()
  options!: any[] | undefined;

  @Input()
  max!: number

  @Input()
  prefix !: string

  @Input()
  mostrarToogle : boolean = false

  @Input()
  fileAccept: string = "";

  @Input()
  quantidadeCodigos: number | undefined;


  constructor() {}

  writeValue(value: string): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

}
