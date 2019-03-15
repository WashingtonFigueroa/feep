import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AutenticacionService} from '../autenticacion.service';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;
  returnUrl: string;
  loading = false;
  submitted = false;
  error = '';
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService,
              private autenticacionService: AutenticacionService) {
  }

  ngOnInit() {
    this.loginGroup = this.fb.group({
      'cuenta': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    });
    this.autenticacionService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.loginGroup.controls;
  }
  login() {
    this.submitted = true;
    if (this.loginGroup.invalid) {
      return;
    }
    this.loading = true;
    this.autenticacionService.login(this.loginGroup.value)
        .pipe(first())
        .subscribe(
            data => {
              this.toastr.success('Accediendo al sistema', 'Iniciando sesión', {
                timeOut: 2000,
                positionClass: 'toast-top-right'
              });
              this.router.navigate(['/eventos']);
            },
            error => {
              this.error = error;
              this.loginGroup.reset();
              this.loading = false;
              this.toastr.error('Credenciales incorrecta', 'Error de autenticación', {
                timeOut: 2000,
                positionClass: 'toast-top-right'
              });
            }
        );
  }
}
