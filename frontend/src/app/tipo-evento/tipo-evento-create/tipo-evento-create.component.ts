import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {TipoEventoService} from "../tipo-evento.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-tipo-evento-create',
  templateUrl: './tipo-evento-create.component.html',
  styleUrls: ['./tipo-evento-create.component.scss']
})
export class TipoEventoCreateComponent implements OnInit {
    tipoeventoGroup:  FormGroup;
    constructor(private fb: FormBuilder,
                private router: Router,
                private tipoEventoService: TipoEventoService,
                private toastrService: ToastrService) {
        this.crearForm();
    }
    ngOnInit() {
    }
    crearForm() {
        this.tipoeventoGroup = this.fb.group({
            'nombre' : ['', [Validators.required]],
            'descripcion' : [''],
        });
    }
    store() {
        this.tipoEventoService.store(this.tipoeventoGroup.value)
            .subscribe((res: any) => {
                this.toastrService.success('Registrado', 'Tipo Evento')
                this.router.navigate(['/tipoeventos']);
            }, (error) => {
                this.toastrService.error('duplicado','Tipo Evento');
            });
    }
}
