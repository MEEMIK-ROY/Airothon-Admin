import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http:HttpClient,
    private auth:AuthService
  ) { }

  base_url=environment.baseUrl;

  getAllCategory(){
    return this.http.get(this.base_url+"/category/getAll",{headers:this.auth.getHeaders()});
  }
  getCategoryById(data:any){
    return this.http.post(this.base_url+"/category/getById",data,{headers:this.auth.getHeaders()});
  }
  deleteCategoryById(data:any){
    return this.http.post(this.base_url+"/category/delete",data,{headers:this.auth.getHeaders()});
  }
  addNewCategory(data:any){
    return this.http.post(this.base_url+"/category/create",data,{headers:this.auth.getHeaders()});
  }
}
