import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isNoTopo = false;
  showConteudo = false;

  @HostListener('window:resize', [])
  onResize() {
    this.updateWidth();
  }

  toggleConteudo() {
    this.showConteudo = !this.showConteudo;
  }

  updateWidth() {
    this.showConteudo = window.innerWidth > 700;
  }

  ngOnInit() {
    try {
      this.updateWidth();
    } catch (e) {}
  }
}
