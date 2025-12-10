import { Component, Input, OnInit } from "@angular/core";
import { AsyncPipe } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIcon } from "@angular/material/icon";
import { MatAutocomplete, MatAutocompleteModule, MatOption } from "@angular/material/autocomplete";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Observable } from "rxjs";
import { startWith, map } from "rxjs/operators";
import { UnidadeFederativaService } from "../../../core/services/unidade-federativa.service";
import { UnidadeFederativa } from "../../../core/types/types";

@Component({
  selector: "app-dropdown-uf",
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
    MatIcon,
    MatAutocomplete,
    MatOption,
    MatAutocompleteModule,
  ],
  templateUrl: "./dropdown-uf.component.html",
  styleUrl: "./dropdown-uf.component.scss",
})
export class DropdownUfComponent implements OnInit {
  @Input() label!: string;
  @Input() iconePrefixo!: string;
  listaEstados: UnidadeFederativa[] = [];

  controleUF = new FormControl("");
  listaFiltradaEstados!: Observable<UnidadeFederativa[]>;

  constructor(private ufService: UnidadeFederativaService) {}

  ngOnInit() {
    this.listaFiltradaEstados = this.controleUF.valueChanges.pipe(
      startWith(""),
      map((valor) => this._filtrar(valor || ""))
    );

    this.ufService.listarEstados().subscribe((estados) => {
      this.listaEstados = estados;
      console.log(this.listaEstados);
      // Trigger the filter to update
      this.controleUF.updateValueAndValidity();
    });
  }

  private _filtrar(valor: string): UnidadeFederativa[] {
    const valorFiltro = valor.toLowerCase();

    return this.listaEstados.filter((estado) => {
      return estado.nome.toLowerCase().includes(valorFiltro);
    });
  }

  // @Input() direcao: "origem" | "destino" = "origem";
  // @Input() textoCampo: "Origem" | "Destino" = "Origem";

  // label = this.direcao;
  // placeholder = this.textoCampo;
  // matPrefix = "x";
}
