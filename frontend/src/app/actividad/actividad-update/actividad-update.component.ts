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
        this.actividadService.update(this.actividad_id, this.actividadGroup.value)
            .subscribe((res: any) => {
                this.toastrService.success('Actualizado','Actividad');
                this.router.navigate(['/actividades']);
            });
    }
}
