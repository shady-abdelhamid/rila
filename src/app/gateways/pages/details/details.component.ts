import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { Gateway } from '../../models/gateway.class';
import { GatewayService } from '../../services/gateway.service';

@Component({
  selector: 'rila-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id: string | undefined;
  details: Gateway | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gatewayService: GatewayService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }: any) => {
      if (id) {
        this.id = id;
        this.getDetails(id);
      }
    });
  }

  async getDetails(id: string) {
    this.details = await lastValueFrom(this.gatewayService.getDetails(id));
  }
}
