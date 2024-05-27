
  export interface Formulario{
    linha:CampoLinhaFormulario[]
    className:string;
  }
  
  export interface CampoLinhaFormulario{
    className:string;
    type: 'text' | 'cep' | 'select' | 'estado' | 'date' | 'password' | 'toogle' | 'checkbox' | 'codigos' | 'banco'| 'numero';
    formControlName:string;
    placeholder:string;
    label:string;
    options?: {label: string, value: string}[];
    fileAccept?: string;
    mask ?: string;
    quantidadeCodigos?: number;
    max?: number;
    mostrarToogle?: boolean;
    prefix ?: string;
  }
  