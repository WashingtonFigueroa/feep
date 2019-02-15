import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrganizadorService} from "../../organizador/organizador.service";
import {OrganizacionService} from "../../organizacion/organizacion.service";
import {EventoService} from "../../evento/evento.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AsignacionService} from "../asignacion.service";
import {TipoInsumoService} from "../../tipo-insumo/tipo-insumo.service";
import {TipoService} from "../../tipo/tipo.service";

@Component({
  selector: 'app-asignacion-create',
  templateUrl: './asignacion-create.component.html',
  styleUrls: ['./asignacion-create.component.scss']
})
export class AsignacionCreateComponent implements OnInit {
    insumoGroup: FormGroup;
    eventos: any = null;
    tipos: any = null;
    constructor(private insumoService: AsignacionService,
                private tipoService: TipoService,
                private eventoService: EventoService,
                private router: Router,
                private fb: FormBuilder,
                private toastrService: ToastrService) {
        this.tipoService.listar()
            .subscribe((res: any) => {
                this.tipos = res;
            });
        this.eventoService.listar()
            .subscribe((res: any) => {
                this.eventos = res;
            });
        this.crearForm();
    }
    ngOnInit() {
    }
    crearForm() {
        this.insumoGroup = this.fb.group({
            'tipo_id': [0, [Validators.required]],
            'evento_id': [0, [Validators.required]],
            'nombre': ['', [Validators.required]],
            'cantidad': ['', [Validators.required]],
            'fecha': [''],
            'imagen': [''],
            'receptor': ['', [Validators.required]],
        });
    }
    store() {
        const formData = new FormData();
        formData.append('tipo_id', this.insumoGroup.value.tipo_id);
        formData.append('evento_id', this.insumoGroup.value.evento_id);
        formData.append('nombre', this.insumoGroup.value.nombre);
        formData.append('cantidad', this.insumoGroup.value.cantidad);
        formData.append('fecha', this.insumoGroup.value.fecha);
        formData.append('imagen', this.insumoGroup.value.imagen);
        formData.append('receptor', this.insumoGroup.value.receptor);
        this.insumoService.store(formData)
            .subscribe((res: any) => {
                this.toastrService.success('Registrado', 'Suministro')
                this.router.navigate(['/asignaciones/listar']);
            }, (error) => {
                this.toastrService.error('duplicado', 'Suministro');
            });
    }
}