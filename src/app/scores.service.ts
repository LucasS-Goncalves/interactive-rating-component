import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  constructor() {}

  givenScore!: number;

  scores: number[] = [1, 2, 3, 4, 5];
}
