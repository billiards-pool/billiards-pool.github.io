        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
       import { getDatabase, ref, push, set, orderByChild, equalTo, get, runTransaction, child, onValue, update  } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

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

const id = urlParams.get("id");

    
  // Вибірка даних користувача з бази даних
  const userRef = ref(db, `users/${id}`);
  
  // Отримання даних користувача з бази даних
  onValue(userRef, (snapshot) => {
    const userData = snapshot.val();
    if (userData) {
      displayUserData(userData);
    } else {
      console.log("User not found");
    }
  });

  // Функція для виведення даних користувача на екран
  function displayUserData(userData) {
    const userContainer = document.getElementById("user-container");

    const userDiv = document.createElement("div");
    userDiv.classList.add("user-card");

    const photoImg = document.createElement("img");
    photoImg.src = userData.photo_url;
    photoImg.alt = `${userData.first_name} ${userData.last_name}'s Photo`;
    userDiv.appendChild(photoImg);

    const nameHeading = document.createElement("h2");
    nameHeading.textContent = `${userData.first_name} ${userData.last_name}`;
    userDiv.appendChild(nameHeading);

    const usernamePara = document.createElement("p");
    usernamePara.textContent = `Username: ${userData.username}`;
    userDiv.appendChild(usernamePara);

    const editButton = document.createElement("button");
    editButton.textContent = "Редагувати";
    editButton.addEventListener("click", () => openEditModal(userData));
    userDiv.appendChild(editButton);

    userContainer.appendChild(userDiv);
  }

  function openEditModal(userData) {
    const editModal = document.createElement("div");
    editModal.classList.add("edit-modal");

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Ім'я:";
    const nameInput = document.createElement("input");
    nameInput.value = userData.first_name;
    editModal.appendChild(nameLabel);
    editModal.appendChild(nameInput);

    const lastNameLabel = document.createElement("label");
    lastNameLabel.textContent = "Прізвище:";
    const lastNameInput = document.createElement("input");
    lastNameInput.value = userData.last_name;
    editModal.appendChild(lastNameLabel);
    editModal.appendChild(lastNameInput);

    const usernameLabel = document.createElement("label");
    usernameLabel.textContent = "Ім'я користувача:";
    const usernameInput = document.createElement("input");
    usernameInput.value = userData.username;
    editModal.appendChild(usernameLabel);
    editModal.appendChild(usernameInput);

    const photoUrlLabel = document.createElement("label");
    photoUrlLabel.textContent = "URL фото:";
    const photoUrlInput = document.createElement("input");
    photoUrlInput.value = userData.photo_url;
    editModal.appendChild(photoUrlLabel);
    editModal.appendChild(photoUrlInput);

    const saveButton = document.createElement("button");
    saveButton.textContent = "Зберегти";
    saveButton.addEventListener("click", () => saveChanges(userData.id, nameInput.value, lastNameInput.value, usernameInput.value, photoUrlInput.value));
    editModal.appendChild(saveButton);

    document.body.appendChild(editModal);
  }

  function saveChanges(userId, newName, newLastName, newUsername, newPhotoUrl) {
    const userRef = ref(db, `users/${userId}`);
    update(userRef, {
      first_name: newName,
      last_name: newLastName,
      username: newUsername,
      photo_url: newPhotoUrl
    }).then(() => {
      location.reload(); // Оновити сторінку після оновлення даних
    }).catch((error) => {
      console.error("Error updating user data:", error);
    });
  }

  // Add an event listener to the return button
  const returnButton = document.getElementById("return-button");
  returnButton.addEventListener("click", () => {
    window.location.href = "index.html?id=" + id;
  });