import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  styles: Partial<CSSStyleDeclaration> = {
    width: '70%',
    maxWidth: '500px',

    margin: '0 auto',
  };
  animationCreated(animationItem: AnimationItem): void {}

  options: AnimationOptions = {
    path: 'assets/images/Animation.json',
  };
}
