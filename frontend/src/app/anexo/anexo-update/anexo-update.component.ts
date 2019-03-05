import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AnexoService} from "../anexo.service";
import {EventoService} from "../../evento/evento.service";

@Component({
  selector: 'app-anexo-update',
  templateUrl: './anexo-update.component.html',
  styleUrls: ['./anexo-update.component.scss']
})
export class AnexoUpdateComponent implements OnInit {
    @ViewChild('imagen') imagen;
    anexo_id: number = null;
    anexo: any = null;
    anexoGroup: FormGroup;
    eventos: any = null;
    constructor(private anexoService: AnexoService,
                private eventosService: EventoService,
                private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute,
                private toastrService: ToastrService) {
        this.eventosService.listar()
            .subscribe((res: any) => {
                this.eventos = res;
            });
        this.route.params.subscribe((param: any) => {
            this.anexo_id = param.id;
            this.anexoService.show(this.anexo_id)
                .subscribe((res: any) => {
                    this.anexo = res;
                    this.crearForm();
                });
        });
    }
    ngOnInit() {
    }
    crearForm() {
        this.anexoGroup = this.fb.group({
            'evento_id': new FormControl(this.anexo.evento_id, [Validators.required]),
            'archivo': new FormControl(this.anexo.archivo, [Validators.required]),
            'descripcion' : new FormControl(this.anexo.descripcion, [Validators.required]),
        });
    }
    update() {
        this.anexoService.update(this.anexo_id, this.anexoGroup.value)
            .subscribe((res: any) => {
                this.toastrService.success('Datos Actualizados', 'Anexo')
                this.router.navigate(['/anexos']);
            });
    }
}
