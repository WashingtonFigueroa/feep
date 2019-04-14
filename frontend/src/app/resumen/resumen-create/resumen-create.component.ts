import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventoService} from '../../evento/evento.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ResumenService} from '../resumen.service';

@Component({
  selector: 'app-resumen-create',
  templateUrl: './resumen-create.component.html',
  styleUrls: ['./resumen-create.component.scss']
})
export class ResumenCreateComponent implements OnInit {
    resumenGroup: FormGroup;
    eventos: any = null;
    numEvento: any = 0;
    constructor(private resumenService: ResumenService,
                private eventoService: EventoService,
                private router: Router,
                private fb: FormBuilder,
                private toastrService: ToastrService) {
        this.eventoService.listar().subscribe((res: any) => {
            this.eventos = res;
            this.numEvento = res.length;
            this.crearForm();
        });
    }
    ngOnInit() {
    }
    crearForm() {
        this.resumenGroup = this.fb.group({
            'evento_id': [parseInt(this.numEvento , 10), [Validators.required]],
            'asistentes': [''],
            'num_mujeres': [0],
            'num_ninias': [0],
            'num_hombre': [0],
            'num_ninios': [0],
            'indigena': [''],
            'afroecuatoriano': [''],
            'negro': [''],
            'mulato': [''],
            'montubio': [''],
            'mestizo': [''],
            'blanco': [''],
            'otro': [''],
            'observaciones': [''],
        });
    }
    store() {
        const total = this.resumenGroup.value.num_mujeres +
            this.resumenGroup.value.num_ninias +
            this.resumenGroup.value.num_hombre +
            this.resumenGroup.value.num_ninios;
        const formData = new FormData();
        formData.append('evento_id', this.resumenGroup.value.evento_id);
        formData.append('asistentes', total);
        formData.append('num_mujeres', this.resumenGroup.value.num_mujeres);
        formData.append('num_ninias', this.resumenGroup.value.num_ninias);
        formData.append('num_hombre', this.resumenGroup.value.num_hombre);
        formData.append('num_ninios', this.resumenGroup.value.num_ninios);
        formData.append('indigena', this.resumenGroup.value.indigena);
        formData.append('afroecuatoriano', this.resumenGroup.value.afroecuatoriano);
        formData.append('negro', this.resumenGroup.value.negro);
        formData.append('mulato', this.resumenGroup.value.mulato);
        formData.append('montubio', this.resumenGroup.value.montubio);
        formData.append('mestizo', this.resumenGroup.value.mestizo);
        formData.append('blanco', this.resumenGroup.value.blanco);
        formData.append('otro', this.resumenGroup.value.otro);
        formData.append('observaciones', this.resumenGroup.value.observaciones);
        this.resumenService.store(formData)
            .subscribe((res: any) => {
                this.toastrService.success('Resumen agregado exitosamente.', '', {
                    timeOut: 2000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: 'alert alert-success alert-with-icon',
                    positionClass: 'toast-top-right'
                });
                this.router.navigate(['/resumenes']);
            }, (error) => {
                this.toastrService.warning('Resumen duplicado.', '', {
                    timeOut: 2000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: 'alert alert-warning alert-with-icon',
                    positionClass: 'toast-top-right'
                });
            });
    }
}
