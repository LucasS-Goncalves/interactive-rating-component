import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/notes.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit{
  note!:number;

  constructor(private notesService: NotesService){}
  ngOnInit(): void {
    this.notesService.givenNote.subscribe(
      (note: number) => {
        this.note = note;
      }
    )
  }
}
