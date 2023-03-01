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

    // document.addEventListener('mouseout', () => {
    //   cursor.style.display = 'none';
    // });

    const btns_edit = document.getElementsByClassName('btn-edit');
    const links = document.querySelector('a') as HTMLElement;
    const btns = document.getElementsByClassName('btn');

    links.addEventListener('mouseenter', () => {
      cursor.classList.toggle('normal');
      cursor.classList.add('ontext');
    });

    links.addEventListener('mouseleave', () => {
      cursor.classList.toggle('ontext');
      cursor.classList.add('normal');
    });

    for (let i = 0; i < btns_edit.length; i++) {
      btns_edit[i].addEventListener('mouseenter', () => {
        cursor.classList.toggle('normal');
        cursor.classList.add('ontext');
      });
      btns_edit[i].addEventListener('mouseleave', () => {
        cursor.classList.toggle('ontext');
        cursor.classList.add('normal');
      });
    }
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('mouseenter', () => {
        cursor.classList.toggle('normal');
        cursor.classList.add('ontext');
      });
      btns[i].addEventListener('mouseleave', () => {
        cursor.classList.toggle('ontext');
        cursor.classList.add('normal');
      });
    }
  }
}
