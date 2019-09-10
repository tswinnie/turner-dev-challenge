import { Component, OnInit } from '@angular/core';
import { TitlesService } from '../Services/titles.service';
import { Title } from '../Services/ITitle';
import { Observable, Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-title-search',
  templateUrl: './title-search.component.html',
  styleUrls: ['./title-search.component.css']
})

export class TitleSearchComponent implements OnInit {

  titleResults$: Observable<Title[]>;
  private searchTerms = new Subject<string>();
  selectedTitle: Title;
  constructor(public titleService: TitlesService) { }

  ngOnInit() {

    this.titleResults$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.titleService.SearchTitle(term)),
    );

  }

  private search(term: string): void {
    this.searchTerms.next(term);
  }

  onSelect(title: Title): void {
    this.selectedTitle = title;
  }

}
