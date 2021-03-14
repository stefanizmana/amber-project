import {Component, OnDestroy, OnInit} from '@angular/core';
import { ApplicationService} from '../../services/application.service';
import { ActivatedRoute } from '@angular/router';
import {BehaviorSubject, Subscription} from 'rxjs';
import {map, withLatestFrom} from 'rxjs/operators';

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.scss']
})
export class DisplayItemComponent implements OnInit {

  constructor(private readonly applicationService: ApplicationService,
              private route: ActivatedRoute
  ) { }

  private routeSub: Subscription;

  private currentIdItemSubject$ = new BehaviorSubject<string>('');

  private readonly currentItemSelectedSubject$ = new BehaviorSubject<any>(
    [{
      currency: '',
      description: '',
      id: '',
      images: ['', ''],
      location: {coordinates: [0, 0], type: ''},
      name: '',
      sold_price: '',
      type: ''
    }]
  );

  propertiesItems$ = this.applicationService.propertiesItems$;

  latitude$ = this.coordinates$.pipe(map((data) => {
    if (data) {
      return data[0];
    }
  }));

  longitude$ = this.coordinates$.pipe(map((data) => {
    if (data) {
      return data[1];
    }
  }));

  get images$() {
    return this.currentItemSelected$().pipe(
      map((data) => {
        if (data.images) {
          return data.images;
        }
      })
    );
  }

  get soldPrice$() {
    return this.currentItemSelected$().pipe(
      map((data) => {
        if (data.sold_price && data.currency) {
          return data.sold_price + ' ' + data.currency;
        }
      })
    );
  }

  get coordinates$() {
    return this.currentItemSelected$().pipe(
      map((data) => {
        if (data.location && data.location.coordinates) {
          return data.location.coordinates;
        }
      })
    );
  }

  get name$() {
    return this.currentItemSelected$().pipe(
      map((data) => {
        if (data.name) {
          return data.name ;
        }
      })
    );
  }

  get description$() {
    return this.currentItemSelected$().pipe(
      map((data) => {
        if (data.description) {
          return data.description;
        }
      })
    );
  }

  getElementById$() {
    this.propertiesItems$.pipe(
      withLatestFrom(this.currentIdItem$()),
      map(([data, id]) => {
        for (const item of data) {
          if (item.id === id) {
            this.currentItemSelectedSubject$.next(item);
          }
        }
      })
    ).subscribe();
  }

  currentItemSelected$() {
    return this.currentItemSelectedSubject$.asObservable();
  }

  currentIdItem$() {
    return this.currentIdItemSubject$.asObservable();
  }

  setCurrentIdItem$(value: string) {
    return this.currentIdItemSubject$.next(value);
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
     this.setCurrentIdItem$(params.id);
    });
    this.applicationService.properties$();
    this.getElementById$();
  }

}

