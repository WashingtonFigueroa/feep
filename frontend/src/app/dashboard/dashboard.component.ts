import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {DashboardService} from './dashboard.service';
import {FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    prev_page: string = null;
    next_page: string = null;
    last_page: number = null;
    pages: any = [];
    current_page: any = null;
    reportes: any = null;
    valor = '';
    base_imagen: string = environment.servidor + 'eventos-imagen/';
    today: Date;
    // eventos
    eventos_mes: any = [];
    eventos: any = {
        data: [
            {
                values: [],
                labels: [],
                type: 'pie',
            }
        ],
        layout: {
            height: 400,
            width: 500,
        },

    };

    constructor(private dashboardService: DashboardService,
                protected fb: FormBuilder) {
        this.dashboardService.index().subscribe((res: any) => {
                this.reportes = res;
                this.current_page = this.reportes.current_page;
                this.prev_page = this.reportes.prev_page_url;
                this.next_page = this.reportes.next_page_url;
                this.last_page = this.reportes.last_page;
                this.loadPages();
            });
        this.today = new Date();
        this.eventosxmes();
    }
    ngOnInit() {
    }
    loadPages() {
        this.pages = [];
        for (let i = 1; i <= this.reportes.last_page;  i++) {
            this.pages.push({
                page: i,
                url: this.reportes.path + '?page=' + i
            });
        }
    }
    loadPagination(url: string) {
        this.dashboardService.pagination(url)
            .subscribe((res: any) => {
                this.reportes = res;
                this.current_page = this.reportes.current_page;
                this.prev_page = this.reportes.prev_page_url;
                this.next_page = this.reportes.next_page_url;
                this.last_page = this.reportes.last_page;
                this.loadPages();
            });
    }
    reset() {
        this.eventos = {
            data: [
                {
                    values: [],
                    labels: [],
                    type: 'pie',
                }
            ],
            layout: {
                height: 400,
                width: 500
            }
        };
    }
    eventosxmes() {
        this.dashboardService.eventos_mes()
            .subscribe(res => {
                this.eventos_mes = res;
                this.reset();
                if (this.eventos_mes.length > 0) {
                    this.eventos_mes.map((record: any) => {
                        this.eventos.data[0].values.push(record.total);
                        if (record.mes === 1) {this.eventos.data[0].labels.push('Enero'); }
                        if (record.mes === 2) {this.eventos.data[0].labels.push('Febrero'); }
                        if (record.mes === 3) {this.eventos.data[0].labels.push('Marzo'); }
                        if (record.mes === 4) {this.eventos.data[0].labels.push('Abril'); }
                        if (record.mes === 5) {this.eventos.data[0].labels.push('Mayo'); }
                        if (record.mes === 6) {this.eventos.data[0].labels.push('Junio'); }
                        if (record.mes === 7) {this.eventos.data[0].labels.push('Julio'); }
                        if (record.mes === 8) {this.eventos.data[0].labels.push('Agosto'); }
                        if (record.mes === 9) {this.eventos.data[0].labels.push('Septiembre'); }
                        if (record.mes === 10) {this.eventos.data[0].labels.push('Octubre'); }
                        if (record.mes === 11) {this.eventos.data[0].labels.push('Noviembre'); }
                        if (record.mes === 12) {this.eventos.data[0].labels.push('Diciembre'); }
                    });
                }
            });
    }
}
