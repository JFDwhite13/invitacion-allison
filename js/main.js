const data = [["V6E7","Johan Forero y Pareja",2],
["S3Z1","Jhonatan, Esposa e hija",3],
["X4D4","Cesar Forero, Esposa e hijos",5]];

document.getElementById("btnn").addEventListener("click", ()=>{
	const code = document.getElementById("coding").value;
	buscar(code);
})

function buscar(code){
	let finaldata = null;
	for(i = 0;i<data.length;i++){
		if(data[i][0]==code){
			console.log(data[i]);
			finaldata = JSON.stringify(data[i]);
			break;
		}
	}

	localStorage.setItem("data", finaldata);

	
}
