import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/notes.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit{

  notes: number[] = [];
  note!: number;

  constructor(private notesService: NotesService){}

  ngOnInit(): void {
    this.notes = this.notesService.notes;
  }

  onGivenNote(note: number){
    this.notesService.givenNote.emit(note);
  }
}
