import { Component, Input } from "@angular/core";
import { BotaoControleComponent } from "../botao-controle/botao-controle.component";

@Component({
  selector: "app-seletor-passageiro",
  imports: [BotaoControleComponent],
  templateUrl: "./seletor-passageiro.component.html",
  styleUrl: "./seletor-passageiro.component.scss",
})
export class SeletorPassageiroComponent {
  @Input() titulo!: string;
  @Input() subtitulo!: string;
  @Input() quantidade!: number;
}
