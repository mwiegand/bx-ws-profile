import {Component, OnInit} from '@angular/core';

import { Data } from '../shared/models/data';
import { DataService } from '../shared/services/data.service';


@Component({
  selector: 'learn',
  templateUrl: './learn.component.html',
  styleUrls: [ './learn.component.css' ]
})

export class LearnComponent implements OnInit {
  datas: Data[];
  selectedData: Data;

  constructor(
    private dataService: DataService) { }

  ngOnInit(): void {
  }
  folders = [
    {
      name: 'Phoaskdfntos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

}
