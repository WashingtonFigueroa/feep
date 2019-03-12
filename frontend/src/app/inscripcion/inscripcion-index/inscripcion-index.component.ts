import {Component, Inject, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {InscripcionService} from '../inscripcion.service';
import * as jsPDF from 'jspdf';
import {EventoService} from '../../evento/evento.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-inscripcion-index',
  templateUrl: './inscripcion-index.component.html',
  styleUrls: ['./inscripcion-index.component.scss'],
  providers: [
      { provide: 'Window', useValue: window }
  ]
})
export class InscripcionIndexComponent implements OnInit {
    prev_page: string = null;
    next_page: string = null;
    last_page: number = null;
    pages: any = [];
    current_page: any = null;
    participantes: any = null;
    valor = '';
    eventos: any = null;
    printGroup: FormGroup;
    constructor(@Inject('Window') private window: Window,
                private fb: FormBuilder,
                private eventoService: EventoService,
                private participanteService: InscripcionService) {
        this.eventoService.listar()
            .subscribe((res: any) => {
                this.eventos = res;
            });
        this.participanteService.index()
            .subscribe((res: any) => {
                this.participantes = res;
                this.current_page = this.participantes.current_page;
                this.prev_page = this.participantes.prev_page_url;
                this.next_page = this.participantes.next_page_url;
                this.last_page = this.participantes.last_page;
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
                url: environment.servidor + 'participantes?page=' + i
            });
        }
    }

    loadPagination(url: string) {
        this.participanteService.pagination(url)
            .subscribe((res: any) => {
                this.participantes = res;
                this.current_page = this.participantes.current_page;
                this.prev_page = this.participantes.prev_page_url;
                this.next_page = this.participantes.next_page_url;
                this.last_page = this.participantes.last_page;
                this.loadPages();
            });
    }

    buscar(valor: string) {
        this.participanteService.buscar(valor)
            .subscribe((res: any) => {
                this.participantes = res;
                this.current_page = this.participantes.current_page;
                this.prev_page = this.participantes.prev_page_url;
                this.next_page = this.participantes.next_page_url;
                this.last_page = this.participantes.last_page;
                this.loadPages();
            });
    }
    destroy(participantes, index) {
        if (confirm('Esta seguro de eliminar al participantes ' + participantes.nombres)) {
            this.participanteService.destroy(participantes.participante_id)
                .subscribe((res: any) => {
                    this.participantes.data.splice(index, 1);
                });
        }
    }

    download() {
        const doc = new jsPDF();
        doc.text(20, 20, 'Hello world!');
        doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
        doc.addPage();
        doc.text(20, 20, 'Do you like that?');

        // Save the PDF
        doc.save('Test.pdf');
    }

}
