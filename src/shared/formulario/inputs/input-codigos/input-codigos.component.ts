import { CommonModule } from "@angular/common";
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from "ngx-mask";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: "app-input-codigos",
  standalone: true,
  imports: [
    InputTextModule,
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  templateUrl: "./input-codigos.component.html",
  styleUrl: "./input-codigos.component.scss",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputCodigosComponent,
      multi: true,
    },
    provideNgxMask(),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class InputCodigosComponent implements OnInit {
  
  @Input()
  form!: FormGroup;

  @Input()
  formControlName: string = "";

  @Input()
  quantidade: number = 0;

  @Input()
  label: string | undefined

  formBuilder = inject(FormBuilder);
  elementRef = inject(ElementRef);

  formInputs = this.formBuilder.group({});

  ngOnInit() {
    for (let i = 0; i < this.quantidade; i++) {
      this.formInputs.addControl(
        i.toString(),
        this.formBuilder.control(undefined, [Validators.required])
      );
    }

    this.formInputs.valueChanges.subscribe((inputs) => {
      let lista = Object.values(inputs);
      let resultado = "";
      lista.forEach((numero) => {
        if (numero) {
          resultado += numero;
        }
      });

      this.form.get(this.formControlName)?.setValue(resultado)
    });
  }

  getControlsArray() {
    if (this.formInputs.controls) {
      return Object.values(this.formInputs.controls);
    } else {
      return [];
    }
  }

  moverFoco(inputAtual: any, id: number) {
    if (inputAtual.value.length === 1) {
      let teste = this.elementRef.nativeElement.querySelector(
        `#campo${id + 1}`
      );
      if (teste) {
        this.formInputs.get((id + 1).toString())?.setValue('')
        teste.focus();
      }
    }
  }

  writeValue(value: string): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
