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

  // declare a list of "prof"

  prof = [ "Bob", "Pierre" , "Sylvain", "Jean", "Paul", "Jacques", "Marie", "Anne", "Julie", "Sophie" ];
  matiere = [ "Maths", "Français" , "Anglais", "Histoire", "Géographie", "SVT", "Physique", "Chimie", "Philosophie", "Sport" ];
  description = [ "Devoir de maths", "Devoir de français" , "Devoir d'anglais", "Devoir d'histoire", "Devoir de géographie", "Devoir de SVT", "Devoir de physique", "Devoir de chimie", "Devoir de philosophie", "Devoir de sport" ];
  classe = [ "6ème", "5ème" , "4ème", "3ème", "2nde", "1ère", "Tle", "Bac+1", "Bac+2", "Bac+3", "Bac+4", "Bac+5", "Bac+6", "Bac+7", "Bac+8", "Bac+9", "Bac+10" ];



  populateDatabase() {
    for (let i = 0; i < 500; i++) {
      const newAssignment = new Assignment();
      newAssignment.id = Math.floor(Math.random() * 1000);
      newAssignment.nom = "Devoir " + i;
      newAssignment.dueDate = new Date();
      newAssignment.rendu = false;
      newAssignment.prof = this.prof[Math.floor(Math.random() * 10)];
      newAssignment.matiere = this.matiere[Math.floor(Math.random() * 10)];
      newAssignment.description = this.description[Math.floor(Math.random() * 10)];
      newAssignment.classe = this.classe[Math.floor(Math.random() * 17)];
      this.assignmentsService.addAssignment(newAssignment).subscribe(
        (message) => {
          console.log(message);
        }
      );
    }
  }

  // Make function to erase the database 
  eraseDatabase() {
    this.assignmentsService.deleteAllAssignments().subscribe(
      (message) => {
        console.log(message);
      }
    );
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
