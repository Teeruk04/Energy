import { Component } from '@angular/core';


import { TimeSeriesMonthComponent } from "../time-series-month/time-series-month.component";
import { ChartSummaryMonthComponent } from "../chart-summary-month/chart-summary-month.component";


@Component({
    selector: 'app-dashbord',
    standalone: true,
    templateUrl: './dashbord.component.html',
    styleUrl: './dashbord.component.css',
    imports: [TimeSeriesMonthComponent, ChartSummaryMonthComponent]
})
export class DashbordComponent {


}