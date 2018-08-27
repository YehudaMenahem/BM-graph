import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private curr1 = "ILS";
  private curr2 = "MYR";
  private curr3 = "BRL";
  private currencies = this.curr1 + "," + this.curr2 + "," + this.curr3;

  constructor(private http:HttpClient) { }

  getDataForChart() {
    return Observable.forkJoin(
      this.http.get('http://data.fixer.io/api/2018-08-20?access_key=41cc5867b5e3663e0a22556413195f74&symbols=' + this.currencies),
      this.http.get('http://data.fixer.io/api/2018-08-21?access_key=41cc5867b5e3663e0a22556413195f74&symbols=' + this.currencies),
      this.http.get('http://data.fixer.io/api/2018-08-22?access_key=41cc5867b5e3663e0a22556413195f74&symbols=' + this.currencies),
      this.http.get('http://data.fixer.io/api/2018-08-23?access_key=41cc5867b5e3663e0a22556413195f74&symbols=' + this.currencies),
      this.http.get('http://data.fixer.io/api/2018-08-24?access_key=41cc5867b5e3663e0a22556413195f74&symbols=' + this.currencies),
      this.http.get('http://data.fixer.io/api/2018-08-25?access_key=41cc5867b5e3663e0a22556413195f74&symbols=' + this.currencies),
      this.http.get('http://data.fixer.io/api/2018-08-26?access_key=41cc5867b5e3663e0a22556413195f74&symbols=' + this.currencies)
    );
  }

}
