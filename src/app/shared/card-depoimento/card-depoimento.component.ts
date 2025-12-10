import { Component, Input } from "@angular/core";
import { Depoimento } from "../../core/types/types";

@Component({
  selector: "app-card-depoimento",
  templateUrl: "./card-depoimento.component.html",
  styleUrls: ["./card-depoimento.component.scss"],
  standalone: false,
})
export class CardDepoimentoComponent {
  @Input() depoimento!: Depoimento;
}
