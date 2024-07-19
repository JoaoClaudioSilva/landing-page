import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {

  skills = [
    { nome: 'HTML5', logo: 'imgs/logos/html5.svg', alt: 'HTML-5 Logo' },
    { nome: 'CSS3', logo: 'imgs/logos/css3.svg', alt: 'CSS-3 Logo' },
    { nome: 'Angular', logo: 'imgs/logos/angular.svg', alt: 'Angular Logo' },
    { nome: 'JavaScript', logo: 'imgs/logos/js.svg', alt: 'JavaScript Logo' },
    { nome: 'Node.js', logo: 'imgs/logos/nodejs.svg', alt: 'Node.js Logo' },
    { nome: 'Python', logo: 'imgs/logos/python.svg', alt: 'Python Logo' },
    { nome: 'React', logo: 'imgs/logos/react.svg', alt: 'React Logo' },
    { nome: 'SQL', logo: 'imgs/logos/sql.svg', alt: 'SQL Logo' },
    { nome: 'SQLite', logo: 'imgs/logos/sqlite.svg', alt: 'SQLite Logo' },
    { nome: 'Git', logo: 'imgs/logos/git.svg', alt: 'Git Logo' }
  ];

  ngOnInit(): void {}
}
