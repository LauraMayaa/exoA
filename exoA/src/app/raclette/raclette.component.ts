import { Component } from '@angular/core';

@Component({
  selector: 'app-raclette',
  templateUrl: './raclette.component.html',
  styleUrls: ['./raclette.component.scss']
})
export class RacletteComponent {

  title: string = 'Raclette party 🧀';

  isThisIngredientVital: boolean = true;

  isGuestListDisplayed: boolean = true;

  // isMovieColored: boolean = true;

  showGuest() {
    this.isGuestListDisplayed = !this.isGuestListDisplayed
  }

  isImportant() {
    this.isThisIngredientVital = !this.isThisIngredientVital
  }

  songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];

  isAdmin = true;

}
