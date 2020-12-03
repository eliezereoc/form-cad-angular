import { Component, OnInit } from '@angular/core';
import { FormCad } from '../../classes/form-cad'
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new FormCad());
  }

  createForm(formCad: FormCad) {
    this.formCadastro = this.formBuilder.group({
      nome: [formCad.nome],
      tipo: [formCad.tipo],
      genero: [formCad.genero],
      dataNascimento: [formCad.dataNascimento],
      observacao: [formCad.observacao],
      inativo: [formCad.inativo]
    })
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formCadastro.value);
  }

}
