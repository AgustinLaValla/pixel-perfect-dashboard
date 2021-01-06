import { Component, Input, OnInit } from '@angular/core';
import { CardInfo } from 'src/app/interfaces/card-info.interface';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  @Input() cardInfo: CardInfo

  constructor() { }

  ngOnInit(): void {
  }

}
