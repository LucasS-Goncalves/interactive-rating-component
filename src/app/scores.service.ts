import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() {}

  givenNote!: number;

  notes: number[] = [1, 2, 3, 4, 5];
}
