import { Component, OnInit } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { MyDatatService } from '../data-service.service';
import { StatisticDTO } from '../statistic-class';



@Component({
  selector: 'app-unmeldung',
  templateUrl: './unmeldung.component.html',
  styleUrls: ['./unmeldung.component.css'],
})
export class UnmeldungComponent implements OnInit {
  cardDetails$!: Observable<any>;
  constructor(private _dataServec: MyDatatService) {

  }

  ngOnInit() {
    this.cardDetails$ = this._dataServec.getData();

  }



}


