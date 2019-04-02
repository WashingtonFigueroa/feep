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
        this.eventoService.participantes(this.printGroup.value.evento_id).subscribe((res: any) => {
                const doc = new jsPDF({
                    orientation: 'landscape',
                    unit: 'pt',
                    format: 'letter'
                });
                const coord = {
                  x: 10,
                  y: 40
                };

                doc.setFontSize(11);
                doc.setFontType('bold');
                doc.text('EVENTO:', coord.x, coord.y);
                doc.setFontType('normal');
                doc.text(res.evento.nombre, coord.x + 120, coord.y);

                coord.y = coord.y + 10;
                doc.setFontType('bold');
                doc.text('DIRECCIÓN:', coord.x, coord.y);
                doc.setFontType('normal');
                doc.text(res.evento.direccion, coord.x + 120, coord.y);
                coord.y = coord.y + 15;
                const inicio =  res.evento.fecha_inicio.split('-')[2] + '/' +
                                res.evento.fecha_inicio.split('-')[1] + '/' +
                                res.evento.fecha_inicio.split('-')[0];
                const fin    =  res.evento.fecha_fin.split('-')[2] + '/' +
                                res.evento.fecha_fin.split('-')[1] + '/' +
                                res.evento.fecha_fin.split('-')[0];
                doc.setFontType('bold');
                doc.text('FECHA DE INICIO:', coord.x, coord.y);
                doc.setFontType('normal');
                doc.text(inicio, coord.x + 120, coord.y);

                coord.x = coord.x + 490;
                doc.setFontType('bold');
                doc.text('FECHA DE FIN:', coord.x, coord.y);
                doc.setFontType('normal');
                doc.text(fin, coord.x + 100, coord.y);

                coord.x = 10;
                coord.y = coord.y + 40;

                doc.setFontSize(10);
                doc.setFontType('bold');
                doc.text('N.', coord.x + 10, coord.y);
                doc.text('PARTICIPANTE', coord.x + 30, coord.y);
                doc.text('DOCUMENTO', coord.x + 230, coord.y);
                doc.text('ASOCIACIÓN', coord.x + 310, coord.y);
                doc.text('EMAIL', coord.x + 450, coord.y);
                doc.text('CONTACTO', coord.x + 600, coord.y);
                doc.text('FIRMA', coord.x + 700, coord.y);

                doc.line(coord.x, coord.y - 15, coord.x + 770, coord.y - 15);
                doc.line(coord.x, coord.y + 10, coord.x + 770, coord.y + 10);
                let i = 1;
                doc.setFontSize(8);
                doc.setFontType('normal');
                res.participantes.forEach((participante: any) => {
                    coord.y = coord.y + 24;
                    doc.text(i.toString(), coord.x + 10, coord.y);
                    doc.text(participante.nombres.toUpperCase(), coord.x + 30, coord.y);
                    doc.text(participante.cedula, coord.x + 230, coord.y);
                    doc.text(participante.organizacion.toUpperCase(), coord.x + 310, coord.y);
                    if (participante.email === null) {
                        doc.text('', coord.x + 405, coord.y);
                    } else {
                        doc.text(participante.email, coord.x + 450, coord.y);
                    }
                    if (participante.contacto === null) {
                        doc.text('', coord.x + 600, coord.y);
                    } else {
                        doc.text(participante.contacto, coord.x + 600, coord.y);
                    }
                    doc.text('', coord.x + 770, coord.y);
                    doc.line(coord.x, coord.y + 10, coord.x + 770, coord.y + 10);
                    i++;
                });
                // Save the PDF
                doc.save(res.evento.nombre + '.pdf');
            });
    }
}
