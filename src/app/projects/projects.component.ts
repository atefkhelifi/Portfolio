import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  ngOnInit(): void {
    const card = document.querySelector('.card');

    if (card) {
      card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
      });
    }
  }
}
