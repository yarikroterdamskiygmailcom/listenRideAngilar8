import {Component, OnInit} from '@angular/core';
import {ApiSeoService} from '@api/api-seo/api-seo.service';
import * as _ from 'lodash';

@Component({
  selector: 'lnr-top-location',
  templateUrl: './top-location.component.html',
  styleUrls: ['./top-location.component.scss']
})
export class TopLocationComponent implements OnInit {
  cities;

  constructor(private apiSeoService: ApiSeoService) {
  }

  ngOnInit() {
    this.apiSeoService.getTopLocation().subscribe((data) => {
      this.cities = _.map(data, (city) => {
        return city.name[this.apiSeoService.retrieveLocale()];
      });
      return this.cities;
    });
  }
}
