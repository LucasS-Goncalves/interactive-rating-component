import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/notes.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit{

  notes: number[] = [];

  constructor(private notesService: NotesService){}

  ngOnInit(): void {
    this.notes = this.notesService.notes;
    console.log(this.notes)
  }

  onGivenNote(note: number){
    this.notesService.givenNote.emit(this.notes[note]);
  }

}
