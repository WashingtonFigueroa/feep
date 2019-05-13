 import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventoService} from '../../evento/evento.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AsignacionService} from '../asignacion.service';
import {TipoService} from '../../tipo/tipo.service';
import {MiembroService} from '../../miembro/miembro.service';
 import {OrganizacionService} from '../../organizacion/organizacion.service';

@Component({
  selector: 'app-asignacion-create',
  templateUrl: './asignacion-create.component.html',
  styleUrls: ['./asignacion-create.component.scss']
})
export class AsignacionCreateComponent implements OnInit {
    @ViewChild('imagen') imagen;
    insumoGroup: FormGroup;
    eventos: any = null;
    tipos: any = null;
    personas: any = null;
    organizaciones: any = null;
    today: Date;
    numEvento: any = 0;
    constructor(private insumoService: AsignacionService,
                private tipoService: TipoService,
                private personasService: MiembroService,
                private organizacionService: OrganizacionService,
                private eventoService: EventoService,
                private router: Router,
                private fb: FormBuilder,
                private toastrService: ToastrService) {
        this.today = new Date();
        this.tipoService.listar()
            .subscribe((res: any) => {
                this.tipos = res;
            });
        this.organizacionService.listar()
            .subscribe((res: any) => {
                this.organizaciones = res;
            });
        this.personasService.listar().subscribe((res: any) => {
            this.personas = [];
            res.forEach(
                (persona: any) => {
                    this.personas.push({
                        persona_id: persona.persona_id,
                        nombres:  persona.nombres
                    });
                }
            )
        });
        this.eventoService.listar()
            .subscribe((res: any) => {
                this.eventos = res;
                this.numEvento = res.length;
                this.crearForm();
            });
    }
    ngOnInit() {
    }
    crearForm() {
        this.insumoGroup = this.fb.group({
            'tipo_id': [1, [Validators.required]],
            'evento_id': [parseInt(this.numEvento , 10), [Validators.required]],
            'nombre': [''],
            'cantidad': ['', [Validators.required]],
            'fecha': [''],
            'imagen': [''],
            'receptor': [''],
            'receptor2': [''],
        });
    }
    store() {
        const imagen =  this.imagen.nativeElement;
        const formData = new FormData();
        if (imagen.files[0]) {
            formData.append('imagen', imagen.files[0]);
        }
        formData.append('tipo_id', this.insumoGroup.value.tipo_id);
        formData.append('evento_id', this.insumoGroup.value.evento_id);
        formData.append('nombre', this.insumoGroup.value.nombre.toUpperCase());
        formData.append('cantidad', this.insumoGroup.value.cantidad);
        formData.append('fecha', this.insumoGroup.value.fecha);
        formData.append('receptor', this.insumoGroup.value.receptor.toUpperCase());
        formData.append('receptor2', this.insumoGroup.value.receptor2.toUpperCase());
        this.insumoService.store(formData)
            .subscribe((res: any) => {
                this.toastrService.success('Insumo agregado exitosamente.', '', {
                    timeOut: 4000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: 'alert alert-success alert-with-icon',
                    positionClass: 'toast-top-right'
                });
                this.router.navigate(['/asignaciones/listar']);
            }, (error) => {
                this.toastrService.warning('Insumo duplicado.', '', {
                    timeOut: 4000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: 'alert alert-warning alert-with-icon',
                    positionClass: 'toast-top-right'
                });
            });
    }
}
