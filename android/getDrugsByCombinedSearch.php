<?php
include('functions.php');
$obj = file_get_contents('php://input');
$json=json_decode($obj);
$therapeutic=$json->{'therapeutic'};
$anatomical=$json->{'anatomical'};
$group=$json->{'group'};
$default_therapeutic="";
$default_anatomical="Choose an Anatomical Target";
$default_group="Choose a Group";

//Si el grupo terapéutico no es vacío
if(strcmp($therapeutic, $default_therapeutic)!==0){
	//Si el grupo anatómico no es vacío
	if(strcmp($anatomical, $default_anatomical)!==0){
		//Obtenemos los medicamentos de la tabla code
		if($result1 = getSQLResultSet("SELECT DISTINCT drug_name FROM CODE WHERE therapeutic_group_name='$therapeutic' && anatomic_group_name='$anatomical'")){
			if(!empty($result1)){
				while ($row1=$result1->fetch_array(MYSQLI_NUM)){
					//Si el grupo animal no es vacío
					if (strcmp($group, $default_group)!==0) {
						if($result2=getSQLResultSet("SELECT DISTINCT drug_name FROM DRUG_aplicated_to_GROUP WHERE drug_name='$row1[0]' && group_name='$group'")){
							if(!empty($result2)){
								while ($row2=$result2->fetch_array(MYSQLI_NUM)) {
									echo json_encode($row2);
								}
							}
						}
					}
					else
						echo json_encode($row1);
				}
			}
		}
	}
	//Si el grupo anatómico es vacio hacemos la consulta con el grupo terapéutico y el grupo animal(si lo hubiera)
	else if($result1 = getSQLResultSet("SELECT DISTINCT drug_name FROM CODE WHERE therapeutic_group_name='$therapeutic'")){
		if(!empty($result1)){
			while ($row1=$result1->fetch_array(MYSQLI_NUM)){
				//Si el grupo animal no es vacío
				if (strcmp($group, $default_group)!==0) {
					if($result2=getSQLResultSet("SELECT DISTINCT drug_name FROM DRUG_aplicated_to_GROUP WHERE drug_name='$row1[0]' && group_name='$group'")){
						if(!empty($result2)){
							while ($row2=$result2->fetch_array(MYSQLI_NUM)) {
								echo json_encode($row2);
							}
						}
					}
				}
				else
					echo json_encode($row1);
			}
		}
	}	
}
else{
	//Si el grupo anatómico no es vacío
	if(strcmp($anatomical, $default_anatomical)!==0){
		//echo json_encode("ok");
		if($result1 = getSQLResultSet("SELECT DISTINCT drug_name FROM CODE WHERE anatomic_group_name='$anatomical'")){
			if(!empty($result1)){
				while ($row1=$result1->fetch_array(MYSQLI_NUM)){
					//Si el grupo animal no es vacío
					if (strcmp($group, $default_group)!==0) {
						if($result2=getSQLResultSet("SELECT DISTINCT drug_name FROM DRUG_aplicated_to_GROUP WHERE drug_name='$row1[0]' && group_name='$group'")){
							if(!empty($result2)){
								while ($row2=$result2->fetch_array(MYSQLI_NUM)) {
									echo json_encode($row2);
								}
							}
						}
					}
					else
						echo json_encode($row1);
				}
			}
		}
	}
	//Si el grupo anatómico es vacío
	else{
		//Si el grupo animal no es vacío
		if (strcmp($group, $default_group)!==0) {
			//echo json_encode("ok");
			if($result2=getSQLResultSet("SELECT DISTINCT drug_name FROM DRUG_aplicated_to_GROUP WHERE group_name='$group'")){
				if(!empty($result2)){
					while ($row2=$result2->fetch_array(MYSQLI_NUM)) {
						echo json_encode($row2);
					}
				}
			}
		}
	}
}	

?>