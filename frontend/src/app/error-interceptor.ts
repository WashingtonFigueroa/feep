import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AutenticacionService} from './autenticacion.service';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private autenticacionService: AutenticacionService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError(
            (err: any) => {
                if (err.status === 401) {
                    this.autenticacionService.logout();
/*                    location.reload(true);*/
                }
                const error = err.error.message;
                return throwError(error);
            }
        ));
    }
}
