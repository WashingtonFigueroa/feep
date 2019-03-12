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
        this.eventoService.participantes(this.printGroup.value.evento_id)
            .subscribe((res: any) => {
                const doc = new jsPDF({
                    orientation: 'landscape',
                    unit: 'pt',
                    format: 'letter'
                });
                const coord = {
                  x: 80,
                  y: 80
                };

                doc.setFontSize(11);
                doc.setFontType('bold');
                doc.text('EVENTO:', coord.x, coord.y);
                doc.setFontType('normal');
                doc.text(res.evento.nombre, coord.x + 120, coord.y);

                coord.y = coord.y + 30;
                doc.setFontType('bold');
                doc.text('DIRECCIÓN:', coord.x, coord.y);
                doc.setFontType('normal');
                doc.text(res.evento.direccion, coord.x + 120, coord.y);

                coord.y = coord.y + 30;
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

                coord.x = 80;
                coord.y = coord.y + 60;

                doc.setFontSize(10);
                doc.setFontType('bold');
                doc.text('N.', coord.x + 10, coord.y);
                doc.text('PARTICIPANTE', coord.x + 30, coord.y);
                doc.text('GENERO', coord.x + 230, coord.y);
                doc.text('CÉCULA', coord.x + 290, coord.y);
                doc.text('ETNIA', coord.x + 350, coord.y);
                doc.text('DIRECCIÓN', coord.x + 420, coord.y);
                doc.text('CONTACTO', coord.x + 580, coord.y);

                doc.line(coord.x, coord.y - 15, coord.x + 650, coord.y - 15);
                doc.line(coord.x, coord.y + 10, coord.x + 650, coord.y + 10);
/*                doc.text(20, 20, 'Do you like that?');*/
                let i = 1;
                doc.setFontSize(8);
                doc.setFontType('normal');
                res.participantes.forEach((participante: any) => {
                    coord.y = coord.y + 24;
                    doc.text(i.toString(), coord.x + 10, coord.y);
                    doc.text(participante.nombres.toUpperCase(), coord.x + 30, coord.y);
                    doc.text(participante.genero.toUpperCase(), coord.x + 230, coord.y);
                    doc.text(participante.cedula.toUpperCase(), coord.x + 290, coord.y);
                    doc.text(participante.etnia.toUpperCase(), coord.x + 350, coord.y);
                    doc.text(participante.direccion.toUpperCase(), coord.x + 420, coord.y);
                    doc.text(participante.contacto.toUpperCase(), coord.x + 580, coord.y);

                    doc.line(coord.x, coord.y + 10, coord.x + 650, coord.y + 10);
                    i++;
                });
                doc.line(310, 580, 500, 580);
                doc.setFontSize(12);
                doc.text('FIRMA', 380, 600);
                // Save the PDF
                doc.save('Evento.pdf');
            });
    }

}
