document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const temperature = 26; 
const wind = 10; 

let windChill = "N/A";

function calculateWindChill() {
    const calculatedChill = (
        13.12 +
        0.6215 * temperature - 
        11.37 * Math.pow(wind, 0.16) + 
        0.3965 * temperature * Math.pow(wind, 0.16)
    ).toFixed(2); 
    return `${calculatedChill} °C`;
}

if (temperature <= 10 && wind > 4.8) {
    windChill = calculateWindChill();
}

console.log(windChill);
  
 document.querySelector(".Weather li:last-child label").textContent = `Wind Chill: ${windChill}`;
 