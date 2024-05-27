import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Formulario } from "../../dto/formulario.dto";

export const FormularioRepresentanteLegal: Formulario[] = [
  {
    linha: [
      {
        className: "",
        type: "text",
        formControlName: "nome",
        placeholder: "Nome do Representante",
        label: "",
      },
      {
        className: "",
        type: "text",
        formControlName: "celular",
        placeholder: "Celular do Representante",
        label: "",
        mask: "(00) 0000-0000||(00) 00000-0000",
      },
      {
        className: "",
        type: "text",
        formControlName: "email",
        placeholder: "Email do Representante",
        label: "",
      },
    ],
    className: "grid md:grid-cols-3 gap-x-4",
  },

  {
    linha: [
      {
        className: "",
        type: "text",
        formControlName: "documento",
        placeholder: "Documento(CPF/CNPJ)",
        label: "",
        mask: "000.000.000-00||00.000.000/0000-00",
      },
      {
        className: "",
        type: "date",
        formControlName: "dataNascimento",
        placeholder: "Data de Nascimento",
        label: "",
      },
      {
        className: "",
        type: "select",
        formControlName: "tipoRepresentante",
        placeholder: "Tipo de Representante",
        label: "",
        options: [
          { label: "Sócio", value: "SOCIO" },
          { label: "Administrador", value: "ADMINISTRADOR" },
          { label: "Sócio Administrador", value: "SOCIO_ADMINISTRADOR" },
          {
            label: "Não informar",
            value: "NAO_INFORMAR",
          },
        ],
      },
    ],
    className: "grid md:grid-cols-3 gap-x-4 ",
  },

  {
    linha: [
      {
        className: "",
        type: "toogle",
        formControlName: "politicamenteExposta",
        placeholder: "Politicamente Exposta",
        label: "",
      },
      {
        className: "",
        type: "toogle",
        formControlName: "assinatura",
        placeholder: "Assina pela empresa",
        label: "",
      },
    ],
    className: "grid md:grid-cols-3 gap-x-4",
  },
  {
    linha: [
      {
        className: "",
        type: "cep",
        formControlName: "cep",
        placeholder: "CEP",
        label: "",
      },
      {
        className: "md:col-span-2",
        type: "text",
        formControlName: "endereco",
        placeholder: "Endereço",
        label: "",
      },
    ],
    className: "grid md:grid-cols-3 gap-x-4 ",
  },
  {
    linha: [
      {
        className: "",
        type: "text",
        formControlName: "bairro",
        placeholder: "Bairro",
        label: "",
      },
      {
        className: "",
        type: "text",
        formControlName: "numero",
        placeholder: "Número",
        label: "",
      },
      {
        className: "",
        type: "text",
        formControlName: "complemento",
        placeholder: "Complemento",
        label: "",
      },
    ],
    className: "grid md:grid-cols-3 gap-x-4 ",
  },
  {
    linha: [
      {
        className: "",
        type: "estado",
        formControlName: "estado",
        placeholder: "Estado",
        label: "",
      },
      {
        className: "",
        type: "text",
        formControlName: "cidade",
        placeholder: "Cidade",
        label: "",
      },
      {
        className: "",
        type: "text",
        formControlName: "pais",
        placeholder: "Pais",
        label: "",
      },
    ],
    className: "grid md:grid-cols-3 gap-x-4 ",
  },
];

export const FormBuilderRepresentanteLegal: FormBuilder = new FormBuilder();

export const FormGroupRepresentanteLegal = FormBuilderRepresentanteLegal.group({
  nome: new FormControl("", [Validators.required]),
  celular: new FormControl("", [Validators.required, Validators.min(11)]),
  email: new FormControl("", [Validators.required, Validators.email]),
  tipoRepresentante: new FormControl('', [Validators.required]),
  documento: new FormControl("", [Validators.required]),
  dataNascimento: new FormControl(""),
  politicamenteExposta: new FormControl(false, []),
  assinatura: new FormControl(false, []),
  cep: new FormControl("", [Validators.required]),
  endereco: new FormControl("", [Validators.required]),
  bairro: new FormControl("", Validators.required),
  numero: new FormControl("", [Validators.required]),
  complemento: new FormControl(""),
  pais: new FormControl("", [Validators.required]),
  estado: new FormControl('', [Validators.required]),
  cidade: new FormControl("", [Validators.required]),
});
