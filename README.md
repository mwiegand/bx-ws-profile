# Bluemix Workshop App

Diese Anwendung wurde für einen Bluemix Workshop erstellt.

Die Anwendung basiert auf Angular4 und einem NodeJS Backend der die Anbindung zum Watson Discovery Service erstellt.

Im Rahmen dieses Workshops wird die Anwendung Schritt für Schritt zusammen gebaut und demonstriert wie ein Web-Entwickler Bluemix bedient, um eine WebApp zu bauen.
Hierfür wurde diese fertige Anwendung in kleine Teile zerlegt und kann per "code-by-color" (in Anlehnung an "Malen nach Zahlen") wieder zusammen gesetzt werden kann.

Als erstes müssen einige allgemeine Einstellungen für Bluemix vorgenommen werden, dass die Anwendung über eine eindeutige Web-URL erreichbar ist. Darauf folgen Personalisierungen der eigenen Anwendung, die eigene Internetpräsens mit der Profil-Seite und die Anbindung des Backends mit dem Watson Discovery Service. Das Backend muss befindet sich in diesem Repository und sollte zuerst erstellt werden, bevor die Learn-Seite zusammen gebaut wird.


- - - -


##### 1. defines appname code-by-color ![#FFFFFF](https://placehold.it/15/FAFAFA/000000?text=+) `#FFFFFF`
"xy" durch eigenen Initialien ersetzen
- `src/static/manifest.yml:5`
```yml
name: bx-xy-profile
host: bx-xy-profile
domain: mybluemix.net
```
- - - -


##### 2. init own App code-by-color  ![#76C8FF](https://placehold.it/15/76C8FF/000000?text=+) `#76C8FF`
"XY" durch eigenen Initialien ersetzen
- `src/index.html:5`
```html
<title>XY Profile</title>
```
- - - -

- `src/app/core/header/header.component.html:2`
```html
<span class="title ">XY</span>
```
- - - -


<details>
<summary>A. Profile</summary>
<p>

![#1A1862](https://placehold.it/15/1A1862/000000?text=+)
![#0F0842](https://placehold.it/15/0F0842/000000?text=+)
![#140956](https://placehold.it/15/140956/000000?text=+)
![#362F9F](https://placehold.it/15/362F9F/000000?text=+)
![#1BA3FF](https://placehold.it/15/1BA3FF/000000?text=+)

##### 1. inserts own profile picture code-by-color  ![#1A1862](https://placehold.it/15/1A1862/000000?text=+) `#1A1862`
- `src/assets/img/profile_pic.jpg`
![profile_pic](src/assets/img/profile_pic.jpg)
- - - -


##### 2. adds profile description code-by-color  ![#0F0842](https://placehold.it/15/0F0842/000000?text=+) `#0F0842`
- `src/app/pages/profile.component.html:7`
```html
<p><strong>Shiba Inu</strong></p>
<md-divider></md-divider>
<p><i>
  The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
  A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.
</i></p>
```
- - - -


##### 3. adds education code-by-color  ![#140956](https://placehold.it/15/140956/000000?text=+) `#140956`
- `src/app/pages/profile.component.ts:11`

```javascript
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
```
- - - -

- `src/app/pages/profile.component.html:28`
```html
<md-list-item *ngFor="let school of schools">
  <md-icon md-list-icon class="mat-list-icon">school</md-icon>
  <h4 md-line>{{school.name}}</h4>
  <p md-line class="text-wrap"> {{school.start | date:'MM/yyyy'}} - {{school.end | date:'MM/yyyy'}}</p>
</md-list-item>
```
- - - -



##### 4. adds jobs code-by-color ![#362F9F](https://placehold.it/15/362F9F/000000?text=+) `362F9F`
- `src/app/pages/profile.component.ts:30`

```javascript
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
```
- - - -

- `src/app/pages/profile.component.html:38`
```html
<md-list-item *ngFor="let job of works">
  <md-icon md-list-icon class="mat-list-icon">work</md-icon>
  <h4 md-line>{{job.name}}</h4>
  <i md-line class="text-wrap">{{job.role}}</i>
  <p md-line class="text-wrap"> {{job.start | date:'MM/yyyy'}} - {{job.end | date:'MM/yyyy'}} </p>
</md-list-item>
```
- - - -


##### 5. adds skills code-by-color ![#1BA3FF](https://placehold.it/15/1BA3FF/000000?text=+) `1BA3FF`
- `src/app/pages/profile.component.ts:52`
```javascript
skills = [
  {
    name: 'Problem Solving',
    score: 99,
  },
  {
    name: 'Luck',
    score: 7,
  },
  {
    name: 'Wisdom',
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
```
- - - -


- `src/app/pages/profile.component.html:49`

```html
<md-card fxFlex="100%" class="margin">
  <md-card-header>
    <div md-card-avatar class="star-header"></div>
    <md-card-title>Skills</md-card-title>
    <md-card-subtitle>Kenntnisse</md-card-subtitle>
  </md-card-header>
  <md-card-content>
        <span class="skill" *ngFor="let skill of skills" fxLayout="row" fxLayoutAlign="space-between center">
          <label>
            {{skill.name}}
          </label>
          <md-input-container class="margin">
            <input mdInput align="right" type="number" style="text-align: right;" disabled value="{{skill.score}}">
          </md-input-container>
          <md-slider min="1" max="5" step="0.1" onTouched="" change="" color="primary" value="{{skill.score}}"
                     thumbLabel tickInterval="0.1" mdTooltipPosition="before" mdTooltip="{{skill.score}}" disabled="">
          </md-slider>
        </span>
  </md-card-content>
</md-card>
```
- - - -

</p>
</details>

<details>
<summary>B. Learn</summary>
<p>

![#7F1C7D](https://placehold.it/15/7F1C7D/000000?text=+)
![#AB1A86](https://placehold.it/15/AB1A86/000000?text=+)
![#3B0256](https://placehold.it/15/3B0256/000000?text=+)


##### 1. init DataService code-by-color ![#7F1C7D](https://placehold.it/15/7F1C7D/000000?text=+) `7F1C7D`

- `src/app/shared/services/data.service.js:9`
```javascript
private dataURL = 'https://'+'<your_discovery_backend>'+'.mybluemix.net/api/query';  // URL to web api
// private dataURL = 'http://localhost:6000/api/query';
```
- - - -

- `src/app/pages/learn.component.js:2`
```javascript
import { DataService } from '../shared/services/data.service';
```
- - - -


- `src/app/pages/learn.component.js:21`
```javascript
private dataService: DataService,
```
- - - -



##### 2. adds discovery query to frontend code-by-color ![#AB1A86](https://placehold.it/15/AB1A86/000000?text=+) `AB1A86`

- `src/app/pages/learn.component.js:24`

```javascript
queryData(requestString: string): void {
  // check if request string is not empty
  if(requestString !== "") {
    this.results = [];
    this.discoverySpinner = true;
    console.log(requestString);
    this.dataService.query(requestString).then(data => {
      console.log(data);
      data.results.forEach(result => {
        result.html = result.html.split('<body>')[1];
        result.html = result.html.split('</body>')[0];

        if(result.highlight.hasOwnProperty('html')) {
          result.highlight.html.forEach(highlight => {
            // fix split line-break marks
            highlight = highlight.split(/(?:<br\/>|<br)/g).join('<br/>');
            // mark highlight paragraphs in document
            let text = highlight.split('<em>').join('');
            text = text.split('</em>').join('');
            let textIndex = result.html.indexOf(text);
            if (textIndex > 0) {
              highlight.split('').join('');
              let html = result.html.slice(0, textIndex) + '<mark>' + highlight + '</mark>' + result.html.slice(textIndex + text.length);
              result.html = html;
            }
            // check highlight paragraphs in document
            let xss = new RegExp("<(?!br\/>|mark>|\/|p>|em>)");
            if (xss.test(result.html)) {
              console.warn(result.html);
            }
          })
        }
      });
      // show results in frontend
      this.discoverySpinner = false;
      this.results = data.results;
    });
  }
}
```
- - - -

- `src/app/pages/learn.component.html:6`
```html
<input mdInput (keyup.enter)="queryData(requestString.value); requestString.value=''" placeholder="Request"
       #requestString/>
<button md-icon-button mdSuffix (click)="queryData(requestString.value); requestString.value=''">
  <md-icon>send</md-icon>
</button>
```
- - - -

- `src/app/pages/learn.component.html:33`
```html
<div fxFlex *ngFor="let result of results">
  <md-card class="margin">
    <md-card-header>
      <md-card-title><strong>{{result.extracted_metadata.title}}</strong></md-card-title>
      <md-card-subtitle>
        <md-card-subtitle *ngIf="result.highlight['enriched_text.categories.label']">
          <md-chip-list>
            <md-chip style="margin: 1px;"
                     *ngFor="let topic of result.highlight['enriched_text.categories.label']"
                     [innerHTML]="topic"></md-chip>
          </md-chip-list>
        </md-card-subtitle>
      </md-card-subtitle>
    </md-card-header>
    <md-card-content>
      <md-tab-group>
        <md-tab label="Highlights">
          <md-list fxFlex>
            <div fxFlex>
              <p md-line *ngFor="let highlight of result.highlight.text" class=" text-wrap">
                ... <span [innerHTML]="highlight"></span> ...
              </p>
            </div>
          </md-list>
        </md-tab>
        <md-tab label="Full Document">
          <md-list fxFlex>
            <div fxFlex class="document" [innerHTML]="result.html"></div>
          </md-list>
        </md-tab>
      </md-tab-group>
    </md-card-content>
  </md-card>
</div>
```
- - - -


##### 3. adds data-topics code-by-colors ![#3B0256](https://placehold.it/15/3B0256/000000?text=+) `3B0256`
- `src/app/pages/learn.component.ts:67`
```javascript
this.dataService.query(
  {filter:"enriched_text.categories:(score>0.8)",aggregation:"term(enriched_text.categories.label,count:99)",count:999}).then(data => {
    this.topics = data.aggregations[0].results
  })
```
  - `src/app/pages/learn.component.html:22`
```html
  <md-card-subtitle>
    <md-chip-list>
      <md-chip style="margin: 1px;" *ngFor="let topic of topics">{{topic.key}}</md-chip>
    </md-chip-list>
  </md-card-subtitle>
```
</p>
</details>
