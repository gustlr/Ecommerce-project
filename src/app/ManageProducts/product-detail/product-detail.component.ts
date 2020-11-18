import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { filter } from 'rxjs/operators';
import { Products } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }
  selectedProductId: string;
  orderObj: any
  productDetail: any;
  productDd :Products
  result:string;
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
        console.log(this.orderObj);
        console.log("this is the selcet ID " + this.selectedProductId)
      }

      );
    // this.companyService.getCompanyById(this.selectedId).subscribe(result =>{
    //   this.companyName = result.name
    //   console.log(this.companyName );
    // })

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

  
  putIntoParam(productId: string) {
    this.router.navigate(["/product_update"], { queryParams: { _id: productId } })
  }
    
  deleteCompnyById(id):void{
    console.log("-------------"+id);
    this.productService.deleteProductById(id).subscribe(result =>{
      this.result = result.msg
      console.log("-------------"+this.result);
    })
  }
}
