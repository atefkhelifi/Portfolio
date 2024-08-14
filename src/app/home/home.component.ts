import {
  Component,
  ElementRef,
  ViewChild,
  Renderer2,
  OnInit,
} from '@angular/core';
import { ParallaxService } from '../services/parallax.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('elem') elem: ElementRef = {} as ElementRef;
  @ViewChild('elem1') elem1: ElementRef = {} as ElementRef;

  mouseX = 0;
  mouseY = 0;
  top = 60;
  left = 60;
  constructor(
    private parallaxService: ParallaxService,
    private renderer: Renderer2
  ) {}
  // Inside your component class
  ngOnInit(): void {
    setTimeout(() => {
      const firstWordElement = document.getElementById('firstWord');
      const secondWordElement = document.getElementById('secondWord');

      if (firstWordElement && secondWordElement) {
        firstWordElement.style.display = 'none';
        secondWordElement.style.display = 'block';
      }
    }, 3000); // Change the delay time (in milliseconds) as needed
  }
  ngAfterViewInit() {
    this.parallaxService.applyParallax(this.elem.nativeElement);
    this.renderer.listen('document', 'mousemove', (event: MouseEvent) => {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
      // console.log(this.mouseX);

      this.updatePosition();
    });
    // this.parallaxService.applyParallax1(this.elem1.nativeElement);
  }

  updatePosition() {
    this.elem1.nativeElement.style.top = this.mouseY + 'px';
    // console.log(this.elem1.nativeElement.top);
    this.elem1.nativeElement.style.left = this.mouseX + 'px';
  }
}
