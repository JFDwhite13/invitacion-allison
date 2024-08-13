const data = [["V6E7","Señora Ana Sofia Mahecha",1],
["S3Z1","Claudia Giral e Hijos",3],
["X4D4","Carlos Giral y pareja",2],
["A6R8","Alberto vanegas, Esposa e Hijos",4],
["A3M6","Cesar Forero, Esposa e Hijos",5],
["N2O8","Natalia Sanchez y Pareja",2],
["P6Y8","Leidy Sanchez y Pareja",2],
["Y3W4","Camilo Medina y Pareja",2],
["C3V2","Omar",1],
["O5O0","Victor Cruz, Esposa e Hijo",3],
["I8C4","Mauricio Miranda e Hijos",3],
["Y7J8","Katherine Miranda, Pareja e Hijo",3],
["T6B3","Johan Forero y pareja",2],
["E2C1","Ruben Romero",1],
["O7J6","Jhonatan Miranda, esposa e Hija",3],
["Y4D0", "Maria de Jesus y Miram torres",2],
["C4G2","Fredy Torres, Esposa e Hijos",4],
["R5T7","Fernando Torres e Hija",2],
["N4Y1","Alfonso Torres y Esposa",2],
["J5H8","Miguel Giral, Esposa e hijos",4],
["W9C6","Edwin Giral y Esposa",2],
["N1G1","Alex Cardenas, Esposa e Hijo",3],
["D8V7","Leonor Vidales e Hija",2],
["L8J4","Oscar Almeciga y Esposa",2],
["J3I6","Evimelet Nieto Y Pareja",2],
["V5M3","William Vidales, Esposa e hija",3],
["L3X6","Julian Vidal, Esposa e hijo",3],
["E3E5","Mauricio Diaz, esposa e hijas",4],
["E4S8","Carlos Orlando Forero, esposa e Hijos",4],
["Y8T9","Carlos Orlando Cruz y Esposa",2]];

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
