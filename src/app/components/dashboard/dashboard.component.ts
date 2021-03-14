import {Component, OnInit} from '@angular/core';
import { ApplicationService} from '../../services/application.service';
import { Sort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from "rxjs";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  sortedData: any;

  constructor(private readonly applicationService: ApplicationService,
              private readonly router: Router,
  ) {
  }

  tiles$ = this.applicationService.propertiesItems$;

  ngOnInit() {
    this.applicationService.properties$();
  }

  sortData(sort: Sort) {
    this.tiles$.pipe(map((data) => {
      const dataSort = data.slice();

      if (!sort.active || sort.direction === '') {
        this.sortedData = data;
        return;
      }

      this.sortedData = dataSort.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        if (sort.active) {
          return this.compare(a.sold_price, b.sold_price, isAsc);
        }
      });
    })).subscribe();
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  onClickItem(idItem: string) {
    this.router.navigate([`/dashboard/item/${idItem}`]);
  }
}
