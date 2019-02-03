import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TipoPersonaService} from '../tipo-persona.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-tipo-persona-create',
  templateUrl: './tipo-persona-create.component.html',
  styleUrls: ['./tipo-persona-create.component.scss']
})
export class TipoPersonaCreateComponent implements OnInit {

    tipopersonaGroup: FormGroup;
    constructor(private fb: FormBuilder,
                private tipopersonaService: TipoPersonaService,
                private router: Router,
                private toastrService: ToastrService) {
        this.crearForm();
    }

    ngOnInit() {
    }

    crearForm() {
        this.tipopersonaGroup = this.fb.group({
            'nombre' : ['', [Validators.required]],
            'descripcion' : ['', [Validators.required]]
        });
    }

    store() {
        const formData = new FormData();
        formData.append('nombre', this.tipopersonaGroup.value.nombre);
        formData.append('descripcion', this.tipopersonaGroup.value.descripcion);
        this.tipopersonaService.store(formData)
            .subscribe((res: any) => {
                this.toastrService.success('Registrada', 'Tipo Persona')
                this.router.navigate(['/tipopersona/listar']);
            }, (error) => {
                this.toastrService.error('Registrada', 'Tipo Persona')
            });
    }
}
