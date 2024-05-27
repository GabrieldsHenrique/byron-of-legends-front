import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { CampoComponent } from '../../../shared/formulario/campo/campo.component';
import { UtilService } from '../../../core/service/util.service';
import { RecuperarSenhaService } from './recuperar-senha.service';

@Component({
  selector: 'app-recuperar-senha',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CampoComponent,
    ReactiveFormsModule,
    RouterModule,
    InputTextModule,
  ],
  templateUrl: './recuperar-senha.component.html',
  styleUrl: './recuperar-senha.component.scss',
})
export class RecuperarSenhaComponent {

  recuperarSenhaService = inject(RecuperarSenhaService);


  form = this.recuperarSenhaService.generateForm()
}
