import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.page.html',
  styleUrls: ['./general-information.page.scss'],
})
export class GeneralInformationPage implements OnInit {
  
  listaCodigos:Array<any>=["código1", "código2", "código3"];
  defaultValueSelect=this.listaCodigos[0];

  constructor() { }

  ngOnInit() {
  }

}
