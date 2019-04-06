const allIndices = (jsondata) => {
	var Indices = Array();
	for (var i = 0; i < jsondata.length; i++) {
		for (var j = 0; j < jsondata[i].criteria.length; j++) {
			for (var k = 0; k < jsondata[i].criteria[j].indices.length; k++) {
				Indices.push(jsondata[i].criteria[j].indices[k])
			}
		}
	}

	return Indices

}

const allIndicesByLevel = (allIndices) => {
	// Expect input as an array of all Indices
	var allLevel, groupIndices = Array();
	for (var k = 0; k < allIndices.length; k++) {
		if(allLevel.indexOf(allIndicesp[k].level) === -1){
			allLevel.push(allIndicesp[k].level)
		}
	}

	for (var i = 0; i < allLevel.length; i++) {
		groupIndices[i] = Array();
		for (var j = 0; j < allIndices.length; j++) {
			if(allIndices[j].level === allLevel[i]){
				groupIndices[i].push(allIndices[j])
			}
			
			
		}
	}

	return groupIndices


}