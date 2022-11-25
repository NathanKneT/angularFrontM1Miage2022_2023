export class Assignment {
  _id?: string;
  id!: number;
  dueDate!: Date; //TODO: règler le problème de date
  prof!: string;
  nom!: string;
  description!: string;
  matiere!: string;
  classe!: string;
  rendu!: boolean;
}