import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, shareReplay } from "rxjs";
import { environment } from "../../../environments/environment";
import { UnidadeFederativa } from "../types/types";

@Injectable({
  providedIn: "root",
})
export class UnidadeFederativaService {
  private enderecoAPI: string = environment.enderecoAPI;
  private cache$?: Observable<UnidadeFederativa[]>;

  constructor(private http: HttpClient) {}

  listarEstados(): Observable<UnidadeFederativa[]> {
    if (!this.cache$) {
      this.cache$ = this.requestEstados().pipe(shareReplay(1));
    }

    return this.cache$;
  }

  private requestEstados(): Observable<UnidadeFederativa[]> {
    return this.http.get<UnidadeFederativa[]>(`${this.enderecoAPI}/estados`);
  }
}
