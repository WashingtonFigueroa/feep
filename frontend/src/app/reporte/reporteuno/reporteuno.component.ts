import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ReporteService} from '../reporte.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reporteuno',
  templateUrl: './reporteuno.component.html',
  styleUrls: ['./reporteuno.component.scss']
})
export class ReporteunoComponent implements OnInit {
    prev_page: string = null;
    next_page: string = null;
    last_page: number = null;
    pages: any = [];
    current_page: any = null;
    reportes: any = null;
    valor = '';
    total: any = 0;
    today: Date;
    today2: Date;
    buscarGroup: FormGroup;
    constructor(private reporteService: ReporteService,
                private fb: FormBuilder,
                private toastrService: ToastrService) {
        this.today = new Date();
        this.today2 = new Date();
        this.today2.setDate(this.today.getDate() + 1);
        this.createForm();
        this.reporteService.reportes_indexbeneficiarios().subscribe((res: any) => {
            this.reportes = res;
            this.total = res.total;
            this.current_page = this.reportes.current_page;
            this.prev_page = this.reportes.prev_page_url;
            this.next_page = this.reportes.next_page_url;
            this.last_page = this.reportes.last_page;
            this.loadPages();
        });
    }
    ngOnInit() {
    }
    listabeneficiarios () {
        const start = this.buscarGroup.value.start;
        const end = this.buscarGroup.value.end;
        if (start !== end) {
            this.reporteService.reportes_beneficiario(start, end).subscribe((res: any) => {
                this.reportes = res;
                this.total = res.total;
                this.current_page = this.reportes.current_page;
                this.prev_page = this.reportes.prev_page_url;
                this.next_page = this.reportes.next_page_url;
                this.last_page = this.reportes.last_page;
                this.loadPages();
            });
        } else {
            this.toastrService.info('Seleccione un arango de fechas', 'Consulta');
        }
    }
    createForm() {
        this.buscarGroup = this.fb.group({
            'start' : new FormControl('', [Validators.required]),
            'end' : new FormControl('', [Validators.required])
        });
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
        this.reporteService.pagination(url)
            .subscribe((res: any) => {
                this.reportes = res;
                this.current_page = this.reportes.current_page;
                this.prev_page = this.reportes.prev_page_url;
                this.next_page = this.reportes.next_page_url;
                this.last_page = this.reportes.last_page;
                this.loadPages();
            });
    }
    buscar(valor: string) {
        this.reporteService.buscar(valor)
            .subscribe((res: any) => {
                this.reportes = res;
                this.total = res.total;
                this.current_page = this.reportes.current_page;
                this.prev_page = this.reportes.prev_page_url;
                this.next_page = this.reportes.next_page_url;
                this.last_page = this.reportes.last_page;
                this.loadPages();
            });
    }

}
