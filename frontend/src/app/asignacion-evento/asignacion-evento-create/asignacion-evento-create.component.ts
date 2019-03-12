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
    constructor(private asignacionproyectoService: AsignacionEventoService,
                private proyectossService: ProyectoService,
                private usuariosService: UsuarioService,
                private router: Router,
                private fb: FormBuilder,
                private toastrService: ToastrService) {
        this.proyectossService.listar().subscribe((res: any) => {
            this.proyectoss = res;
        });
        this.usuariosService.listar().subscribe((res: any) => {
            this.usuarios = [];
            res.forEach(
                (usuario:any)=>{
                    this.usuarios.push({
                        usuario_id: usuario.usuario_id,
                        nombres:  usuario.nombres
                    });
                }
            )
        });
        this.crearForm();
    }
    ngOnInit() {
    }
    crearForm() {
        this.asignacionproyectoGroup = this.fb.group({
            'proyecto_id': [0, [Validators.required]],
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
                this.toastrService.success('Al Proyecto', '');
            this.asigevento.push(res);
            this.asignacionproyectoGroup.reset();
            }, (error) => {
                this.toastrService.warning('Anteriormente', 'Usuario Agregado');
            });
    }
}
