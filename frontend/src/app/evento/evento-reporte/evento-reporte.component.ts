import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventoService} from '../evento.service';
import {ProyectoService} from '../../proyecto/proyecto.service';
import {TipoEventoService} from '../../tipo-evento/tipo-evento.service';
import {UbicacionService} from '../../ubicacion/ubicacion.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-evento-reporte',
  templateUrl: './evento-reporte.component.html',
  styleUrls: ['./evento-reporte.component.scss']
})
export class EventoReporteComponent implements OnInit {
    evento_id: number = null;
    evento: any = null;
    eventoGroup: FormGroup;
    proyectos: any = null;
    tipo_eventos: any = null;
    barrios: any = null;
    reportes: any = null;
    constructor(private eventoService: EventoService,
                private proyectoService: ProyectoService,
                private tipoeventoService: TipoEventoService,
                private barrioService: UbicacionService,
                private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute,
                private toastrService: ToastrService) {
        this.proyectoService.listar().subscribe((res: any) => {
            this.proyectos = res;
        });
        this.tipoeventoService.listar().subscribe((res: any) => {
            this.tipo_eventos = res;
        });
        this.barrioService.barrioslistar().subscribe((res: any) => {
            this.barrios = res;
        });
        this.route.params.subscribe((param: any) => {
            this.evento_id = param.id;
            this.eventoService.show(this.evento_id).subscribe((res: any) => {
                this.evento = res;
                this.crearForm(res);
            });
            this.eventoService.reporte(this.evento_id).subscribe((res: any) => {
                this.reportes = res;
                // console.log(this.reportes);
            });
        });
    }
    ngOnInit() {
    }
    crearForm(evento) {
        this.eventoGroup = this.fb.group({
            'proyecto_id': [evento.proyecto_id, [Validators.required]],
            'tipo_evento_id': [evento.tipo_evento_id, [Validators.required]],
            'barrio_id': [evento.barrio_id, [Validators.required]],
            'nombre' : [evento.nombre, [Validators.required]],
            'fecha_evento': [evento.fecha_evento, [Validators.required]],
            'direccion': [evento.direccion, [Validators.required]],
            'duracion_horas': [evento.duracion_horas, [Validators.required]],
            'fecha_finaliza': [evento.fecha_finaliza, [Validators.required]]
        });
    }
}
