import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public DataSource: any[] = [
        { position: 1, name: 'Hydrogen', status: 'SALE', date: new Date(2020, 13, 4), price: 24 },
        { position: 2, name: 'Hydrogen', status: 'EXTENDED', date: new Date(2020, 13, 4), price: 29 },
        { position: 3, name: 'Hydrogen', status: 'TAX', date: new Date(2020, 13, 4), price: 64 },
        { position: 4, name: 'Hydrogen', status: 'member', date: new Date(2020, 13, 4), price: -24 },
        { position: 5, name: 'Hydrogen', status: 'SALE', date: new Date(2020, 13, 4), price: 24 },
        { position: 6, name: 'Hydrogen', status: 'SALE', date: new Date(2020, 13, 4), price: 7624 },
        { position: 7, name: 'Hydrogen', status: 'SALE', date: new Date(2020, 13, 4), price: 24 },
        { position: 8, name: 'Hydrogen', status: 'SALE', date: new Date(2020, 13, 4), price: -224 }

    ];
    public DataSourceForThird: any[] = [
        { position: 1, name: 'James Morgan', status: 'SALE', date: new Date(2020, 13, 4), price: 24 },
        { position: 2, name: 'Tony Stark', status: 'EXTENDED', date: new Date(2020, 13, 4), price: 29 },
        { position: 3, name: 'Steve Rogers', status: 'TAX', date: new Date(2020, 13, 4), price: 64 },
        { position: 4, name: "T'Chala", status: 'member', date: new Date(2020, 13, 4), price: -24 },
        { position: 5, name: 'Hydrogen', status: 'SALE', date: new Date(2020, 13, 4), price: 24 },
    ];


     Months: string[] = [
   'January','February','March','April','May','June','July','August','September','October','November','December'
    ];
    selected = 'April';
    displayedColumns: string[] = ['position', 'name', 'status', 'date', 'price'];
    displayedColumnsForThird: string[] = [ 'Assigned', 'Name', 'Priority', 'Budget'];

  constructor() { }

    ngOnInit() {

  }

}
