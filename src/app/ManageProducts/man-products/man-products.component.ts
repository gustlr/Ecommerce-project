import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-man-products',
  templateUrl: './man-products.component.html',
  styleUrls: ['./man-products.component.css']
})
export class ManProductsComponent implements OnInit {
  products: Products[];
  result:string;
  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(result =>{
      this.products = result;
      console.log(this.products[0].productName)
    })
  }
  putIntoParam(productId:string){
    this.router.navigate(["/product_detail"], {queryParams: {_id:productId}})
  }


}
