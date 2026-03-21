//Messages
const totalMessages = {
  Camilo: ["Hoy es un dia bello para Programar", "Mensajito nuevo"],
  Diego: ["Hoy es un dia lindo para ver One Piece", "Mensajito nuevo"],
};

//This is the integrants
const integrants = [
  {
    id: 1,
    name: "Diego Irala",
    password: "DIRALA",
    messages: [""],
    profileImage: "img/Diego.jpg",
    description: "Creador de la WEB, Ing. Sistemas, Senior Fronted.",
  },
  {
    id: 2,
    name: "Camilo",
    password: "Astaaa",
    messages: [""],
    profileImage: "img/Camilo.jpg",
    description:
      "Ingeniero Casado, el primero del grupo, gozu en correr, no sabe Cloud",
  },
  {
    id: 3,
    name: "Edgar Loayza",
    password: "Astaaa",
    messages: [""],
    profileImage: "img/Edgar.jpg",
    description:
      "Le gusta columpiarse, Ingeniero Industrial de amplio recorrido, amante de las bicicletas.",
  },
  {
    id: 4,
    name: "Javier Exeni",
    password: "Astaaa",
    messages: [""],
    profileImage: "img/Javicho.jpeg",
    description:
      "Gran Persona cuando quiere, y cuando no quiere tambien, Ing. en Sistemas, Senior. Javpincho",
  },
  {
    id: 5,
    name: "David Gemio",
    password: "Astaaa",
    messages: ["Buenos dias gentita", "Nuevos"],
    profileImage: "img/David.jpg",
    description: "Ing. en Datos, le gusta emputarse, extraña jugar Counter",
  },
  {
    id: 6,
    name: "Alvaro Villavicencio",
    password: "Astaaa",
    messages: [""],
    profileImage: "img/Villa.jpg",
    description:
      "Ingeniero, filantropo, Deportista, Dotero, Fortnitero, cada faceta es una personalidad.",
  },
  {
    id: 7,
    name: "Daniel Barrios",
    password: "Astaaa",
    messages: [""],
    profileImage: "img/Danfer.jpg",
    description: "Hey Thorfin, gozu, tiene su fabrica. Ing. Industrial",
  },
  {
    id: 8,
    name: "Javier Iquize",
    password: "Astaaa",
    messages: [""],
    profileImage: "img/Javiame.jpeg",
    description: "10k mmr, referencia sexual",
  },
  {
    id: 9,
    name: "Nicolas Fernández (Ednick) ",
    password: "Astaaa",
    messages: [""],
    profileImage: "img/Ednick.jpg",
    description:
      "Referente de paz y felicidad, gran persona, ingeniero Senior, Vio One Piece, nada mas que decir <3",
  },
];

const weekMessages = [
  [
    1,
    "Alvaro Villavicencio",
    integrants[1].profileImage,
    "Mensaje de Villa",
    "Sunday",
  ],
  [2, "Camilo", integrants[5].profileImage, "Camilo saluda", "Monday"],
  [
    3,
    "Diego Miguel Irala Barrios",
    integrants[0].profileImage,
    "Buenos dias gentita que hoy sea un gran dia, que la vida les de salud y que en el dia perdonen a todos, nadie tiene enemigos <3",
    "Tuesday",
  ],
  [
    4,
    "Daniel Barrios",
    integrants[6].profileImage,
    "No hay saludo",
    "Wednesday",
  ],
  [
    5,
    "Javiame",
    integrants[7].profileImage,
    " ¡Buenos días equipo! ☀️🏃‍♂️Hoy es otro día para sumar kilómetros, disciplina y mente fuerte. No importa si hoy cuesta más que ayer, lo importante es no detenerse. Cada paso nos acerca a nuestra mejor versión.¡Nos vemos en la ruta! 💪🔥",
    "Thursday",
  ],
  [
    6,
    "Javier,  le toco Sabado que gozu",
    integrants[3].profileImage,
    "",
    "Friday",
  ],
  [7, "David Gemio", integrants[0].profileImage, "", "Friday"],
];

//NavBar
const songButton = document.querySelector("#song");
const music = document.getElementById("music");

if (songButton && music) {
  songButton.addEventListener("click", () => {
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  });
}

//MESSAGES FOR TODAY
const dayForMessage = new Date().getDay();

const variableDay = () => {
  if (dayForMessage === 0) {
    return 6;
  } else {
    return dayForMessage - 1;
  }
};
console.log(variableDay);

const manualIntegrant = weekMessages[variableDay()][1];
const manualMessage = weekMessages[variableDay()][3];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const order = [];
const participantOrder = [];
let count = 0;

while (count < 7) {
  const randomNum = Math.floor(Math.random() * integrants.length);
  const randomName = integrants[randomNum].name;
  const participantId = integrants[randomNum].id;

  if (!order.includes(randomName)) {
    order.push(randomName);

    participantOrder.push({
      position: count + 1,
      name: randomName,
      day: days[count],
      id: participantId,
    });

    count++;
  }
}
console.log(participantOrder);

//Day

const dayToday = days[new Date().getDay()];

//TODAY MESSAGE
const currentDay = document.querySelector(".current-day");
const todayIntegrant = document.querySelector(".today-name");
const imageToday = document.querySelector(".imagen-profile");
const todaySpecial = document.querySelector(".special-greeting");
currentDay.textContent = dayToday;
todayIntegrant.textContent = manualIntegrant;
todaySpecial.textContent = manualMessage;
imageToday.src = weekMessages[variableDay()][2];

//ALEATORY MESSAGE
//Integrants
const allIntegrants = document.querySelector(".integrants");
const liAllIntegrats = document.createElement("ul");
liAllIntegrats.className = "ul-All-Integrants";
allIntegrants.appendChild(liAllIntegrats);
integrants.forEach((integrant) => {
  const individualIntegrant = document.createElement("li");
  const individualImage = document.createElement("img");
  const individualName = document.createElement("h3");
  const individualDescription = document.createElement("p");

  individualImage.classList.add("individual-image-from-list");
  individualName.classList.add("individual-name-from-list");

  individualImage.src = integrant.profileImage;
  individualName.textContent = integrant.name;
  individualDescription.textContent = integrant.description;

  //Classs
  individualIntegrant.classList.add("card-container-integrant");
  //add
  individualIntegrant.appendChild(individualImage);
  individualIntegrant.appendChild(individualName);
  individualIntegrant.appendChild(individualDescription);

  liAllIntegrats.appendChild(individualIntegrant);
});

//Aleatory Message
const randomMessage = document.querySelector(".aleatory-message");
let countDelete = 0;
setInterval(() => {
  countDelete++;
  if (countDelete >= 1) {
    randomMessage.innerHTML = "";
    countDelete = 0;
  }

  const completeMessage = document.createElement("p");
  const imageAleatoryProfile = document.createElement("img");

  const integrant = integrants[Math.floor(Math.random() * integrants.length)];

  imageAleatoryProfile.src = integrant.profileImage;
  imageAleatoryProfile.classList.add("profile-random-img");
  completeMessage.classList.add("random-description");

  const message =
    integrant.messages[Math.floor(Math.random() * integrant.messages.length)];

  completeMessage.textContent = `${integrant.name}: ${message}`;

  randomMessage.appendChild(imageAleatoryProfile);
  randomMessage.appendChild(completeMessage);
}, 2200);

//Aleatory participant

// Participants Order manual code for participants 1 time per Week
const orderForParticipants = document.querySelector(".participants-order");
const fromLogAleatory = [
  [1, "Edgar loayza", "Monday"],
  [2, "Nicolas Fernandez", "Tuesday"],
  [3, "Diego Irala", "Wednesday"],
  [4, "Daniel Barrios", "Thursday"],
  [5, "Javier Iquize", "Friday"],
  [6, "Javier Exeni", "Saturday"],
  [7, "David Gemio", "Sunday"],
  [8, "ACTUALIZAR LISTA", "NO DAY"],
];

const olAleatoryIntegrants = document.createElement("ol");
orderForParticipants.appendChild(olAleatoryIntegrants);

fromLogAleatory.forEach((integrant) => {
  const liParticipant = document.createElement("li");
  liParticipant.className = "Participant";
  liParticipant.textContent = `${integrant[1]} - - - - ${integrant[2]}`;
  olAleatoryIntegrants.appendChild(liParticipant);
});

//Tomorrow
const tomorrowContainer = document.querySelector(
  ".tomorrow-participant-container",
);

const tomorrowName = fromLogAleatory[new Date().getDay()][1];
const day = fromLogAleatory[new Date().getDay()][2];
const participantTomorrow = document.createElement("p");
participantTomorrow.className = "participant-tomorrow";
participantTomorrow.textContent = `${tomorrowName}, tomorrow is your Turn, ${day}`;
tomorrowContainer.appendChild(participantTomorrow);

//Responsive navbar
const buttonResponsive = document.querySelector(".button-responsive");
const navbar = document.querySelector(".navbar");
const lines = document.querySelectorAll(".line");

buttonResponsive.addEventListener("click", () => {
  navbar.classList.toggle("active");
  buttonResponsive.classList.toggle("active");

  lines.forEach((line) => {
    line.classList.toggle("active");
  });
});
