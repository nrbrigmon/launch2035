import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from "@angular/router";
import {AppComponent} from "./app.component";
import {Http, HTTP_PROVIDERS, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);