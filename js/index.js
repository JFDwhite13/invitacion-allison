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