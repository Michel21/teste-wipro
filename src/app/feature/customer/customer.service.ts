import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { Observable, of } from "rxjs";
import { delay, map, tap } from "rxjs/operators";
import { Items } from "src/types/card";

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  cpfExists: boolean = false;
  
  private mockCustomers: Items[] = [
    {
       "cpf": "88965573807",
       "situacao": "Regular",
       "name": "Mariane de Sousa Oliveira"
    }
 
 ]

  
  constructor(){}

  verifyIsUserExistes(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        return this.userExists(control.value).pipe(
          map((res:any) => {
            return res.length > 0 ? null : { cpfExists: false };
          })
        )
     };
  }

  getCustomes(): Observable<Items[]> {
    return of(this.mockCustomers).pipe(delay(2000));
  }

  userExists(cpf){
    return of(this.mockCustomers.filter((f) => f.cpf === cpf))
  }

}

type ValidationErrors = {
  [key: string]: any;
};