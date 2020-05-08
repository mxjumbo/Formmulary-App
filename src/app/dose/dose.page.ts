import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralInformationService } from '../services/general-information.service';

class DoseInfo{
  public animal_name: string; 
  public family: string;  
  public group_name: string;  
  public category_name: string;  
  public book_reference: string;  
  public article_reference: string; 
  public specific_note: string;  
  public posology: string;  
  public route: string;  
  public dose: string;    
}

class Note{
  public group_name:string;
  public general_note:string;
}
 
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
  drug:string;
  doses:DoseInfo[];
  notes:Note[];
  playingDosesGroup:boolean = true;
  playingSpecificNotes:boolean=true;
  playingGeneralNotes:boolean=true;
  

  constructor(private activeRoute:ActivatedRoute,private filter: GeneralInformationService) { }

  ngOnInit() {
    this.arguments=this.activeRoute.snapshot.paramMap.get('group');    
    this.drug=this.activeRoute.snapshot.paramMap.get('drug');    
    this.doses=this.filter.getInfoDoses();
    this.notes=this.filter.getInfoNotes();
    this.playingDosesGroup=this.filter.getPlayingDosesGroup();
    this.playingSpecificNotes=this.filter.getPlayingSpecificNotes();
    this.playingGeneralNotes=this.filter.getPlayingGeneralNotes();
    //console.log(this.playingSpecificNotes);
  }

  

}
