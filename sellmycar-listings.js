// ==========================================
// USED LOCALLY — CAR LISTINGS DATABASE
// ==========================================
const cars = [
  {
    id: 1,
    title: "2023 Suzuki Vitara 1.4T GLX",
    price: 2999000,
    priceLabel: "Great Price",
    priceBadge: "great", // fair | great | good
    year: 2023,
    mileage: 133900,
    transmission: "Manual",
    fuel: "Petrol",
    condition: "Used",
    location: "Nairobi",
    dealerName: "N We Buy Cars – Nairobi",
    rating: 4.6,
    reviews: 88,
    mainImg: "images/sellmycarlisting/vitara/main.jpg",
    photosCount: 18,
    thumbs: [
      "images/sellmycarlisting/vitara/1.jpg",
      "images/sellmycarlisting/vitara/2.jpg",
      "images/sellmycarlisting/vitara/3.jpg"
    ]
  },
  {
    id: 2,
    title: "2020 Ford Ranger 2.0 Bi-Turbo 4x4 Raptor",
    price: 6299000,
    priceLabel: "Fair Price",
    priceBadge: "fair",
    year: 2020,
    mileage: 77000,
    transmission: "Automatic",
    fuel: "Diesel",
    condition: "Used",
    location: "Mombasa",
    dealerName: "N We Buy Cars – Mombasa",
    rating: 4.8,
    reviews: 139,
    mainImg: "images/sellmycarlisting/ranger/main.jpg",
    photosCount: 21,
    thumbs: [
      "images/sellmycarlisting/ranger/1.jpg",
      "images/sellmycarlisting/ranger/2.jpg",
      "images/sellmycarlisting/ranger/3.jpg"
    ]
  },
  {
    id: 3,
    title: "2025 Toyota Starlet 1.5 XS Manual",
    price: 2889990,
    priceLabel: "Great Price",
    priceBadge: "great",
    year: 2025,
    mileage: 9000,
    transmission: "Manual",
    fuel: "Petrol",
    condition: "Used",
    location: "Kisumu",
    dealerName: "N We Buy Cars – Kisumu",
    rating: 4.9,
    reviews: 52,
    mainImg: "images/sellmycarlisting/starlet/main.jpg",
    photosCount: 16,
    thumbs: [
      "images/sellmycarlisting/starlet/1.jpg",
      "images/sellmycarlisting/starlet/2.jpg",
      "images/sellmycarlisting/starlet/3.jpg"
    ]
  },
   {
   id: 4,
            make: "JEEP",
            model: "COMPASS",
            variant: "1.4T GLX",
            title: "2018/8 JEEP COMPASS",
            year: 2018,
            price: 2999000,
            priceLabel: "Great Price",
            priceBadge: "great",
            mileage: 175900,
            transmission: "AUTOMATIC",
            fuel: "Petrol",
            engineSize: 2360,
            condition: "Used",
            location: "Nairobi",
            dealerName: "N We Buy Cars – Nairobi",
            rating: 4.6,
            reviews: 88,
            serviceHistory: "Full Service History",
            owners: "1",
            color: "RED",
            bodyType: "SUV",
            airbags: 2,
            mainImg: "images/sellmycarlisting/jeep/main.jpg",
            photosCount: 8,
            thumbs: [
                "images/sellmycarlisting/jeep/1.jpg",
                "images/sellmycarlisting/jeep/2.jpg",
                "images/sellmycarlisting/jeep/3.jpg",
                "images/sellmycarlisting/jeep/4.jpg",
                "images/sellmycarlisting/jeep/5.jpg",
                "images/sellmycarlisting/jeep/6.jpg",
                "images/sellmycarlisting/jeep/7.jpg",
                "images/sellmycarlisting/jeep/8.jpg",
                "images/sellmycarlisting/jeep/9.jpg",
                "images/sellmycarlisting/jeep/10.jpg",
                "images/sellmycarlisting/jeep/11.jpg",
                "images/sellmycarlisting/jeep/12.jpg",
                "images/sellmycarlisting/jeep/13.jpg",
                "images/sellmycarlisting/jeep/14.jpg",
                "images/sellmycarlisting/jeep/15.jpg"
            ]
        },
        {
            id: 5,
            make: "Honda",
            model: "Vezel",
            variant: "2.0 Bi-Turbo 4x4 Raptor",
            title: "Honda Vezel Hybrid Z",
            year: 2014,
            price: 2990000,
            priceLabel: "Fair Price",
            priceBadge: "fair",
            mileage: 177000,
            transmission: "Automatic",
            fuel: "Petrol",
            engineSize: 1500,
            condition: "Used",
            location: "Mombasa",
            dealerName: "N We Buy Cars – Mombasa",
            rating: 4.8,
            reviews: 139,
            serviceHistory: "Full Service History",
            owners: "Unknown",
            color: "Grey",
            bodyType: "SUV",
            airbags: 6,
            mainImg: "images/sellmycarlisting/vezel/main.jpg",
            photosCount: 22,
            thumbs: [
                "images/sellmycarlisting/vezel/1.jpg",
                "images/sellmycarlisting/vezel/2.jpg",
                "images/sellmycarlisting/vezel/3.jpg",
                "images/sellmycarlisting/vezel/4.jpg",
                "images/sellmycarlisting/vezel/5.jpg",
                "images/sellmycarlisting/vezel/6.jpg",
                "images/sellmycarlisting/vezel/7.jpg",
                "images/sellmycarlisting/vezel/8.jpg",
                "images/sellmycarlisting/vezel/9.jpg",
                "images/sellmycarlisting/vezel/10.jpg",
                "images/sellmycarlisting/vezel/11.jpg",
                "images/sellmycarlisting/vezel/12.jpg",
                "images/sellmycarlisting/vezel/13.jpg",
                "images/sellmycarlisting/vezel/14.jpg",
                "images/sellmycarlisting/vezel/15.jpg",
                "images/sellmycarlisting/vezel/16.jpg",
                "images/sellmycarlisting/vezel/17.jpg",
                "images/sellmycarlisting/vezel/18.jpg",
                "images/sellmycarlisting/vezel/19.jpg",
                "images/sellmycarlisting/vezel/20.jpg",
                "images/sellmycarlisting/vezel/21.jpg",
                "images/sellmycarlisting/vezel/22.jpg"
            ]
        },
        {
            id: 6,
            make: "Jaguar",
            model: "DH1AAt",
            variant: "1.5 XS",
            title: "JAGUAR I PACE",
            year: 2019,
            price: 2600000,
            priceLabel: "Great Price",
            priceBadge: "great",
            mileage: 70000,
            transmission: "Automatic",
            fuel: "Electric",
            engineSize: 1,
            condition: "Used",
            location: "Kisumu",
            dealerName: "N We Buy Cars – Kisumu",
            rating: 4.9,
            reviews: 52,
            serviceHistory: "Full Service History",
            owners: "1",
            color: "Gray",
            bodyType: "Hatchback",
            airbags: 4,
            mainImg: "images/sellmycarlisting/Jaguar/main.jpg",
            photosCount: 6,
            thumbs: [
                "images/sellmycarlisting/Jaguar/1.jpg",
                "images/sellmycarlisting/jaguar/2.jpg",
                "images/sellmycarlisting/jaguar/3.jpg",
                "images/sellmycarlisting/jaguar/4.jpg",
                "images/sellmycarlisting/jaguar/5.jpg",
                "images/sellmycarlisting/jaguar/6.jpg"
            ]
        }
   
];

// SAVE DATA FOR DETAILS PAGE
localStorage.setItem("usedLocalCars", JSON.stringify(cars));


// ==========================================
// DOM REFERENCES
// ==========================================
const listingsContainer = document.getElementById("listingsContainer");
const resultsCountEl = document.getElementById("resultsCount");
const searchCountEl = document.getElementById("searchCount");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const searchBtn = document.getElementById("searchBtn");

let currentCars = [...cars];


// ==========================================
// HELPERS
// ==========================================
function formatPrice(num) {
  const parts = num.toString().split("");
  let result = "";
  let count = 0;
  for (let i = parts.length - 1; i >= 0; i--) {
    result = parts[i] + result;
    count++;
    if (count === 3 && i !== 0) {
      result = " " + result;
      count = 0;
    }
  }
  return "KES " + result;
}


// ==========================================
// RENDER CAR CARDS
// ==========================================
function renderCars(list) {
  listingsContainer.innerHTML = "";

  list.forEach(car => {
    const badgeClass =
      car.priceBadge === "great"
        ? "badge-great"
        : car.priceBadge === "good"
        ? "badge-good"
        : "badge-fair";

    // OUTER CLICKABLE LINK
    const card = document.createElement("a");
    card.href = `usedlocally-details.html?id=${car.id}`;
    card.className = "listing-card";
    card.style.textDecoration = "none";
    card.style.color = "inherit";

    // INNER STRUCTURE (VALID INSIDE <a>)
    const cardInner = document.createElement("div");
    cardInner.className = "card-inner";

    cardInner.innerHTML = `
      <div class="card-media">
        <img src="${car.mainImg}" alt="${car.title}" class="main-img">

        <div class="photo-count">
          <i class="fa-solid fa-camera"></i> ${car.photosCount}
        </div>

        <button class="heart-btn">
          <i class="fa-regular fa-heart"></i>
        </button>
      </div>

      <div class="card-main">
        <div>
          <div class="price-row">
            <div class="price-left">
              <span class="price">${formatPrice(car.price)}</span>
              <span class="price-badge ${badgeClass}">${car.priceLabel}</span>
              <span class="price-note">Price before fees & extras</span>
            </div>
          </div>

          <div class="card-title">${car.title}</div>

          <div class="meta-row">
            <span><i class="fa-regular fa-calendar"></i> ${car.year}</span>
            <span><i class="fa-solid fa-road"></i> ${car.mileage.toLocaleString()} km</span>
            <span><i class="fa-solid fa-gear"></i> ${car.transmission}</span>
            <span><i class="fa-solid fa-gas-pump"></i> ${car.fuel}</span>
          </div>

          <div class="tag-row">
            <span class="tag">${car.condition}</span>
            <span class="tag">${car.transmission}</span>
            <span class="tag">${car.location}</span>
          </div>

          <div class="dealer-row">
            <div>
              <div class="dealer-name">${car.dealerName}</div>
              <div class="dealer-location">${car.location}</div>
            </div>
            <div class="dealer-rating">
              <i class="fa-solid fa-star"></i>
              <span>${car.rating.toFixed(1)} (${car.reviews} reviews)</span>
            </div>
          </div>
        </div>

        <div class="thumb-strip">
          ${car.thumbs
            .map(src => `<img src="${src}" alt="${car.title} thumbnail">`)
            .join("")}
        </div>
      </div>
    `;

    // Append inner wrapper
    card.appendChild(cardInner);

    // Add card to page
    listingsContainer.appendChild(card);
  });

  resultsCountEl.textContent = list.length;
  searchCountEl.textContent = list.length;
}


// ==========================================
// FILTERING + SORTING
// ==========================================
function applyFilters() {
  const query = searchInput.value.toLowerCase().trim();

  let filtered = cars.filter(car =>
    car.title.toLowerCase().includes(query)
  );

  const sortVal = sortSelect.value;

  if (sortVal === "priceAsc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortVal === "priceDesc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortVal === "yearDesc") {
    filtered.sort((a, b) => b.year - a.year);
  } else if (sortVal === "mileageAsc") {
    filtered.sort((a, b) => a.mileage - b.mileage);
  }

  currentCars = filtered;
  renderCars(currentCars);
}


// ==========================================
// EVENT LISTENERS
// ==========================================
searchInput.addEventListener("input", applyFilters);
sortSelect.addEventListener("change", applyFilters);
searchBtn.addEventListener("click", applyFilters);


// ==========================================
// INITIAL RENDER
// ==========================================
renderCars(currentCars);

// ================================
// LISTING PAGE WHATSAPP BUTTONS
// ================================
(function () {

    if (!window.WA_NUMBER) return;

    document.querySelectorAll(".wa-listing-btn").forEach(btn => {

        const title = btn.getAttribute("data-title") || "Vehicle";
        const price = btn.getAttribute("data-price") || "";

        const msg = `Hello, I'm interested in the ${title} ${price}`;
        const encoded = encodeURIComponent(msg);

        btn.href = `https://wa.me/${window.WA_NUMBER}?text=${encoded}`;
    });

})();

