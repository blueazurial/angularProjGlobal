import { Component } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.scss']
})
export class Exo1Component {
    // Déclaration des variables pour les heures, minutes, secondes et le minuteur
     timer:  any;
     seconds: number = 0;
     minutes: number = 0;
     hours: number = 0;
     timerRunning: boolean = false;

    // Fonction pour démarrer le minuteur
    startTimer(): void {
      if (!this.timerRunning) { // Vérifie si le minuteur n'est pas déjà en cours
        this.timer = setInterval(() => this.updateTimer(), 1000);
        this.timerRunning = true;
      }
    }
   //Fonction pour mettre en pause le minuteur
    pauseTimer(): void {
      clearInterval(this.timer);
      this.timerRunning = false;// Reinitialise la variable pour permettre de redemarrer
    }
    
    //réinitialiser le minuteur
    resetTimer(): void {
      clearInterval(this.timer);
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 0;
      this.timerRunning = false; // Reinitialise la variable pour permettre de redemarrer
    }
    // Fonction privée pour mettre à jour le minuteur chaque secondes
    private updateTimer(): void {
      this.seconds++;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
        if (this.minutes === 60) {
          this.minutes = 0;
          this.hours++;
        }
      }
    }

   
  //pour formater le temps avec des zeros devant si nécessair
    
  formatTime(time: number): string {
    return time < 10 ? '0' + time : String(time);
  }
}



   
  

