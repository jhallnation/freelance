import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, "abcd inc", 'http://jhallnation.com', 'Ruby on rails', 150, 120, 15, 'jhallnation@Agmail.com')
  proposalTwo: Proposal = new Proposal(18, "1234 corp", 'http://jhallnation.com', 'Ruby on rails', 150, 120, 15, 'jhallnation@Agmail.com')
  proposalThree: Proposal = new Proposal(16, "ur mama co", 'http://jhallnation.com', 'Ruby on rails', 150, 120, 15, 'jhallnation@Agmail.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
    ]
}
