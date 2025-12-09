import { Component, OnInit } from "@angular/core";
import { PromocaoService } from "../../core/services/promocao.service";
import { Promocao } from "../../core/types/types";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: false,
})
export class HomeComponent implements OnInit {
  listaPromocoes: Promocao[] = [];

  constructor(private service: PromocaoService) {}

  ngOnInit(): void {
    this.service.getPromocoes().subscribe((resposta) => {
      this.listaPromocoes = resposta;
      console.log(this.listaPromocoes);
    });
  }
}
