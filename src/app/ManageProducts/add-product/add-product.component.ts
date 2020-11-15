import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/service/company.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
productRef = new FormGroup({
  productCode:new FormControl(),
    productName:new FormControl(),
    productDetail:new FormControl(),
    productImage: new FormControl(),
    productPrice:new FormControl(),
    companyId:new FormControl()
})
result:string
companies :Company[];
companieId:string;
  constructor(private companyService: CompanyService, private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(reuslt => {
      this.companies = reuslt
      console.log(reuslt[0]["_id"])
    })
  }

  onSubmit(){
    this.companies["_id"];
    console.log(this.productRef.value,this.companies[0])
    this.productService.storeProduct(this.productRef.value).subscribe(result=>this.result = result)
    this.router.navigate(["/product_list"])
  }
}
