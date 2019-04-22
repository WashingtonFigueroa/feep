import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TipoProyectoService} from '../tipo-proyecto.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-tipo-proyecto-update',
  templateUrl: './tipo-proyecto-update.component.html',
  styleUrls: ['./tipo-proyecto-update.component.scss']
})
export class TipoProyectoUpdateComponent implements OnInit {
    tipoproyecto_id: number = null;
    tipoproyecto: any = null;
    tipoproyectoGroup: FormGroup;
    constructor(private tipoproyectoService: TipoProyectoService,
                private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute,
                private toastrService: ToastrService) {
        this.route.params.subscribe((param: any) => {
            this.tipoproyecto_id = param.id;
            this.tipoproyectoService.show(this.tipoproyecto_id)
                .subscribe((res: any) => {
                    this.tipoproyecto = res;
                    this.crearForm();
                });
        });
    }
    ngOnInit() {
    }
    crearForm() {
        this.tipoproyectoGroup = this.fb.group({
            'nombre' : [this.tipoproyecto.nombre, [Validators.required]],
            'descripcion' : [this.tipoproyecto.descripcion]
        });
    }
    update() {
        this.tipoproyectoGroup.patchValue({
            nombre: this.tipoproyectoGroup.value.nombre.toUpperCase(),
            descripcion: this.tipoproyectoGroup.value.descripcion.toUpperCase(),
        });
        this.tipoproyectoService.update(this.tipoproyecto_id, this.tipoproyectoGroup.value)
            .subscribe((res: any) => {
                this.toastrService.info('Tipo Proyecto Actualizado.', '', {
                    timeOut: 2000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: 'alert alert-info alert-with-icon',
                    positionClass: 'toast-top-right'
                });
                this.router.navigate(['/tipoproyectos']);
            });
    }
}
