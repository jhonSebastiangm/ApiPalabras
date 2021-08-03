import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';
import {ApiPalabrasService} from '../../servicios/api/api-palabras.service'
import { ResponseI } from 'src/app/modelos/response.interface';
import { Router } from '@angular/router';
import { FraseI } from 'src/app/modelos/palabra.interface';
@Component({
  selector: 'app-palabras',
  templateUrl: './palabras.component.html',
  styleUrls: ['./palabras.component.css']
})
export class PalabrasComponent implements OnInit {
  

  PalabraSearch=new FormGroup({
    palabra : new FormControl('',Validators.required)
  })

  constructor(private api:ApiPalabrasService, private router:Router) { }

  ngOnInit(): void {
  }
  onSearch(frase: FraseI){
    //this.api.GetByFrase(frase).subscribe(data =>{ 
    //  console.log(data);
    //})
 
    this.router.navigate(['ObtenerPalabras',frase.palabra]);
  }

}
