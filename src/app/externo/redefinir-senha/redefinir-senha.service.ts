import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RedefinirSenhaService {

  formBuilder = inject(FormBuilder);


  generateForm(){
    return this.formBuilder.group({
      token: new FormControl('', [Validators.required]),
      novaSenha: new FormControl('', [Validators.required]),
      confirmarSenha: new FormControl('', [Validators.required]),}
    )
  }

}
