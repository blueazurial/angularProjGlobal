import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent {
  titel: string = 'stog rage'

  enabled: boolean = false;





  changeMe() : void {
    this.titel = 'test modofie une vameur'

  }

  disableMe(): void {
    this.titel = 'marc aime le jeux'
    this.enabled = !this.enabled;
  }
}
