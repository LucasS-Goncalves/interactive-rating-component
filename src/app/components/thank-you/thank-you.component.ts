import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/notes.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit{

  note!:number;

  constructor(private notesService: NotesService, private router: Router){}

  ngOnInit(): void {
    this.note = this.notesService.givenNote;
    if(this.note === undefined) {
      this.router.navigate(['']);
    }
  }
}
