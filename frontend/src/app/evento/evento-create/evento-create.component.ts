import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UbicacionService} from '../../ubicacion/ubicacion.service';
import {Router} from '@angular/router';
import {EventoService} from '../evento.service';
import {TipoEventoService} from '../../tipo-evento/tipo-evento.service';
import {ToastrService} from 'ngx-toastr';
import {ProyectoService} from '../../proyecto/proyecto.service';

@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.scss']
})
export class EventoCreateComponent implements OnInit {
    @ViewChild('imagen') imagen;
    eventoGroup: FormGroup;
    proyectos: any = null;
    tipo_eventos: any = null;
    barrios: any = null;
    constructor(private eventoService: EventoService,
                private tipoeventoService: TipoEventoService,
                private parroquiasService: UbicacionService,
                private proyectoService: ProyectoService,
                private router: Router,
                private fb: FormBuilder,
                private toastrService: ToastrService) {
        this.tipoeventoService.listar()
            .subscribe((res: any) => {
                this.tipo_eventos = res;
            });
        this.proyectoService.listar().subscribe((res: any) => {
           this.proyectos = res;
        });
        this.parroquiasService.barrioslistar()
            .subscribe((res: any) => {
                this.barrios = res;
            });
        this.crearForm();
    }
    ngOnInit() {
    }
    crearForm() {
        this.eventoGroup = this.fb.group({
            'proyecto_id': [0, [Validators.required]],
            'tipo_evento_id': [0, [Validators.required]],
            // 'usuario_id': [1, [Validators.required]],
            'barrio_id': [0, [Validators.required]],
            'nombre': ['', [Validators.required]],
            'imagen': [''],
            'fecha_evento': ['', [Validators.required]],
            'direccion': ['', [Validators.required]],
            'duracion_horas': ['', [Validators.required]],
            'fecha_finaliza': [''],
            'latitud': [''],
            'longitud': [''],
        });
    }
    store() {
        if (this.eventoGroup.value.fecha_finaliza >= this.eventoGroup.value.fecha_evento)
        {
            const usuario = 1;
            if (this.imagen.nativeElement.files[0]) {
                const formData = new FormData();
                formData.append('proyecto_id', this.eventoGroup.value.proyecto_id);
                formData.append('tipo_evento_id', this.eventoGroup.value.tipo_evento_id);
                // formData.append('usuario_id', usuario);
                formData.append('barrio_id', this.eventoGroup.value.barrio_id);
                formData.append('nombre', this.eventoGroup.value.nombre.toUpperCase());
                formData.append('imagen', this.imagen.nativeElement.files[0]);
                formData.append('fecha_evento', this.eventoGroup.value.fecha_evento);
                formData.append('direccion', this.eventoGroup.value.direccion.toUpperCase());
                formData.append('duracion_horas', this.eventoGroup.value.duracion_horas);
                formData.append('fecha_finaliza', this.eventoGroup.value.fecha_finaliza);
                // formData.append('latitud', this.eventoGroup.value.latitud);
                // formData.append('longitud', this.eventoGroup.value.longitud);
                this.eventoService.store(formData)
                    .subscribe((res: any) => {
                        this.toastrService.success('Agregado', 'Evento');
                        this.router.navigate(['/eventos']);
                    }, (error) => {
                        this.toastrService.error('duplicado', 'Evento');
                    });
            } else {
                this.eventoService.store(this.eventoGroup.value)
                    .subscribe((res: any) => {
                        this.toastrService.success('Agregado', 'Evento');
                        this.router.navigate(['/eventos']);
                    }, (error) => {
                        this.toastrService.error('duplicado', 'Evento');
                    });
            }
        } else {
            this.toastrService.info('Rango de Fechas', 'Error')
        }
    }
}
