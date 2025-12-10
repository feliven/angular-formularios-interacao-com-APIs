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
      adultos: new FormControl(0),
      criancas: new FormControl(3),
      bebes: new FormControl(4),
    });
  }

  getDescricaoPassageiros(): string {
    let descricao!: string;

    let descricaoAdultos!: string;
    let descricaoCriancas!: string;
    let descricaoBebes!: string;

    const numeroAdultos = this.formBusca.get("adultos")?.value;
    const numeroCriancas = this.formBusca.get("criancas")?.value;
    const numeroBebes = this.formBusca.get("bebes")?.value;

    if (numeroAdultos && numeroAdultos > 0) {
      if (numeroAdultos > 1) {
        descricaoAdultos = numeroAdultos + " adultos";
      } else {
        descricaoAdultos = numeroAdultos + " adulto";
      }
    }

    if (numeroCriancas && numeroCriancas > 0) {
      if (numeroCriancas > 1) {
        descricaoCriancas = numeroCriancas + " crianças";
      } else {
        descricaoCriancas = numeroCriancas + " criança";
      }
    }

    if (numeroBebes && numeroBebes > 0) {
      if (numeroBebes > 1) {
        descricaoBebes = numeroBebes + " bebês";
      } else {
        descricaoBebes = numeroBebes + " bebê";
      }
    }

    const colocarVirgula = ", ";

    if (descricaoAdultos && descricaoCriancas && descricaoBebes) {
      descricao = descricaoAdultos + colocarVirgula + descricaoCriancas + colocarVirgula + descricaoBebes;
      return descricao;
    }

    if (descricaoAdultos && !descricaoCriancas && !descricaoBebes) {
      descricao = descricaoAdultos;
      return descricao;
    }

    if (descricaoAdultos && descricaoCriancas && !descricaoBebes) {
      descricao = descricaoAdultos + colocarVirgula + descricaoCriancas;
      return descricao;
    }

    if (descricaoAdultos && !descricaoCriancas && descricaoBebes) {
      descricao = descricaoAdultos + colocarVirgula + descricaoBebes;
      return descricao;
    }

    if (!descricaoAdultos && descricaoCriancas && !descricaoBebes) {
      descricao = descricaoCriancas;
      return descricao;
    }

    if (!descricaoAdultos && !descricaoCriancas && descricaoBebes) {
      descricao = descricaoBebes;
      return descricao;
    }

    if (!descricaoAdultos && descricaoCriancas && descricaoBebes) {
      descricao = descricaoCriancas + colocarVirgula + descricaoBebes;
      return descricao;
    }

    return "1 adulto";
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
