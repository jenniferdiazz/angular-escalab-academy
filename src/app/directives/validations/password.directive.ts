import { Directive } from '@angular/core';
//abstractControl: captura el dato del formulario, NG_VALIDATORS permite construir el validador de manera personalizada,
//Validator: interfaz que tiene el metodo validate, nos dice que traigamos el abstract control y el validations errors, 
//validatorFn: otra interfaz que ayuda a tener todos los controles que hayamos tomado y permite devolverlos en la funcion passwordvalidation
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn  } from '@angular/forms';

//passwordValidation es lo que usaremos en el html o typescript para poder decirle al password que ocupe ese validador
export function passwordValidation(): ValidatorFn{
  return (control: AbstractControl) =>{
    const passwordValidationDirective = new PasswordDirective();
    return passwordValidationDirective.validate(control);
  }
}

@Directive({
  selector: '[appPassword]',
  //trae multiples providers en nuestra directiva
  providers : [{provide:  NG_VALIDATORS, useExisting: PasswordDirective, multi:true}]
})
//PasswordDirective se usa cuando hacemos la instancia y mandamos el dato devuelta
export class PasswordDirective implements Validator {

  constructor() { }
  validate(control: import("@angular/forms").AbstractControl): import("@angular/forms"). 
  ValidationErrors{
    const password = <string>control.value;
    if(!password){return;}
    if (password.length < 6){
      return {'passwordValidation':{'message': 'El password debe contener al menos 6 caracteres'} }
    }
    if(password === password.toLocaleLowerCase()){
      return {'passwordValidation':{'message': 'El password debe contener Mayusculas'}}
    }
    if(!/\d/.test(password)){
      return {'passwordValidation':{'message': 'El password debe contener un caracter numerico'}}

      
    }
    return null
  }

}
