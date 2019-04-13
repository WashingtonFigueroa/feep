import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {TipoEventoService} from '../tipo-evento.service';

@Component({
  selector: 'app-tipo-evento-update',
  templateUrl: './tipo-evento-update.component.html',
  styleUrls: ['./tipo-evento-update.component.scss']
})
export class TipoEventoUpdateComponent implements OnInit {
    tipoevento_id: number = null;
    tipoevento: any = null;
    tipoeventoGroup: FormGroup;
    constructor(private tipoeventoService: TipoEventoService,
                private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute,
                private toastrService: ToastrService) {
        this.route.params.subscribe((param: any) => {
            this.tipoevento_id = param.id;
            this.tipoeventoService.show(this.tipoevento_id)
                .subscribe((res: any) => {
                    this.tipoevento = res;
                    this.crearForm();
                });
        });
    }
    ngOnInit() {
    }
    crearForm() {
        this.tipoeventoGroup = this.fb.group({
            'nombre' : [this.tipoevento.nombre, [Validators.required]],
            'descripcion' : [this.tipoevento.descripcion]
        });
    }
    update() {
        this.tipoeventoGroup.patchValue({
            nombre: this.tipoeventoGroup.value.nombre.toUpperCase(),
            descripcion: this.tipoeventoGroup.value.descripcion.toUpperCase(),
        });
        this.tipoeventoService.update(this.tipoevento_id, this.tipoeventoGroup.value)
            .subscribe((res: any) => {
                this.toastrService.success('Tipo Evento Actualizado.', '', {
                    timeOut: 2000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: 'alert alert-info alert-with-icon',
                    positionClass: 'toast-top-right'
                });
                this.router.navigate(['/tipoeventos']);
            });
    }
}
