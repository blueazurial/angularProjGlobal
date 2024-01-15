import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
  upper: string = 'yolo limite est';
  lower: string = 'zoom stp';
  dateDuJour: Date = new Date();



}
