import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  title = 'tarefa_7_angular';


public ac1 = 0.0;
public ac2 = 0.0;
public ag = 0.0;
public af = 0.0;
public mediaFinal = 0.0;

public n1 = 0.0;
public n2 = 0.0;
public opm = " ";
public resultado = 0.0;

public formularioAluno: FormGroup = this.formBuilder.group({
  ra: ["", Validators.required],
  nome: ["", Validators.required],
  email: ["", Validators.required],
  celular: ["", Validators.required]
});

public valorApolice = 0.0;
public formularioCarro: FormGroup = this.formBuilder.group({
  nome: ["", Validators.required],
  sexo: ["", Validators.required],
  idade: ["", Validators.required],
  valor: ["", Validators.required]
});


  ngOnInit(): void {

  }

  CalcularMedia() {
   this.mediaFinal = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45)
  }

  CalcularOP() {

    if(this.opm.trim() == "/"){
      this.resultado = this.n1 / this.n2;
    }

    if(this.opm.trim() == "*"){
      this.resultado = this.n1 * this.n2;
    }

    if(this.opm.trim() == "-"){
      this.resultado = this.n1 - this.n2;
    }

    if(this.opm.trim() == "+"){
      this.resultado = (Number(this.n1) + Number(this.n2));
    }

   }

   SalvarAluno() {
    if(this.formularioAluno.status == "INVALID")
    {
       alert("Preencha todos os campos");
    }
    else{
      alert("Cadastro realizado");
    }
   }

   
   CalcularApolice() {
    if(this.formularioCarro.value.sexo == "M" && this.formularioCarro.value.idade <= 25)
    {
      this.valorApolice = this.formularioCarro.value.valor * 0.15;
    }

    if(this.formularioCarro.value.sexo == "M" && this.formularioCarro.value.idade > 25)
    {
      this.valorApolice = this.formularioCarro.value.valor * 0.10;
    }

    if(this.formularioCarro.value.sexo == "F")
    {
      this.valorApolice = this.formularioCarro.value.valor * 0.08;
    }

   }
   

}


