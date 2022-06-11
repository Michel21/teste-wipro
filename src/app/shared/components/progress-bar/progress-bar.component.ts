import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements AfterViewInit, OnChanges {

  @Input() step: number[] = [];
  @Input() steps: number[] = [];

  stepsCount: any = [];
  resultado: any;
  stepsName: string[] = ['Início','Documentos','Dados cadastrais','Admissão']

  ngAfterViewInit(): void {
      this.getProgresso();
  }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes.step.currentValue.length || changes.steps.currentValue.length) {
        this.getProgresso();
      }
  }

  getProgresso() {
      if (this.steps.length === 0)   return 0;
      this.resultado = (100 / this.steps.length); 
  }

}