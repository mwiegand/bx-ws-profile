import {Component, OnInit} from '@angular/core';

/*init DataService code-by-colors #7F1C7D*/
import { DataService } from '../shared/services/data.service';
import { MdSnackBar } from '@angular/material';

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
    public snackBar: MdSnackBar,
    /*init DataService code-by-color #7F1C7D*/
    private dataService: DataService,
  ) { }

  showErrBar(): void {
    this.snackBar.open('server not responding', 'hide');
  }

   checkCleanHTML(html: string): boolean {
     // check highlight paragraphs in document
     let xss = new RegExp("<(?!br\/>|mark>|\/|p>|em>)");
     return xss.test(html);
   }

  injectHighlights(result: any):any {
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

      })
    }
    if (this.checkCleanHTML(result.html))
      return result;
    else
      return result;
  }

  /*adds discovery query to frontend code-by-color #AB1A86*/
  queryData(requestString: string): void {
    // check if request string is not empty
    if(requestString !== "") {
      this.results = [];
      this.discoverySpinner = true;
      console.log(requestString);
      this.dataService.query(requestString).then(data => {
        console.log(data);
        data.results.forEach(result => {
          result = this.injectHighlights(result);
        });
        // show results in frontend
        this.discoverySpinner = false;
        this.results = data.results;
      }).catch(err => {
        this.discoverySpinner = false;
        this.showErrBar();
      });
    }
  }


  ngOnInit(): void {
    /*adds data-topics code-by-color #3B0256*/
    this.dataService.query(
      {filter:"enriched_text.categories:(score>0.8)",aggregation:"term(enriched_text.categories.label,count:99)",count:999}).then(data => {
      this.topics = data.aggregations[0].results
    }).catch(err => {
      this.showErrBar();
    });
  }
}
