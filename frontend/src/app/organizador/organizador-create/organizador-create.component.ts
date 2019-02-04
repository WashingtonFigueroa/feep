import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventoService} from '../../evento/evento.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {OrganizadorService} from '../organizador.service';
import {OrganizacionService} from '../../organizacion/organizacion.service';

@Component({
  selector: 'app-organizador-create',
  templateUrl: './organizador-create.component.html',
  styleUrls: ['./organizador-create.component.scss']
})
export class OrganizadorCreateComponent implements OnInit {
    organizadorGroup: FormGroup;
    eventos: any = null;
    organizaciones: any = null;
    constructor(private organizadorService: OrganizadorService,
                private organizacionService: OrganizacionService,
                private eventoService: EventoService,
                private router: Router,
                private fb: FormBuilder,
                private toastrService: ToastrService) {
        this.organizacionService.listar()
            .subscribe((res: any) => {
                this.organizaciones = res;
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
        this.organizadorGroup = this.fb.group({
            'organizacion_id': [0, [Validators.required]],
            'evento_id': [0, [Validators.required]],
            'fecha': ['', [Validators.required]],
        });
    }
    store() {
        const formData = new FormData();
        formData.append('organizacion_id', this.organizadorGroup.value.organizacion_id);
        formData.append('evento_id', this.organizadorGroup.value.evento_id);
        formData.append('fecha', this.organizadorGroup.value.fecha);
        this.organizadorService.store(formData)
            .subscribe((res: any) => {
                this.toastrService.success('Registrado', 'Auspicinates')
                this.router.navigate(['/organizadores/listar']);
            }, (error) => {
                this.toastrService.error('duplicado', 'Auspicinates');
            });
    }
}