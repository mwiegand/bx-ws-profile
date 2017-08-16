import {Component, OnInit} from '@angular/core';

/*init DataService code-by-colors #7F1C7D*/

@Component({
  selector: 'learn',
  templateUrl: './learn.component.html',
  styleUrls: [ './learn.component.css' ]
})

export class LearnComponent implements OnInit {

  results: any[] =[];
  topics: any[] =[];

  discoverySpinner = false;

  constructor(
    /*init DataService code-by-color #7F1C7D*/
  ) { }

  /*adds discovery query to frontend code-by-color #AB1A86*/

  ngOnInit(): void {
    /*adds data-topics code-by-color #3B0256*/
  }
}
