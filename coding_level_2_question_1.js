const find = (jsondata) => {
	var criteria, criteria_with_give_string = Array();
	for (var i = 0; i < jsondata.length; i++) {
		for (var j = 0; j < jsondata[i].criteria.length; j++) {
			criteria.push(jsondata[i].criteria[j])
		}
	}

	for (var k = 0; k < criteria.length; k++) {
  		var patt = /Phương hướng/i;
		if(criteria[k].match(patt)){
			criteria_with_give_string.push(criteria[k])
		}
	}

	return criteria_with_give_string

}