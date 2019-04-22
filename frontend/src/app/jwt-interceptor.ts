import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = atob(localStorage.getItem('fepp-token'));
        if (token) {
            req = req.clone({
                headers: req.headers.set('Authorization', token)
            });
        }
/*        req = req.clone({
            headers: req.headers.set('Accept', '')
        });*/
/*        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }*/
        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    /* console.log('event-->>', event);*/
                }
                return event;
            })
        );

    }

}
