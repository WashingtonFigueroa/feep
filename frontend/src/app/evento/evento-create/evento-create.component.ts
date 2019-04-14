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
    @ViewChild('preview') preview;
    eventoGroup: FormGroup;
    proyectos: any = null;
    tipo_eventos: any = null;
    barrios: any = null;
    x: any = null;
    numProyecto: any = 0;
    constructor(private eventoService: EventoService,
                private tipoeventoService: TipoEventoService,
                private  barrioService: UbicacionService,
                private proyectoService: ProyectoService,
                private router: Router,
                private fb: FormBuilder,
                private toastrService: ToastrService) {
        this.tipoeventoService.listar()
            .subscribe((res: any) => {
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
        this.proyectoService.listar().subscribe((res: any) => {
            this.proyectos = res;
            this.numProyecto = res.length;
            this.crearForm();
        });
    }
    ngOnInit() {
    }
    crearForm() {
        this.eventoGroup = this.fb.group({
            'proyecto_id': [parseInt(this.numProyecto , 10), [Validators.required]],
            'tipo_evento_id': [1, [Validators.required]],
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
        if (this.eventoGroup.value.fecha_finaliza >= this.eventoGroup.value.fecha_evento) {
            const formData = new FormData();
            if (this.imagen.nativeElement.files[0]) {
                formData.append('imagen', this.imagen.nativeElement.files[0]);
            }
                formData.append('proyecto_id', this.eventoGroup.value.proyecto_id);
                formData.append('tipo_evento_id', this.eventoGroup.value.tipo_evento_id);
                formData.append('barrio_id', this.eventoGroup.value.barrio_id);
                formData.append('nombre', this.eventoGroup.value.nombre.toUpperCase());
                formData.append('fecha_evento', this.eventoGroup.value.fecha_evento);
                formData.append('direccion', this.eventoGroup.value.direccion.toUpperCase());
                formData.append('duracion_horas', this.eventoGroup.value.duracion_horas);
                formData.append('fecha_finaliza', this.eventoGroup.value.fecha_finaliza);
                // formData.append('latitud', this.eventoGroup.value.latitud);
                // formData.append('longitud', this.eventoGroup.value.longitud);
                this.eventoService.store(formData)
                    .subscribe((res: any) => {
                        this.toastrService.success('Evento agregado exitosamente.', '', {
                            timeOut: 2000,
                            closeButton: true,
                            enableHtml: true,
                            toastClass: 'alert alert-success alert-with-icon',
                            positionClass: 'toast-top-right'
                        });
                        this.router.navigate(['/eventos']);
                    }, (error) => {
                        this.toastrService.warning('Evento duplicado.', '', {
                            timeOut: 2000,
                            closeButton: true,
                            enableHtml: true,
                            toastClass: 'alert alert-warning alert-with-icon',
                            positionClass: 'toast-top-right'
                        });
                    });
        } else {
            this.toastrService.info('Rango de Fechas', 'Error')
        }
    }
    loadImage() {
        const imagen = this.imagen.nativeElement;
        const reader = new FileReader();
        reader.onload = (e: any) => {
            this.preview.nativeElement.src = e.target.result;
        };
        reader.readAsDataURL(imagen.files[0]);
    }
}
