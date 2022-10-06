import { Component, /*EventEmitter,*/ OnInit, /*Output*/ } from '@angular/core';
import { Assignment } from '../assignments/assignement.model';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  // @Output() newAssignment = new EventEmitter<Assignment>();
  
  nomDevoir:string="";
  dueDate:Date = new Date();
  constructor(private AssignmentsService: AssignmentsService) { }
  ngOnInit(): void {
  }

  onSubmit() {
    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dueDate = this.dueDate;
    newAssignment.rendu = false;

    // this.newAssignment.emit(newAssignment);
    this.AssignmentsService.addAssignment(newAssignment).subscribe(
      (message) => {
        console.log(message);
      }
    );
  }

}
