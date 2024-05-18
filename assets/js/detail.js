import {
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { db } from "./firebase.js";

// Lấy ra game doc theo id đã lưu vào local storage
const questionDocRef = doc(db, "Game", localStorage?.getItem("detailID"));

// Lấy ra chi tiết game
const snapDoc = await getDoc(questionDocRef);
const dataDetail = snapDoc.data();
console.log("🚀 ~ dataDetail:", dataDetail);

// hàm để format lại thời gian của firebase
const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

// Lấy các element để gắn thông tin vào
const gameVideoElement = document.getElementById("game-video");
const gameNameElement = document.getElementById("product-name");
const gameImageElement = document.getElementById("product-image");
const gamePriceElement = document.getElementById("price-discount");
const gamePlatformElement = document.getElementById("platform");
const gameLocationElement = document.getElementById("location");
const gameDescElement = document.getElementById("game-desc");
const gameMinimumOSElement = document.getElementById("minimum-os");
const gameMinimumProcessorElement =
  document.getElementById("minimum-processor");
const gameMinimumGraphicElement = document.getElementById("minimum-graphic");
const gameRecOSElement = document.getElementById("rec-os");
const gameRecProElement = document.getElementById("rec-processor");
const gameRecGrapElement = document.getElementById("rec-graphic");
const gameReleaseElement = document.getElementById("release-date");
const gameGenreElement = document.getElementById("genres");
const gamePublicElement = document.getElementById("public");

// gán thông tin từ data đã lấy được
gameVideoElement.innerHTML = `<iframe
    src="${dataDetail.video}"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    ></iframe>
`;

gameNameElement.innerHTML = dataDetail.name;

gameImageElement.innerHTML = `
    <img
    src="${dataDetail.image}"
    alt="product-image"
    />
`;

gamePriceElement.innerHTML = `
    ${dataDetail.price.split(".")[0]}.<sup style="font-size: 18px">${
  dataDetail.price.split(".")[1] || "00$"
}</sup>
`;

gamePlatformElement.innerHTML = dataDetail.platform;

gameLocationElement.innerHTML = dataDetail.location;

gameDescElement.innerHTML = dataDetail.description;

gameMinimumOSElement.innerHTML =
  dataDetail.systemRequire.minimum?.OS || "Coming soon";

gameMinimumProcessorElement.innerHTML =
  dataDetail.systemRequire.minimum?.Processor || "Coming soon";

gameMinimumGraphicElement.innerHTML =
  dataDetail.systemRequire.minimum?.Graphics || "Coming soon";

gameRecOSElement.innerHTML =
  dataDetail.systemRequire.recommended?.OS || "Coming soon";

gameRecProElement.innerHTML =
  dataDetail.systemRequire.recommended?.Processor || "Coming soon";

gameRecGrapElement.innerHTML =
  dataDetail.systemRequire.recommended?.Graphics || "Coming soon";

gameReleaseElement.innerHTML = formatDate(dataDetail.timeRelease.toDate());

gameGenreElement.innerHTML = dataDetail.genres;

gamePublicElement.innerHTML = dataDetail.developers;
