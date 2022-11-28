import { Component, OnInit } from '@angular/core';
import {LangDefinition, TranslocoService} from '@ngneat/transloco';

@Component({
  selector: 'app-layaout',
  templateUrl: './layaout.component.html',
  styleUrls: ['./layaout.component.css']
})
export class LayaoutComponent implements OnInit {
  lang!:string;
constructor(  private _translocoService: TranslocoService,) {
  _translocoService.langChanges$.subscribe(lang =>
    this.lang=lang
)
}




  ngOnInit() {
  }



}
