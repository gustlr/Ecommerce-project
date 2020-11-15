import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private companyService: CompanyService ) { }
  selectedId: string;
  orderObj:{};
  companyName:string;
  result:any;
  
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
    console.log(this.orderObj);
    console.log("this is the selcet ID " +this.selectedId)
  }
);
this.companyService.getCompanyById(this.selectedId).subscribe(result =>{
  this.companyName = result.name
  console.log(this.companyName );
})
  // this.selectedId = this.route.snapshot.paramMap.get("id")
  //   console.log(`--------------${this.selectedId}`)
  }

  deleteCompnyById(id):void{
    console.log("-------------"+id);
    this.companyService.deleteCompanyById(id).subscribe(result =>{
      this.result = result.msg
      console.log("-------------"+this.result);
    })
  }
  print(s:string){
    this.router.navigate(["/company_update"], {queryParams: {_id:s,name:this.companyName}})
  }
  

}
