import { Injectable, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UtilService } from '../../../core/service/util.service';

@Injectable({
  providedIn: 'root'
})
export class RecuperarSenhaService {
  formBuilder = inject(FormBuilder);

  utilService = inject(UtilService)
  generateForm() {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, this.utilService.verificaEmail]],
    });
  }
}
