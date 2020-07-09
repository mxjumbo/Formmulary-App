import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ReportYourExperienceService } from '../services/report-your-experience.service';
import { AlertController } from '@ionic/angular';

class Message {  
  public message: string;
}

@Component({
  selector: 'app-report-your-experience',
  templateUrl: './report-your-experience.page.html',
  styleUrls: ['./report-your-experience.page.scss'],
})
export class ReportYourExperiencePage implements OnInit {

  ionicForm= new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl(),
    prof: new FormControl(),
    bodyMessage: new FormControl()
  });
  response:Message[];
  professions:Array<any>=["Veterinarian (private practice)","Academia (veterinary, biomed or anim. sci.)","Student - Veterinary Medicine", 
  "Veterinarian (retired)", "Veterinary Technician, Nurse or Assistant", "Student - Veterinary Technician or Nurse", 
  "Animal Health Industry (vet. service, biomed, research)", "Animal Health Industry (admin., commercial services)", "Government", 
  "Veterinary Institution (admin., services)","Librarian (veterinary or biomedical)","Pharmacist"];
  

  constructor(public formBuilder: FormBuilder, private filter: ReportYourExperienceService, private alertCtrl: AlertController) { }

  ngOnInit() {
  }  

  sendMail(){
    /* console.log(this.ionicForm.value['name']);
    console.log(this.ionicForm.value['email']);
    console.log(this.ionicForm.value['prof']);
    console.log(this.ionicForm.value['bodyMessage']);  */  
    if(this.ionicForm.value['name']!==null && this.ionicForm.value['email']!==null && this.ionicForm.value['prof']!==null && this.ionicForm.value['bodyMessage']!==null){
      this.filter.sendEmail(this.ionicForm.value['name'], this.ionicForm.value['email'], this.ionicForm.value['prof'], this.ionicForm.value['bodyMessage']).subscribe(res=>this.presentAlertData("ForMMulary",res[0].message));
      this.ionicForm.reset();
    }
    else{
      this.presentAlertData("ForMMulary","Please, complete all information");
    }    
  }

  async presentAlertData(headerParam, messageParam) {    
    const alert = await this.alertCtrl.create({      
      header: headerParam,      
      message: messageParam,
      buttons: [{
        text: 'OK',
        /* handler: () => {
          this.ionicForm.reset();
        } */
      }
    ]
    });    
    await alert.present();    
  }
}
 

