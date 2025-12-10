import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatChipSelectionChange } from "@angular/material/chips";
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from "src/app/shared/modal/modal.component";

@Injectable({
  providedIn: "root",
})
export class FormBuscaService {
  formBusca: FormGroup;

  constructor(private dialog: MatDialog) {
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false),
      origem: new FormControl(null),
      destino: new FormControl(null),
      classe: new FormControl("Econômica"),
      adultos: new FormControl(5),
      criancas: new FormControl(3),
      bebes: new FormControl(4),
    });
  }

  getDescricaoPassageiros(): string {
    const numeroAdultos = this.formBusca.get("adultos")?.value || 0;
    const numeroCriancas = this.formBusca.get("criancas")?.value || 0;
    const numeroBebes = this.formBusca.get("bebes")?.value || 0;

    const descricao: string[] = [];

    if (numeroAdultos > 0) {
      descricao.push(`${numeroAdultos} ${numeroAdultos > 1 ? "adultos" : "adulto"}`);
    }

    if (numeroCriancas > 0) {
      descricao.push(`${numeroCriancas} ${numeroCriancas > 1 ? "crianças" : "criança"}`);
    }

    if (numeroBebes > 0) {
      descricao.push(`${numeroBebes} ${numeroBebes > 1 ? "bebês" : "bebê"}`);
    }

    return descricao.length > 0 ? descricao.join(", ") : "1 adulto";
  }

  obterControle(nome: string): FormControl {
    const control = this.formBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
  }

  alterarClasse(evento: MatChipSelectionChange, classe: string) {
    if (evento.selected) {
      this.formBusca.patchValue({ classe: classe });
      console.log("Passagem alterada para", classe);
    }
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: "50%",
    });
  }
}
