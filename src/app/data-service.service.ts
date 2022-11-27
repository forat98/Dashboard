import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DataStatistic, StatisticDTO } from './statistic-class';

@Injectable({
  providedIn: 'root',
})
export class MyDatatService implements OnInit {
  baseUrl: string =
    'https://run.mocky.io/v3/2d66a761-b878-4d48-a017-4042498cd535';
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.getData()
  }

  getData(): Observable<any> {
    return this.http.get<any>(this.baseUrl).pipe(
      map((res) => {
        return res['data'];
      })
    );
  }
}
