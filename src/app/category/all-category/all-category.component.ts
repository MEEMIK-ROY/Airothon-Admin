import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements OnInit {
  public dataSource = new MatTableDataSource<[]>();
  @ViewChild(MatSort) sort = new MatSort();
  @ViewChild(MatPaginator,{static:false}) 
  paginator!: MatPaginator;
  
  newCategoryName!:string;
  modalRef:any;

  constructor(
    public modalService:MdbModalService,
    private router: Router,
    private toastr: ToastrService,
    private category:CategoryService
  ) { }

  categoryTableColumns:string[]=["name","slug","Actions"];

  ngOnInit(): void {
    this.getAllCategories()
  }

  ngAfterViewInit(){    
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    console.log(this.dataSource.sort);
    
  }

  getAllCategories(){
    this.category.getAllCategory().subscribe({
      next:(res:any)=>{
        this.dataSource.data = res.message;
      },
      error:(err:any)=>{
        console.log(err);
        this.toastr.error("Error!","Something went wrong")
      }
    })
  }
  public doFilter = (event: any) => {
    let value = event.target.value
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  deleteCategory(element:any){
    const obj = {
      "id":element._id
    }
    this.category.deleteCategoryById(obj).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.toastr.success("Success","Category deleted successfully!");
        this.getAllCategories();
      },
      error:(err:any)=>{
        console.log(err);
        this.toastr.error("Error!","Something went wrong");
      }
    })
  }
  openModal(modal:any){
    console.log(modal);
    this.modalRef = this.modalService.open(modal, {
      modalClass: 'modal-dialog-centered'
    })
  }

  addNewCategory(){
    const obj = {
      "name":this.newCategoryName
    };
    this.category.addNewCategory(obj).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.toastr.success("Success!","Category added successfully");
        this.getAllCategories()
      },
      error:(err:any)=>{
        console.log(err);
        this.toastr.error("Error!","Something went wrong");
      }
    })
  }
}
