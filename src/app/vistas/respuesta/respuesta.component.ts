import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiPalabrasService } from 'src/app/servicios/api/api-palabras.service';
import { ResponseI } from 'src/app/modelos/response.interface';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {
  Respuestas:ResponseI[]=[]
  frase:string | null | undefined 
  constructor(private service:ApiPalabrasService,private routeActivated:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.frase = this.routeActivated.snapshot.paramMap.get('frase');
    if(this.frase){
      this.service.GetByFrase(this.frase).subscribe((data:any)=>{
      this.Respuestas=data;
      })
    }
  }

}
