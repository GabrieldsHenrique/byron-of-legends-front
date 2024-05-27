import { AbstractControl, FormBuilder, Validators } from "@angular/forms";
import { Formulario } from "../../dto/formulario.dto";


export const FormularioLoginSimples: Formulario[] = [
  {
    linha: [
      {
        className: "",
        type: "text",
        formControlName: "username",
        placeholder: "E-mail",
        label: "",
      },
    ],
    className: "w-full",
  },
  {
    linha: [
      {
        className: "",
        type: "password",
        formControlName: "password",
        placeholder: "Senha",
        label: "",
      },
    ],
    className: "w-full",
  },
]


export const FormBuilderLogin: FormBuilder = new FormBuilder();

export const FormGroupLogin = FormBuilderLogin.group({
  username: ['', [Validators.required, Validators.email, verificaEmail]],
  password: ['', [Validators.required]]
});


function verificaEmail(control: AbstractControl) {
  let dominio = control.value.split('@')[1]

  if (dominio && dominio != 'byronsolutions.com') {
    return { 'dominioInvalido': true };
  }
  return null;
}

