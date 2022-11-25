import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignments/assignement.model';
import { AssignmentsService } from '../shared/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  /*@Input()*/ assignementTransmis: Assignment = new Assignment;
  @Output() assignmentASupprimer = new EventEmitter<Assignment>();
  assignment: any;
  authService: any;

  // use updateAssignment from assignmentService
  onUpdateAssignment() {
    this.assignmentService.updateAssignment(this.assignementTransmis).subscribe(
      (message) => {
        console.log(message);
        this.router.navigate(['/assignments']);
      }
    );
  }

  onAssignmentRendu() {
    this.assignmentService.updateAssignment(this.assignementTransmis).subscribe(
      (message) => {
        console.log(message);
        this.router.navigate(['/home']);
      }
    );
  }

  onDelete() {
    this.assignmentService.deleteAssignment(this.assignementTransmis).subscribe((message) => {
      console.log(message);
      this.router.navigate(['/home']);
    });
  }

  onClickEdit() {
    this.router.navigate(['/assignment', this.assignementTransmis.id, 'edit'],{queryParams: {nom: this.assignementTransmis.nom},fragment:'edition'});
  }

  constructor(private assignmentService: AssignmentsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getAssignment();
  }

  getAssignment() {
    const id = +this.route.snapshot.params['id']; /*Bizarre ça DIAPO 163 */ 
    this.assignmentService.getAssignment(id).subscribe(
      (assignment) => {
        this.assignementTransmis = assignment!;
      }
    );
  }

  isAdmin():boolean {
    return this.authService.isAdmin
  }

}
