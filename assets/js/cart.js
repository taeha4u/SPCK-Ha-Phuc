let cartList = JSON.parse(localStorage.getItem("cart"));

const renderCart = () => {
  let cartItemHTML = "";

  cartList?.forEach((item, index) => {
    cartItemHTML += `
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
        <button class="btn-removeCart btn-addTocart border-gradient" type="button">REMOVE FROM CART</button>
        </div>
    </div>
    </div>
</div>
    `;
  });

  document.getElementById("cart-list").innerHTML = cartItemHTML;

  const gameItemElements = document.querySelectorAll(".game-list-image");

  gameItemElements.forEach(
    (item, idx) =>
      (item.onclick = () => {
        localStorage.setItem("detailID", cartList[idx].id);
        window.location.href = "./detailProduct.html";
      })
  );

  const removeBtns = document.querySelectorAll(".btn-removeCart");

  removeBtns.forEach((item, idx) => {
    item.onclick = () => {
      cartList.splice(idx, 1);
      localStorage.setItem("cart", JSON.stringify(cartList));
      renderCart();
    };
  });
};

renderCart();
