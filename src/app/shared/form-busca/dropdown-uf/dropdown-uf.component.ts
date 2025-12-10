import { Component, Input } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: "app-dropdown-uf",
  imports: [MatFormFieldModule, MatInputModule, MatIcon],
  templateUrl: "./dropdown-uf.component.html",
  styleUrl: "./dropdown-uf.component.scss",
})
export class DropdownUfComponent {
  @Input() label!: string;
  @Input() iconePrefixo!: string;

  // @Input() direcao: "origem" | "destino" = "origem";
  // @Input() textoCampo: "Origem" | "Destino" = "Origem";

  // label = this.direcao;
  // placeholder = this.textoCampo;
  // matPrefix = "x";
}
