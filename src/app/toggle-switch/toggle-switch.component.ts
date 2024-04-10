import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.css']
})
export class ToggleSwitchComponent {
  isOn: boolean = false;

  toggle() {
    this.isOn = !this.isOn;
  }
}
