document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const mainnav = document.querySelector('.navi');
const hambutton = document.querySelector('#mainmenu');


hambutton.addEventListener('click', function() {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});
