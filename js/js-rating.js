import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

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

const usersRef = ref(db, "users");
get(usersRef).then((snapshot) => {
    if (snapshot.exists()) {
        const usersData = snapshot.val();
        const sortedUsers = Object.values(usersData).sort((a, b) => b.win - a.win);
        let isEvenRow = false;
        let leaderboardTable = '<table><tr><th style="width: 30%;">NAME</th><th style="width: 10%;"></th><th class="win" style="width: 15%;">W</th><th class="loss" style="width: 15%;">L</th><th style="width: 15%;">O</th><th style="width: 15%;" class="mmr">MMR</th></tr>';

sortedUsers.forEach((user) => {
    const rowClass = isEvenRow ? 'even' : 'odd';

    if (user.username !== undefined || user.first_name !== undefined || user.last_name !== undefined) {
        let usernameToShow = user.username;
        
        if (user.username == null && user.last_name == null) {
            usernameToShow = `${user.first_name}`;
        } else if (user.username == null) {
            usernameToShow = `${user.first_name} ${user.last_name}`;
        }
        
        leaderboardTable += `<tr class="${rowClass}">
            <td class="username">${usernameToShow}</td>
            <td><img src="${user.photo_url ? user.photo_url : 'avatar-profil.jfif'}" alt=""></td>
            <td class="win">${user.win}</td>
            <td class="loss">${user.loss}</td>
            <td>${user.win + user.loss}</td>
            <td class="mmr">${user.mmr}</td>
        </tr>`;
        
        isEvenRow = !isEvenRow; // Toggle the current row status (even/odd)
    }
});



        leaderboardTable += '</table>';
        const leaderboardDiv = document.getElementById("leaderboard");
        leaderboardDiv.innerHTML = leaderboardTable;
    }
}).catch((error) => {
    console.error("Помилка при отриманні даних з бази даних:", error);
});