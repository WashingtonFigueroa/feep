import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ProyectoService} from '../../proyecto/proyecto.service';
import {EjecutoraService} from '../ejecutora.service';
import {OrganizacionService} from '../../organizacion/organizacion.service';

@Component({
  selector: 'app-ejecutora-create',
  templateUrl: './ejecutora-create.component.html',
  styleUrls: ['./ejecutora-create.component.scss']
})
export class EjecutoraCreateComponent implements OnInit {
    ejecutoraGroup: FormGroup;
    proyectos: any = null;
    organizaciones: any = null;
   // auspiciantes = [];
    numProyecto: any = 0;
    constructor(private ejecutoraService: EjecutoraService,
                private proyectoService: ProyectoService,
                private organizacionService: OrganizacionService,
                private router: Router,
                private fb: FormBuilder,
                private toastrService: ToastrService) {
        this.organizacionService.listar()
            .subscribe((res: any) => {
                this.organizaciones = res;
            });
        this.proyectoService.listar()
            .subscribe((res: any) => {
                this.proyectos = res;
                this.numProyecto = res.length;
                this.crearForm();
            });
    }
    ngOnInit() {
    }
    crearForm() {
        this.ejecutoraGroup = this.fb.group({
            'proyecto_id': [parseInt(this.numProyecto , 10), [Validators.required]],
            'organizacion_id': [0, [Validators.required]],
            'tipo': ['', [Validators.required]],
            'descripcion': ['']
        });
    }
    store() {
        const formData = new FormData();
        formData.append('proyecto_id', this.ejecutoraGroup.value.proyecto_id);
        formData.append('organizacion_id', this.ejecutoraGroup.value.organizacion_id);
        formData.append('tipo', this.ejecutoraGroup.value.tipo);
        formData.append('descripcion', this.ejecutoraGroup.value.descripcion.toUpperCase());
        this.ejecutoraService.store(formData)
            .subscribe((res: any) => {
                this.toastrService.success('Auspiciante registrado exitosamente.', '', {
                    timeOut: 4000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: 'alert alert-success alert-with-icon',
                    positionClass: 'toast-top-right'
                });
                this.router.navigate(['/ejecutoras/listar']);
                // this.ejecutoraGroup.reset();
               // this.auspiciantes.push(res);
            }, (error) => {
                this.toastrService.warning('Auspiciante duplicado.', '', {
                    timeOut: 4000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: 'alert alert-warning alert-with-icon',
                    positionClass: 'toast-top-right'
                });
            });
    }
}
