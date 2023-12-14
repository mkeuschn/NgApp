import { Component, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Tooltip } from 'bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}

  ngOnInit() {}

  private elementRef: ElementRef = inject(ElementRef);

  ngAfterViewInit(): void {
    const tooltipTriggerList = this.elementRef.nativeElement.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    [...tooltipTriggerList].forEach((el) => {
      console.log(el);
      new Tooltip(el);
    });
  }
}
