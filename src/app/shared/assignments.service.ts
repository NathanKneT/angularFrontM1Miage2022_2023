import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignement.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  assignments:Assignment[] = [
    {
      nom : "WebComponent",
      dueDate : new Date("2020-11-30"),
      rendu : true, 
    },
    {
      nom : "Angular",
      dueDate : new Date("2020-11-30"),
      rendu : false,
    },
    {
      nom : "VueJS",
      dueDate : new Date("2020-11-30"),
      rendu : false,
    }
  ];

  constructor(private loggingService: LoggingService) { }

  getAssignments():Observable<Assignment[]> {
    return of(this.assignments);
  }

  updateAssignment(assignment: Assignment):Observable<string> {
    let index = this.assignments.findIndex(a => a.nom === assignment.nom);
    this.assignments[index] = assignment;
    return of("Assignment updated");

  }

  addAssignment(assignment: Assignment):Observable<string> {
    this.assignments.push(assignment);
    this.loggingService.log(assignment.nom, "added");
    return of("Assignment added");
  }

  deleteAssignment(assignment: Assignment):Observable<string> {
    let index = this.assignments.findIndex(a => a.nom === assignment.nom);
    this.assignments.splice(index, 1);
    return of("Assignment deleted");
  }

}
