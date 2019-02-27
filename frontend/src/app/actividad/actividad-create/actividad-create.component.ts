import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ActividadService} from '../actividad.service';

@Component({
  selector: 'app-actividad-create',
  templateUrl: './actividad-create.component.html',
  styleUrls: ['./actividad-create.component.scss']
})
export class ActividadCreateComponent implements OnInit {

    actividadGroup: FormGroup;
    constructor(private fb: FormBuilder,
                private actividadService: ActividadService,
                private router: Router,
                private toastrService: ToastrService) {
        this.crearForm();
    }

    ngOnInit() {
    }

    crearForm() {
        this.actividadGroup = this.fb.group({
            'nombre' : ['', [Validators.required]],
            'descripcion' : ['']
        });
    }

    store() {
        this.actividadService.store(this.actividadGroup.value)
            .subscribe((res: any) => {
                this.toastrService.success('Datos Agredados','Actividad')
                this.router.navigate(['/actividades/listar']);
            }, (error: any) => {
                this.toastrService.warning('Datos Registrados','Actividad')
                this.actividadGroup.reset();
            });
    }
}
