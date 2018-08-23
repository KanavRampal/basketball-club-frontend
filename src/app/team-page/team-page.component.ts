import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  flip(cardName: string) {
   console.log(cardName);
   const card = document.querySelector('#' + cardName);
   card.classList.toggle('is-flipped');
  }
}
