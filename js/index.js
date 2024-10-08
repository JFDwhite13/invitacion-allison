function countdown() {
    const targetDate = new Date("2024-10-19 19:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

setInterval(countdown, 1000);

document.getElementById("addReminder").addEventListener("click", function() {
    const title = "15 años allison";
    const details = "Fiesta de 15 años allison mariana";
    const location = "calle 48c #21-50";
    const startDate = "20241019T240000Z"; // Formato: YYYYMMDDTHHmmssZ
    const endDate = "20241020T100000Z"; // Formato: YYYYMMDDTHHmmssZ

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}&dates=${startDate}/${endDate}`;

    window.open(url, "_blank");
});

document.getElementById("map").addEventListener("click", function() {
	const url = "https://maps.app.goo.gl/RZ6vyP3YQyHCBDs7A";

	window.open(url, "_blank");
});

document.getElementById("woasap").addEventListener("click", function(){
	const url = "https://api.whatsapp.com/send?phone=573212936982&text=Hola%20Mariana%20confirmo%20mi%20asistencia%20a%20tus%2015"

	window.open(url, "_blank")
});

window.onload = function() {
	if(localStorage.getItem('data')){
		console.log(localStorage.getItem('data'))
	}

	let transferdata=JSON.parse(localStorage.getItem('data'));

	console.log(transferdata[1])

    document.getElementById("name").innerHTML = transferdata[1];
    document.getElementById("pases").innerHTML = `
    <div class="mesa">
        <p class="fs-3">Como eres importante para nosotros</p>
        <h1 class="display-5">Hemos Destinado</h1>
        <h1 class="display-5" id="exclusive-number">${transferdata[2]}</h1>
        <p class="fs-3">Lugares para ti y tu familia en nuestra celebracion</p>
    </div>
`
}
