import { Company } from './../models/company';
import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Products } from '../models/product';
import { ProductService } from '../service/product.service';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
  products:Products[] = [];
  notify: string;
  companies:Company[];
  producatCato:Products[] = [];
  selectId:string;

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService, private companyService: CompanyService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    throw new Error('Method not implemented.');
  }
 

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const key1 = 'loggedin';
      if (params[key1] === 'success') {
        this.notify = 'You have been successfully loggedin. Welcome home';
      }
    });
    this.productService.getAllProduct().subscribe(data => {
      this.products = data
      console.log(this.products)

    })
    this.companyService.getCompanies().subscribe(reuslt => {
      this.companies = reuslt
      console.log(reuslt[0]["_id"])
    })
    
  }

dosomthnig(){
  console.log("hawtihowit")
}
  some(){
    console.log(this.selectId)
    if(this.selectId == "All"){
      this.products = [];
      this.productService.getAllProduct().subscribe(reuslt =>{
        for (let i of reuslt){
            this.products.push(i)
          
        }
      })

    }else{
      this.products = [];
       this.productService.getAllProduct().subscribe(reuslt =>{
      for (let i of reuslt){
        if(i.companyId == this.selectId){
          this.products.push(i)
          console.log(this.products)
        }
      }
    })
    }
   
  }


}
