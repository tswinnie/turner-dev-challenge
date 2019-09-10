import { Component, OnInit, Input } from '@angular/core';
import { Title } from '../Services/ITitle';

@Component({
  selector: 'app-title-details',
  templateUrl: './title-details.component.html',
  styleUrls: ['./title-details.component.css']
})
export class TitleDetailsComponent implements OnInit {

  @Input() title: Title;

  constructor() { }

  ngOnInit() {
  }

}
