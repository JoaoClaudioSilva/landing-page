import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {

  skills = [
    { nome: 'JavaScript', logo: 'imgs/logos/js.svg', alt: 'JavaScript Logo' },
    { nome: 'Node.js', logo: 'imgs/logos/nodejs.svg', alt: 'Node.js Logo' },
    { nome: 'Angular', logo: 'imgs/logos/angular.svg', alt: 'Angular Logo' },
    { nome: 'HTML5', logo: 'imgs/logos/html5.svg', alt: 'HTML-5 Logo' },
    { nome: 'CSS3', logo: 'imgs/logos/css3.svg', alt: 'CSS-3 Logo' },
    { nome: 'SQL', logo: 'imgs/logos/sql.svg', alt: 'SQL Logo' },
    { nome: 'PostgreSQL', logo: 'imgs/logos/postgresql.svg', alt: 'PostgreSQL Logo' },
    { nome: 'MySQL', logo: 'imgs/logos/mysql.svg', alt: 'MySQL Logo' },
    { nome: 'MongoDB', logo: 'imgs/logos/mongodb.svg', alt: 'MongoDB Logo' },
    { nome: 'Git', logo: 'imgs/logos/git.svg', alt: 'Git Logo' }
  ];

  ngOnInit(): void {}
}
