import { Component, OnInit } from '@angular/core';
import { CardInfo } from 'src/app/interfaces/card-info.interface';

@Component({
  selector: 'app-info-card-section',
  templateUrl: './info-card-section.component.html',
  styleUrls: ['./info-card-section.component.scss']
})
export class InfoCardSectionComponent implements OnInit {


  public cardInfoArray: CardInfo[] = [
    {
      title: 'Net Sales',
      info: '$5, 723.00',
      icon: 'collections_bookmark'
    },
    {
      title: 'Current Labor %',
      info: '17.23%',
      icon: 'system_update_alt'
    },
    {
      title: 'Services Sales(Lunch)',
      info: '$2343.00',
      icon: 'collections_bookmark'
    },
    {
      title: 'No.of Staff clocked in',
      info: '12',
      icon: 'system_update_alt'
    },
    {
      title: 'Voids/Discounts',
      info: '$143.00',
      icon: 'local_offer'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
