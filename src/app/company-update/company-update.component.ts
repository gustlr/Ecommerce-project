import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CompanyService } from '../service/company.service';
import { filter } from 'rxjs/operators';
import { Company } from '../models/company';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private companyService: CompanyService) { }
  company = new Company;
  orderObj:{};
  result:any;
  selectedId:string;
  fromHtmlNewUpdateName:string;
  companyName:string;
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
    this.selectedId = this.orderObj['params']["_id"] 
    this.companyName = this.orderObj['params']["name"]
    console.log(this.orderObj);
    console.log("this is the selcet ID " +this.selectedId + this.companyName)
  }
);
  }

  updateCompnayName():void{
    this.company.name = this.fromHtmlNewUpdateName;
    this.companyService.updateCompanyById(this.company,this.selectedId).subscribe(result =>{
      this.result = result

    })
    console.log(this.company)
    this.router.navigate(["/company_detail"], {queryParams: {_id:this.selectedId}})
  }
  goBack():void{
    this.router.navigate(["/company_detail"], {queryParams: {_id:this.selectedId}})
  }



}
