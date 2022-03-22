import { Component, OnInit, ViewChild,AfterViewInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { ClothService } from "../../services/cloth.service";
import { MatTableDataSource } from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { Router } from "@angular/router";

@Component({
  selector: 'app-all-cloth',
  templateUrl: './all-cloth.component.html',
  styleUrls: ['./all-cloth.component.css']
})
export class AllClothComponent implements OnInit,AfterViewInit {
  public dataSource = new MatTableDataSource<[]>();
  instituteId: any;

  // @ViewChild('t1sort', { static: false })t1sort!: MatSort;
  // @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatSort) sort = new MatSort();
  @ViewChild(MatPaginator,{static:false}) 
  paginator!: MatPaginator;
  

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private cloth:ClothService
  ) { }

  clothTableColumns:string[]=["type", "description", "size","brand","color","qty","Actions"];

  ngOnInit(): void {
    this.getAllClothes()
  }

  ngAfterViewInit(){    
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    console.log(this.dataSource.sort);
    
  }

  getAllClothes(){
    this.cloth.getAllCloth().subscribe({
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

  clothDetails(element:any){
    this.router.navigateByUrl("/cloth/details/"+element._id);
  }
  deleteCloth(element:any){
    const obj = {
      "id":element._id
    }
    this.cloth.deleteClothById(obj).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.toastr.success("Success","Cloth deleted successfully!");
        this.getAllClothes();
      },
      error:(err:any)=>{
        console.log(err);
        this.toastr.error("Error!","Something went wrong");
      }
    })
  }
  gotoCreate(){
    this.router.navigateByUrl("/cloth/create");
  }
}
