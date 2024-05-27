import { RedefinirSenhaService } from './redefinir-senha.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CampoComponent } from '../../../shared/formulario/campo/campo.component';
import { FormularioRedefinirSenha } from '../../../core/formularios/redifinir-senha/formularioRedefinirSenha.model';

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
  selector: 'app-redefinir-senha',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CampoComponent,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './redefinir-senha.component.html',
  styleUrl: './redefinir-senha.component.scss'
})
export class RedefinirSenhaComponent implements OnInit{
  redefinirSenhaService = inject(RedefinirSenhaService)
  route = inject(ActivatedRoute)
  form = this.redefinirSenhaService.generateForm()
  estrutura = FormularioRedefinirSenha

  validarSenha: VerificacoesSenha = {
    verificarSenha: false,
    naoCoincidem: false,
    oitoCaracteres: false,
    letraMaiuscula: false,
    letraMinuscula: false,
    numero: false,
    caracterEspecial: false,
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
     this.form.controls.token.setValue(params.get('token')!)
    this.form.controls.token.disable()
    });

    this.form.controls.novaSenha.valueChanges.subscribe((response) => {
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
        response === this.form.controls.novaSenha.value ? true : false;
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
      this.form.controls.confirmarSenha.setErrors({ invalido: false });
      this.form.controls.confirmarSenha.setErrors({ invalido: false });
    }
    if (validaForm) {
      this.form.controls.confirmarSenha.setErrors(null);
      this.form.controls.confirmarSenha.setErrors(null);
    }
  }


}
