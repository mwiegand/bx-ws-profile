# Bluemix Workshop App

Diese Anwendung wurde für einen Bluemix Workshop erstellt.

## Idee zur App

Ziel der Anwendung ist es einerseits sich selbst auf einer Website zu präsentieren und andererseits eine intelligente Suche mit Watson Discovery zu bieten.
In der intelligenten Suche können sämtliche Dokumente wie PDFs, Word Dateien und HTML Seiten hochgeladen werden. Wichtig dabei ist, dass die Dokumente einzelne Kapitel enthalten.

### Funktionen der App

Die App bietet 3 Funktionen:

- Profil des Studenten visualisieren
- Anfragen an die Daten aus dem Watson Discovery Service visualisieren
- Automatisch beim ersten Starten der Anwendung die Dokumente in den Watson Discovery Service hochladen

![App functionalities](./sample-learning_720.jpg)

### Archtitektur

Die Anwendung basiert auf Angular4 und einem [NodeJS Backend](https://github.com/mwiegand/bx-ws-learning) der die Anbindung zum Watson Discovery Service erstellt.

Architektur:

![App architecture](./sample-learning-02_480.jpg)

Das Backend findet sich hier: [https://github.com/mwiegand/bx-ws-learning](https://github.com/mwiegand/bx-ws-learning)

## Anleitung

Im Rahmen dieses Workshops wird die Anwendung Schritt für Schritt zusammen gebaut und demonstriert wie ein Web-Entwickler Bluemix bedient, um eine WebApp zu bauen.
Dafür ist die Anleitung in folgende Schritte aufgeteilt:

+ Toolchain erstellen
+ Delivery Pipeline konfigurieren
+ Anwendung anpassen (code by color)
  + A. Profile (Anwendung personalisieren)
  + B. Learn (Anbindung an das Backend)

Die Anwendung besitzt im Quellcode Kommentare, die zu den Beschreibungen in dieser Anleitung passen. Diese sind mit dem Hex-Werten von Farben gekennzeichnet und die Beschreibungen haben Dateiangaben (`sr/index`) mit der entsprechenden Zeile (`:5`) in der Datei: `src/index.html:5`


## Toolchain erstellen
Also bevor mit dem Entwickeln angefangen werden kann, muss eine Toolchain mit Git-Repository auf Bluemix erstellt werden.
Zum Erstellen einer Toolchain muss in Bluemix in die Region "US-South" [Vereinigte Staaten (Süden)] gewechselt werden und in dem linken Menü unter `Services > DevOps > Toolchain` eine neue Toolchain erstellt werden

## Delivery Pipeline konfigurieren

### Build stage

```bash
#!/bin/bash
export NVM_DIR=/home/pipeline/nvm
export NODE_VERSION=7.9.0
export NVM_VERSION=0.33.2

npm config delete prefix \
  && curl https://raw.githubusercontent.com/creationix/nvm/v${NVM_VERSION}/install.sh | sh \
  && . $NVM_DIR/nvm.sh \
  && nvm install $NODE_VERSION \
  && nvm alias default $NODE_VERSION \
  && nvm use default \
  && node -v \
  && npm -v

npm install

npm run dist
```

### Deploy Stage

```bash
#!/bin/bash
cd dist
cf push "${CF_APP}"

# View logs
# cf logs "${CF_APP}" --recent
```

- - - -

## Anwendung anpassen (code by color)

#### 1. init own App code-by-color  ![#76C8FF](https://placehold.it/15/76C8FF/000000?text=+) `#76C8FF`
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

## A. Profile ![#1A1862](https://placehold.it/15/1A1862/000000?text=+) ![#0F0842](https://placehold.it/15/0F0842/000000?text=+) ![#140956](https://placehold.it/15/140956/000000?text=+) ![#362F9F](https://placehold.it/15/362F9F/000000?text=+) ![#1BA3FF](https://placehold.it/15/1BA3FF/000000?text=+)

#### 1. inserts own profile picture code-by-color  ![#1A1862](https://placehold.it/15/1A1862/000000?text=+) `#1A1862`

- `src/assets/img/profile_pic.jpg`
```
replace profile_pic.jpg with own picture as profile_pic.jpg
```
![profile_pic](src/assets/img/profile_pic.jpg)


- - - -


#### 2. adds profile description code-by-color  ![#0F0842](https://placehold.it/15/0F0842/000000?text=+) `#0F0842`

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


#### 3. adds education code-by-color  ![#140956](https://placehold.it/15/140956/000000?text=+) `#140956`


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

- `src/app/pages/profile.component.html:28`
```html
<md-list-item *ngFor="let school of schools">
  <md-icon md-list-icon class="mat-list-icon">school</md-icon>
  <h4 md-line>{{school.name}}</h4>
  <p md-line class="text-wrap"> {{school.start | date:'MM/yyyy'}} - {{school.end | date:'MM/yyyy'}}</p>
</md-list-item>
```
</p>
</details>

- - - -



#### 4. adds jobs code-by-color ![#362F9F](https://placehold.it/15/362F9F/000000?text=+) `362F9F`


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


#### 5. adds skills code-by-color ![#1BA3FF](https://placehold.it/15/1BA3FF/000000?text=+) `1BA3FF`


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

## B. Learn ![#7F1C7D](https://placehold.it/15/7F1C7D/000000?text=+)


#### 1. init DataService code-by-color ![#7F1C7D](https://placehold.it/15/7F1C7D/000000?text=+) `7F1C7D`

- `src/app/shared/services/data.service.ts:9`
```javascript
private dataURL = 'https://'+'<your_discovery_backend>'+'.mybluemix.net/api/query';  // URL to web api
// private dataURL = 'http://localhost:6000/api/query';
```

- - - -
