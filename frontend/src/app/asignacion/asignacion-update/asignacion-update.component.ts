import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {EventoService} from '../../evento/evento.service';
import {TipoService} from '../../tipo/tipo.service';
import {TipoInsumoService} from '../../tipo-insumo/tipo-insumo.service';

@Component({
  selector: 'app-asignacion-update',
  templateUrl: './asignacion-update.component.html',
  styleUrls: ['./asignacion-update.component.scss']
})
export class AsignacionUpdateComponent implements OnInit {
    @ViewChild('imagen') imagen;
    @ViewChild('preview') preview;
    insumo_id: number = null;
    insumo: any = null;
    insumoGroup: FormGroup;
    eventos: any = null;
    tipos: any = null;
    constructor(private insumoService: TipoInsumoService,
                private eventoService: EventoService,
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
           // 'imagen': new FormControl(this.insumo.imagen),
            'receptor': new FormControl(this.insumo.receptor, [Validators.required]),
        });
    }
    update() {
        this.insumoService.update(this.insumo_id, this.insumoGroup.value)
            .subscribe((res: any) => {
                this.toastrService.success('Datos Actualizados', 'Insumo')
                this.router.navigate(['/asignaciones']);
            });
    }
    loadImage() {
        const imagen = this.imagen.nativeElement;
        /*        console.log(imagen.files[0]);*/
        const reader = new FileReader();
        reader.onload = (e: any) => {
            this.preview.nativeElement.src = e.target.result;
        };
        reader.readAsDataURL(imagen.files[0]);
    }
}
