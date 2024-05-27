import { Component, inject } from '@angular/core';
import { Formulario } from '../../../core/dto/formulario.dto';
import { FormGroupLogin, FormularioLoginSimples } from '../../../core/formularios/login/formularioLogin.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CampoComponent } from '../../../shared/formulario/campo/campo.component';
import { FormularioCadastro } from '../../../core/formularios/cadastro-usuario/formularioCadastro.model';
import { CadastrarService } from './cadastrar.service';

interface VerificacoesSenha {
  [key: string]: boolean;
  verificarSenha: boolean;
  naoCoincidem: boolean;
  oitoCaracteres: boolean;
  letraMaiuscula: boolean;
  letraMinuscula: boolean;
  numero: boolean;
  caracterEspecial: boolean;
}

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [ CommonModule, FormsModule, CampoComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.scss'
})
export class CadastrarComponent {
  validarSenha: VerificacoesSenha = {
    verificarSenha: false,
    naoCoincidem: false,
    oitoCaracteres: false,
    letraMaiuscula: false,
    letraMinuscula: false,
    numero: false,
    caracterEspecial: false,
  };


  cadatrarService = inject(CadastrarService)

  form = this.cadatrarService.generateForm()
  estrututaFormCadastro: Formulario[] = FormularioCadastro;


  constructor() {
    this.form.controls.senha.valueChanges.subscribe((response) => {
      if (response && response.length > 0) {
        this.validarSenha.verificarSenha = true;
        this.validarSenha.oitoCaracteres = response.length > 8 ? true : false;
        this.validarSenha.caracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(
          response
        );
        this.validarSenha.letraMaiuscula = /[A-Z]/.test(response);
        this.validarSenha.letraMinuscula = /[a-z]/.test(response);
        this.validarSenha.numero = /\d/.test(response);
        this.validarSenha.naoCoincidem =
          response === this.form.controls.confirmarSenha.value ? true : false;
      } else {
        this.validarSenha.verificarSenha = false;
      }

      this.validaForm();
    });

    this.form.controls.confirmarSenha.valueChanges.subscribe((response) => {
      this.validarSenha.naoCoincidem =
        response === this.form.controls.senha.value ? true : false;
      this.validaForm();
    });
  }

  validaForm() {
    let validaForm = true;
    Object.keys(this.validarSenha).forEach((chave) => {
      if (!this.validarSenha[chave]) {
        validaForm = false;
      }
    });

    if (!validaForm) {
      this.form.controls.senha.setErrors({ invalido: false });
      this.form.controls.confirmarSenha.setErrors({ invalido: false });
    }
    if (validaForm) {
      this.form.controls.senha.setErrors(null);
      this.form.controls.confirmarSenha.setErrors(null);
    }
  }

}
