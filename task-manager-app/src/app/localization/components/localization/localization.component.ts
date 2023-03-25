import { Component } from '@angular/core';

@Component({
  selector: 'app-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss']
})
export class LocalizationComponent {

  onClick() {
    const element: HTMLInputElement | null = document.querySelector('.lang-input');
    console.log(element?.checked)
  }

}
