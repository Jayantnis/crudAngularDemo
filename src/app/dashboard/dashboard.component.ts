import { Form } from '@angular/forms';
// import { SuvenApiService } from './../suven-api.service';
import { policy } from './../policy';
import { Component, OnInit } from '@angular/core';
import { SuvenApiService } from '../suven-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // SuvenApiService: any;

  constructor(private apiservice:SuvenApiService) { }

  policies:policy[]|any;
  selectedPolicy:policy={id:null,number:null,amount:null}

  ngOnInit() {
    this.apiservice.readPolicies().subscribe((policies: policy[])=>{
      this.policies = policies;
      console.log(this.policies);
    })
  }



  selectPolicy(policy:policy)
  {
    this.selectedPolicy=policy;
  }

  deletePolicy(id: number){
    this.apiservice.deletePolicy(id).subscribe((policy: policy)=>{ console.log("Policy deleted, ", policy);
    });
  }

  // form settting
  createOrUpdatePolicy(form:any){
    if(this.selectedPolicy && this.selectedPolicy.id){ form.value.id = this.selectedPolicy.id;
    this.apiservice.updatePolicy(form.value).subscribe((policy: policy)=>{ console.log("Policy updated" , policy);
    }); } else{
    this.apiservice.createPolicy(form.value).subscribe((policy: policy)=>{ console.log("Policy created, ", policy);
    }); }
  }
}
