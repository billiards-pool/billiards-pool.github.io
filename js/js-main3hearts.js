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

        const hearts_1 = document.querySelector("#hearts_1");
        const hearts_2 = document.querySelector("#hearts_2");
        const hearts_3 = document.querySelector("#hearts_3");
        const hearts_4 = document.querySelector("#hearts_4");

        function DisplayCurrent_hearts_1(currentNumber) {
          if (currentNumber == 3) {
            hearts_1.textContent = "❤ ❤ ❤";
          } else if (currentNumber == 2) {
            hearts_1.textContent = "❤ ❤";
          } else if (currentNumber == 1) {
            hearts_1.textContent = "❤";
          } else {
            hearts_1.textContent = "";
          }
        }
        function DisplayCurrent_hearts_2(currentNumber) {
          if (currentNumber == 3) {
            hearts_2.textContent = "❤ ❤ ❤";
          } else if (currentNumber == 2) {
            hearts_2.textContent = "❤ ❤";
          } else if (currentNumber == 1) {
            hearts_2.textContent = "❤";
          } else {
            hearts_2.textContent = "";
          }
        }
        function DisplayCurrent_hearts_3(currentNumber) {
          if (currentNumber == 3) {
            hearts_3.textContent = "❤ ❤ ❤";
          } else if (currentNumber == 2) {
            hearts_3.textContent = "❤ ❤";
          } else if (currentNumber == 1) {
            hearts_3.textContent = "❤";
          } else {
            hearts_3.textContent = "";
          }
        }
        function DisplayCurrent_hearts_4(currentNumber) {
          if (currentNumber == 3) {
            hearts_4.textContent = "❤ ❤ ❤";
          } else if (currentNumber == 2) {
            hearts_4.textContent = "❤ ❤";
          } else if (currentNumber == 1) {
            hearts_4.textContent = "❤";
          } else {
            hearts_4.textContent = "";
          }
        }


        const hearts_1Ref = ref(db, "hearts/hearts1");
        onValue(hearts_1Ref, (snapshot) => {
            const currentNumber = snapshot.val();
            DisplayCurrent_hearts_1(currentNumber);
        });

        const hearts_2Ref = ref(db, "hearts/hearts2");
        onValue(hearts_2Ref, (snapshot) => {
            const currentNumber = snapshot.val();
            DisplayCurrent_hearts_2(currentNumber);
        });
        const hearts_3Ref = ref(db, "hearts/hearts3");
        onValue(hearts_3Ref, (snapshot) => {
            const currentNumber = snapshot.val();
            DisplayCurrent_hearts_3(currentNumber);
        });
        const hearts_4Ref = ref(db, "hearts/hearts4");
        onValue(hearts_4Ref, (snapshot) => {
            const currentNumber = snapshot.val();
            DisplayCurrent_hearts_4(currentNumber);
        });


        const urlParams = new URLSearchParams(window.location.search);
        
        const id_1 = urlParams.get("id_1");
        const username_1 = urlParams.get("username_1");
        const photo_url_1 = urlParams.get("photo_url_1");
        
        const id_2 = urlParams.get("id_2");
        const username_2 = urlParams.get("username_2");
        const photo_url_2 = urlParams.get("photo_url_2");

        const id_3 = urlParams.get("id_3");
        const username_3 = urlParams.get("username_3");
        const photo_url_3 = urlParams.get("photo_url_3");

        const id_4 = urlParams.get("id_4");
        const username_4 = urlParams.get("username_4");
        const photo_url_4 = urlParams.get("photo_url_4");

        const mode = urlParams.get("mode");

if (id_1) {
  document.querySelector(".container:nth-child(1)").style.display = "block";
} else {
  document.querySelector(".container:nth-child(1)").style.display = "none";
}

// Repeat the above process for id_2, id_3, and id_4
if (id_2) {
  document.querySelector(".container:nth-child(2)").style.display = "block";
} else {
  document.querySelector(".container:nth-child(2)").style.display = "none";
}

if (id_3) {
  document.querySelector(".container:nth-child(3)").style.display = "block";
} else {
  document.querySelector(".container:nth-child(3)").style.display = "none";
}

if (id_4) {
  document.querySelector(".container:nth-child(4)").style.display = "block";
} else {
  document.querySelector(".container:nth-child(4)").style.display = "none";
}

        document.getElementById("username_1").textContent = username_1;
        document.getElementById("photo_1").src = photo_url_1;
        
        document.getElementById("username_2").textContent = username_2;
        document.getElementById("photo_2").src = photo_url_2;

        document.getElementById("username_3").textContent = username_3;
        document.getElementById("photo_3").src = photo_url_3;

        document.getElementById("username_4").textContent = username_4;
        document.getElementById("photo_4").src = photo_url_4;



let t = document.querySelector('time');
t.started = new Date;
t.update = ms => t.innerHTML = new Date(ms).toISOString().split(/T|\./)[1]
setInterval(() => t.update(new Date - t.started), 500);


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

const Color1 = getRandomColor();
const Color2 = getRandomColor();
const Color3 = getRandomColor();
const Color4 = getRandomColor();


document.getElementById("username_1").style.textShadow = `0 0 20px ${Color1}`;
document.getElementById("username_2").style.textShadow = `0 0 20px ${Color2}`;
document.getElementById("username_3").style.textShadow = `0 0 20px ${Color3}`;
document.getElementById("username_4").style.textShadow = `0 0 20px ${Color4}`;

document.getElementById("hearts_1").style.textShadow = `0 0 20px ${Color1}`;
document.getElementById("hearts_2").style.textShadow = `0 0 20px ${Color2}`;
document.getElementById("hearts_3").style.textShadow = `0 0 20px ${Color3}`;
document.getElementById("hearts_4").style.textShadow = `0 0 20px ${Color4}`;

document.getElementById("hearts_1").style.color = `${Color1}`;
document.getElementById("hearts_2").style.color = `${Color2}`;
document.getElementById("hearts_3").style.color = `${Color3}`;
document.getElementById("hearts_4").style.color = `${Color4}`;



const player1ColorRef = ref(db, "player1/color");
    runTransaction(player1ColorRef, (currentData) => {
        return currentData = Color1; 
    });
const player2ColorRef = ref(db, "player2/color");
    runTransaction(player2ColorRef, (currentData) => {
        return currentData = Color2; 
    });
const player3ColorRef = ref(db, "player3/color");
    runTransaction(player3ColorRef, (currentData) => {
        return currentData = Color3; 
    });
const player4ColorRef = ref(db, "player4/color");
    runTransaction(player4ColorRef, (currentData) => {
        return currentData = Color4; 
    });

