export class Code {

    /*user: number;
    id: number;
    title: string;*/

    
    drug_name: string;
    code_number: string;
    anatomic_group_name: string;
    therapeutic_group_name: string;

    constructor(drug_name = '', code_number = '', anatomic_group_name = '', therapeutic_group_name = '') {
        this.drug_name = drug_name;
        this.code_number = code_number;
        this.anatomic_group_name = anatomic_group_name;
        this.therapeutic_group_name = therapeutic_group_name;
    }
    

}