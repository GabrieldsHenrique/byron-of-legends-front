import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Formulario } from "../../dto/formulario.dto";
import { GenericValidator } from "../../validators/generic.validator";

export const FormularioDadosPessoais: Formulario[] = [
  {
    linha: [
      {
        className: "",
        type: "text",
        formControlName: "nome",
        placeholder: "Nome de Cadastro",
        label: "",
      },
      {
        className: " ",
        type: "text",
        formControlName: "email",
        placeholder: "Email",
        label: "",
      },
      {
        className: " ",
        type: "text",
        formControlName: "telefone",
        placeholder: "Telefone",
        label: "",
        mask: "(00) 0000-0000||(00) 00000-0000",
      },
    ],
    className: "grid  md:grid-cols-3 gap-x-4",
  },
  {
    linha: [
      {
        className: " ",
        type: "text",
        formControlName: "documento",
        placeholder: "CPF",
        label: "",
        mask: "000.000.000-00",
      },
      {
        className: " ",
        type: "text",
        formControlName: "rg",
        placeholder: "RG",
        label: "",
      },
      {
        className: " ",
        type: "text",
        formControlName: "orgaoEmissor",
        placeholder: "Orgão Emissor",
        label: "",
      },
    ],
    className: "grid md:grid-cols-3 gap-x-4",
  },  {
    linha: [
      {
        className: " ",
        type: "date",
        formControlName: "dataNascimento",
        placeholder: "Data de Nascimento",
        label: "",
      },
      {
        className: "",
        type: "select",
        formControlName: "estadoCivil",
        placeholder: "Estado Civil",
        label: "",
        options: [
          { label: "Solteiro", value: "SOLTEIRO" },
          { label: "Casado", value: "CASADO" },
          { label: "Divorciado", value: "DIVORCIADO" },
          { label: "Viúvo", value: "viuvo" },
          { label: "Separado Judicialmente", value: "SEPARADO_JUDICIALMENTE" },
        ],
      },
      {
        className: "",
        type: "select",
        formControlName: "sexo",
        placeholder: "Sexo",
        label: "",
        options: [
          {
            label: "Masculino",
            value: "MASCULINO",
          },
          {
            label: "Feminino",
            value: "FEMININO",
          },
          {
            label: "Outro",
            value: "OUTRO",
          },
          {
            label: "Não informar",
            value: "NAO_INFORMAR",
          },
        ],
      },
    ],
    className: "grid md:grid-cols-3 gap-x-4",
  },  {
    linha: [
      {
        className: "",
        type: "text",
        formControlName: "nomeMae",
        placeholder: "Nome da Mãe",
        label: "",
      },
      {
        className: "",
        type: "text",
        formControlName: "nomePai",
        placeholder: "Nome do Pai",
        label: "",
      },
      {
        className: "",
        type: "toogle",
        formControlName: "politicamenteExposto",
        placeholder: "Politicamente Exposta",
        label: "",
      },
    ],
    className: "grid md:grid-cols-3 items-center gap-x-4",
  },
];
export const FormularioInfoPessoais: Formulario[] = [


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
        formControlName: "logradouro",
        placeholder: "Endereço",
        label: "",
      },
    ],
    className: "grid md:grid-cols-3 gap-x-4 border-t-2 mt-4  ",
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
        className: " ",
        type: "text",
        formControlName: "numero",
        placeholder: "Número",
        label: "",
      },
      {
        className: " ",
        type: "text",
        formControlName: "complemento",
        placeholder: "Complemento",
        label: "",
      },
    ],
    className: "grid md:grid-cols-3 gap-x-4",
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
        className: " ",
        type: "text",
        formControlName: "cidade",
        placeholder: "Cidade",
        label: "",
      },
      {
        className: " ",
        type: "text",
        formControlName: "pais",
        placeholder: "País",
        label: "",
      },
    ],
    className: "grid md:grid-cols-3 gap-x-4 w-full",
  },
];

export const FormBuilderInfoPessoais: FormBuilder = new FormBuilder();

export const FormGroupInfoPessoais = FormBuilderInfoPessoais.group({
  foto: new FormControl("", [Validators.required]),
  nome: new FormControl("", [Validators.required]),
  email: new FormControl("", [Validators.required, Validators.email]),
  telefone: new FormControl("", [Validators.required]),
  sexo: new FormControl("", [Validators.required]),
  dataNascimento: new FormControl("", [Validators.required]),
  documento: new FormControl("", [
    Validators.required,
    GenericValidator.isValidCpf(),
  ]),
  estadoCivil: new FormControl("", [Validators.required]),
  rg: new FormControl("", [Validators.required]),
  orgaoEmissor: new FormControl("", [Validators.required]),
  politicamenteExposto: new FormControl(false),
  nomeMae: new FormControl("", [Validators.required]),
  nomePai: new FormControl("", [Validators.required]),
  cep: new FormControl("", [Validators.required]),
  logradouro: new FormControl("", [Validators.required]),
  bairro: new FormControl("", [Validators.required]),
  numero: new FormControl("", [Validators.required]),
  complemento: new FormControl(""),
  estado: new FormControl("", [Validators.required]),
  cidade: new FormControl("", [Validators.required]),
  pais: new FormControl("", [Validators.required]),
});
