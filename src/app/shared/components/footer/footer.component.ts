import { Component, OnInit } from "@angular/core";
import { CustomerService } from "src/app/feature/customer/customer.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})

export class FooterComponent {

  constructor(
    private customerSrv: CustomerService
  ) { }

  get cpfExists() {
    return this.customerSrv.cpfExists;
  }
}