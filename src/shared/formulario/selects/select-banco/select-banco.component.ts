import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { Observable } from 'rxjs';

export class ConsultaBanco {
  ispb?: string;
  nomeReduzido?: string;
  numeroCodigo?: number;
  participaDaCompe?: boolean;
  acessoPrincipal?: string;
  nomeExtenso?: string;
  inicioDaOperacao?: Date;

  label?: string;
}

@Component({
  selector: 'app-select-banco',
  standalone: true,
  templateUrl: './select-banco.component.html',
  styleUrls: ['./select-banco.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, AutoCompleteModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectBancoComponent,
      multi: true,
    },
  ],
})
export class SelectBancoComponent implements OnInit, ControlValueAccessor {
  selectedBanco: any;

  public dado!: {
    banco: {
      lista?: ConsultaBanco[];
      selecionado?: ConsultaBanco;
      carregando?: boolean;
    };
  };

  opcoesFiltradas: Observable<ConsultaBanco[]> | undefined;

  @Input()
  formControlName: string = '';

  @Input()
  placeholder: string = '';

  @Input()
  form!: FormGroup;

  @Input()
  label: string = '';

  bancos: string[] = [];

  text!: string
  bancosFiltrados :string[] = []


  constructor() {
    // this.carregarBanco();
  }

  writeValue(value: string): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

  ngOnInit() {
    this.form.get(this.formControlName)?.valueChanges.subscribe((value) =>
    {
      let lista = value.split(/\s*-\s*/);

      if(lista.length != 2 || lista[0].length != 3){

        this.form.get(this.formControlName)?.setErrors({error: true})
      } else {
        this.form.get(this.formControlName)?.setErrors(null)
      }
    })
  }
  // public carregarBanco() {
  //   this.utilService
  //   .buscarBanco()
  //   .pipe()
  //   .subscribe((resultado) => {
  //     resultado.items.forEach((banco: ConsultaBanco) => {
  //       this.bancos.push( banco.numeroCodigo + ' - ' + banco.nomeReduzido,
  //       );
  //     });})
  // }

}
