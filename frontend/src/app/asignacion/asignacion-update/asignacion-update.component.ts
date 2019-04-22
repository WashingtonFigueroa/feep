import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {EventoService} from '../../evento/evento.service';
import {TipoService} from '../../tipo/tipo.service';
import {TipoInsumoService} from '../../tipo-insumo/tipo-insumo.service';
import {AsignacionService} from '../asignacion.service';
import {MiembroService} from '../../miembro/miembro.service';

@Component({
  selector: 'app-asignacion-update',
  templateUrl: './asignacion-update.component.html',
  styleUrls: ['./asignacion-update.component.scss']
})
export class AsignacionUpdateComponent implements OnInit {
    insumo_id: number = null;
    insumo: any = null;
    insumoGroup: FormGroup;
    eventos: any = null;
    tipos: any = null;
    personas: any = null;
    constructor(private insumoService: AsignacionService,
                private eventoService: EventoService,
                private personasService: MiembroService,
                private tipoService: TipoService,
                private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute,
                private toastrService: ToastrService) {
        this.eventoService.listar()
            .subscribe((res: any) => {
                this.eventos = res;
            });
        this.tipoService.listar()
            .subscribe((res: any) => {
                this.tipos = res;
            });
        this.route.params.subscribe((param: any) => {
            this.insumo_id = param.id;
            this.insumoService.show(this.insumo_id).subscribe((res: any) => {
                    this.insumo = res;
                    this.crearForm();
                });
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
    }
    ngOnInit() {
    }
    crearForm() {
        this.insumoGroup = this.fb.group({
            'tipo_id': new FormControl(this.insumo.tipo_id, [Validators.required]),
            'evento_id': new FormControl(this.insumo.evento_id, [Validators.required]),
            'nombre' : new FormControl(this.insumo.nombre, [Validators.required]),
            'cantidad': new FormControl(this.insumo.cantidad, [Validators.required]),
            'fecha': new FormControl(this.insumo.fecha, [Validators.required]),
            'receptor': new FormControl(this.insumo.receptor, [Validators.required]),
        });
    }
    update() {
        // this.insumoGroup.patchValue({
        //     nombre: this.insumoGroup.value.nombre.toUpperCase(),
        //     receptor: this.insumoGroup.value.receptor.toUpperCase()
        // });
        this.insumoService.update(this.insumo_id, this.insumoGroup.value)
            .subscribe((res: any) => {
                this.toastrService.success('Insumo modificado exitosamente.', '', {
                    timeOut: 4000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: 'alert alert-success alert-with-icon',
                    positionClass: 'toast-top-right'
                });
                this.router.navigate(['/asignaciones']);
            });
    }
}
