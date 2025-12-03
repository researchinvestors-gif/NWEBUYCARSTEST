/********************************************
 * USED LOCALLY — FULL AUTOTRADER-STYLE PAGE
 ********************************************/

// 1. Get ID from URL
const params = new URLSearchParams(window.location.search);
const carId = Number(params.get("id"));

// 2. Seed fallback database if missing
if (!localStorage.getItem("usedLocalCars")) {
    const fallbackCars = [
        {
            id: 1,
            make: "Suzuki",
            model: "Vitara",
            variant: "1.4T GLX",
            title: "Suzuki Vitara 1.4T GLX",
            year: 2023,
            price: 2999000,
            priceLabel: "Great Price",
            priceBadge: "great",
            mileage: 133900,
            transmission: "Manual",
            fuel: "Petrol",
            engineSize: 1400,
            condition: "Used",
            location: "Nairobi",
            dealerName: "N We Buy Cars – Nairobi",
            rating: 4.6,
            reviews: 88,
            serviceHistory: "Full Service History",
            owners: "1",
            color: "White",
            bodyType: "SUV",
            airbags: 2,
            mainImg: "images/sellmycarlisting/vitara/main.jpg",
            photosCount: 8,
            thumbs: [
                "images/sellmycarlisting/vitara/1.jpg",
                "images/sellmycarlisting/vitara/2.jpg",
                "images/sellmycarlisting/vitara/3.jpg",
                "images/sellmycarlisting/vitara/4.jpg",
                "images/sellmycarlisting/vitara/5.jpg",
                "images/sellmycarlisting/vitara/6.jpg",
                "images/sellmycarlisting/vitara/7.jpg",
                "images/sellmycarlisting/vitara/8.jpg"
            ]
        },
        {
            id: 2,
            make: "Ford",
            model: "Ranger",
            variant: "2.0 Bi-Turbo 4x4 Raptor",
            title: "Ford Ranger 2.0 Bi-Turbo 4x4 Raptor",
            year: 2020,
            price: 6299000,
            priceLabel: "Fair Price",
            priceBadge: "fair",
            mileage: 77000,
            transmission: "Automatic",
            fuel: "Diesel",
            engineSize: 2000,
            condition: "Used",
            location: "Mombasa",
            dealerName: "N We Buy Cars – Mombasa",
            rating: 4.8,
            reviews: 139,
            serviceHistory: "Full Service History",
            owners: "Unknown",
            color: "Grey",
            bodyType: "Double cab",
            airbags: 6,
            mainImg: "images/sellmycarlisting/ranger/main.jpg",
            photosCount: 8,
            thumbs: [
                "images/sellmycarlisting/ranger/1.jpg",
                "images/sellmycarlisting/ranger/2.jpg",
                "images/sellmycarlisting/ranger/3.jpg",
                "images/sellmycarlisting/ranger/4.jpg",
                "images/sellmycarlisting/ranger/5.jpg",
                "images/sellmycarlisting/ranger/6.jpg",
                "images/sellmycarlisting/ranger/7.jpg",
                "images/sellmycarlisting/ranger/8.jpg"
            ]
        },
        {
            id: 3,
            make: "Toyota",
            model: "Starlet",
            variant: "1.5 XS",
            title: "Toyota Starlet 1.5 XS Manual",
            year: 2025,
            price: 2889990,
            priceLabel: "Great Price",
            priceBadge: "great",
            mileage: 9000,
            transmission: "Manual",
            fuel: "Petrol",
            engineSize: 1500,
            condition: "Used",
            location: "Kisumu",
            dealerName: "N We Buy Cars – Kisumu",
            rating: 4.9,
            reviews: 52,
            serviceHistory: "Full Service History",
            owners: "1",
            color: "Silver",
            bodyType: "Hatchback",
            airbags: 4,
            mainImg: "images/sellmycarlisting/starlet/main.jpg",
            photosCount: 6,
            thumbs: [
                "images/sellmycarlisting/starlet/1.jpg",
                "images/sellmycarlisting/starlet/2.jpg",
                "images/sellmycarlisting/starlet/3.jpg",
                "images/sellmycarlisting/starlet/4.jpg",
                "images/sellmycarlisting/starlet/5.jpg",
                "images/sellmycarlisting/starlet/6.jpg"
            ]
        },
        {
            id: 4,
            make: "JEEP",
            model: "COMPASS",
            variant: "1.4T GLX",
            title: "2018/8 JEEP COMPASS",
            year: 2018,
            price: 1759000,
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
                "images/sellmycarlisting/Jaguar/2.jpg",
                "images/sellmycarlisting/Jaguar/3.jpg",
                "images/sellmycarlisting/Jaguar/4.jpg",
                "images/sellmycarlisting/Jaguar/5.jpg",
                "images/sellmycarlisting/Jaguar/6.jpg"
            ]
        }
   
    ];

    localStorage.setItem("usedLocalCars", JSON.stringify(fallbackCars));
}

// 3. Load cars & find this car
const cars = JSON.parse(localStorage.getItem("usedLocalCars")) || [];
const car = cars.find(c => c.id === carId);

if (!car) {
    document.body.innerHTML = `
      <div style="padding:40px; text-align:center; font-size:28px; font-weight:bold;">
        Vehicle Not Found
      </div>`;
    throw new Error("Car not found. ID = " + carId);
}

// Helper: price formatting with spaces
function formatPrice(num) {
    const s = String(num);
    let out = "";
    let count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        out = s[i] + out;
        count++;
        if (count === 3 && i !== 0) {
            out = " " + out;
            count = 0;
        }
    }
    return out;
}

/********************************************
 * BASIC TEXT FIELDS
 ********************************************/
document.getElementById("carTitle").textContent =
    `${car.year} ${car.title}`;

document.getElementById("carSubtitle").textContent =
    `${car.mileage.toLocaleString()} km · ${car.transmission} · ${car.fuel}`;

document.getElementById("specCondition").textContent = car.condition;
document.getElementById("specYear").textContent = car.year;
document.getElementById("specMileage").textContent = car.mileage.toLocaleString();
document.getElementById("specTransmission").textContent = car.transmission;
document.getElementById("specFuel").textContent = car.fuel;

document.getElementById("updatedDate").textContent = "28 Nov 2025";
document.getElementById("owners").textContent = car.owners || "Unknown";
document.getElementById("serviceHistory").textContent =
    car.serviceHistory || "Full Service History";
document.getElementById("colour").textContent = car.color || "Unknown";
document.getElementById("bodyType").textContent = car.bodyType || "-";

/********************************************
 * HERO GALLERY
 ********************************************/
const mainImageEl = document.getElementById("mainImage");
mainImageEl.src = car.mainImg;

document.getElementById("heroPhotoCount").textContent =
    `${car.photosCount || car.thumbs.length} photos`;

const heroThumbs = document.getElementById("heroThumbs");
const galleryGrid = document.getElementById("galleryGrid");

car.thumbs.forEach((src, index) => {
    // Hero thumbs (first 4)
    if (index < 4) {
        const img = document.createElement("img");
        img.src = src;
        img.alt = car.title + " thumbnail";
        img.addEventListener("click", () => {
            mainImageEl.src = src;
        });
        heroThumbs.appendChild(img);
    }

    // Gallery grid (all)
    const gImg = document.createElement("img");
    gImg.src = src;
    gImg.alt = car.title + " gallery";
    galleryGrid.appendChild(gImg);
});

/********************************************
 * PRICES (hero, mid box, bottom pricing)
 ********************************************/
const formattedPrice = formatPrice(car.price);

document.getElementById("heroPrice").textContent = formattedPrice;
document.getElementById("carPriceDisplay").textContent = "KES " + formattedPrice;
document.getElementById("pricingPrice").textContent = formattedPrice;

// hero price badge text
if (car.priceLabel) {
    document.getElementById("heroPriceBadge").textContent = car.priceLabel;
}

/********************************************
 * VEHICLE HIGHLIGHT PILLS
 ********************************************/
const highlightPills = document.getElementById("highlightPills");
const highlightTexts = [
    car.mileage < 100000 ? "Low mileage" : "Well maintained",
    car.serviceHistory || "Full Service History",
    car.transmission,
    car.fuel,
    car.location
];

highlightTexts.forEach(text => {
    const span = document.createElement("span");
    span.className = "highlight-pill";
    span.textContent = text;
    highlightPills.appendChild(span);
});

/********************************************
 * TOP HIGHLIGHT BARS
 ********************************************/
function generateHighlights() {
    // Fuel
    let fuelConsumption = "-";
    if (car.engineSize) {
        if (car.engineSize <= 1300) fuelConsumption = "Very Efficient";
        else if (car.engineSize <= 1800) fuelConsumption = "Efficient";
        else if (car.engineSize <= 2500) fuelConsumption = "Average";
        else fuelConsumption = "High use";
    }
    document.getElementById("fuelConsumptionValue").textContent = fuelConsumption;

    // Performance
    let performance = "-";
    if (car.engineSize) {
        performance = car.engineSize + "cc";
        if (car.transmission === "Automatic") performance += " • Smooth";
        else performance += " • Responsive";
    }
    document.getElementById("performanceScore").textContent = performance;

    // Reliability
    let reliability = "Good";
    if (car.serviceHistory &&
        car.serviceHistory.toLowerCase().includes("full")) {
        reliability = "Excellent";
    }
    if (new Date().getFullYear() - Number(car.year) > 10) {
        reliability = "Average";
    }
    document.getElementById("reliabilityScore").textContent = reliability;

    // Safety
    let safety = "Standard";
    if (car.airbags >= 6) safety = "High";
    else if (car.airbags >= 4) safety = "Good";
    document.getElementById("safetyScore").textContent = safety;
}
generateHighlights();

/********************************************
 * PRICE RATING BAR (Great / Fair / High)
 ********************************************/
function generatePriceRating() {
    const price = car.price;
    const displayPrice = formatPrice(price);

    // main price already set; just rating calc
    let marketPrice;
    const age = new Date().getFullYear() - Number(car.year || new Date().getFullYear());

    // simple estimate
    marketPrice =
        price +
        (car.mileage > 150000 ? -50000 : 0) +
        (age > 8 ? -70000 : 0) +
        (car.condition === "Excellent" ? 30000 : 0);

    if (!marketPrice || marketPrice <= 0) {
        marketPrice = price;
    }

    const difference = marketPrice - price;
    const absDiff = formatPrice(Math.abs(difference));

    const badge = document.getElementById("priceBadge");
    const comparison = document.getElementById("priceComparison");
    const fill = document.getElementById("priceFill");

    if (difference > 20000) {
        // price is below market -> Great Price
        badge.style.background = "#27ae60";
        badge.textContent = "GREAT PRICE";
        comparison.textContent = `KES ${absDiff} below market average`;
        fill.style.width = "85%";
        fill.style.background = "#27ae60";
    } else if (difference > -20000) {
        // near
        badge.style.background = "#f1c40f";
        badge.textContent = "FAIR PRICE";
        comparison.textContent = `KES ${absDiff} near market value`;
        fill.style.width = "50%";
        fill.style.background = "#f1c40f";
    } else {
        // above market
        badge.style.background = "#e74c3c";
        badge.textContent = "HIGH PRICE";
        comparison.textContent = `KES ${absDiff} above market average`;
        fill.style.width = "25%";
        fill.style.background = "#e74c3c";
    }
}
generatePriceRating();

/********************************************
 * CONTACT SELLER INFO
 ********************************************/
document.getElementById("sellerName").textContent = car.dealerName;
document.getElementById("sellerLocation").textContent = car.location;

const ratingText = document.getElementById("sellerRatingText");
ratingText.textContent = `${car.rating.toFixed(1)} stars • ${car.reviews} reviews`;

const msg = document.getElementById("messageText");
if (msg) {
    msg.value = `I would like to check the availability of the ${car.year} ${car.title}.`;
}

/********************************************
 * FOOTER YEAR
 ********************************************/
const footerYearEl = document.getElementById("footerYear");
if (footerYearEl) {
    footerYearEl.textContent = new Date().getFullYear();
}

/********************************************
 * SPEC PANEL OPEN / CLOSE
 ********************************************/
const openBtn = document.getElementById("openSpecsBtn");
const closeBtn = document.getElementById("closeSpecsBtn");
const overlay = document.getElementById("specOverlay");
const panel = document.getElementById("specPanel");

openBtn.addEventListener("click", () => {
    overlay.style.display = "block";
    panel.classList.add("open");
});

function closePanel() {
    overlay.style.display = "none";
    panel.classList.remove("open");
}

closeBtn.addEventListener("click", closePanel);
overlay.addEventListener("click", closePanel);

/********************************************
 * SPEC PANEL ACCORDION
 ********************************************/
document.querySelectorAll(".spec-category").forEach(category => {
    const header = category.querySelector(".cat-header");
    const body = category.querySelector(".cat-body");

    header.addEventListener("click", () => {
        header.classList.toggle("open");
        body.classList.toggle("open");
    });
});

/********************************************
 * POPULATE SPEC FIELDS
 ********************************************/
document.getElementById("specMake").textContent = car.make || "Unknown";
document.getElementById("specModel").textContent = car.model || car.title;
document.getElementById("specVariant").textContent = car.variant || "-";
document.getElementById("specYear2").textContent = car.year;

document.getElementById("specFuel2").textContent = car.fuel;
document.getElementById("specTrans2").textContent = car.transmission;
document.getElementById("specEngineSize").textContent = car.engineSize ? car.engineSize + " cc" : "-";
document.getElementById("specAirbags").textContent =
    typeof car.airbags === "number" ? String(car.airbags) : "-";
    
// ================================
// WHATSAPP & CALL BUTTONS — USED LOCALLY
// ================================
(function () {

    if (!window.WA_NUMBER || !window.CALL_NUMBER) return;

    const waBtn = document.querySelector(".wa-enquire");
    const callBtn = document.querySelector(".call-seller");
    const floatingWA = document.querySelector(".floating-wa");

    const message = `Hi, I'm interested in the ${car.year} ${car.title} priced at KES ${car.price.toLocaleString()}.`;
    const encoded = encodeURIComponent(message);

    // Main WhatsApp button
    if (waBtn) {
        waBtn.href = `https://wa.me/${window.WA_NUMBER}?text=${encoded}`;
    }

    // Floating WhatsApp
    if (floatingWA) {
        floatingWA.href = `https://wa.me/${window.WA_NUMBER}?text=${encoded}`;
    }

    // Call seller button
    if (callBtn) {
        callBtn.href = `tel:${window.CALL_NUMBER}`;
    }

})();
