import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CompanyService } from '../service/company.service';
import { Company } from './../models/company';
@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {
  companies: Company[];

  constructor(private companyService: CompanyService,private router:Router) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(result => {
      this.companies = result;
      console.log(this.companies);
    })
    

}
// whenClickDetail(): void{
// this.router.navigate(["/company_detail"], {queryParams: compn})
// }
print(s:string){
  this.router.navigate(["/company_detail"], {queryParams: {_id:s}})
}
}