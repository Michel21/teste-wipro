import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Items } from "src/types/card";
import { CustomerService } from "./customer.service";


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})

export class CustomerComponent implements OnInit {

  currentStep: number[] = [1];
  totalSteps: number[] = [1, 2, 3, 4];

  itemsCard: Items;
  registerFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customerSrv: CustomerService
  ) { }

  ngOnInit(): void {
    this.registerFormGroup = this.fb.group({
      'cpfCooperado': ['',
        {
          validators: [Validators.required],
          asyncValidators: [this.customerSrv.verifyIsUserExistes()],
          updateOn: 'blur'
        }
      ]
    })
  }

  veryCpfCooperado() {
    if (this.registerFormGroup.invalid) return;
    this.customerSrv.getCustomes().subscribe({
      next: (data: Items[]) => {
        this.customerSrv.cpfExists = true;
        const [{ cpf, situacao, name }] = data;
        this.itemsCard = {
          cpf,
          name,
          situacao,
          title: "Situação cadastral do CPF",
          subTitle: "Consulta na Receita Federal",
          label: "Name",
          icon_user: ".../../../assets/icones/usuario.png",
          icon_situacao: ".../../../assets/icones/selecionado.svg",
          situacao_name: "Situação do CPF"
        }
      },
      error: () => {
        this.customerSrv.cpfExists = false;
      }
    })
  }
}