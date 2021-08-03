import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';
import {ApiPalabrasService} from '../../servicios/api/api-palabras.service'
import { ResponseI } from 'src/app/modelos/response.interface';
import { Router } from '@angular/router';
import { FraseI } from 'src/app/modelos/palabra.interface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  PalabraSearch=new FormGroup({
    palabra : new FormControl('',Validators.required)
  })
  constructor(private api:ApiPalabrasService, private router:Router) { }

  ngOnInit(): void {
  }

  onSearch(id: FraseI){
    //this.api.GetByFrase(frase).subscribe(data =>{ 
    //  console.log(data);
    //})
    console.log(id)
    this.router.navigate(['ObtenerPalabras',id.palabra]);
  }

}
