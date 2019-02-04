import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.scss']
})
export class UsuarioCreateComponent implements OnInit {

  usuarioGroup:  FormGroup;
  constructor(private fb: FormBuilder,
              private router: Router,
              private usuarioService: UsuarioService) {
    this.crearForm();
  }

  ngOnInit() {
  }

  crearForm() {
    this.usuarioGroup = this.fb.group({
      'nombres' : ['', [Validators.required]],
      'cuenta' : ['', [Validators.required]],
      'email' : [''],
      'tipo' : ['', [Validators.required]],
      'password' : ['', [Validators.required]],
      'password_repeat' : ['', [Validators.required]]
    });
  }

  store() {
    const password = this.usuarioGroup.value.password;
    const password_repeat = this.usuarioGroup.value.password_repeat;
    if (password === password_repeat) {
      this.usuarioService.store(this.usuarioGroup.value)
          .subscribe((res: any) => {
            alert(res.nombres + ' registrado');
            this.router.navigate(['/usuarios']);
          });
    } else {
      alert('Las contraseñas no coinciden');
      this.usuarioGroup.patchValue({
        'password' : '',
        'password_repeat' : ''
      });
    }
  }
}
