import { Component, Input } from "@angular/core";
import { Items } from "src/types/card";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent {
  @Input() data: Items;
}