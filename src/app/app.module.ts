import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { CounterComponent } from './counter/counter.component';
import { TimerComponent } from './timer/timer.component';
import { CharacterCounterComponent } from './character-counter/character-counter.component';
import { ToggleSwitchComponent } from './toggle-switch/toggle-switch.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageSliderComponent,
    AuthFormComponent,
    CalculatorComponent,
    CounterComponent,
    TimerComponent,
    CharacterCounterComponent,
    ToggleSwitchComponent,
    PasswordGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
