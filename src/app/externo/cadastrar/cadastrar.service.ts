import { Injectable, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { UtilService } from '../../../core/service/util.service';

@Injectable({
  providedIn: 'root',
})
export class CadastrarService {
  constructor() {}

  formBuilder = inject(FormBuilder);

  utilService = inject(UtilService)
  generateForm() {
    return this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, this.utilService.verificaEmail]],
      senha: ['', [Validators.required]],
      confirmarSenha: ['', [Validators.required]],
    });
  }


}
