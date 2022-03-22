import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { ClothService } from 'src/app/services/cloth.service';

@Component({
  selector: 'app-create-cloth',
  templateUrl: './create-cloth.component.html',
  styleUrls: ['./create-cloth.component.css']
})
export class CreateClothComponent implements OnInit {

  clothType!:string;
  clothImg!:string;
  qty!:number;
  description!:string;
  size!:string;
  brand!:string;
  color!:string;
  categoryId!:string;

  categoryArray:any;
  categoryData:any[]=[];
  constructor(
    private toastr:ToastrService,
    private cloth:ClothService,
    private category:CategoryService
  ) { }

  ngOnInit(): void {
    this.getAllCategories()
  }

  getAllCategories(){
    this.category.getAllCategory().subscribe({
      next:(res:any)=>{
        console.log(res.message);
        this.categoryArray = res.message;
        this.setCategoryData(this.categoryArray)
      },
      error:(err:any)=>{
        console.log(err);
        this.toastr.error("Error!","Something went wrong");
      }
    })
  }
  setCategoryData(array:any){
    array.forEach((element: { name: any; _id: any; }) => {
      const obj = {
        name:element.name,
        id:element._id
      }
      this.categoryData.push(obj);
    });
    console.log(this.categoryData);
  }

  addCloth(){
    const obj={
      "type":this.clothType,
      "clothImg":[{"img":this.clothImg}],
      "qty":this.qty,
      "size":this.size,
      "description":this.description,
      "brand":this.brand,
      "color":this.color,
      "category":this.categoryId 
    };
    console.log(obj);
    this.cloth.addNewCloth(obj).subscribe({
      next:(res:any)=>{
        console.log(res);
      },
      error:(err:any)=>{
        console.log(err);
        this.toastr.error("Error!","Something went wrong");
      }
    })
  }

}
