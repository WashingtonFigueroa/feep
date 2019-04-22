import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AnexoService} from '../anexo.service';
import {EventoService} from '../../evento/evento.service';

@Component({
  selector: 'app-anexo-create',
  templateUrl: './anexo-create.component.html',
  styleUrls: ['./anexo-create.component.scss']
})
export class AnexoCreateComponent implements OnInit {
    @ViewChild('archivo') archivo;
    anexoGroup: FormGroup;
    eventos: any = null;
    numEvento: any = 0;
    constructor(private anexoService: AnexoService,
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
        this.anexoGroup = this.fb.group({
            'evento_id': [parseInt(this.numEvento , 10), [Validators.required]],
            'archivo': [''],
            'descripcion': ['', [Validators.required]],
        });
    }
    store() {
        const archivo =  this.archivo.nativeElement;
        const formData = new FormData();
        if (archivo.files[0]) {
            formData.append('archivo', archivo.files[0]);
        }
        formData.append('evento_id', this.anexoGroup.value.evento_id);
        formData.append('descripcion', this.anexoGroup.value.descripcion.toUpperCase());
        this.anexoService.store(formData)
            .subscribe((res: any) => {
                this.toastrService.success('Anexo agregado exitosamente.', '', {
                    timeOut: 2000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: 'alert alert-success alert-with-icon',
                    positionClass: 'toast-top-right'
                });
                this.router.navigate(['/anexos']);
            }, (error) => {
                this.toastrService.warning('Anexo agregado duplicado.', '', {
                    timeOut: 2000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: 'alert alert-warning alert-with-icon',
                    positionClass: 'toast-top-right'
                });
            });

    }
}
