import { FormBuilder, Validators } from "@angular/forms";
import { Formulario } from "../../dto/formulario.dto";

export const FormularioValidarCadastro: Formulario[] = [
    {
      linha: [
        {
          className: "",
          type: "text",
          formControlName: "codigoSms",
          placeholder: "Código SMS",
          label: "",
          mask: "AAAAAA"
        },
      ],
      className: "w-full",
    },
    {
      linha: [
        {
          className: "",
          type: "text",
          formControlName: "codigoEmail",
          placeholder: "Código Email",
          label: "",
          mask: "AAAAAA"
        },
      ],
      className: "w-full",
    },
  ]
  
  
  export const FormBuilderValidarCadastro: FormBuilder = new FormBuilder();
  
  export const FormGroupValidarCadastro = FormBuilderValidarCadastro.group({
    codigoSms: ['', [Validators.required]],
    codigoEmail: ['', [Validators.required]]  
  });
    