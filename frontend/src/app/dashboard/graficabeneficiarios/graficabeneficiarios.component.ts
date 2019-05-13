import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'app-graficabeneficiarios',
  templateUrl: './graficabeneficiarios.component.html',
  styleUrls: ['./graficabeneficiarios.component.scss']
})
export class GraficabeneficiariosComponent implements OnInit {
    // beneficiarios
    beneficiarios_mes: any = [];
    beneficiarios: any = {
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
  constructor(private dashboardService: DashboardService) {
    this.beneficiariosxmes(); }
  ngOnInit() {
  }
    reset() {
        this.beneficiarios = {
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
    beneficiariosxmes() {
        this.dashboardService.beneficiariosMes()
            .subscribe(res => {
                this.beneficiarios_mes = res;
                this.reset();
                if (this.beneficiarios_mes.length > 0) {
                    this.beneficiarios_mes.map((record: any) => {
                        this.beneficiarios.data[0].values.push(record.total);
                        if (record.mes === 1) {this.beneficiarios.data[0].labels.push('Enero'); }
                        if (record.mes === 2) {this.beneficiarios.data[0].labels.push('Febrero'); }
                        if (record.mes === 3) {this.beneficiarios.data[0].labels.push('Marzo'); }
                        if (record.mes === 4) {this.beneficiarios.data[0].labels.push('Abril'); }
                        if (record.mes === 5) {this.beneficiarios.data[0].labels.push('Mayo'); }
                        if (record.mes === 6) {this.beneficiarios.data[0].labels.push('Junio'); }
                        if (record.mes === 7) {this.beneficiarios.data[0].labels.push('Julio'); }
                        if (record.mes === 8) {this.beneficiarios.data[0].labels.push('Agosto'); }
                        if (record.mes === 9) {this.beneficiarios.data[0].labels.push('Septiembre'); }
                        if (record.mes === 10) {this.beneficiarios.data[0].labels.push('Octubre'); }
                        if (record.mes === 11) {this.beneficiarios.data[0].labels.push('Noviembre'); }
                        if (record.mes === 12) {this.beneficiarios.data[0].labels.push('Diciembre'); }
                    });
                }
            });
    }
}
