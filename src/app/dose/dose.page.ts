import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dose',
  templateUrl: './dose.page.html',
  styleUrls: ['./dose.page.scss'],
})
export class DosePage implements OnInit {
  dosesList:any=[["dosis1","pos1","route1","ref1","note1"],["dosis2","pos2","route2","ref2","note2"],["dosis3","pos3","route3","ref3","note3"]];
  notesListSpecific: any=["nota1", "nota2", "nota3"];
  notesListGeneral: any=["nota1", "nota2", "nota3"];
  //Variable para recoger los argumentos desde "General-information-page"
  arguments=null;
  //id:string;
  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.arguments=this.activeRoute.snapshot.paramMap.get('group');

  }

}
