import { Component, OnInit, NgZone } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  unitDose:Array<any>=["Choose an unit", "mg","mcg","g","kg","oz","lbs"];  
  defaultUnitDose=this.unitDose[0];
  unitConcentration:Array<any>=["Choose an unit", "mg/ml","mcg/ml","g/ml","tablet(mg)","tablet(mcg)","tablet(g)"];  
  defaultUnitConcentration=this.unitConcentration[0];
  visible=false;
  weight_kgs:any=null;
  weight_lbs:any=null;
  conversionMap:any;
  lbsLocked=false;
  kgsLocked=false;
  dose:any;
  drugAmount:any;
  concentration:any;
  concentrationUnits:any;
  mlUnits:string;
  resultValue:any="";
  userEntryDoseUnits:any;
  numericFieldsEmpty:boolean=false;
  unitFieldsEmpty:boolean=false;
 

  constructor(private ngZone: NgZone, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.initializeMap();
  }
  
  calculateKgs() {       
    if(!this.lbsLocked){  
        this.ngZone.run(() => {          
          let tmpKgs=this.weight_lbs*this.conversionMap['lbsTokg']; 
          this.weight_kgs=Number((tmpKgs).toFixed(4));
        });
    }
    this.lbsLocked=false;
  }  
  
  calculateLbs() {  
    if(!this.kgsLocked){        
          this.lbsLocked=true;
          this.ngZone.run(() => {         
            let tmpLbs=this.weight_kgs*this.conversionMap['kgTolbs'];  
            this.weight_lbs=Number((tmpLbs).toFixed(4));
          });
      }
  }  

  lockedKgs(){    
    this.kgsLocked=true;        
  }

  unlockedKgs(){    
    this.kgsLocked=false;        
  }
  
  initializeMap(){
    this.conversionMap={"mgTomg":1.00, "mgTomcg": 1000.00,"mgTog": 0.0010, "mcgTomg":0.0010, "mcgTomcg": 1.00,
    "mcgTog": 0.0000010, "gTomg": 1000.00, "gTomcg": 1000000.00, "gTog": 1.00, "kgTomg": 1000000.00,
    "kgTomcg": 1000000000.00, "kgTog": 1000.00, "ozTomg": 28349.52310, "ozTomcg": 28349523.10, "ozTog": 28.3495231,
    "lbsTomg": 453592.37, "lbsTomcg": 453592370.00, "lbsTog": 453.592370, "lbsTokg": 0.45360, "kgTolbs": 2.20460
    };							
  }

  calculate(){        
    this.unitFieldsEmpty=false;
    this.numericFieldsEmpty=false;
    //Se calcula la cantidad total del medicamento
    this.drugAmount=this.dose * this.weight_kgs; 
    //Parsear las unidades de concentración  
    let tmpConcentrationUnits:string[]=[];    
    if(this.defaultUnitConcentration!=="Choose an unit"){       
      tmpConcentrationUnits=this.defaultUnitConcentration.split("/");        
      if (tmpConcentrationUnits.length<2){
        let tabletUnits:string[] = tmpConcentrationUnits[0].split("(");      
        let tabletUnitsFinal:string[]= tabletUnits[1].split(")");
        this.concentrationUnits = tabletUnitsFinal[0];
      }
    }
    else{
      this.concentrationUnits=tmpConcentrationUnits[0];
    }        
    //Se obtiene las unidades correspondientes para añadirlas al resultado
    let resultUnits:string="";
    if (tmpConcentrationUnits.length > 1 && (tmpConcentrationUnits[1]==="ml")){
      resultUnits = "ml";
    }
    else{
      resultUnits = "tablet";    
    }
    //Se comprueba que estén cumplimentados todos los campos numéricos   
    this.checkNumericFields();
    this.checkUnitFields();
    if(this.numericFieldsEmpty ){
      this.presentAlertData("NO DATA","Please enter all the data for the calculation.");        
    }
    else{
      if(this.concentration===0){
        this.presentAlertData("WRONG VALUE","Enter a correct value of concentration.");        
      }
      else{
        if(this.unitFieldsEmpty){
          this.presentAlertData("ERROR UNITS","Please enter units.");
        }
        else{
          this.visible=true;
          //Se calcula el resultado y se acota a 4 decimales      
          if(this.visible){         
            this.resultValue = Number((this.drugAmount * this.conversionMap[this.defaultUnitDose + "To" + this.concentrationUnits]) / this.concentration).toFixed(4) + " "+ resultUnits;        
          }
        }
      }
    }
  }        

  async presentAlertData(headerParam, messageParam) {    
    const alert = await this.alertCtrl.create({      
      header: headerParam,      
      message: messageParam,
      buttons: [{
        text: 'OK',
        handler: () => {
          this.visible=false;          
        }
      }
    ]
    });    
    await alert.present();    
  }

  checkNumericFields(){
    if (this.weight_kgs===undefined || this.weight_kgs===null || this.dose===undefined || this.dose=== null || this.concentration===undefined || this.concentration===null){      
      this.numericFieldsEmpty=true;
    }
  }

  checkUnitFields(){
    if (this.defaultUnitDose==="Choose an unit" || this.defaultUnitDose===null || this.defaultUnitConcentration===null || this.defaultUnitConcentration==="Choose an unit"){      
      this.unitFieldsEmpty=true;
    }
  }
}
