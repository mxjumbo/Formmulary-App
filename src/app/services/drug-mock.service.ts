import { Injectable } from '@angular/core';
import { Drug } from '../models/drug';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Code } from '../models/code';

@Injectable({
  providedIn: 'root'
})
export class DrugMockService {

  private drugs: Drug[] = [
    new Drug('Atropine',
    'Competitive antagonist of the muscarinic acetylcholine receptors',
    'Yes',
    'Nd',
    'Nd',
    'Yes'),
    {drug_name: 'Gentamicin',
    description: 'Aminoglycoside antibiotic to treat different infections mainly caused by Gram-',
    available: 'Yes',
    license_AEMP: 'Yes',
    license_EMA: 'Yes',
    license_FDA: 'Yes'
    },
    {drug_name: 'Furosemide',
    description: 'Loop diuretic to treat fluid retention',
    available: 'Yes',
    license_AEMP: 'Nd',
    license_EMA: 'Nd',
    license_FDA: 'Yes'
    }
  ];

  private codes: Code[] = [
    new Code ('Gentamicin',
    'QS02AA14',
    'QS Sensory organs',
    'Otologicals'),
    {
      drug_name: 'Gentamicin',
      code_number: 'QS01AA11',
      anatomic_group_name: 'QS Sensory organs',
      therapeutic_group_name: 'Ophtalmologicals'
    },
    {
      drug_name: 'Gentamicin',
      code_number: 'QJ51GB03',
      anatomic_group_name: 'QJ Antiinfectives for systemic use',
      therapeutic_group_name: 'Antibacterials for intrammary use'
    },
    {
      drug_name: 'Gentamicin',
      code_number: 'QJ01GB03',
      anatomic_group_name: 'QJ Antiinfectives for systemic use',
      therapeutic_group_name: 'Antiinfectives and antiseptics for intrauteri'
    },
    {
      drug_name: 'Gentamicin',
      code_number: 'QG01AA91',
      anatomic_group_name: 'QG Genito urinary system and sex hormones',
      therapeutic_group_name: 'Gynecological antiinfectives and antiseptics'
    },
    {
      drug_name: 'Gentamicin',
      code_number: 'QD06AX07',
      anatomic_group_name: 'QD Dermatologicals',
      therapeutic_group_name: 'Antibiotics and chemotherapeutics for dermato'
    },
    {
      drug_name: 'Gentamicin',
      code_number: 'QA07AA91',
      anatomic_group_name: 'QA Alimentary tract and metabolism',
      therapeutic_group_name: 'Antidiarrheals, intestinal anti-inflammatory'
    },
    {
      drug_name: 'Gentamicin',
      code_number: 'QS03AA06',
      anatomic_group_name: 'QS Sensory organs',
      therapeutic_group_name: 'Ophtalmologicals and otologicals preparations'
    },
    {
      drug_name: 'Gentamicin',
      code_number: 'QS02AA14',
      anatomic_group_name: 'QS Sensory organs',
      therapeutic_group_name: 'Otologicals'
    }
  ]

  constructor() { }

  getAllDrugs(): Observable<Drug[]> {
    return of(this.drugs);
  }

  getInfoCodes(drug_name: string): Observable<Code[]> {
    return of(this.codes);
  }
}
