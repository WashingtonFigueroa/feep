import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EventoService} from '../../evento/evento.service';
import {InscripcionService} from '../../inscripcion/inscripcion.service';
import {environment} from '../../../environments/environment.prod';
import {ReporteService} from '../reporte.service';

@Component({
  selector: 'app-reporte-1',
  templateUrl: './reporte-1.component.html',
  styleUrls: ['./reporte-1.component.scss']
})
export class Reporte1Component implements OnInit {
    prev_page: string = null;
    next_page: string = null;
    last_page: number = null;
    pages: any = [];
    current_page: any = null;
    beneficiarios: any = null;
    valor = '';
    eventos: any = null;
    printGroup: FormGroup;
    constructor(@Inject('Window') private window: Window,
                private fb: FormBuilder,
                private eventoService: EventoService,
                private reporteService: ReporteService) {
        this.eventoService.listar()
            .subscribe((res: any) => {
                this.eventos = res;
            });
        this.reporteService.reportes_beneficiario()
            .subscribe((res: any) => {
                this.beneficiarios = res;
                this.current_page = this.beneficiarios.current_page;
                this.prev_page = this.beneficiarios.prev_page_url;
                this.next_page = this.beneficiarios.next_page_url;
                this.last_page = this.beneficiarios.last_page;
                this.loadPages();
            });
        this.createForm();
    }
    ngOnInit() {
    }
    createForm() {
        this.printGroup = this.fb.group({
            'evento_id': new FormControl('', Validators.required)
        });
    }
    loadPages() {
        this.pages = [];
        for (let i = 1; i <= this.last_page; i++) {
            this.pages.push({
                item: i,
                url: environment.servidor + 'beneficiarios?page=' + i
            });
        }
    }
    loadPagination(url: string) {
        this.reporteService.pagination(url)
            .subscribe((res: any) => {
                this.beneficiarios = res;
                this.current_page = this.beneficiarios.current_page;
                this.prev_page = this.beneficiarios.prev_page_url;
                this.next_page = this.beneficiarios.next_page_url;
                this.last_page = this.beneficiarios.last_page;
                this.loadPages();
            });
    }
    buscar(valor: string) {
        this.reporteService.buscar(valor)
            .subscribe((res: any) => {
                this.beneficiarios = res;
                this.current_page = this.beneficiarios.current_page;
                this.prev_page = this.beneficiarios.prev_page_url;
                this.next_page = this.beneficiarios.next_page_url;
                this.last_page = this.beneficiarios.last_page;
                this.loadPages();
            });
    }
}
