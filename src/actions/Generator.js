const ActionGenerator = (actionName)=>(payload,isLoading = true)=>{
	//console.log(payload);
	return ({
	type:actionName,
	payload:payload.data,
	isLoading,
	});
}

const ActionGenerator2 = (actionName)=>(payload)=>{
	//console.log(payload);
	return({
		type:actionName,
		payload
	});
}

export const Generator = {
	ActionGenerator,
	ActionGenerator2
}