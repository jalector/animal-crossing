import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class GlobalRequestService {

  private readonly host = environment.apiHost;
  public readonly villagers = "villagers";

  private spinnerRequestCount = 0;

  constructor(
    private http: HttpClient,
    private spinner: NgxSpinnerService
  ) { }

  private requestSpinner(){
    if(this.spinnerRequestCount == 0){
      console.log("SHOWING LOADING");
      this.spinner.show();      
    }

    this.spinnerRequestCount++;    
  }

  private hideSpinnerRequest(){
    if(--this.spinnerRequestCount == 0){
      console.log("HIDE LOADING");

      this.spinner.hide();
    }
  }

  public async get(
    params: { url: string, params: string }
  ): Promise<any> {
    return new Promise(async (good, bad) => {
      try {
        this.requestSpinner();
        setTimeout(() => bad("TIME_OUT_YUDA_ERROR"), 30000);
        
        var response = await this.http.get(this.host + params.url + params.params).toPromise();
        good(response);
      } catch (error) {        
        var formattedError = this._formatError(error);
        bad(formattedError);
      }finally{
        this.hideSpinnerRequest();
      }
    });
  }


  private _formatError(error: HttpErrorResponse): GlobalRequestError{
    let message: string = null;

    if(error.status ==  503){
      message = "El servicio no está disponible en este momento, intenta de nuevo más tarde";
    }else if(error.status >= 500){
      message = "Error interno del servidor, intenta de nuevo más tarde";
    }else if(error.status == 403){
      message = "No tienes suficientes permisos para realizar esta acción";
    }else if(error.status >= 400){
      message = "Tu petición no cumple los requisitos para poder ser aceptada";
    }else {
      message = "Error desconocido";
    }   

    return new GlobalRequestError(error.status, message);
  }
}


export class GlobalRequestError {

  constructor(
    public code: number,
    public message: string    
  ) { }

  public get errorText(): String {
    return "[${this.code}] ${this.message}";
  }
}