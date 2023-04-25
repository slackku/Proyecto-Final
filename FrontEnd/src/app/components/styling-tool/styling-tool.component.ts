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
      'var(--cred)',
    ];
    const borderSty = [
      'var(--wTr)',
      'var(--bTr)',
      'var(--pborder)',
      'var(--wTr)',
      'var(--gborder)',
      'var(--rborder)',
    ];
    const fontSty = [
      'var(--cwhite)',
      'var(--cblack)',
      'var(--pinkfont)',
      'var(--charcoalfont)',
      'var(--greenfont)',
      'var(--cwhite)',
    ];

    const imgsSty = [
      'none',
      'invert(100%)',
      'var(--pfilter)',
      'var(--cCfilter)',
      'var(--gfilter)',
      'var(--rfilter)',
    ];

    const primSty = [
      'var(--credish)',
      'var(--cgraytwo)',
      'var(--cwhite)',
      'var(--cwhite)',
      'var(--cwhite)',
      'var(--cwhite)',
    ];

    const secSty = [
      'var(--cwhite)',
      'var(--cgrayone)',
      'var(--cmagish)',
      'var(--cgrayone)',
      'var(--clighterGreen)',
      'var(--clighterRed)',
    ];

    const headerSty = [
      'var(--cwhite)',
      'var(--cblack)',
      'var(--cmagish)',
      'var(--cgrayone)',
      'var(--clighterGreen)',
      'var(--clighterRed)',
    ];

    const slName = [
      'var(--credish)',
      'var(--cgraythree)',
      'var(--accentPink)',
      'var(--cgrayfour)',
      'var(--cblack)',
      'var(--cblack)',
    ];

    const hoverPrim = [
      'var(--dTrA)',
      'var(--dTrB)',
      'var(--wTr)',
      'var(--wTr)',
      'var(--wTr)',
      'var(--rTrA)',
    ];

    const hoverSec = [
      'var(--wTr)',
      'var(--wTrB)',
      'var(--pTrB)',
      'var(--ccTrB)',
      'var(--gTrB)',
      'var(--rTrB)',
    ];

    if (localStorage.getItem('color-index') != null) {
      let index: any;
      index = localStorage.getItem('color-index');
      root.setProperty('--neutral', neutralSty[parseInt(index)]);
      root.setProperty('--cborder', borderSty[parseInt(index)]);
      root.setProperty('--cfont', fontSty[parseInt(index)]);
      root.setProperty('--cfilterBW', imgsSty[parseInt(index)]);
      root.setProperty('--primary', primSty[parseInt(index)]);
      root.setProperty('--secundary', secSty[parseInt(index)]);
      root.setProperty('--header', headerSty[parseInt(index)]);
      root.setProperty('--slName', slName[parseInt(index)]);
      root.setProperty('--hoverPrim', hoverPrim[parseInt(index)]);
      root.setProperty('--hoverSec', hoverSec[parseInt(index)]);
    }

    for (let i = 0; colorDiv.length > i; i++) {
      colorDiv[i].addEventListener('click', () => {
        root.setProperty('--neutral', neutralSty[i]);
        root.setProperty('--cborder', borderSty[i]);
        root.setProperty('--cfont', fontSty[i]);
        root.setProperty('--cfilterBW', imgsSty[i]);
        root.setProperty('--primary', primSty[i]);
        root.setProperty('--secundary', secSty[i]);
        root.setProperty('--header', headerSty[i]);
        root.setProperty('--slName', slName[i]);
        root.setProperty('--hoverPrim', hoverPrim[i]);
        root.setProperty('--hoverSec', hoverSec[i]);
        localStorage.setItem('color-index', i.toString());
      });
    }
  }
}
