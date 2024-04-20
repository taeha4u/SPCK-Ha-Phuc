import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { db } from "./firebase.js";

const collectionRef = collection(db, "Game");

// Lấy dữ liệu từ Database theo thời gian thực
onSnapshot(collectionRef, (data) => {
    const gameList = [];

    data.docs.forEach((doc) => {
        gameList.push({ ...doc.data(), id: doc.id });
    });

    console.log(gameList)

    //     document.querySelector("#tasks").innerHTML = "";

    //     gameList.forEach((toDo) => {
    //       document.querySelector("#tasks").innerHTML += `
    //           <div class="task">
    //               <span id="taskname">
    //                   ${toDo.name}
    //               </span>
    //               <a class="delete"> Delete </a>
    //           </div>
    //       `;
    //     });

    //     //   Xóa dữ liệu database
    //     document.querySelectorAll(".delete").forEach((btn, index) => {
    //       btn.onclick = () => {
    //         const documentRef = doc(db, "ToDo", gameList[index].id);

    //         deleteDoc(documentRef).then(() => alert("Xóa thành công !"));
    //       };
    //     });
    //   });

    //   // Thêm dữ liệu vào Database
    //   document.querySelector("#addButton").onclick = () => {
    //     const name = document.querySelector("#addTask input").value.trim();
    //     if (name.length === 0) {
    //       alert("Mời nhập tên task");
    //     } else {
    //       addDoc(collectionRef, {
    //         name: name,
    //         isComplete: false,
    //       });
    //     }
    //   };
})