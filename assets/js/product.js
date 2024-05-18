import {
  collection,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { db } from "./firebase.js";

const collectionRef = collection(db, "Game");
let cartList = JSON.parse(localStorage.getItem("cart"));

if (!cartList || cartList.length === 0) {
  localStorage.setItem("cart", JSON.stringify([]));
  cartList = [];
}

// Lấy dữ liệu từ Database theo thời gian thực
onSnapshot(collectionRef, (data) => {
  let gameListHTML = "";
  let arrived1HTML = "";
  const gameListElement = document.getElementById("game-list");
  const arrived1Element = document.getElementById("arrived-1");
  const arrived2Element = document.getElementById("arrived-2");
  const arrived3Element = document.getElementById("arrived-3");
  const arrived4Element = document.getElementById("arrived-4");
  const arrived5Element = document.getElementById("arrived-5");
  const gameList = [];

  data.docs.forEach((doc) => {
    gameList.push({ ...doc.data(), id: doc.id });
  });

  // GAME LIST
  gameList.slice(0, 4).map((item, idx) => {
    gameListHTML += `
    <div style="padding: 0 10px" class=" col-lg-3 col-md-4 col-sm-12">
        <div class="card">
        <img src="${item.image}" class="card-img-top game-list-image" alt="" />
        <h1>${item.name}</h1>
        <div class="content-2">
            <div class="price">
            <p class="price-org"><span style="text-decoration: line-through;">200.</span><sup
                style="font-size: 11px; text-decoration: line-through;">61$</sup></p>
            <p class="price-discount">${
              item.price.split(".")[0]
            }.<sup style="font-size: 18px;">${
      item.price.split(".")[1] || "00$"
    }</sup></p>
            </div>
            <div class="action">
            <button class="btn-addTocart border-gradient" type="button">ADD TO CART</button>
            <button class="btn-star border-gradient" type="button">
                <i class="fa-regular fa-star"></i>
            </button>
            </div>
        </div>
        </div>
    </div>
  `;
  });
  gameListElement.innerHTML = gameListHTML;

  const cartElements = document.querySelectorAll(".btn-addTocart");
  const gameItemElements = document.querySelectorAll(".game-list-image");

  gameItemElements.forEach(
    (item, idx) =>
      (item.onclick = () => {
        localStorage.setItem("detailID", gameList[idx].id);
        window.location.href = "./detailProduct.html";
      })
  );

  cartElements.forEach((item, idx) => {
    item.onclick = () => {
      const findExistInCart = cartList.some(
        (item) => item.id === gameList[idx].id
      );

      if (findExistInCart) {
        alert("Game này đã được thêm từ trước!");
      } else {
        cartList.push(gameList[idx]);
        localStorage.setItem("cart", JSON.stringify(cartList));
        alert("Thêm vào giỏ hàng thành công");
      }
      console.log(gameList[idx]);
    };
  });

  // ARRIVED 1
  gameList.slice(4, 6).map((item, idx) => {
    arrived1HTML += `
    <div style="padding: 40px 10px" class="col-lg-6 col-md-6 col-sm-12">
              <div class="card">
                <img
                  src="${item.image}"
                  onclick="window.location.href = './detailProduct.html'"
                  class="card-img-top"
                  alt=""
                />
                <h1>${item.name}</h1>
                <div class="content-2">
                  <div class="price-2">
                    <p class="price-org-2">
                      <span style="text-decoration: line-through">30.</span
                      ><sup
                        style="font-size: 17px; text-decoration: line-through"
                        >51$</sup
                      >
                    </p>
                    <p class="price-discount-2">
                    ${item.price.split(".")[0]}.<sup style="font-size: 51px">${
      item.price.split(".")[1] || "00$"
    }</sup>
                    </p>
                  </div>
                  <div class="action">
                    <button class="btn-addTocart border-gradient" type="button">
                      ADD TO CART
                    </button>
                    <button class="btn-star border-gradient" type="button">
                      <i class="fa-regular fa-star"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
  `;
  });
  arrived1Element.innerHTML = arrived1HTML;

  // ARRIVED 2
  arrived2Element.innerHTML = `<div style="padding: 40px 10px" class="col-lg-6 col-md-6 col-sm-12">
  <div class="card">
    <img
      src="${gameList[3].image}"
      class="card-img-top"
      id="arr-img2"
      alt=""
    />
  </div>
</div>

<div style="padding: 40px 10px" class="col-lg-6 col-md-6 col-sm-12">
  <div class="card">
    <div style="margin-top: auto">
      <h1>${gameList[3].name}</h1>
      <div class="content-2">
        <div class="price-2">
          <p class="price-org-2">
            <span style="text-decoration: line-through">100.</span
            ><sup
              style="font-size: 17px; text-decoration: line-through"
              >51$</sup
            >
          </p>
          <p class="price-discount-2">
          ${gameList[3].price.split(".")[0]}.<sup style="font-size: 51px"> ${
    gameList[3].price.split(".")[1] || "00$"
  }</sup>
          </p>
        </div>
        <div class="action">
          <button
            class="btn-addTocart border-gradient"
            type="button"
          >
            ADD TO CART
          </button>
          <button class="btn-star border-gradient" type="button">
            <i class="fa-regular fa-star"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`;

  document.getElementById("arr-img2").onclick = () => {
    localStorage.setItem("detailID", gameList[3].id);
    window.location.href = "./detailProduct.html";
  };

  // ARRIVED 3
  arrived3Element.innerHTML = `<div style="padding: 40px 10px" class="col-lg-6 col-md-6 col-sm-12">
<div class="card">
  <div style="margin-top: auto">
    <h1>${gameList[7].name}</h1>
    <div class="content-2">
      <div class="price-2">
        <p class="price-org-2">
          <span style="text-decoration: line-through">30.</span
          ><sup
            style="font-size: 17px; text-decoration: line-through"
            >51$</sup
          >
        </p>
        <p class="price-discount-2">
        ${gameList[7].price.split(".")[0]}.<sup style="font-size: 51px"> ${
    gameList[7].price.split(".")[1] || "00$"
  }</sup>
        </p>
      </div>
      <div class="action">
        <button
          class="btn-addTocart border-gradient"
          type="button"
        >
          ADD TO CART
        </button>
        <button class="btn-star border-gradient" type="button">
          <i class="fa-regular fa-star"></i>
        </button>
      </div>
    </div>
  </div>
</div>
</div>

<div style="padding: 40px 10px" class="col-lg-6 col-md-6 col-sm-12">
<div class="card">
  <img
    src="${gameList[7].image}"
    class="card-img-top"
    id="arr-img3"
    alt=""
  />
</div>
</div>`;

  document.getElementById("arr-img3").onclick = () => {
    localStorage.setItem("detailID", gameList[7].id);
    window.location.href = "./detailProduct.html";
  };

  // ARRIVED 4
  arrived4Element.innerHTML = `<div style="padding: 40px 10px" class="col-lg-6 col-md-6 col-sm-12">
 <div class="card">
   <img
     src="${gameList[6].image}"
     class="card-img-top"
     id="arr-img4"
     alt=""
   />
 </div>
</div>

<div style="padding: 40px 10px" class="col-lg-6 col-md-6 col-sm-12">
 <div class="card">
   <div style="margin-top: auto">
     <h1>${gameList[6].name}</h1>
     <div class="content-2">
       <div class="price-2">
         <p class="price-org-2">
           <span style="text-decoration: line-through">100.</span
           ><sup
             style="font-size: 17px; text-decoration: line-through"
             >51$</sup
           >
         </p>
         <p class="price-discount-2">
         ${gameList[6].price.split(".")[0]}.<sup style="font-size: 51px"> ${
    gameList[6].price.split(".")[1] || "00$"
  }</sup>
         </p>
       </div>
       <div class="action">
         <button
           class="btn-addTocart border-gradient"
           type="button"
         >
           ADD TO CART
         </button>
         <button class="btn-star border-gradient" type="button">
           <i class="fa-regular fa-star"></i>
         </button>
       </div>
     </div>
   </div>
 </div>
</div>`;

  document.getElementById("arr-img4").onclick = () => {
    localStorage.setItem("detailID", gameList[6].id);
    window.location.href = "./detailProduct.html";
  };

  // ARRIVED 5
  arrived5Element.innerHTML = `<div style="padding: 40px 10px" class="col-lg-6 col-md-6 col-sm-12">
<div class="card">
  <div style="margin-top: auto">
    <h1>${gameList[2].name}</h1>
    <div class="content-2">
      <div class="price-2">
        <p class="price-org-2">
          <span style="text-decoration: line-through">30.</span
          ><sup
            style="font-size: 17px; text-decoration: line-through"
            >51$</sup
          >
        </p>
        <p class="price-discount-2">
        ${gameList[2].price.split(".")[0]}.<sup style="font-size: 51px"> ${
    gameList[2].price.split(".")[1] || "00$"
  }</sup>
        </p>
      </div>
      <div class="action">
        <button
          class="btn-addTocart border-gradient"
          type="button"
        >
          ADD TO CART
        </button>
        <button class="btn-star border-gradient" type="button">
          <i class="fa-regular fa-star"></i>
        </button>
      </div>
    </div>
  </div>
</div>
</div>

<div style="padding: 40px 10px" class="col-lg-6 col-md-6 col-sm-12">
<div class="card">
  <img
    src="${gameList[2].image}"
    class="card-img-top"
    alt=""
    id="arr-img5"
  />
</div>
</div>`;

  document.getElementById("arr-img5").onclick = () => {
    localStorage.setItem("detailID", gameList[2].id);
    window.location.href = "./detailProduct.html";
  };
});
