import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports-section',
  templateUrl: './reports-section.component.html',
  styleUrls: ['./reports-section.component.scss']
})
export class ReportsSectionComponent implements OnInit {

  reportArray = [
    {title: 'Gross Sale', price: "$2,456.45"},
    {title: 'Gross Sale', price: "$2,456.45"},
    {title: 'Gross Sale', price: "$2,456.45"},
    {title: 'Gross Sale', price: "$2,456.45"},
    {title: 'Gross Sale', price: "$2,456.45"},
    {title: 'Gross Sale', price: "$2,456.45"},
    {title: 'Gross Sale', price: "$2,456.45"},
    {title: 'Gross Sale', price: "$2,456.45"},
    {title: 'Gross Sale', price: "$2,456.45"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
