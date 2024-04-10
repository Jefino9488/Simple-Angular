import { Component } from '@angular/core';

@Component({
  selector: 'app-character-counter',
  templateUrl: './character-counter.component.html',
  styleUrls: ['./character-counter.component.css']
})
export class CharacterCounterComponent {
  inputText: string = '';
  characterCount: number = 0;

  countCharacters() {
    this.characterCount = this.inputText.length;
  }
}
