import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Formulario } from "../../dto/formulario.dto";

export const FormularioDadosPatrimoniais: Formulario[] = [
  {
    linha: [
      {
        className: "",
        type: "text",
        formControlName: "rendaMensal",
        placeholder: "Renda Mensal",
        label: "",
      },
      {
        className: " ",
        type: "text",
        formControlName: "aplicacoesFinanceiras",
        placeholder: "Aplicações Financeiras",
        label: "",
      }
    ],
    className: "grid md:grid-cols-2 gap-x-4",
  },
  {
    linha: [

      {
        className: " ",
        type: "text",
        formControlName: "bensImoveis",
        placeholder: "Bens imóveis",
        label: "",
      },
      {
        className: " ",
        type: "text",
        formControlName: "investimentosExternos",
        placeholder: "Investimentos Externos",
        label: "",
      },
      {
        className: " ",
        type: "text",
        formControlName: "outrosRendimentos",
        placeholder: "Outros rendimentos",
        label: "",
      },
    ],
    className: "grid md:grid-cols-3 gap-x-4",
  },
  {
    linha: [
      {
        className: " ",
        type: "checkbox",
        formControlName: "ocupacaoProfissional",
        placeholder: "Ocupação profissional",
        label: "Origem dos recursos:",
      },
      {
        className: " ",
        type: "checkbox",
        formControlName: "heranca",
        placeholder: "Herança",
        label: "",
      },
      {
        className: " ",
        type: "checkbox",
        formControlName: "doacao",
        placeholder: "Doação",
        label: "",
      },
      {
        className: " ",
        type: "checkbox",
        formControlName: "partilhaBens",
        placeholder: "Partilha de bens",
        label: "",
      },
      {
        className: " ",
        type: "checkbox",
        formControlName: "aposentadoria",
        placeholder: "Aposentadoria",
        label: "",
      },
      {
        className: " ",
        type: "checkbox",
        formControlName: "aluguelPropriedades",
        placeholder: "Aluguel de propriedades",
        label: "",
      },
      {
        className: " ",
        type: "checkbox",
        formControlName: "outrosRecursos",
        placeholder: "Outros",
        label: "",
      },
     
    ],
    className: "grid md:grid-cols-4 items-end gap-4 mt-4",
  },
  {
    linha: [
      {
        className: " ",
        type: "checkbox",
        formControlName: "rendaFixa",
        placeholder: "Renda Fixa",
        label: "Produtos de preferência:",
      },
      {
        className: " ",
        type: "checkbox",
        formControlName: "rendaVariavel",
        placeholder: "Renda variável",
        label: "",
      },
      {
        className: " ",
        type: "checkbox",
        formControlName: "derivativos",
        placeholder: "Derivativos",
        label: "",
      },
      {
        className: " ",
        type: "checkbox",
        formControlName: "fundosInvestimento",
        placeholder: "Fundos de investimento",
        label: "",
      },
      {
        className: " ",
        type: "checkbox",
        formControlName: "cambio",
        placeholder: "Cãmbio",
        label: "",
      },
      {
        className: " ",
        type: "checkbox",
        formControlName: "seguros",
        placeholder: "Seguros",
        label: "",
      },
      {
        className: " ",
        type: "checkbox",
        formControlName: "previdenciaPrivada",
        placeholder: "Previdência privada",
        label: "",
      },
      {
        className: " ",
        type: "checkbox",
        formControlName: "outrosPreferencia",
        placeholder: "Outros",
        label: "",
      },
     
    ],
    className: "grid md:grid-cols-4 items-end gap-4 mt-4",
  },

];

export const FormBuilderDadosPatrimoniais: FormBuilder = new FormBuilder();

export const FormGroupDadosPatrimoniais = FormBuilderDadosPatrimoniais.group({
  rendaMensal: new FormControl("", [Validators.required]),
  aplicacoesFinanceiras: new FormControl("", [Validators.required]),
  bensImoveis: new FormControl("", [Validators.required]),
  investimentosExternos: new FormControl("", [Validators.required]),
  outrosRendimentos: new FormControl("", [Validators.required]),
  ocupacaoProfissional: new FormControl(""),
  heranca: new FormControl(""),
  doacao: new FormControl(""),
  partilhaBens: new FormControl(""),
  aposentadoria: new FormControl(""),
  aluguelPropriedades: new FormControl(""),
  outrosRecursos: new FormControl(""),
  rendaFixa: new FormControl(""),
  rendaVariavel: new FormControl(""),
  derivativos: new FormControl(""),
  fundosInvestimento: new FormControl(""),
  cambio: new FormControl(""),
  seguros: new FormControl(""),
  previdenciaPrivada: new FormControl(""),
  outrosPreferencia: new FormControl(""),
});
