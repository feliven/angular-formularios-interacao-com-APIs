import { Component, OnInit } from "@angular/core";
import { PromocaoService } from "../../core/services/promocao.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: false,
})
export class HomeComponent implements OnInit {
  constructor(private service: PromocaoService) {}

  ngOnInit(): void {
    this.service.getPromocoes().subscribe((promocao) => {
      console.log(promocao);
    });
  }
}
