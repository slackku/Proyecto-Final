import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css'],
})
export class CursorComponent {
  ngOnInit(): void {
    const cursor = document.querySelector('.cursor') as HTMLElement;
    document.addEventListener('mousemove', (e) => {
      let x = e.clientX;
      let y = e.clientY;
      cursor.style.top = y - 10 + 'px';
      cursor.style.left = x - 10 + 'px';
      cursor.style.display = 'block';
    });

    document.addEventListener('mouseout', () => {
      cursor.style.display = 'none';
    });
  }
}
