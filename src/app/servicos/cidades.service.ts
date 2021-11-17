import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cidade } from '../model/Cidade';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  constructor(private http: HttpClient) { }

  public getCidadesPorEstado(idEstado: number) {
    return this.http.get<Cidade[]>(environment.apiUrl+"/cidades?estado="+idEstado);
  }
}
