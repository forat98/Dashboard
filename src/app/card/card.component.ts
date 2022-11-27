import { Component, Input, OnInit } from '@angular/core';
enum Sizes {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}
interface TotalData{
  dataBody: number;
}

interface ArrayWorkshops{
  id: number,
  workshopName?:string,
  imageUrl?:string ,
  firstName?: string,
  lastName?: string,
  profession?: string

}
interface DataFooter {
  key: string;
  value: number;
}



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {

  @Input() totalData!:TotalData;
  @Input() arrayDataWorkshops!:ArrayWorkshops[]
  @Input() dataFooter!:DataFooter[]
  @Input() color!:string;
  @Input() sizCard!:string;
  @Input() keyPartToShow:string=''


  constructor() {

  }

  ngOnInit() {
console.log('dataFooter',this.dataFooter)
  }

}
