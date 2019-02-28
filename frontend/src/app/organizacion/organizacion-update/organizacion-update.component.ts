import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
            'tipo_organizacion_id': [this.organizacion.tipo_organizacion_id, [Validators.required]],
            'actividad_id': [this.organizacion.actividad_id, [Validators.required]],
            'nombre' : [this.organizacion.nombre, [Validators.required]],
            'representante': [this.organizacion.representante, [Validators.required]],
            'contacto': [this.organizacion.contacto],
            'direccion': [this.organizacion.direccion],
            'descripcion': [this.organizacion.descripcion],
            'acuerdo': [this.organizacion.acuerdo],
            'mujeres': [this.organizacion.mujeres],
            'ninias': [this.organizacion.ninias],
            'hombres': [this.organizacion.hombres],
            'ninios': [this.organizacion.ninios],
            'latitud': [this.organizacion.latitud],
            'longitud': [this.organizacion.longitud],
            'precision': [this.organizacion.precision],
        });
    }
    update() {
        this.organizacionService.update(this.organizacion_id, this.organizacionGroup.value)
            .subscribe((res: any) => {
                this.toastrService.success('Datos Actualizados', 'Organización')
                this.router.navigate(['/organizaciones']);
            });
    }
}
