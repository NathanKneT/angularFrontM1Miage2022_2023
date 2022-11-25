import { Component, /*EventEmitter,*/ OnInit, /*Output*/ } from '@angular/core';
import { Assignment } from '../assignments/assignement.model';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  
  nomDevoir:string="";
  dueDate:Date = new Date();
  constructor(private assignmentsService: AssignmentsService) { }
  ngOnInit(): void {
  }

    // Create function that use addAssignment function but with random data and call it 500 times
  // to populate the database

  populateDatabase() {
    for (let i = 0; i < 500; i++) {
      const newAssignment = new Assignment();
      newAssignment.id = Math.floor(Math.random() * 1000);
      newAssignment.nom = "Devoir " + i;
      newAssignment.dueDate = new Date();
      newAssignment.rendu = false;
      this.assignmentsService.addAssignment(newAssignment).subscribe(
        (message) => {
          console.log(message);
        }
      );
    }
  }

  onSubmit() {
    const newAssignment = new Assignment();
    newAssignment.id = Math.floor(Math.random() * 1000);
    newAssignment.nom = this.nomDevoir;
    newAssignment.dueDate = this.dueDate;
    newAssignment.rendu = false;

    this.assignmentsService.addAssignment(newAssignment).subscribe(
      (message) => {
        console.log(message);
      }
    );
  }

}
