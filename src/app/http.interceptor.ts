import {Injectable} from "@angular/core";
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {environment} from "../environments/environment";

@Injectable()
export class InterceptedHttp extends Http {
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.get(url, this.getRequestOptionArgs(options));
    }   
    
    private updateUrl(req: string) {
        return  environment.origin + req;
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
      let username: string = 'authentica';
      let password: string = '@uth3nt1c@';
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');
        options.headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
        options.headers.append("Content-Type", "application/x-www-form-urlencoded");       

        return options;
    }
}