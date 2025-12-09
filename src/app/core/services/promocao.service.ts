import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Promocao } from "../types/types";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class PromocaoService {
  private enderecoAPI = environment.enderecoAPI;

  constructor(private http: HttpClient) {}

  getPromocoes(): Observable<Promocao[]> {
    return this.http.get<Promocao[]>(`${this.enderecoAPI}/promocoes`);
  }
}
