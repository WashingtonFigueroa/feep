import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AnexoService} from "../anexo.service";
import {EventoService} from "../../evento/evento.service";

@Component({
  selector: 'app-anexo-create',
  templateUrl: './anexo-create.component.html',
  styleUrls: ['./anexo-create.component.scss']
})
export class AnexoCreateComponent implements OnInit {
    @ViewChild('archivo') archivo;
    anexoGroup: FormGroup;
    eventos: any = null;
    constructor(private anexoService: AnexoService,
                private eventoService: EventoService,
                private router: Router,
                private fb: FormBuilder,
                private toastrService: ToastrService) {
        this.eventoService.listar().subscribe((res: any) => {
            this.eventos = res;
        });
        this.crearForm();
    }
    ngOnInit() {
    }
    crearForm() {
        this.anexoGroup = this.fb.group({
            'evento_id': [0, [Validators.required]],
            'archivo': [''],
            'descripcion': ['', [Validators.required]],
        });
    }
    store() {
        if (this.archivo.nativeElement.files[0]) {
            const formData = new FormData();
            formData.append('evento_id', this.anexoGroup.value.evento_id);
            formData.append('archivo', this.anexoGroup.value.archivo);
            formData.append('descripcion', this.anexoGroup.value.descripcion);
            this.anexoService.store(formData)
                .subscribe((res: any) => {
                    this.toastrService.success('Registrado', 'Anexo');
                    this.router.navigate(['/anexos']);
                }, (error) => {
                    this.toastrService.error('duplicado', 'Anexo');
                });
        } else {
            this.anexoService.store(this.anexoGroup.value)
                .subscribe((res: any) => {
                    this.toastrService.success('Registrado', 'Anexo');
                    this.router.navigate(['/anexos']);
                }, (error) => {
                    this.toastrService.error('duplicado', 'Anexo');
                });
        }
    }
}
