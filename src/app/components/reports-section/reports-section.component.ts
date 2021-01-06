import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports-section',
  templateUrl: './reports-section.component.html',
  styleUrls: ['./reports-section.component.scss']
})
export class ReportsSectionComponent implements OnInit {

  reportArray = [
    {title: 'Gross Sale', info: "$2,456.45"},
    {title: 'Net Sales', info: "$2,456.45"},
    {title: 'Total Customers', info: "453"},
    {title: 'Total Covers', info: "$2,456.45"},
    {title: 'Total Orders', info: "2,453"},
    {title: 'Total Employees', info: "453"},
    {title: 'Total Taxes', info: "86.50%"},
    {title: 'Total Tips', info: "2.453"},
    {title: 'Total Returning Custumees', info: "453"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
