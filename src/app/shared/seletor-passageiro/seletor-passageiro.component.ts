import { Component, forwardRef, Input } from "@angular/core";
import { BotaoControleComponent } from "../botao-controle/botao-controle.component";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-seletor-passageiro",
  imports: [BotaoControleComponent],
  templateUrl: "./seletor-passageiro.component.html",
  styleUrl: "./seletor-passageiro.component.scss",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeletorPassageiroComponent),
      multi: true,
    },
  ],
})
export class SeletorPassageiroComponent implements ControlValueAccessor {
  @Input() titulo!: string;
  @Input() subtitulo!: string;

  quantidade: number = 0;
  onChange = (valor: number) => {};
  onTouched = () => {};

  writeValue(valor: number): void {
    this.quantidade = valor;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // throw new Error("Method not implemented.");
  }

  decrementar() {
    if (this.quantidade > 0) {
      this.quantidade -= 1;
      this.onChange(this.quantidade);
      this.onTouched();
      console.log(this.quantidade);
    }
  }

  incrementar() {
    this.quantidade += 1;
    this.onChange(this.quantidade);
    this.onTouched();
    console.log(this.quantidade);
  }
}
