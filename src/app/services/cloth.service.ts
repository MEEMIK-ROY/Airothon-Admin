import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ClothService {

  constructor(
    private http:HttpClient,
    private auth:AuthService
  ) { }

  base_url=environment.baseUrl;

  getAllCloth(){
    return this.http.get(this.base_url+"/cloth/getAll",{headers:this.auth.getHeaders()});
  }
  getClothById(data:any){
    return this.http.post(this.base_url+"/cloth/getById",data,{headers:this.auth.getHeaders()});
  }
  deleteClothById(data:any){
    return this.http.post(this.base_url+"/cloth/deleteById",data,{headers:this.auth.getHeaders()});
  }
  addNewCloth(data:any){
    return this.http.post(this.base_url+"/cloth/add",data,{headers:this.auth.getHeaders()});
  }
}
