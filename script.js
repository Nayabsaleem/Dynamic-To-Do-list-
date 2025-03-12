import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js"; 
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDoXgdpRHl-ZB5YTuB9fJcXTtJh8xW_Rqs",
    authDomain: "to-do-list-49a4d.firebaseapp.com",
    databaseURL: "https://to-do-list-49a4d-default-rtdb.firebaseio.com",
    projectId: "to-do-list-49a4d",
    storageBucket: "to-do-list-49a4d.firebasestorage.app",
    messagingSenderId: "813154481659",
    appId: "1:813154481659:web:8f3bc5ed8f1ac3a139475e",
    measurementId: "G-NJW0Q4K485"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
const analytics = getAnalytics(app);
 const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
    window.addTask = () => { 
            let task = taskInput.value.trim();
                 if (task) push(ref(db, "tasks"), task); 
                     taskInput.value = "";
     };
     onValue(ref(db, "tasks"),
  (snapshot) => {     taskList.innerHTML = "";
 let tasks = snapshot.val();    
      if (!tasks) return;     
  let keys = Object.keys(tasks);    
  for (let i = 0; i < keys.length; i++) {    
         let key = keys[i];         
    let li = document.createElement("li"); 
    let btn = document.createElement('button');
    li.textContent = tasks[key];
    btn.textContent= "Delete";
    btn.onclick = () => remove(ref(db , 'task/' + key));
    
    li.appendChild(btn);
    taskList.appendChild(li);
  }
  });


