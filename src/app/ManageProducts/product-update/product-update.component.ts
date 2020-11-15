import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { filter } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { CompanyService } from 'src/app/service/company.service';
import { Company } from 'src/app/models/company';
import { Products } from 'src/app/models/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productDd = new Products()
  productRef = new FormGroup({
    productCode: new FormControl(),
    productName: new FormControl(),
    productDetail: new FormControl(),
    productImage: new FormControl(),
    productPrice: new FormControl()
  })
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService, private companyService : CompanyService) { }
  orderObj: any;
  selectedProductId: string;
  productDetail:any;
  product = new Products;
  companies:Company[];
  result:any
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((x) => {
      // this.selectedId = x._id;
      console.log(x);
    });

    this.route.queryParamMap
      .subscribe((params) => {
        this.orderObj = { ...params.keys, ...params };
        this.selectedProductId = this.orderObj['params']["_id"]
        console.log(this.orderObj)
        console.log("this is the selcet ID " + this.selectedProductId)
      }
      );
      this.companyService.getCompanies().subscribe(reuslt => {
        this.companies = reuslt
        console.log(reuslt[0]["_id"])
      })
      this.productService.getProductById(this.selectedProductId).subscribe(data => {
        this.productDetail = data;
         this.productDd.productCode = this.productDetail.productCode;
        this.productDd.productDetail = this.productDetail.productDetail;
        this.productDd.productImage = this.productDetail.productImage;
         this.productDd.productName = this.productDetail.productName;
        this.productDd.productPrice = this.productDetail.productPrice;
        console.log(this.productDetail + "==============")
      })
  }
  onSubmitUpdateProduct(){
    //if {same} can do =
    this.product = this.productRef.value
    this.productService.updateProductById(this.product,this.selectedProductId).subscribe(result => {
      this.result = result
     
    })
  }
  goBack():void{
    this.router.navigate(["/product_detail"], {queryParams: {_id:this.selectedProductId}})
  }
      
}
