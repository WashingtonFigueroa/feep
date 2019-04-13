import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProyectoService} from "../../proyecto/proyecto.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AsignacionEventoService} from "../asignacion-evento.service";
import {UsuarioService} from "../../usuario/usuario.service";

@Component({
  selector: 'app-asignacion-evento-create',
  templateUrl: './asignacion-evento-create.component.html',
  styleUrls: ['./asignacion-evento-create.component.scss']
})
export class AsignacionEventoCreateComponent implements OnInit {
    asignacionproyectoGroup: FormGroup;
    proyectoss: any = null;
    usuarios: any = null;
    asigevento = [];
    numProyecto: any = 0;
    constructor(private asignacionproyectoService: AsignacionEventoService,
                private proyectossService: ProyectoService,
                private usuariosService: UsuarioService,
                private router: Router,
                private fb: FormBuilder,
                private toastrService: ToastrService) {
        this.usuariosService.listar().subscribe((res: any) => {
            this.usuarios = [];
            res.forEach(
                (usuario: any) => {
                    this.usuarios.push({
                        usuario_id: usuario.usuario_id,
                        nombres:  usuario.nombres
                    });
                }
            )
        });
        this.proyectossService.listar().subscribe((res: any) => {
            this.proyectoss = res;
            this.numProyecto = res.length;
            this.crearForm();

        });
    }
    ngOnInit() {
    }
    crearForm() {
        this.asignacionproyectoGroup = this.fb.group({
            'proyecto_id': [parseInt(this.numProyecto , 10), [Validators.required]],
            'usuario_id': ['', [Validators.required]],
            'descripcion': ['']
        });
    }
    store() {
        const formData = new FormData();
        formData.append('proyecto_id', this.asignacionproyectoGroup.value.proyecto_id);
        formData.append('usuario_id', this.asignacionproyectoGroup.value.usuario_id);
        formData.append('descripcion', this.asignacionproyectoGroup.value.descripcion.toUpperCase());
        this.asignacionproyectoService.store(formData).subscribe((res: any) => {
            this.toastrService.success('Proyecto Asignado.', 'Exitosamente', {
                timeOut: 4000,
                closeButton: true,
                enableHtml: true,
                toastClass: 'alert alert-success alert-with-icon',
                positionClass: 'toast-top-right'
            });
            this.router.navigate(['/asignacioneventos']);
           // this.asigevento.push(res);
           // this.asignacionproyectoGroup.reset();
            }, (error) => {
            this.toastrService.warning('Proyecto Asignado', 'Duplicado', {
                timeOut: 4000,
                closeButton: true,
                enableHtml: true,
                toastClass: 'alert alert-warning alert-with-icon',
                positionClass: 'toast-top-right'
            });
            });
    }
}
