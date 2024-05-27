import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Formulario } from '../../dto/formulario.dto';

export const FormularioCadastro: Formulario[] = [
  {
    linha: [
      {
        className: '',
        type: 'text',
        formControlName: 'nome',
        placeholder: 'Nome',
        label: '',
      },
      {
        className: '',
        type: 'text',
        formControlName: 'email',
        placeholder: 'Email',
        label: '',
      },
      {
        className: '',
        type: 'password',
        formControlName: 'senha',
        placeholder: 'Senha',
        label: '',
      },
      {
        className: '',
        type: 'password',
        formControlName: 'confirmarSenha',
        placeholder: 'Confirmar senha',
        label: '',
      },
    ],
    className: 'w-full gap-x-4',
  },
];
export const FormBuilderCadastro: FormBuilder = new FormBuilder();

