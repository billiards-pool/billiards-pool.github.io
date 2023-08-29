
// Отримуємо параметри з URL
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const first_name = urlParams.get('first_name');
  const last_name = urlParams.get('last_name');
  const username = urlParams.get('username');
  const photo_url = urlParams.get('photo_url');

  const userData = {
    id: id,
    first_name: first_name,
    last_name: last_name,
    username: username,
    photo_url: photo_url,
    win: 0,
    loss: 0,
    mmr: 0,
    win_streak: 0
  };
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
  // Вибірка даних користувача з бази даних
  const usersRef = ref(db, `users/${id}`);
  

  // Перевірка, чи користувач вже існує в базі даних за допомогою id
  function checkUserExists(id) {
    const userRef = ref(db, 'users/' + id); // Змініть 'users' на ваш шлях в базі даних
    return get(userRef)
      .then((snapshot) => {
        return snapshot.exists();
      })
      .catch((error) => {
        console.error("Помилка при перевірці користувача: ", error);
        return false;
      });
  }



  // Перевіряємо, чи користувач вже існує за допомогою id
  checkUserExists(id)
    .then((userExists) => {
      if (!userExists) {
        // Зберігаємо userData в базі даних, оскільки користувача не існує
        const userDataRef = ref(db, 'users/' + id); // Змініть 'users' на ваш шлях в базі даних
        set(userDataRef, userData)
          .then(() => {
            console.log("Дані користувача збережено у базі даних.");
          })
          .catch((error) => {
            console.error("Помилка при збереженні даних: ", error);
          });
      } else {
          // Отримання даних користувача з бази даних
            onValue(usersRef, (snapshot) => {
              const usersData = snapshot.val();
             
            let usernameToShow = usersData.username;
        if (usersData.username == null && usersData.last_name == null) {
            usernameToShow = `${usersData.first_name}`;
        } else if (usersData.username == null) {
            usernameToShow = `${usersData.first_name} ${usersData.last_name}`;
        }
        document.getElementById('usernameSpan').textContent = usernameToShow; // Вставка нікнейму користувача
        document.getElementById('myImage').src = usersData.photo_url ? usersData.photo_url : 'avatar-profil.jfif';
        document.getElementById('cabinet').href = `cabinet.html?id=${id}`;
        });
      }
    });
    
function initializePlayer1Ref() {
 const playerRef = ref(db, "player1");
  // Зчитування даних з бази даних
get(playerRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      const players = snapshot.val();
      const player1 = players.player1;
      const id = players.id;
      const username = players.username;
      const photo_url = players.photo_url;
      const first_name = players.first_name;
      const last_name = players.last_name;

      if (player1 === 0) {
        showInitialView1();
      } else {
         showPlayerInfo1(id, username, photo_url, first_name, last_name);
        }
    }
  });
}

// Виклик функції при старті
 initializePlayer1Ref();
    setInterval(initializePlayer1Ref, 2000);

  function initializePlayer2Ref() {
 const playerRef = ref(db, "player2");
  // Зчитування даних з бази даних
get(playerRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      const players = snapshot.val();
      const player2 = players.player2;
      const id = players.id;
      const username = players.username;
      const photo_url = players.photo_url;
      const first_name = players.first_name;
      const last_name = players.last_name;

      if (player2 === 0) {
        showInitialView2();
      } else {
         showPlayerInfo2(id, username, photo_url, first_name, last_name);
        }
    }
  });
}

// Виклик функції при старті
initializePlayer2Ref();
setInterval(initializePlayer2Ref, 2000);

  function initializePlayer3Ref() {
 const playerRef = ref(db, "player3");
  // Зчитування даних з бази даних
get(playerRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      const players = snapshot.val();
      const player3 = players.player3;
      const id = players.id;
      const username = players.username;
      const photo_url = players.photo_url;
      const first_name = players.first_name;
      const last_name = players.last_name;

      if (player3 === 0) {
        showInitialView3();
      } else {
         showPlayerInfo3(id, username, photo_url, first_name, last_name);
        }
    }
  });
}

// Виклик функції при старті
initializePlayer3Ref();
     setInterval(initializePlayer3Ref, 2000);

  function initializePlayer4Ref() {
 const playerRef = ref(db, "player4");
  // Зчитування даних з бази даних
get(playerRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      const players = snapshot.val();
      const player4 = players.player4;
      const id = players.id;
      const username = players.username;
      const photo_url = players.photo_url;
      const first_name = players.first_name;
      const last_name = players.last_name;

      if (player4 === 0) {
        showInitialView4();
      } else {
         showPlayerInfo4(id, username, photo_url, first_name, last_name);
        }
    }
  });
}

// Виклик функції при старті
initializePlayer4Ref();
     setInterval(initializePlayer4Ref, 2000);


const blockmain_users1 = document.querySelector('.blockmain_users1');
let isPlayerInfoShown = false;
const blockmain_users2 = document.querySelector('.blockmain_users2');
let isPlayerInfoShown2 = false;
const blockmain_users3 = document.querySelector('.blockmain_users3');
let isPlayerInfoShown3 = false;
const blockmain_users4 = document.querySelector('.blockmain_users4');
let isPlayerInfoShown4 = false;

function showPlayerInfo1(id, username, photo_url, first_name, last_name) {
            
  let usernameToShow = username;
    if (username == null && last_name == null) {
        usernameToShow = `${first_name}`;
    } else if (username == null) {
        usernameToShow = `${first_name} ${last_name}`;
    }
    blockmain_users1.innerHTML = `
        <div class="container">
            <div class="nickname nickname_1">${usernameToShow}</div>
            <div class="photo_1"><img src="${photo_url ? photo_url : 'avatar-profil.jfif'}" alt="Фото користувача"></div>
            <div class="exit"><button id="changeStyleButton1">ВИЙТИ</button></div>
        </div>
    `;
    isPlayerInfoShown = true;

    const playerRef = ref(db, "player1/player1");
    runTransaction(playerRef, (currentData) => {
        return 1; //  значення на 1
    });
    const playerIUPRef = ref(db, "player1");
    runTransaction(playerIUPRef, (currentData) => {
        currentData.id = id;
        currentData.username = username;
        currentData.photo_url = photo_url;
        currentData.first_name = first_name;
        currentData.last_name = last_name;
        return currentData; 
    });
}

function showPlayerInfo2(id, username, photo_url, first_name, last_name) {
  let usernameToShow = username;
    if (username == null && last_name == null) {
        usernameToShow = `${first_name}`;
    } else if (username == null) {
        usernameToShow = `${first_name} ${last_name}`;
    }
    blockmain_users2.innerHTML = `
        <div class="container">
            <div class="nickname nickname_2">${usernameToShow}</div>
            <div class="photo_2"><img src="${photo_url ? photo_url : 'avatar-profil.jfif'}" alt="Фото користувача"></div>
            <div class="exit"><button id="changeStyleButton2">ВИЙТИ</button></div>
        </div>
    `;
    isPlayerInfoShown2 = true;

    const playerRef = ref(db, "player2/player2");
    runTransaction(playerRef, (currentData) => {
        return 1; //  значення на 1
    });
    const playerIUPRef = ref(db, "player2");
    runTransaction(playerIUPRef, (currentData) => {
        currentData.id = id;
        currentData.username = username;
        currentData.photo_url = photo_url;
        currentData.first_name = first_name;
        currentData.last_name = last_name;
        return currentData; 
    });
}
function showPlayerInfo3(id, username, photo_url, first_name, last_name) {
  let usernameToShow = username;
    if (username == null && last_name == null) {
        usernameToShow = `${first_name}`;
    } else if (username == null) {
        usernameToShow = `${first_name} ${last_name}`;
    }
    blockmain_users3.innerHTML = `
        <div class="container">
            <div class="nickname nickname_3">${usernameToShow}</div>
            <div class="photo_3"><img src="${photo_url ? photo_url : 'avatar-profil.jfif'}" alt="Фото користувача"></div>
            <div class="exit"><button id="changeStyleButton3">ВИЙТИ</button></div>
        </div>
    `;
    isPlayerInfoShown3 = true;

    const playerRef = ref(db, "player3/player3");
    runTransaction(playerRef, (currentData) => {
        return 1; //  значення на 1
    });
    const playerIUPRef = ref(db, "player3");
    runTransaction(playerIUPRef, (currentData) => {
        currentData.id = id;
        currentData.username = username;
        currentData.photo_url = photo_url;
        currentData.first_name = first_name;
        currentData.last_name = last_name;
        return currentData; 
    });
}
function showPlayerInfo4(id, username, photo_url, first_name, last_name) {
  let usernameToShow = username;
    if (username == null && last_name == null) {
        usernameToShow = `${first_name}`;
    } else if (username == null) {
        usernameToShow = `${first_name} ${last_name}`;
    }
    blockmain_users4.innerHTML = `
        <div class="container">
            <div class="nickname nickname_4">${usernameToShow}</div>
            <div class="photo_4"><img src="${photo_url ? photo_url : 'avatar-profil.jfif'}" alt="Фото користувача"></div>
            <div class="exit"><button id="changeStyleButton4">ВИЙТИ</button></div>
        </div>
    `;
    isPlayerInfoShown4 = true;

    const playerRef = ref(db, "player4/player4");
    runTransaction(playerRef, (currentData) => {
        return 1; //  значення на 1
    });
    const playerIUPRef = ref(db, "player4");
    runTransaction(playerIUPRef, (currentData) => {
        currentData.id = id;
        currentData.username = username;
        currentData.photo_url = photo_url;
        currentData.first_name = first_name;
        currentData.last_name = last_name;
        return currentData; 
    });
}
function showInitialView1() {
    blockmain_users1.innerHTML = `
        <button id="changeStyleButton1">Гравець 1</button>
    `;
    isPlayerInfoShown = false;

      const playerRef = ref(db, "player1/player1");
    runTransaction(playerRef, (currentData) => {
        return 0; 
    });
  const playerIUPRef = ref(db, "player1");
    runTransaction(playerIUPRef, (currentData) => {
        currentData.id = "";
        currentData.username = "";
        currentData.photo_url = "";
        currentData.first_name = "";
        currentData.last_name = "";
        return currentData; 
    });
}

function showInitialView2() {
    blockmain_users2.innerHTML = `
      <button id="changeStyleButton2">Гравець 2</button>
    `;
    isPlayerInfoShown2 = false;

    const playerRef = ref(db, "player2/player2");
    runTransaction(playerRef, (currentData) => {
        return 0; 
    });
    const playerIUPRef = ref(db, "player2");
    runTransaction(playerIUPRef, (currentData) => {
        currentData.id = "";
        currentData.username = "";
        currentData.photo_url = "";
        currentData.first_name = "";
        currentData.last_name = "";
        return currentData; 
    });
}
function showInitialView3() {
    blockmain_users3.innerHTML = `
      <button id="changeStyleButton3">Гравець 3</button>
    `;
    isPlayerInfoShown3 = false;

    const playerRef = ref(db, "player3/player3");
    runTransaction(playerRef, (currentData) => {
        return 0; 
    });
    const playerIUPRef = ref(db, "player3");
    runTransaction(playerIUPRef, (currentData) => {
        currentData.id = "";
        currentData.username = "";
        currentData.photo_url = "";
        currentData.first_name = "";
        currentData.last_name = "";
        return currentData; 
    });
}
function showInitialView4() {
    blockmain_users4.innerHTML = `
      <button id="changeStyleButton4">Гравець 4</button>
    `;
    isPlayerInfoShown4 = false;

    const playerRef = ref(db, "player4/player4");
    runTransaction(playerRef, (currentData) => {
        return 0; 
    });
    const playerIUPRef = ref(db, "player4");
    runTransaction(playerIUPRef, (currentData) => {
        currentData.id = "";
        currentData.username = "";
        currentData.photo_url = "";
        currentData.first_name = "";
        currentData.last_name = "";
        return currentData; 
    });
}
// Передаємо дані користувача для вставки
blockmain_users1.addEventListener('click', (event) => {
    if (event.target.matches('#changeStyleButton1')) {
        if (isPlayerInfoShown) {
            showInitialView1();
        } else {
            onValue(usersRef, (snapshot) => {
              const usersData = snapshot.val();
             
            showPlayerInfo1(userData.id, usersData.username, usersData.photo_url, usersData.first_name, usersData.last_name); 
            });
        }
    }
});

blockmain_users2.addEventListener('click', (event) => {
    if (event.target.matches('#changeStyleButton2')) {
        if (isPlayerInfoShown2) {
            showInitialView2();
        } else {
            onValue(usersRef, (snapshot) => {
              const usersData = snapshot.val();
             
            showPlayerInfo2(userData.id, usersData.username, usersData.photo_url, usersData.first_name, usersData.last_name); 
            });
        }
    }
});

blockmain_users3.addEventListener('click', (event) => {
    if (event.target.matches('#changeStyleButton3')) {
        if (isPlayerInfoShown3) {
            showInitialView3();
        } else {
            onValue(usersRef, (snapshot) => {
              const usersData = snapshot.val();
             
            showPlayerInfo3(userData.id, usersData.username, usersData.photo_url, usersData.first_name, usersData.last_name); 
            });
        }
    }
});

blockmain_users4.addEventListener('click', (event) => {
    if (event.target.matches('#changeStyleButton4')) {
        if (isPlayerInfoShown4) {
            showInitialView4();
        } else {
            onValue(usersRef, (snapshot) => {
              const usersData = snapshot.val();
             
            showPlayerInfo4(userData.id, usersData.username, usersData.photo_url, usersData.first_name, usersData.last_name); 
            });
        }
    }
});

// Отримуємо посилання на кнопку "START"
const startButton = document.querySelector('#startButton');

// Додаємо обробник події для натиснення кнопки "START"
startButton.addEventListener('click', () => {
    // Отримуємо дані користувача з бази даних Firebase для "player1"
    const player1Ref = ref(db, "player1");
    get(player1Ref).then((snapshot) => {
            if (snapshot.exists()) {
                const player1Data = snapshot.val();
                const id = player1Data.id;
                const username = player1Data.username;
                const photo_url = player1Data.photo_url;
                // Отримуємо вибраний режим зі списку вибору
                const selectedMode = document.querySelector('select').value;
                // Перенаправляємо користувача на сторінку "1v1.index" з параметрами даних
                let usernameToShow1 = username;
                if (player1Data.username == null && player1Data.last_name == null) {
                    usernameToShow1 = `${player1Data.first_name}`;
                } else if (player1Data.username == null) {
                    usernameToShow1 = `${player1Data.first_name} ${player1Data.last_name}`;
                }
                const queryString1 = `&id_1=${encodeURIComponent(id)}&username_1=${encodeURIComponent(usernameToShow1)}&photo_url_1=${encodeURIComponent(photo_url ? photo_url : 'avatar-profil.jfif')}`;
              
                  const player2Ref = ref(db, "player2");
                  get(player2Ref).then((snapshot) => {
                    if (snapshot.exists()) {
                      const player2Data = snapshot.val();
                      const id = player2Data.id;
                      const username = player2Data.username;
                      const photo_url = player2Data.photo_url;
                      let usernameToShow2 = username;
                        if (player2Data.username == null && player2Data.last_name == null) {
                            usernameToShow2 = `${player2Data.first_name}`;
                        } else if (player2Data.username == null) {
                            usernameToShow2 = `${player2Data.first_name} ${player2Data.last_name}`;
                        }
                      const queryString2 = `&id_2=${encodeURIComponent(id)}&username_2=${encodeURIComponent(usernameToShow2)}&photo_url_2=${encodeURIComponent(photo_url ? photo_url : 'avatar-profil.jfif')}`;

                    window.location.href = `main2v2.html?mode=${encodeURIComponent(selectedMode)}${queryString1}${queryString2}`;
                  
              } 
          });
            } 
        });
});

document.addEventListener("DOMContentLoaded", function () {
    const modeSelect = document.getElementById("modeSelect");

    modeSelect.addEventListener("change", function () {
        const selectedOption = modeSelect.options[modeSelect.selectedIndex].text;
        if (selectedOption === "1v1") {
            window.location.href = `index.html?id=${id}`;
        } else if (selectedOption === "1v1(MMR)") {
            window.location.href = `index-1v1mmr.html?id=${id}`;
        } else if (selectedOption === "2v2") {
            window.location.href = `index-2v2.html?id=${id}`;
        }
    });
});
