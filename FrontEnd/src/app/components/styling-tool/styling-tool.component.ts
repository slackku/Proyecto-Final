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
  ngOnInit(): void {
    const colorDiv = document.querySelectorAll('div.colorSph');
    let root = document.documentElement.style;
    const neutralSty = [
      'var(--cblack)',
      'var(--cwhite)',
      'var(--cpink)',
      'var(--ccharcoal)',
      'var(--cgreen)',
    ];
    const borderSty = [
      'var(--dborder)',
      'var(--bborder)',
      'var(--pborder)',
      'var(--dborder)',
      'var(--gborder)',
    ];
    const fontSty = [
      'var(--cwhite)',
      'var(--cblack)',
      'var(--pinkfont)',
      'var(--charcoalfont)',
      'var(--greenfont)',
    ];

    const imgsSty = [
      'none',
      'invert(100%)',
      'var(--pfilter)',
      'var(--cCfilter)',
      'var(--gfilter)',
    ];

    const primSty = [
      'var(--dprim)',
      'var(--wprim)',
      'var(--cwhite)',
      'var(--cCprim)',
      'var(--gprim)',
    ];

    const secSty = [
      'var(--dsec)',
      'var(--wsec)',
      'var(--cwhite)',
      'var(--cCsec)',
      'var(--gsec)',
    ];

    for (let i = 0; colorDiv.length > i; i++) {
      colorDiv[i].addEventListener('click', () => {
        root.setProperty('--neutral', neutralSty[i]);
        root.setProperty('--cborder', borderSty[i]);
        root.setProperty('--cfont', fontSty[i]);
        root.setProperty('--cfilterBW', imgsSty[i]);
        root.setProperty('--primary', primSty[i]);
        root.setProperty('--secundary', secSty[i]);
      });
    }
  }
}
