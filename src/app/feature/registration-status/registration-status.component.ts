import { Component } from "@angular/core";

@Component({
  selector: 'app-registration-status',
  templateUrl: './registration-status.component.html',
  styleUrls: ['./registration-status.component.scss'],
})

export class RegistrationStatusComponent { 
 currentStep: number[] = [1];
 totalSteps: number[] = [1,2,3,4,5,6]
}