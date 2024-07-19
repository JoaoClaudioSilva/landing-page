import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacao',
  templateUrl: './educacao.component.html',
  styleUrl: './educacao.component.css'
})
export class EducacaoComponent implements OnInit {

  cursos = [
    { data: '2020 - presente', titulo: 'Bacharelado em Engenharia de Computação', descricao: 'Universidade Tecnológica Federal do Paraná' },
    { data: '2016 - 2019', titulo: 'Curso Técnico em Eletroeletrônica ', descricao: 'Centro Estadual de Educação Profissional' },
  ];

  constructor() { }

  ngOnInit(): void {}
}
