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

const urlParams = new URLSearchParams(window.location.search);

const id_1 = urlParams.get("id_1");
const id_2 = urlParams.get("id_2");
const n1 = parseInt(urlParams.get("n1"));
const n2 = parseInt(urlParams.get("n2"));
const time = urlParams.get("time");
const score = n1 + ':' + n2;

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
// Об'єднання дати і часу в одну змінну
const datetime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

let lastPlayId = 0; // Початкове значення

if (n1 > n2) {
    const player1Ref = ref(db, "users/" + id_1);
    onValue(player1Ref, (snapshot) => {
        if (snapshot.exists()) {
            const player1Data = snapshot.val();
            const id = player1Data.id;
            const username = player1Data.username;
            const photo_url = player1Data.photo_url;
            let usernameToShow = player1Data.username;
        if (player1Data.username == null && player1Data.last_name == null) {
            usernameToShow = `${player1Data.first_name}`;
        } else if (player1Data.username == null) {
            usernameToShow = `${player1Data.first_name} ${player1Data.last_name}`;
        }
            
            document.getElementById("username").textContent = usernameToShow;
            document.getElementById("photo").src = photo_url ? photo_url : 'avatar-profil.jfif';
        }
    });
            // Отримати останній інкремент
            get(child(ref(db), "lastPlayId"))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        lastPlayId = snapshot.val();
                    }
                    
                    const newPlayKey = lastPlayId + 1; // Збільшити значення інкременту для нового ідентифікатору
                    const newPlayRef = ref(db, "play/" + newPlayKey);
                    
                    const playData = {
                        win: id_1,
                        loss: id_2,
                        score: score,
                        time: time,
                        datetime: datetime
                    };
                    
                    set(newPlayRef, playData)
                        .then(() => {
                            console.log("Дані успішно записані до бази даних");
                            // Оновити останній інкремент
                            set(ref(db, "lastPlayId"), newPlayKey);
                        })
                });

const playerWinRef = ref(db, "users/" + id_1 + "/win");
    runTransaction(playerWinRef, (currentData) => {
        return ++currentData;
    });
const playerLossRef = ref(db, "users/" + id_2 + "/loss");
    runTransaction(playerLossRef, (currentData) => {
        return ++currentData;
    });

} else if (n2 > n1) {
    const player2Ref = ref(db, "users/" + id_2);
    onValue(player2Ref, (snapshot) => {
        if (snapshot.exists()) {
            const player2Data = snapshot.val();
            const id = player2Data.id;
            const username = player2Data.username;
            const photo_url = player2Data.photo_url;
            let usernameToShow = player2Data.username;
        if (player2Data.username == null && player2Data.last_name == null) {
            usernameToShow = `${player2Data.first_name}`;
        } else if (player2Data.username == null) {
            usernameToShow = `${player2Data.first_name} ${player2Data.last_name}`;
        }
            
            document.getElementById("username").textContent = usernameToShow;
            document.getElementById("photo").src = photo_url ? photo_url : 'avatar-profil.jfif';
        }
    });
                // Отримати останній інкремент
            get(child(ref(db), "lastPlayId"))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        lastPlayId = snapshot.val();
                    }
                    
                    const newPlayKey = lastPlayId + 1; // Збільшити значення інкременту для нового ідентифікатору
                    const newPlayRef = ref(db, "play/" + newPlayKey);
                    
                    const playData = {
                        win: id_2,
                        loss: id_1,
                        score: score,
                        time: time,
                        datetime: datetime
                    };
                    
                    set(newPlayRef, playData)
                        .then(() => {
                            console.log("Дані успішно записані до бази даних");
                            // Оновити останній інкремент
                            set(ref(db, "lastPlayId"), newPlayKey);
                        })
                });

const playerWinRef = ref(db, "users/" + id_2 + "/win");
    runTransaction(playerWinRef, (currentData) => {
        return ++currentData;
    });
const playerLossRef = ref(db, "users/" + id_1 + "/loss");
    runTransaction(playerLossRef, (currentData) => {
        return ++currentData;
    });

}

const Button = document.querySelector('#Button');

Button.addEventListener('click', () => {
    window.location.href = `index.html`;
});