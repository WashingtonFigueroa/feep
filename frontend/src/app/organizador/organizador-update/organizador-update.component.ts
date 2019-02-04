import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrganizadorService} from "../organizador.service";
import {OrganizacionService} from "../../organizacion/organizacion.service";
import {EventoService} from "../../evento/evento.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-organizador-update',
  templateUrl: './organizador-update.component.html',
  styleUrls: ['./organizador-update.component.scss']
})
export class OrganizadorUpdateComponent implements OnInit {
    organizacion_evento_id: number = null;
    organizacion_evento: any = null;
    organizacion_eventoGroup: FormGroup;

    organizaciones: any = null;
    eventos: any = null;
    constructor(private organizacion_eventoService: OrganizadorService,
                private organizacionService: OrganizacionService,
                private eventosService: EventoService,
                private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute,
                private toastrService:ToastrService) {
        this.organizacionService.listar()
            .subscribe((res: any) => {
                this.organizaciones = res;
            });
        this.eventosService.listar()
            .subscribe((res: any) => {
                this.eventos = res;
            });
        this.route.params.subscribe((param: any) => {
            this.organizacion_evento_id = param.id;
            this.organizacion_eventoService.show(this.organizacion_evento_id)
                .subscribe((res: any) => {
                    this.organizacion_evento = res;
                    this.crearForm();
                });
        });
    }

    ngOnInit() {
    }

    crearForm() {
        this.organizacion_eventoGroup = this.fb.group({
            'organizacion_id': [this.organizacion_evento.organizacion_id, [Validators.required]],
            'evento_id': [this.organizacion_evento.evento_id, [Validators.required]],
            'fecha': [this.organizacion_evento.fecha, [Validators.required]],
        });
    }

    update() {
        this.organizacion_eventoService.update(this.organizacion_evento_id, this.organizacion_eventoGroup.value)
            .subscribe((res: any) => {
                this.toastrService.success('Datos Modificados','Auspiciante');
                this.router.navigate(['/organizadores']);
            });
    }
}