import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() {}

  givenNote = new EventEmitter<number>();

  notes: number[] = [1, 2, 3, 4, 5];
}
