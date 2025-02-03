// Selección de elementos del DOM
const currentYearElement = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastModified");
const mainmenu = document.getElementById("mainmenu");
const navigation = document.querySelector("nav");
const templeContainer = document.getElementById("templeContainer");

// Actualizar el año actual
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Mostrar la última fecha de modificación
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
}

// Funcionalidad del menú hamburguesa
if (mainmenu && navigation) {
    mainmenu.addEventListener("click", (event) => {
        event.preventDefault(); 
        navigation.classList.toggle("show");
    });
}

// Arreglo de templos
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "San José Costa Rica ",
        location: "Belén, Costa Rica",
        dedicated: "2000, June, 4",
        area: 10700,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/san-jose-costa-rica-temple/san-jose-costa-rica-temple-50533.jpg"
      }
      ,

      {
          templeName: "Sapporo Japan",
          location: "Sapporo, Japan",
          dedicated: "2016, August, 21",
          area: 48480,
          imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/sapporo-japan-temple/sapporo-japan-temple-3374.jpg"
        }
        ,

    {
        templeName: "Idaho Falls Idaho ",
        location: "Idaho  Falls, Idaho",
        dedicated: "2017, June, 4",
        area: 85624,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/idaho-falls-idaho-temple/idaho-falls-idaho-temple-1903.jpg"
      }
      ,

      {
        templeName: "Fort Lauderdale",
        location: "Fort Lauderdale, Florida",
        dedicated: "2014, May, 4",
        area: 30500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fort-lauderdale-florida/2018/400x250/09-Fort-Lauderdale-Temple-2032337.jpg"
        }

        ,

        {
        templeName: "San Diego Caifornia",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 3",
        area: 72000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
          }
        ];

// Función para formatear fechas
function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
}

// Función para renderizar los templos en el DOM
function renderTemples(filteredTemples) {
    if (!templeContainer) return;

    // Limpiar el contenedor antes de renderizar
    templeContainer.innerHTML = "";

    // Crear y agregar las tarjetas de templos
    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${formatDate(temple.dedicated)}`;

        const area = document.createElement("p");
        area.textContent = `Total Area: ${temple.area.toLocaleString()} sq ft`;

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = `Image of ${temple.templeName}`;
        img.loading = "lazy";
        img.decoding = "async";

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        templeContainer.appendChild(card);
    });
}

// Mostrar todos los templos por defecto
renderTemples(temples);

// Función para filtrar templos 
function filterTemples(criteria) {
    let filteredTemples = [];

    switch (criteria) {
        case "old":
            filteredTemples = temples.filter(temple => new Date(temple.dedicated) < new Date("1950-01-01"));
            break;
        case "new":
            filteredTemples = temples.filter(temple => new Date(temple.dedicated) >= new Date("2000-01-01"));
            break;
        case "large":
            filteredTemples = temples.filter(temple => temple.area > 50000);
            break;
        case "small":
            filteredTemples = temples.filter(temple => temple.area <= 50000);
            break;
        default:
            filteredTemples = temples;
    }

    renderTemples(filteredTemples);
}

// Agregar eventos a los btn de nav
document.querySelectorAll(".navi li a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const filter = event.target.getAttribute("href").replace("#", "");
        filterTemples(filter);
    });
});
