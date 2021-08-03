import { Injectable } from '@angular/core';
import { ResponseI } from 'src/app/modelos/response.interface';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiPalabrasService {
  url:string="https://localhost:44315/api/Palabras/";

  constructor(private httpclient:HttpClient) { }

  GetByFrase(frase:string):Observable<ResponseI>{
    return this.httpclient.get<ResponseI>(this.url+frase)
  }
}
