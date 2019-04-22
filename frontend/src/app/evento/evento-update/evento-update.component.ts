import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UbicacionService} from '../../ubicacion/ubicacion.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {EventoService} from '../evento.service';
import {ProyectoService} from '../../proyecto/proyecto.service';
import {TipoEventoService} from '../../tipo-evento/tipo-evento.service';

@Component({
  selector: 'app-evento-update',
  templateUrl: './evento-update.component.html',
  styleUrls: ['./evento-update.component.scss']
})
export class EventoUpdateComponent implements OnInit {
    evento_id: number = null;
    evento: any = null;
    eventoGroup: FormGroup;
    proyectos: any = null;
    tipo_eventos: any = null;
    barrios: any = null;
    x: any = null;
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
            this.barrios = [];
            res.forEach(
                (barrio: any) => {
                    if (barrio.comunidad === 'null') {
                        this.x = '';
                    } else {
                        this.x = barrio.comunidad;
                    }
                    this.barrios.push({
                        barrio_id: barrio.barrio_id,
                        nombre:  barrio.ciudad + ' - ' + barrio.parroquia + ' - ' + this.x + ' - ' + barrio.nombre
                    });
                }
            )
        });
        this.route.params.subscribe((param: any) => {
            this.evento_id = param.id;
            this.eventoService.show(this.evento_id).subscribe((res: any) => {
                this.evento = res;
                this.crearForm(res);
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
    update() {
        if (this.eventoGroup.value.fecha_finaliza >= this.eventoGroup.value.fecha_evento) {
            this.eventoGroup.patchValue({
            nombre: this.eventoGroup.value.nombre.toUpperCase(),
            direccion: this.eventoGroup.value.direccion.toUpperCase()
        });
            this.eventoService.update(this.evento_id, this.eventoGroup.value).subscribe((res: any) => {
                this.toastrService.success('Evento Actualizado.', '', {
                    timeOut: 2000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: 'alert alert-success alert-with-icon',
                    positionClass: 'toast-top-right'
                });
                this.router.navigate(['/eventos']);
            });
        } else {
            this.toastrService.warning('Rango de Fechas', 'Error');
        }

    }
}
