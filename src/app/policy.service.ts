import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Policy } from 'src/app/policy.model';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private firestore: AngularFirestore) { }

  public getPolicies() {
    return this.firestore.collection('policies').snapshotChanges();
  }

  public createPolicy(policy: Policy) {
    return this.firestore.collection('policies').add(Object.assign({}, policy));
  }

  public updatePolicy(policy: Policy) {
    delete policy.id;
    this.firestore.doc('policies/' + policy.id).update(policy);
  }

  public deletePolicy(policyId: string) {
    this.firestore.doc('policies/' + policyId).delete();
  }
}
