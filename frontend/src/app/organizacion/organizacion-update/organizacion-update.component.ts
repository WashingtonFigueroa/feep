import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {OrganizacionService} from '../organizacion.service';
import {TipoOrganizacionService} from '../../tipo-organizacion/tipo-organizacion.service';
import {ToastrService} from 'ngx-toastr';
import {ActividadService} from '../../actividad/actividad.service';

@Component({
  selector: 'app-organizacion-update',
  templateUrl: './organizacion-update.component.html',
  styleUrls: ['./organizacion-update.component.scss']
})
export class OrganizacionUpdateComponent implements OnInit {
    @ViewChild('imagen') imagen;
    @ViewChild('preview') preview;
    organizacion_id: number = null;
    organizacion: any = null;
    organizacionGroup: FormGroup;
    tipo_organizaciones: any = null;
    actividades: any = null;
    constructor(private organizacionService: OrganizacionService,
                private tipoorganizacionService: TipoOrganizacionService,
                private actividadService: ActividadService,
                private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute,
                private toastrService: ToastrService) {
        this.tipoorganizacionService.listar()
            .subscribe((res: any) => {
                this.tipo_organizaciones = res;
            });
        this.actividadService.listar()
            .subscribe((res: any) => {
                this.actividades = res;
            });

        this.route.params.subscribe((param: any) => {
            this.organizacion_id = param.id;
            this.organizacionService.show(this.organizacion_id)
                .subscribe((res: any) => {
                    this.organizacion = res;
                    this.crearForm();
                });
        });
    }
    ngOnInit() {
    }
    crearForm() {
        this.organizacionGroup = this.fb.group({
            'tipo_organizacion_id': new FormControl(this.organizacion.tipo_organizacion_id, [Validators.required]),
            'actividad_id': new FormControl(this.organizacion.actividad_id, [Validators.required]),
            'documento' : new FormControl(this.organizacion.documento, [Validators.required]),
            'nombre' : new FormControl(this.organizacion.nombre, [Validators.required]),
            'caracteristica1' : new FormControl(this.organizacion.caracteristica1, [Validators.required]),
            'caracteristica2' : new FormControl(this.organizacion.caracteristica2, [Validators.required]),
            'caracteristica3' : new FormControl(this.organizacion.caracteristica3, [Validators.required]),
            'representante': new FormControl(this.organizacion.representante, [Validators.required]),
            'contacto': new FormControl(this.organizacion.contacto),
            'direccion': new FormControl(this.organizacion.direccion),
            'descripcion': new FormControl(this.organizacion.descripcion),
            'ministerio': new FormControl(this.organizacion.ministerio),
            'acuerdo': new FormControl(this.organizacion.acuerdo),
            'mujeres': new FormControl(this.organizacion.mujeres),
            'ninias': new FormControl(this.organizacion.ninias),
            'hombres': new FormControl(this.organizacion.hombres),
            'ninios': new FormControl(this.organizacion.ninios),
            'total': new FormControl(this.organizacion.total),
            'latitud': new FormControl(this.organizacion.latitud),
            'longitud': new FormControl(this.organizacion.longitud),
            'precision': new FormControl(this.organizacion.precision)
        });
    }
    update() {
        const total =
            parseInt(this.organizacionGroup.value.mujeres, 10) +
            parseInt(this.organizacionGroup.value.ninias, 10) +
            parseInt(this.organizacionGroup.value.hombres, 10) +
            parseInt(this.organizacionGroup.value.ninios, 10);
        this.organizacionGroup.patchValue({
            nombre: this.organizacionGroup.value.nombre.toUpperCase(),
            representante: this.organizacionGroup.value.representante.toUpperCase(),
            descripcion: this.organizacionGroup.value.descripcion.toUpperCase(),
            total: total
        });
        this.organizacionService.update(this.organizacion_id, this.organizacionGroup.value)
            .subscribe((res: any) => {
                this.toastrService.success('Actualizada', 'Organización')
                this.router.navigate(['/organizaciones']);
            });
    }
    loadImage() {
        const imagen = this.imagen.nativeElement;
/*        console.log(imagen.files[0]);*/
        const reader = new FileReader();
        reader.onload = (e: any) => {
            this.preview.nativeElement.src = e.target.result;
        };
        reader.readAsDataURL(imagen.files[0]);
    }
}
