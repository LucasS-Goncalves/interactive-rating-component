import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoresService } from 'src/app/scores.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit{

  score!:number;

  constructor(private scoresService: ScoresService, private router: Router){}

  ngOnInit(): void {
    this.score = this.scoresService.givenScore;
    if(this.score === undefined) {
      this.router.navigate(['']);
    }
  }
}
