import { Component } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-styling-tool',
  templateUrl: './styling-tool.component.html',
  styleUrls: ['./styling-tool.component.css'],
})
export class StylingToolComponent {
  onClick() {
    const styleTool = document.querySelector('.btn-st') as Element;
    this.setClick(styleTool.parentElement as HTMLElement);
  }
  setClick(element: HTMLElement) {
    element.classList.toggle('pressed');
    element.classList.toggle('unpressed');
  }



}
