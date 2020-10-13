import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalRequestService {

  private readonly host = environment.apiHost;
  public readonly villagers = "villagers";

  constructor(
    private http: HttpClient
  ) { }

  public get(
    params: { url: string, params: string }
  ): Promise<any> {
    let promise: Promise<any> = new Promise<any>((good, bad) => {
      this.http.get(this.host + params.url + params.params).toPromise().then((response) => {
        good(response);
      }).catch((error) => {
        bad(error);
      });
    });

    return promise;
  }
}
