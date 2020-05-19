export class Drug {

    /*user: number;
    id: number;
    title: string;*/

    drug_name: string;
    description: string;
    available: string;
    license_AEMP: string;
    license_EMA: string;
    license_FDA: string;

    constructor(drug_name = '', description = '', available = '', license_AEMP = '', license_EMA = '', license_FDA = '') {
        this.drug_name = drug_name;
        this.description = description;
        this.available = available;
        this.license_AEMP = license_AEMP;
        this.license_EMA = license_EMA;
        this.license_FDA = license_FDA;
    }

}