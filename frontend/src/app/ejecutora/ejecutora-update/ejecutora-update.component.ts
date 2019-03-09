import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {OrganizacionService} from '../../organizacion/organizacion.service';
import {EjecutoraService} from '../ejecutora.service';
import {ProyectoService} from '../../proyecto/proyecto.service';

@Component({
  selector: 'app-ejecutora-update',
  templateUrl: './ejecutora-update.component.html',
  styleUrls: ['./ejecutora-update.component.scss']
})
export class EjecutoraUpdateComponent implements OnInit {
    ejecutora_id: number = null;
    ejecutora: any = null;
    ejecutoraGroup: FormGroup;
    proyectos: any = null;
    organizaciones: any = null;
    constructor(private ejecutoraService: EjecutoraService,
                private proyectosService: ProyectoService,
                private organizacionesService: OrganizacionService,
                private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute,
                private toastrService: ToastrService) {
        this.proyectosService.listar()
            .subscribe((res: any) => {
                this.proyectos = res;
            });
        this.organizacionesService.listar()
            .subscribe((res: any) => {
                this.organizaciones = res;
            });
        this.route.params.subscribe((param: any) => {
            this.ejecutora_id = param.id;
            this.ejecutoraService.show(this.ejecutora_id).subscribe((res: any) => {
                this.ejecutora = res;
                this.crearForm(res);
            });
        });
    }
    ngOnInit() {
    }
    crearForm(ejecutora) {
        this.ejecutoraGroup = this.fb.group({
            'proyecto_id': [ejecutora.proyecto_id, [Validators.required]],
            'organizacion_id': [ejecutora.organizacion_id, [Validators.required]],
            'tipo' : [ejecutora.tipo, [Validators.required]],
            'descripcion': [ejecutora.descripcion, [Validators.required]],
        });
    }
    update() {
        this.ejecutoraService.update(this.ejecutora_id, this.ejecutoraGroup.value).subscribe((res: any) => {
            this.toastrService.success('Actualizado', 'Auspiciante')
            this.router.navigate(['/ejecutoras']);
        });
    }
}
