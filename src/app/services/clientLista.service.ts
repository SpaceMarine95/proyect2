import{Injectable}from'@angular/core';
import{Http,Response,Headers,RequestOptions}from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import{Client}from '../models/client';
import{GLOBAL}from'./global';


@Injectable()
export class Listar_clientServices{

public url: string;
public headers;

constructor( private _http: Http){
    this.url=GLOBAL.url;
    this.headers = new Headers();
             this.headers.append('Access-Control-Allow-Headers', 'Content-Type'); 
                     this.headers.append('Access-Control-Allow-Methods', 'GET');    
                          this.headers.append('Access-Control-Allow-Origin', '*');
}
getClientes(){
    return this._http.get(this.url+'Client/',{ headers: this.headers}).pipe(map(res =>{
        return res.json();
    }));
    
}

addClient(client: Client) :Observable<Client> {
  let json = JSON.stringify(client);
  let params = 'json='+json;
  let headers = new Headers({'Content-Type':'application/x-www-form-urlencode'});

  return this._http.post(this.url+'Client/',params,{headers:headers}).pipe(map(res=>{
 
    return res.json();

  }));
}
}