import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoresService } from 'src/app/scores.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit{

  scores: number[] = [];
  score!: number;

  undefinedScore = false;

  constructor(private scoresService: ScoresService, private router: Router){}

  ngOnInit(): void {
    this.scores = this.scoresService.scores;
  }

  onGivenScore(score: number){
    if(score === undefined){
      this.undefinedScore = true;
    }else{
      console.log(score)
      this.scoresService.givenScore = score;
      this.router.navigate(['thank-you'])

    }
  }
}
