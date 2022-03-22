import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { CategoryService } from 'src/app/services/category.service';
import { ClothService } from 'src/app/services/cloth.service';

@Component({
  selector: 'app-cloth-details',
  templateUrl: './cloth-details.component.html',
  styleUrls: ['./cloth-details.component.css']
})
export class ClothDetailsComponent implements OnInit {
  clothId!:string;
  clothDetails!:any;
  categoryDetails!:any;

  clothType!:string;
  clothImg!:string;
  qty!:number;
  description!:string;
  size!:string;
  brand!:string;
  color!:string;
  categoryName!:string;
  
  constructor(
    private toastr:ToastrService,
    private route:ActivatedRoute,
    private router:Router,
    private cloth:ClothService,
    private category:CategoryService
  ) { }

  ngOnInit(): void {
    this.clothId=this.route.snapshot.url[1].path;
    console.log(this.clothId);
    this.getClothDetails(this.clothId);
  }

  getClothDetails(id:string){
    this.cloth.getClothById({"id":id}).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.clothDetails = res.message;
        this.clothType = this.clothDetails.type;
        this.clothImg= this.clothDetails.clothImg[0].img;
        this.qty=this.clothDetails.qty;
        this.description=this.clothDetails.description;
        this.size=this.clothDetails.size;
        this.brand=this.clothDetails.brand;
        this.color=this.clothDetails.color;
        this.getCategoryDetails(res.message.category)
      },
      error:(err:any)=>{
        console.log(err);
        this.toastr.error("Error!","Something went wrong")
      }
    })
  }
  getCategoryDetails(categoryId:string){
    console.log(categoryId);
    
    this.category.getCategoryById({"id":categoryId}).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.categoryDetails = res.message
        this.categoryName = this.categoryDetails.name;
      },
      error:(err:any)=>{
        console.log(err);
        this.toastr.error("Error!","Something went wrong")
      }
    })
  }
}
