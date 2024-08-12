const data = [["V6E7","Johan Forero y Pareja",2],
["S3Z1","Jhonatan Miranda, Esposa e hija",3],
["X4D4","Cesar Forero, Esposa e hijos",5]];

document.getElementById("btnn").addEventListener("click", ()=>{
	event.preventDefault();
	const ne = document.getElementById("coding").value;
	const code = ne.toUpperCase();
	buscar(code);
})

function buscar(code){
	let finaldata = null;
	for(i = 0;i<data.length;i++){
		if(data[i][0]==code){
			console.log(data[i]);
			finaldata = JSON.stringify(data[i]);
			localStorage.setItem("data", finaldata);
			window.location.href = "https://jfdwhite13.github.io/invitacion-allison/invitacion.html"
			break;
		}else{
			document.getElementById("error").innerHTML = "No encontramos tu codigo, recarga la pagina y vuelve a intentar";
		}
	}

}
