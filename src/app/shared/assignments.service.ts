import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignement.model';
import { map, Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  assignementSelectionne?: Assignment;
  
  assignments:Assignment[] = [
    // {
    //   id: 1,
    //   nom : "WebComponent",
    //   dueDate : new Date("2020-11-30"),
    //   rendu : true, 
    // },
    // {
    //   id: 2,
    //   nom : "Angular",
    //   dueDate : new Date("2020-11-30"),
    //   rendu : false,
    // },
    // {
    //   id: 3,
    //   nom : "VueJS",
    //   dueDate : new Date("2020-11-30"),
    //   rendu : false,
    // }
  ];

  constructor(private loggingService: LoggingService, private http:HttpClient) { }

  url = "http://localhost:8010/api/assignments";

  getAssignment(id: number): Observable<Assignment | undefined> {
    // return of(this.assignments.find(a => a.id === id));
    return this.http.get<Assignment>(this.url + "/" + id);
  }

  getAssignments(): Observable<Assignment[]> {
    // return of(this.assignments);
    return this.http.get<Assignment[]>(this.url);
  }

  getAssignmentsPagine(page: number, limit: number):Observable<any> {
    return this.http.get(this.url + "?page=" + page + "&limit=" + limit);
  }

  updateAssignment(assignment: Assignment):Observable<any> {
    // let index = this.assignments.findIndex(a => a.nom === assignment.nom);
    // this.assignments[index] = assignment;
    // return of("Assignment updated");
    return this.http.put(this.url, assignment);

  }

  addAssignment(assignment: Assignment):Observable<any> {
    // this.assignments.push(assignment);
    // this.loggingService.log(assignment.nom, "added");
    // return of("Assignment added");
    return this.http.post(this.url, assignment, this.httpOptions);
  }

  deleteAssignment(assignment: Assignment):Observable<any> {
    // let index = this.assignments.findIndex(a => a.nom === assignment.nom);
    // this.assignments.splice(index, 1);
    // return of("Assignment deleted");
    let deleteURI = this.url + '/' + assignment._id;
    return this.http.delete(deleteURI);
  }

  // make function that delete all assignments in the database

  deleteAllAssignments():Observable<any> {
    return this.http.delete(this.url);
  }

}
