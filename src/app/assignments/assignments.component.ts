import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Assignment } from './assignement.model';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre = "Mon application sur les assignments ! ";
  formVisible = false;
  assignementSelectionne?: Assignment;
  assignments!: Assignment[];
  ajoutActive = false;
  nomDevoir: string = "";
  dueDate: Date = new Date();

  onAddAssignmentBtnClick() {
    // this.formVisible = true;
  }

  // onNewAssignment(event:Assignment) {
  //  // this.assignments.push(event);
  //  this.assignmentService.addAssignment(event).subscribe(
  //     (message) => {
  //       console.log(message);
  //     }
  //   );
  //   this.formVisible = false;
  // }


  assignmentClique(assignment:Assignment) {
    this.assignementSelectionne = assignment;
  }

  deleteAssignmentByNom(nom:string) {
    let index = this.assignments.findIndex(assignment => assignment.nom === nom);
    this.assignments.splice(index, 1);
  }

  onAssignmentDeleted(event:Assignment) {
    this.deleteAssignmentByNom(event.nom);
    this.assignementSelectionne = undefined;
    }
    
  constructor (private assignmentService: AssignmentsService) { }
  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
    this.assignmentService.getAssignments().subscribe(
      (assignments) => {
        this.assignments = assignments;
      }
    );
  }

}