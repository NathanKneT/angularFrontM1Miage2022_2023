import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignments/assignement.model';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  @Input()
  assignementTransmis: Assignment = new Assignment;
  @Output() assignmentASupprimer = new EventEmitter<Assignment>();

  // use updateAssignment from assignmentService
  onAssignmentRendu() {
    this.assignementTransmis.rendu = true;
    this.assignmentService.updateAssignment(this.assignementTransmis).subscribe(
      (message) => {
        console.log(message);
      }
    );
  }
  onDeleteRendu() {
    this.assignmentService.deleteAssignment(this.assignementTransmis).subscribe(
      (message) => {
        console.log(message);
        this.assignementTransmis = new Assignment();
      }
    );
    
    // this.assignementTransmis.rendu = false;

    // this.assignmentASupprimer.emit(this.assignementTransmis);
  }
  constructor(private assignmentService: AssignmentsService) {
  }

  ngOnInit(): void {
  }

}
