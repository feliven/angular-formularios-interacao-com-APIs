import { Component, Input } from "@angular/core";
import { NgClass } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-botao-controle",
  templateUrl: "./botao-controle.component.html",
  styleUrls: ["./botao-controle.component.scss"],
  standalone: true,
  imports: [NgClass, MatButtonModule],
})
export class BotaoControleComponent {
  @Input() operacao: "incrementar" | "decrementar" = "incrementar";
  @Input() src = "";
  @Input() alt = "";
}
