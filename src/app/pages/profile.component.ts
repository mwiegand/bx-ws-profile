import { Component } from '@angular/core';

@Component({
  selector: 'my-profile',
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.css' ]
})

export class ProfileComponent {

  /*adds education code-by-color #140956*/
  schools = [
    {
      name: 'Generic School',
      start: new Date('2003-09-01'),
      end: new Date('2009-07-01'),
    },
    {
      name: 'Generic High School',
      start: new Date('2009-09-01'),
      end: new Date('2012-06-01'),
    },
    {
      name: 'Generic Univeristy',
      start: new Date('2012-09-01'),
      end: new Date(),
    }
  ];

  /*adds jobs code-by-color #140956*/
  works = [
    {
      name: 'Generic Internship',
      role: 'Director of Fundom (and Planner)',
      start: new Date('2007-11-26'),
      end: new Date('2007-11-30'),
    },
    {
      name: 'Generic Company',
      role: 'Key Account Manager Facility Management',
      start: new Date('2015-02-08'),
      end: new Date('2016-02-08'),
    },
    {
      name: 'IBM Deutschland GmbH',
      role: 'Bluemix Software Developer',
      start: new Date('2016-02-08'),
      end: new Date(),
    }
  ];

  /*adds skills code-by-color #1BA3FF*/
  skills = [
    {
      name: 'Problem Solving',
      score: 90+9,
    },
    {
      name: 'Luck',
      score: 7,
    },
    {
      name: 'Wisedome',
      score: 42,
    },
    {
      name: 'Bluemix',
      score: 4,
    },
    {
      name: 'Teamwork',
      score: 1+2,
    },
    {
      name: 'Power',
      score: 9000+1,
    },
    {
      name: 'Jokes',
      score: -1,
    },
  ]
}
