import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }


  verificaEmail(control: AbstractControl) {
    let dominio = control.value?.split('@')[1];

    if (dominio && dominio != 'byronsolutions.com') {
      return { dominioInvalido: true };
    }
    return null;
  }
}
