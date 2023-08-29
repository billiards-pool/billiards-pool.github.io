        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
        import { getDatabase, ref, push, set, orderByChild, equalTo, get, runTransaction, child, onValue } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBcTxPbjijLfs6n3Dw9A1ZAWcRCHHv_yGQ",
  authDomain: "billiards-pool-8184f.firebaseapp.com",
  databaseURL: "https://billiards-pool-8184f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "billiards-pool-8184f",
  storageBucket: "billiards-pool-8184f.appspot.com",
  messagingSenderId: "144934324163",
  appId: "1:144934324163:web:ba9b9a43e2b926e6851f76"
};
        const app = initializeApp(firebaseConfig);

        const db = getDatabase();
        const number1 = document.querySelector("#number1");
        const number2 = document.querySelector("#number2");
        var n1 = 0;
        var n2 = 0;

        function DisplayCurrentNumber(currentNumber) {
            if (typeof currentNumber === 'number') {
                number1.textContent = currentNumber;
                n1 = currentNumber;
            } else {
                number1.textContent = "Invalid data";
            }
        }

        function DisplayCurrentNumber2(currentNumber2) {
            if (typeof currentNumber2 === 'number') {
                number2.textContent = currentNumber2;
                n2 = currentNumber2;
            } else {
                number2.textContent = "Invalid data";
            }
        }

        const number1Ref = ref(db, "number/number1");
        onValue(number1Ref, (snapshot) => {
            const currentNumber = snapshot.val();
            DisplayCurrentNumber(currentNumber);
        });

        const number2Ref = ref(db, "number/number2");
        onValue(number2Ref, (snapshot) => {
            const currentNumber2 = snapshot.val();
            DisplayCurrentNumber2(currentNumber2);
        });




        const urlParams = new URLSearchParams(window.location.search);
        
        const id_1 = urlParams.get("id_1");
        const username_1 = urlParams.get("username_1");
        const photo_url_1 = urlParams.get("photo_url_1");
        
        const id_2 = urlParams.get("id_2");
        const username_2 = urlParams.get("username_2");
        const photo_url_2 = urlParams.get("photo_url_2");
        
        const mode = urlParams.get("mode");

        document.getElementById("mode").textContent = mode;
        // document.getElementById("id_1").textContent = id_1;
        document.getElementById("username_1").textContent = username_1;
        document.getElementById("photo_1").src = photo_url_1;
        
        // document.getElementById("id_2").textContent = id_2;
        document.getElementById("username_2").textContent = username_2;
        document.getElementById("photo_2").src = photo_url_2;

let t = document.querySelector('time');
t.started = new Date;
t.update = ms => t.innerHTML = new Date(ms).toISOString().split(/T|\./)[1]
setInterval(() => t.update(new Date - t.started), 500);


const FinishButton = document.querySelector('#FinishButton');

FinishButton.addEventListener('click', () => {

 window.location.href = `save.html?id_1=`+id_1+`&id_2=`+id_2+`&n1=`+n1+`&n2=`+n2+`&mode=`+ mode + `&time=`+t.innerHTML;

});
const colors = [
  "red", "blue", "green", "yellow", "pink", "orange", "purple",
  "brown", "gray", "cyan", "lime", "magenta", "teal", "indigo",
  "violet", "maroon", "navy", "olive", "coral", "gold",
  "salmon", "aquamarine", "chocolate", "darkgreen", "lavender",
  "midnightblue", "peru", "royalblue", "sienna", "tomato",
  "aliceblue", "azure", "beige", "cadetblue", "chartreuse",
  "crimson", "darkorchid", "firebrick", "forestgreen", "hotpink",
  "khaki", "lawngreen", "lemonchiffon", "lightcoral", "lightpink",
  "mediumseagreen", "orangered", "palegoldenrod", "palevioletred",
  "plum", "rosybrown", "sandybrown", "seagreen", "silver", "thistle",
  "wheat", "yellowgreen", "aqua", "bisque", "burlywood", "cornflowerblue", "darkcyan",
  "darkslateblue", "dodgerblue", "goldenrod", "greenyellow",
  "indianred", "limegreen", "mediumaquamarine", "mediumvioletred",
  "mistyrose", "oldlace", "orangered", "papayawhip", "powderblue",
  "rebeccapurple", "saddlebrown", "seashell", "slategray",
  "springgreen", "tan", "turquoise", "violetred", "whitesmoke"
];

let availableColors = [...colors]; // Створюємо копію списку кольорів

function getRandomColor() {
  if (availableColors.length === 0) {
    availableColors = [...colors]; // Якщо всі кольори вже використані, перезапускаємо список
  }
  
  const randomIndex = Math.floor(Math.random() * availableColors.length);
  const selectedColor = availableColors.splice(randomIndex, 1)[0]; // Видаляємо вибраний кольор зі списку
  return selectedColor;
}

const mmr1Color = getRandomColor();
const mmr2Color = getRandomColor();


number1.style.textShadow = `0 0 20px ${mmr1Color}`;
number2.style.textShadow = `0 0 20px ${mmr2Color}`;

document.getElementById("username_1").style.textShadow = `0 0 20px ${mmr1Color}`;
document.getElementById("username_2").style.textShadow = `0 0 20px ${mmr2Color}`;


document.documentElement.style.setProperty('--mmr1Color', mmr1Color);
document.documentElement.style.setProperty('--mmr2Color', mmr2Color);

const photo1 = document.getElementById("photo_1");
const photo2 = document.getElementById("photo_2");

function toggleFirePulseAnimation1() {
  if (n1 == 7) { // Перевірка на значення number1
    photo1.classList.add("fire-pulse-animation1"); // Додаємо клас з анімацією
  } else {
    photo1.classList.remove("fire-pulse-animation1"); // Видаляємо клас з анімацією
  }
}

function toggleFirePulseAnimation2() {
  if (n2 == 7) { // Перевірка на значення number1
    photo2.classList.add("fire-pulse-animation2"); // Додаємо клас з анімацією
  } else {
    photo2.classList.remove("fire-pulse-animation2"); // Видаляємо клас з анімацією
  }
}
function toggleFirePulseAnimation() {
  if (n2 == 8 || n1 == 8) { 
    photo1.classList.remove("fire-pulse-animation1");
    photo2.classList.remove("fire-pulse-animation2"); // Видаляємо клас з анімацією
  }
}
function toggleFirePulseAnimation1_1(n) {
  const animationClass = `fire-pulse-animation1-${n}`;

  if (n1 === n) { 
    photo1.classList.add(animationClass); 
  } else {
    photo1.classList.remove(animationClass);
  }
}
function toggleFirePulseAnimation1_2(n) {
  const animationClass = `fire-pulse-animation2-${n}`;

  if (n2 === n) { 
    photo2.classList.add(animationClass); 
  } else {
    photo2.classList.remove(animationClass);
  }
}





// Виклик функції для початкового налаштування анімації
toggleFirePulseAnimation1();
toggleFirePulseAnimation2();
toggleFirePulseAnimation();

// Перевіряємо значення number1 при кожному оновленні
setInterval(() => {
  toggleFirePulseAnimation1();
  toggleFirePulseAnimation2();
  toggleFirePulseAnimation();
  for (let i = 1; i <= 6; i++) {
  (function(n) {
    toggleFirePulseAnimation1_1(n);
    toggleFirePulseAnimation1_2(n);
  })(i);
}

}, 1000); // Змініть інтервал на більший або менший, за потреби

const player1ColorRef = ref(db, "player1/color");
    runTransaction(player1ColorRef, (currentData) => {
        return currentData = mmr1Color; 
    });

const player2ColorRef = ref(db, "player2/color");
    runTransaction(player2ColorRef, (currentData) => {
        return currentData = mmr2Color; 
    });
