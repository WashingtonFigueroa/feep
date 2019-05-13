import { Component, OnInit } from '@angular/core';
import {ngxCsv} from 'ngx-csv';
import {EventoService} from '../../evento/evento.service';
import {TipoService} from '../../tipo/tipo.service';
import {ReporteService} from '../reporte.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UbicacionService} from '../../ubicacion/ubicacion.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-reportetres',
  templateUrl: './reportetres.component.html',
  styleUrls: ['./reportetres.component.scss']
})
export class ReportetresComponent implements OnInit {
    tipos: any = null;
    x: any = null;
    barrios: any = null;
    insumosGroup: FormGroup;
    barriosGroup: FormGroup;
  constructor(private reportesService: ReporteService,
              private  eventosService: EventoService,
              private  toastrService: ToastrService,
              private  barriosService: UbicacionService,
              protected fb: FormBuilder,
              private tipoService: TipoService) {
      this.tipoService.listar()
          .subscribe((res: any) => {
              this.tipos = res;
              this.createForm();
          });
      this.barriosService.barrioslistar().subscribe((res: any) => {
          this.barrios = [];
          res.forEach(
              (barrio: any) => {
                  if (barrio.comunidad === 'null') {
                      this.x = '';
                  } else {
                      this.x = barrio.comunidad;
                  }
                  this.barrios.push({
                      barrio_id: barrio.barrio_id,
                      nombre:  barrio.ciudad + ' - ' + barrio.parroquia + ' - ' + this.x + ' - ' + barrio.nombre
                  });
              }
          )
          this.createForm1();
      });
  }
    createForm() {
        this.insumosGroup = this.fb.group({
            'dato' : new FormControl('', Validators.required),
            'start' : new FormControl('', Validators.required),
            'end' : new FormControl('', Validators.required),
        });
    }

    createForm1() {
        this.barriosGroup = this.fb.group({
            'dato1' : new FormControl('', Validators.required),
            'start1' : new FormControl('', Validators.required),
            'end1' : new FormControl('', Validators.required),
        });
    }
  ngOnInit() {
  }
    exportProyectos() {
        const date = new Date();
        const now = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        this.reportesService.excelProyectos().subscribe(eventos => {
            const csv = new ngxCsv(eventos, 'proyectos-' + now , {
                fieldSeparator: ';',
                headers: ['Tipo Proyecto', 'Nombre Proyecto', 'Ubicación', 'Fecha Inicia', 'Fecha Finaliza']
            });
        });
    }
    export() {
        const date = new Date();
        const now = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        this.eventosService.exporar_excel_eventos().subscribe(eventos => {
            const csv = new ngxCsv(eventos, 'eventos-' + now , {
                fieldSeparator: ';',
                headers : ['Nombre Proyecto', 'Tipo Evento', 'Nombre Evento', 'Responsable', 'Ubicacion', 'Direccion',
                'Fecha Inicia', 'Fecha Finaliza', 'Duracion Horas']
            });
        });
    }
    exportBeneficiarios() {
        const date = new Date();
        const now = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        this.reportesService.excelBeneficiarios().subscribe(eventos => {
            const csv = new ngxCsv(eventos, 'beneficiarios-' + now , {
                fieldSeparator: ';',
                headers: ['Nombre Evento', 'Nombre Beneficiario', 'Nombre Organizacion', 'Observación']
            });
        });
    }
    excelOrganizaciones() {
        const date = new Date();
        const now = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        this.reportesService.excelOrganizaciones().subscribe(eventos => {
            const csv = new ngxCsv(eventos, 'organizaciones-' + now , {
                fieldSeparator: ';',
                headers: ['Tipo Organizacion', 'Actividad', 'Documento', 'Nombre Organización',
                    'Caracteristica1', 'Caracteristica2', 'Caracteristica3', 'Representante',  'Contacto',
                    'Dirección', 'Email', 'Ministerio', 'Acuerdo', 'Mujeres', 'Niñas', 'Hobres', 'Niños',
                    'Total', 'facebook', 'Twitter', 'WhatsApp', 'instragram', 'interna', 'externa']
            });
        });
    }
    excelPorInsumo() {
        const dato = this.insumosGroup.value.dato;
        const start = this.insumosGroup.value.start;
        const end = this.insumosGroup.value.end;
        if (end >= start) {
            const date = new Date();
            const now = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
            this.reportesService.excelPorInsumo(dato, start, end ).subscribe(eventos => {
                const csv = new ngxCsv(eventos, 'Insumos_por_Evento' + now , {
                    fieldSeparator: ';',
                    headers: ['Tipo Evento', 'Tipo Insumo', 'Cantidad', 'Fecha', 'Receptor']
                });
            });
        } else {
            this.toastrService.warning('Rango de fechas Incorrecto', '', {
                timeOut: 4000,
                closeButton: true,
                enableHtml: true,
                toastClass: 'alert alert-warning alert-with-icon',
                positionClass: 'toast-top-right'
            });
        }
    }
    excelPorParroquia() {
        const dato1 = this.barriosGroup.value.dato1;
        const start1 = this.barriosGroup.value.start1;
        const end1 = this.barriosGroup.value.end1;
        if (end1 >= start1) {
            const date = new Date();
            const now = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
            this.reportesService.excelPorParroquia(dato1, start1, end1 ).subscribe(eventos => {
                const csv = new ngxCsv(eventos, 'Eventos_por_Parroquia-' + now , {
                    fieldSeparator: ';',
                    headers: ['Tipo Evento', 'Tipo Insumo', 'Cantidad', 'Fecha', 'Receptor']
                });
            });
        } else {
            this.toastrService.warning('Rango de fechas Incorrecto', '', {
                timeOut: 4000,
                closeButton: true,
                enableHtml: true,
                toastClass: 'alert alert-warning alert-with-icon',
                positionClass: 'toast-top-right'
            });
        }
    }
}
