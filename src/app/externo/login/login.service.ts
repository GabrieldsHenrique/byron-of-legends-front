import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UtilService } from '../../../core/service/util.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor() { }
  formBuilder = inject(FormBuilder);

  utilService = inject(UtilService)
  generateForm(){
    return this.formBuilder.group({
      username: new FormControl(null, [Validators.required, Validators.email, this.utilService.verificaEmail]),
      password: new FormControl(null, [Validators.required])}
    )
  }

}
