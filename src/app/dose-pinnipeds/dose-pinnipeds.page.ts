import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dose-pinnipeds',
  templateUrl: './dose-pinnipeds.page.html',
  styleUrls: ['./dose-pinnipeds.page.scss'],
})
export class DosePinnipedsPage implements OnInit {
  dosesList:any=[["dosis1","pos1","route1","ref1","note1"],["dosis2","pos2","route2","ref2","note2"],["dosis3","pos3","route3","ref3","note3"]];
  notesListSpecific: any=["nota1", "nota2", "nota3"];
  notesListGeneral: any=["nota1", "nota2", "nota3"];
  constructor() { 
    
  }

  ngOnInit() {
    
  }

  
}
