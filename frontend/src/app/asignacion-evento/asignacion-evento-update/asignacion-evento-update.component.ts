import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AsignacionEventoService} from '../asignacion-evento.service';
import {ProyectoService} from '../../proyecto/proyecto.service';
import {UsuarioService} from '../../usuario/usuario.service';

@Component({
  selector: 'app-asignacion-evento-update',
  templateUrl: './asignacion-evento-update.component.html',
  styleUrls: ['./asignacion-evento-update.component.scss']
})
export class AsignacionEventoUpdateComponent implements OnInit {
    asignacion_evento_id: number = null;
    asignacion_evento: any = null;
    asignacion_eventoGroup: FormGroup;
    proyectos: any = null;
    usuarios: any = null;
    constructor(private asignacion_eventoService: AsignacionEventoService,
                private proyectoService: ProyectoService,
                private usuarioService: UsuarioService,
                private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute,
                private toastrService: ToastrService) {
        this.proyectoService.listar()
            .subscribe((res: any) => {
                this.proyectos = res;
            });
        this.usuarioService.listar()
            .subscribe((res: any) => {
                this.usuarios = res;
            });
        this.route.params.subscribe((param: any) => {
            this.asignacion_evento_id = param.id;
            this.asignacion_eventoService.show(this.asignacion_evento_id)
                .subscribe((res: any) => {
                    this.asignacion_evento = res;
                    this.crearForm();
                });
        });
    }

    ngOnInit() {
    }

    crearForm() {
        this.asignacion_eventoGroup = this.fb.group({
            'proyecto_id': [this.asignacion_evento.proyecto_id, [Validators.required]],
            'usuario_id': [this.asignacion_evento.usuario_id, [Validators.required]],
            'descripcion': [this.asignacion_evento.descripcion],
        });
    }

    update() {
        this.asignacion_eventoGroup.patchValue({
            descripcion: this.asignacion_eventoGroup.value.descripcion.toUpperCase(),
        });
        this.asignacion_eventoService.update(this.asignacion_evento_id, this.asignacion_eventoGroup.value)
            .subscribe((res: any) => {
                this.toastrService.success('Asignación Exitosa.', '', {
                    timeOut: 4000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: 'alert alert-success alert-with-icon',
                    positionClass: 'toast-top-right'
                });
                this.router.navigate(['/asignacioneventos']);
            });
    }
}
