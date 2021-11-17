import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaginaParoquias } from '../model/PaginaParoquias';
import { Paroquia } from '../model/Paroquia';

@Injectable({
  providedIn: 'root'
})
export class ParoquiasService {

  constructor(private http: HttpClient) { }

  public recuperarParoquiasPorCidade(idCidade: number, pagina: number) {
    return this.http.get<PaginaParoquias>(environment.apiUrl+"/paroquias?cidade="+idCidade+"&page="+pagina);
  }

  public recuperarDetalhesDaParoquia(idParoquia: number) {
    return this.http.get<Paroquia>(environment.apiUrl+"/paroquias/"+idParoquia);
  }
}
