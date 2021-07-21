import { Boss } from "./boss";

export class Employee {
  id: number;
  fullname: string;
  identification: string;
  function: string;
  boss: Boss;

  constructor(){
    this.id=0;
    this.fullname="";
    this.identification="";
    this.function="";
    this.boss = new Boss();
  }

}