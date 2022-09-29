import { Component, OnInit, Input  } from '@angular/core';
import {Assignement} from "../assignement.model";

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  @Input() assignmentTransmis:Assignement = new Assignement();

  constructor() { }

  ngOnInit(): void {
  }

}
