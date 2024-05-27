import { Formulario } from "../../dto/formulario.dto";

export const FormularioRedefinirSenha: Formulario[] = [
    {
      linha: [
        {
          className: "",
          type: "text",
          formControlName: "token",
          placeholder: "Token",
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
          formControlName: "novaSenha",
          placeholder: "Nova Senha",
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
          formControlName: "confirmarSenha",
          placeholder: "Confirmar Senha",
          label: "",
        },
      ],
      className: "w-full",
    },
  ]
