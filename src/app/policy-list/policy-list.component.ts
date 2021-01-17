import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Policy } from './policy.model';
import { PolicyService } from './policy.service';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.scss']
})
export class PolicyListComponent implements OnInit {
  public policies: Policy[];
  public policyForm: FormGroup;

  constructor(private policyService: PolicyService) {
    this.policyForm = new FormGroup({
      policyNumberControl: new FormControl('', Validators.required),
      creationDateControl: new FormControl('', Validators.required),
      effectiveDateControl: new FormControl('', Validators.required),
      expireDateControl: new FormControl('', Validators.required),
      paymentOptionControl: new FormControl('', Validators.required),
      policyAmountControl: new FormControl('', Validators.required),
      extraInfoControl: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.policyService.getPolicies().subscribe(data => {
      this.policies = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Policy;
      });

      console.log(this.policies);
    });
  }

  public create() {
    const policy = new Policy();
    policy.policyNumber = this.policyForm.get("policyNumberControl").value;
    policy.creationDate = this.policyForm.get("creationDateControl").value;
    policy.effectiveDate = this.policyForm.get("effectiveDateControl").value;
    policy.expireDate = this.policyForm.get("expireDateControl").value;
    policy.paymentOption = this.policyForm.get("paymentOptionControl").value;
    policy.policyAmount = this.policyForm.get("policyAmountControl").value;
    policy.extraInfo = this.policyForm.get("extraInfoControl").value;

    this.policyService.createPolicy(policy);
  }

  public update(policy: Policy) {
    this.policyService.updatePolicy(policy);
  }

  public delete(id: string) {
    this.policyService.deletePolicy(id);
  }
}
