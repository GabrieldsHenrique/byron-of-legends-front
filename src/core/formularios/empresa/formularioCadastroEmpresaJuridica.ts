import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Formulario } from "../../dto/formulario.dto";

export const FormularioEmpresaJuridica: Formulario[] = [
  {
    linha: [
      {
        className: "",
        type: "text",
        formControlName: "documento",
        placeholder: "Documento",
        label: "",
        mask: "000.000.000-00||00.000.000/0000-00",
      },
      {
        className: "",
        type: "text",
        formControlName: "nomeEmpresa",
        placeholder: "Nome da Empresa",
        label: "",
      },
    ],
    className: "grid md:grid-cols-2 gap-x-4 ",
  },
  {
    linha: [
      {
        className: "",
        type: "text",
        formControlName: "razaoSocial",
        placeholder: "Razão Social",
        label: "",
      },
      {
        className: "",
        type: "select",
        formControlName: "tipoEmpresa",
        placeholder: "Tipo de Empresa",
        label: "",
        options: [
          { label: "LTDA - Sociedade Limitada", value: "LTDA" },
          { label: "MEI - Microempreendedor Individual", value: "MEI" },
          { label: "ME - Microempresa", value: "ME" },
          {
            label: "EIRELI - Empresa Individual de Responsabilidade Limitada",
            value: "EIRELI",
          },
          { label: "SA - Sociedade Anônima", value: "SA" },
          { label: "ESC - Empresa Simples de Crédito", value: "ESC" },
          { label: "SCD - Sociedade de Crédito Direto", value: "SCD" },
          { label: "Fundo de Investimento", value: "FUNDO_INVESTIMENTO" },
          { label: "Holding", value: "HOLDING" },
          {
            label: "ESC - Instituição, ONG ou Associação",
            value: "INSTITUICAO_ONG_ASSOCIACAO",
          },
        ],
      },
    ],
    className: "grid md:grid-cols-2 gap-x-4 border-b pb-4 border-gray-1",
  },
  {
    linha: [
      {
        className: "",
        type: "select",
        formControlName: "tipoTelefone",
        placeholder: "Tipo de Telefone",
        label: "",
        options: [
          {
            label: "Residencial",
            value: "RESIDENCIAL",
          },
          {
            label: "Comercial",
            value: "COMERCIAL",
          },
        ],
      },
      {
        className: "",
        type: "text",
        formControlName: "celular",
        placeholder: "DDD + Número",
        label: "",
        mask: "(00) 0000-0000||(00) 00000-0000",
      },
      {
        className: "",
        type: "text",
        formControlName: "ramal",
        placeholder: "Ramal",
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
        formControlName: "email",
        placeholder: "Email",
        label: "",
      },
    ],
    className: "border-b pb-4 border-gray-1",
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
    className: "grid md:grid-cols-3 gap-x-4",
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

export const FormBuilderEmpresaJuridica: FormBuilder = new FormBuilder();

export const FormGroupEmpresaJuridica = FormBuilderEmpresaJuridica.group({
  documento: new FormControl("", [Validators.required]),
  nomeEmpresa: new FormControl("", [Validators.required]),
  razaoSocial: new FormControl("", [Validators.required]),
  tipoEmpresa: new FormControl("", [Validators.required]),
  cep: new FormControl("", [Validators.required]),
  endereco: new FormControl("", [Validators.required]),
  bairro: new FormControl("", Validators.required),
  numero: new FormControl("", [Validators.required]),
  complemento: new FormControl(""),
  pais: new FormControl("", [Validators.required]),
  estado: new FormControl("", [Validators.required]),
  cidade: new FormControl("", [Validators.required]),
  tipoTelefone: new FormControl("", Validators.required),
  celular: new FormControl("", [Validators.required]),
  ramal: new FormControl(""),
  email: new FormControl("", [Validators.required, Validators.email]),
  tipoDocumento: new FormControl("")
});
