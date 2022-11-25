import { Component, OnInit} from '@angular/core';
import { Assignment } from './assignement.model';
import { AssignmentsService } from '../shared/assignments.service';
import {MatPaginatorModule} from '@angular/material/paginator';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  page: number=1;
  limit: number=10;
  totalDocs: number;
  totalPages: number;
  hasPrevPage: boolean;
  prevPage: number;
  hasNextPage: boolean;
  nextPage: number;
 
  titre = "Mon application sur les assignments ! ";
  formVisible = false;
  assignementSelectionne?: Assignment;
  assignments!: Assignment[];
  ajoutActive = false;
  nomDevoir: string = "";
  dueDate: Date = new Date();

  onAddAssignmentBtnClick() {
  }

  assignmentClique(assignment:Assignment) {
    this.assignementSelectionne = assignment;
  }

  deleteAssignmentByNom(nom:string) {
    let index = this.assignments.findIndex(assignment => assignment.nom === nom);
    this.assignments.splice(index, 1);
  }

  paginatorUpdate(event) {
    this.page = event.pageIndex;
    this.limit = event.pageSize;
    this.updating(this.page, this.limit);
  }

  updating(page: number, limit: number) {
    this.assignmentService.getAssignmentsPagine(this.page, this.limit)
    .subscribe(data => {
      this.assignments = data.docs;
      this.page = data.page;
      this.limit = data.limit;
      this.totalDocs = data.totalDocs;
      this.totalPages = data.totalPages;
      this.hasPrevPage = data.hasPrevPage;
      this.prevPage = data.prevPage;
      this.hasNextPage = data.hasNextPage;
      this.nextPage = data.nextPage;
      console.log("données reçues");
    });
  }


  onAssignmentDeleted(event:Assignment) {
    this.deleteAssignmentByNom(event.nom);
    this.assignementSelectionne = undefined;
    }
    
  constructor (private assignmentService: AssignmentsService) { }
  ngOnInit(): void {
    this.updating(this.page, this.limit);
    console.log(this.page);
  }

  getAssignments() {
    this.assignmentService.getAssignments()
      .subscribe(assignments => this.assignments = assignments);
  }

}