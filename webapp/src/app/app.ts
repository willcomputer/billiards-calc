import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  
  sliderPosition:number = 0
  sliderCutAngle:number = this.sliderPosition

  calculateShot(value: any) {
    this.sliderCutAngle = this.sliderPosition
  }
}
