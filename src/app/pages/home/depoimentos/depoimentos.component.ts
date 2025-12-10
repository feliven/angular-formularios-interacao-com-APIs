import { Component } from "@angular/core";
import { DepoimentoService } from "src/app/core/services/depoimento.service";
import { Depoimento } from "../../../core/types/types";

@Component({
  selector: "app-depoimentos",
  templateUrl: "./depoimentos.component.html",
  styleUrls: ["./depoimentos.component.scss"],
  standalone: false,
})
export class DepoimentosComponent {
  depoimentos: Depoimento[] = [];
  constructor(private service: DepoimentoService) {}
  ngOnInit(): void {
    this.service.listar().subscribe((resposta) => {
      this.depoimentos = resposta;
    });
  }
}
