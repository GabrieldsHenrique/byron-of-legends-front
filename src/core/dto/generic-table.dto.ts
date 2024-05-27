import { EnumTipoArquivo } from "../enums/tipoArquivo.enum";


export interface ColumnsTableDTO {
  name?: string;
  width: string;
  variavel?: string;
  ordenar?: boolean;
  pipe?: string;
  tranform?: Function;
  condicional?: CondicaoDTO;
  class?: string;
  type: 'text'| 'botao';
  botoes?: BotaoDTO[];

}

interface BotaoDTO {
  icon?: string;
  label?: string;
  action?: string;
}


export interface ItensAcoesDTO {
  name: string;
  icon: string;
  action: string;
  variavel?: string;
  condicional?: CondicaoDTO;
}

interface IconArquivoDTO {
  tipo: EnumTipoArquivo;
  variavelChave?: string; // variavel do objeto onde esta a chave, ou bucket para disponiblizar o dowload.
}

interface IconStatusDTO {
  variavel: string;
  tipoIcon: string;
}


interface CondicaoDTO {
  variavel: any; //variavel do Objeto a ser listado
  condicao: any; // condição para que o mesmo apareça
}

export interface PesquisarDTO {
  paginate: PaginateDTO;
  ordenacao: OrdenacaoDTO;
}

export interface PaginateDTO {
  sortOrder: string;
  sortProperties: string;
  size: number;
  page: number;
}

interface OrdenacaoDTO {
  sortOrder: string;
  sortProperties: string;
}

export interface labelFooterDTO {
  type: 'label' | 'button';
  titulo: {
    class: string;
    label: string;
  };
  valor?: {
    class: string;
    label: any;
  };
}
