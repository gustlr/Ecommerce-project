import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.css']
})
export class CompanyAddComponent implements OnInit {
  companyName = new Company();
  usaerAdd:string =''
  constructor(public companyService:CompanyService) { }
  ngOnInit(): void {
  }
  result:string;
  
  sendToMongo():void{
    this.companyName.name = this.usaerAdd
    this.companyService.addCompany(this.companyName).subscribe(data =>this.result = data.msg)
  }

}
