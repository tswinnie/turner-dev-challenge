import { Component, OnInit } from '@angular/core';
import { TitlesService } from '../Services/titles.service';
import { Title } from '../Services/ITitle';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.css']
})
export class TitleListComponent implements OnInit {

  titles$: Observable<Title[]>;

  constructor(public titleService: TitlesService) { }

  ngOnInit() {
    this.titles$ = this.ShowTitles();
  }

  public ShowTitles(): Observable<Title[]> {
    return this.titleService.GetTitles();
  }

  public FindTitle(searchValue: string): Observable<Title[]> {
    return this.titleService.SearchTitle(searchValue);
  }


}
