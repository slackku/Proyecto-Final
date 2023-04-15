import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css'],
})
export class CursorComponent {
  ngOnInit(): void {
    const cursor = document.querySelector('#cursor') as HTMLElement;
    document.addEventListener('mousemove', (e) => {
      let x = e.clientX;
      let y = e.clientY;
      cursor.style.top = y - 10 + 'px';
      cursor.style.left = x - 10 + 'px';
      cursor.style.display = 'block';
    });

    const btns_edit = document.getElementsByClassName('btn-edit');
    const links = document.querySelector('a') as HTMLElement;
    // Correccion para el hover de botones log in & out
    // *ngIf directamente en los html o en los contenedores generados de Angular
    // no permite la correcta obtencion de dichos elementos con metodos de java 
    //(retornan listas de lenght 0)
    const btns = document.getElementsByClassName('button-container'); 
    const colorSph = document.getElementsByClassName('colorSph');

    this.eloHtmlColection(colorSph, cursor);
    this.eloHtmlColection(btns_edit, cursor);
    this.eloHtmlColection(btns, cursor);
    this.eloHtmlElement(links, cursor);
  }

  eloHtmlElement(htmlE: HTMLElement, cursor: HTMLElement) {
    //Event Listener on a HTMLElement
    htmlE.addEventListener('mouseenter', () => {
      cursor.classList.toggle('normal');
      cursor.classList.add('ontext');
    });
    htmlE.addEventListener('mouseleave', () => {
      cursor.classList.toggle('ontext');
      cursor.classList.add('normal');
    });
  }
  eloHtmlColection(htmlC: HTMLCollection, cursor: HTMLElement) {
    //Event Listener on a HTMLCollection
    for (var i = 0; i < htmlC.length; i++) {
      htmlC[i].addEventListener('mouseenter', () => {
        cursor.classList.toggle('normal');
        cursor.classList.add('ontext');
      });
      htmlC[i].addEventListener('mouseleave', () => {
        cursor.classList.toggle('ontext');
        cursor.classList.add('normal');
      });
    }
  }
}
