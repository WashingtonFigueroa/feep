import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ActividadService} from '../actividad.service';

@Component({
  selector: 'app-actividad-update',
  templateUrl: './actividad-update.component.html',
  styleUrls: ['./actividad-update.component.scss']
})
export class ActividadUpdateComponent implements OnInit {

    actividad_id: number = null;
    actividad: any = null;
    actividadGroup: FormGroup;
    constructor(private actividadService: ActividadService,
                private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute,
                private toastrService: ToastrService) {
        this.route.params.subscribe((param: any) => {
            this.actividad_id = param.id;
            this.actividadService.show(this.actividad_id)
                .subscribe((res: any) => {
                    this.actividad = res;
                    this.crearForm();
                });
        });
    }

    ngOnInit() {
    }

    crearForm() {
        this.actividadGroup = this.fb.group({
            'nombre' : [this.actividad.nombre, [Validators.required]],
            'descripcion' : [this.actividad.descripcion]
        });
    }

    update() {
        this.actividadGroup.patchValue({
            nombre: this.actividadGroup.value.nombre.toUpperCase(),
            descripcion: this.actividadGroup.value.descripcion.toUpperCase(),
        });
        this.actividadService.update(this.actividad_id, this.actividadGroup.value)
            .subscribe((res: any) => {
                this.toastrService.info('Tipo Actividad Actualizada.', '', {
                    timeOut: 2000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: 'alert alert-info alert-with-icon',
                    positionClass: 'toast-top-right'
                });
                this.router.navigate(['/actividades']);
            });
    }
}
