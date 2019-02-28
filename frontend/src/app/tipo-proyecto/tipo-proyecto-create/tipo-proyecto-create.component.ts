import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {TipoProyectoService} from '../tipo-proyecto.service';

@Component({
  selector: 'app-tipo-proyecto-create',
  templateUrl: './tipo-proyecto-create.component.html',
  styleUrls: ['./tipo-proyecto-create.component.scss']
})
export class TipoProyectoCreateComponent implements OnInit {
    tipoproyectoGroup:  FormGroup;
    constructor(private fb: FormBuilder,
                private router: Router,
                private tipoproyectoService: TipoProyectoService,
                private toastrService: ToastrService) {
        this.crearForm();
    }
    ngOnInit() {
    }
    crearForm() {
        this.tipoproyectoGroup = this.fb.group({
            'nombre' : ['', [Validators.required]],
            'descripcion' : [''],
        });
    }
    store() {
        this.tipoproyectoService.store(this.tipoproyectoGroup.value)
            .subscribe((res: any) => {
                this.toastrService.success('Registrado', 'Tipo Proyecto')
                this.router.navigate(['/tipoproyectos']);
            }, (error) => {
                this.toastrService.error('duplicado', 'Tipo Proyecto');
            });
    }
}
