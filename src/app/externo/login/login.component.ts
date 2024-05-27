import { Component, inject } from '@angular/core';
import { Formulario } from '../../../core/dto/formulario.dto';
import {
  FormGroupLogin,
  FormularioLoginSimples,
} from '../../../core/formularios/login/formularioLogin.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CampoComponent } from '../../../shared/formulario/campo/campo.component';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CampoComponent,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginService = inject(LoginService);

  form = this.loginService.generateForm();
  estrututaFormLogin: Formulario[] = FormularioLoginSimples;
}
