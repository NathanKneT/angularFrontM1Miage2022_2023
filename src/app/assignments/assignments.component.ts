import { Component, OnInit } from '@angular/core';
import {Assignement} from "./assignement.model";

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre = "Mon application sur les assignments ! ";
  ajoutActive = false;
  nomDevoir: string = "";
  assignementSelectionne:Assignement = new Assignement();

  onSubmit() {
    console.log(this.nomDevoir);
  }

  assignmentClique(assignment:Assignement){
    this.assignementSelectionne = assignment;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
  }

  assignments = [
    {
      nom : "WebComponent",
      dateDeRendu : new Date("2020-11-30"),
      rendu : true,
    },
    {
      nom : "Angular",
      dateDeRendu : new Date("2020-11-30"),
      rendu : false,
    },
    {
      nom : "VueJS",
      dateDeRendu : new Date("2020-11-30"),
      rendu : false,
    }
  ];

  constructor() { }

}

