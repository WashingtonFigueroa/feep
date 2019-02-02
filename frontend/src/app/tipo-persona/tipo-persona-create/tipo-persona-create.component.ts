import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TipoPersonaService} from '../tipo-persona.service';

@Component({
  selector: 'app-tipo-persona-create',
  templateUrl: './tipo-persona-create.component.html',
  styleUrls: ['./tipo-persona-create.component.scss']
})
export class TipoPersonaCreateComponent implements OnInit {

    tipopersonaGroup: FormGroup;
    constructor(private fb: FormBuilder,
                private tipopersonaService: TipoPersonaService,
                private router: Router) {
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
        this.tipopersonaService.store(this.tipopersonaGroup.value)
            .subscribe((res: any) => {
                console.log(res);
                if (res.mensaje) {
                    alert(res.mensaje);
                }
                this.router.navigate(['/tipopersona/listar']);
            }, (error: any) => {
                alert(error.error.mensaje);
                this.tipopersonaGroup.reset();
            });
    }
}
