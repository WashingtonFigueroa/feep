import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrganizacionService} from '../organizacion.service';
import {TipoOrganizacionService} from '../../tipo-organizacion/tipo-organizacion.service';
import {Router} from '@angular/router';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-organizacion-create',
  templateUrl: './organizacion-create.component.html',
  styleUrls: ['./organizacion-create.component.scss']
})
export class OrganizacionCreateComponent implements OnInit {
    @ViewChild('imagen') imagen;
    organizacionGroup: FormGroup;
    tipo_organizaciones: any = null;
    constructor(private organizacionService: OrganizacionService,
                private tipoorgsService: TipoOrganizacionService,
                private router: Router,
                private fb: FormBuilder,
                private toastrService: ToastrService) {
        this.tipoorgsService.listar()
            .subscribe((res: any) => {
                this.tipo_organizaciones = res;
            });
        this.crearForm();
    }

    ngOnInit() {
    }

    crearForm() {
        this.organizacionGroup = this.fb.group({
            'tipo_organizacion_id': [0, [Validators.required]],
            'nombre': ['', [Validators.required]],
            'imagen': [''],
            'actividad': ['', [Validators.required]],
            'representante': ['', [Validators.required]],
            'contacto': [''],
            'direccion': [''],
            'descripcion': [''],
            'acuerdo': [''],
            'mujeres': [''],
            'hombres': [''],
            'latitud': [''],
            'longitud': [''],
            'precision': [''],
        });
    }
    store() {
        const imagen = this.imagen.nativeElement;
            const formData = new FormData();
            if (imagen.files[0]) {
                formData.append('imagen', imagen.files[0]);
            }
            formData.append('tipo_organizacion_id', this.organizacionGroup.value.tipo_organizacion_id);
            formData.append('nombre', this.organizacionGroup.value.nombre);
            formData.append('actividad', this.organizacionGroup.value.actividad);
            formData.append('representante', this.organizacionGroup.value.representante);
            formData.append('contacto', this.organizacionGroup.value.contacto);
            formData.append('direccion', this.organizacionGroup.value.direccion);
            formData.append('descripcion', this.organizacionGroup.value.descripcion);
            formData.append('acuerdo', this.organizacionGroup.value.acuerdo);
            formData.append('mujeres', this.organizacionGroup.value.mujeres);
            formData.append('hombres', this.organizacionGroup.value.hombres);
            formData.append('latitud', this.organizacionGroup.value.latitud);
            formData.append('longitud', this.organizacionGroup.value.longitud);
            formData.append('precision', this.organizacionGroup.value.precision);
            this.organizacionService.store(formData)
                .subscribe((res: any) => {
                    this.toastrService.success('Datos Agregados', 'Organizacion')
                    this.router.navigate(['/organizaciones']);
                }, (error) => {
                    this.toastrService.warning('Registrada','Organización');
                });
    }
}
