// cars.js
// Master database for all vehicles + helper to render cards

const carsDB = {
  "toyota landcruiser 100-Series": {
    id: "toyota landcruiser 100-Series",
    make: "Toyota",
    model: "RLandcruiser",
    title: "2004 Toyota landcruiser LC100-Series",
    priceKES: 3899000,
    fuel: "Petrol",
    cc: 4200,
    transmission: "Automatic",
    condition: "Kenyan Used",
    seller: "Private Seller",
    stockLocation: "Available in Kenya",
    category: "suv",
    year: 2004,
    mileageKm: 202000,
    color: "Silver",
    bodyType: "SUV",
    drivetrain: "4X4",
    engine: "V8 Petrol engine",
    images: [
      "images/toyota landcruiser 100-Series/1.jpg",
      "images/toyota landcruiser 100-Series/2.jpg",
      "images/toyota landcruiser 100-Series/3.jpg",
      "images/toyota landcruiser 100-Series/4.jpg",
      "images/toyota landcruiser 100-Series/5.jpg",
      "images/toyota landcruiser 100-Series/6.jpg",
      "images/toyota landcruiser 100-Series/7.jpg",
      "images/toyota landcruiser 100-Series/8.jpg",
      "images/toyota landcruiser 100-Series/9.jpg"
    ],
    features: [
      "Hybrid powertrain",
      "AWD",
      "Reverse camera",
      "Apple CarPlay / Android Auto"
    ],
    description: "Well-maintained Toyota Landcruiser 100- with excellent fuel economy and all-wheel drive confidence."
  },

  "Toyota Landcruiser Prado J150": {
    id: "Toyota Landcruiser Prado J150",
    make: "Toyota",
    model: "Landcruiser",
    title: "Toyota Landcruiser Prado J150",
    priceKES: 5650000,
    fuel: "Diesel",
    cc: 3000,
    transmission: "Automatic",
    condition: "Kenyan Used",
    seller: "Private Seller",
    stockLocation: "Available in Kenya",
    category: "suv",
    year: 2015,
    mileageKm: 156000,
    color: "Black",
    bodyType: "SUV",
    drivetrain: "4x4",
    engine: "D4D",
    images: [
      "images/Toyota Landcruiser Prado J150/1.jpg",
      "images/Toyota Landcruiser Prado J150/2.jpg",
      "images/Toyota Landcruiser Prado J150/3.jpg",
      "images/Toyota Landcruiser Prado J150/4.jpg",
      "images/Toyota Landcruiser Prado J150/5.jpg",
      "images/Toyota Landcruiser Prado J150/6.jpg",
      "images/Toyota Landcruiser Prado J150/7.jpg",
      "images/Toyota Landcruiser Prado J150/8.jpg",
      "images/Toyota Landcruiser Prado J150/9.jpg"
    ],
    features: [
      "Titanium trim",
      "Alloy wheels",
      "Touchscreen infotainment"
    ],
    description: "Compact urban SUV with high seating position and great running costs."
  },

  "mercedes-e250-2019-avantgarde": {
    id: "mercedes-e250-2019-avantgarde",
    make: "Mercedes-Benz",
    model: "E250",
    title: "2019 Mercedes-Benz E250 Avantgarde",
    priceKES: 6550000,
    fuel: "Petrol",
    cc: 2000,
    transmission: "Automatic",
    condition: "Kenyan Used",
    seller: "N We Buy Cars",
    stockLocation: "Available in Kenya",
    category: "luxury",
    year: 2019,
    mileageKm: 51000,
    color: "Silver",
    bodyType: "Sedan",
    drivetrain: "RWD",
    engine: "2.0L Turbo",
    images: [
      "images/featured3.png"
    ],
    features: [
      "Leather interior",
      "LED headlights",
      "Parking sensors",
      "Multifunction steering wheel"
    ],
    description: "Executive luxury sedan with smooth power delivery and premium comfort."
  },

  "honda-fit-2017-hybrid": {
    id: "honda-fit-2017-hybrid",
    make: "Honda",
    model: "Fit",
    title: "2017 Honda Fit Hybrid",
    priceKES: 1450000,
    fuel: "Petrol",
    cc: 1300,
    transmission: "Automatic",
    condition: "Kenyan Used",
    seller: "Private Seller",
    stockLocation: "Available in Kenya",
    category: "suv",
    year: 2017,
    mileageKm: 65000,
    color: "Silver",
    bodyType: "Hatchback",
    drivetrain: "FWD",
    engine: "1.3L Hybrid",
    images: [
      "images/featured4.png"
    ],
    features: [
      "Hybrid system",
      "Keyless entry",
      "Econ mode"
    ],
    description: "Reliable city hatchback with hybrid economy and flexible rear seating."
  },

  "isuzu-dmax-2020-doublecab": {
    id: "isuzu-dmax-2020-doublecab",
    make: "Isuzu",
    model: "D-Max",
    title: "2020 Isuzu D-Max Double Cab",
    priceKES: 5150000,
    fuel: "Diesel",
    cc: 3000,
    transmission: "Manual",
    condition: "Kenyan Used",
    seller: "N We Buy Cars",
    stockLocation: "Available in Kenya",
    category: "commercial",
    year: 2020,
    mileageKm: 74000,
    color: "White",
    bodyType: "Pickup",
    drivetrain: "4x4",
    engine: "3.0L Diesel",
    images: [
      "images/news2.png"
    ],
    features: [
      "4x4",
      "Tow bar",
      "Rubberised load bin"
    ],
    description: "Strong and durable workhorse ideal for both commercial and lifestyle use."
  },

  "renault-triber-2021-expression": {
    id: "renault-triber-2021-expression",
    make: "Renault",
    model: "Triber",
    title: "2021 Renault Triber 1.0 Expression",
    priceKES: 1650000,
    fuel: "Petrol",
    cc: 1000,
    transmission: "Manual",
    condition: "Kenyan Used",
    seller: "Private Seller",
    stockLocation: "Available in Kenya",
    category: "suv",
    year: 2021,
    mileageKm: 28000,
    color: "Gold",
    bodyType: "MPV",
    drivetrain: "FWD",
    engine: "1.0L",
    images: [
      "images/news3.png"
    ],
    features: [
      "7-seater",
      "Roof rails",
      "Touchscreen audio"
    ],
    description: "Practical 7-seater MPV with low running costs – perfect for family duties."
  },

  "mazda-cx30-2022-skyactivd": {
    id: "mazda-cx30-2022-skyactivd",
    make: "Mazda",
    model: "CX-30",
    title: "2022 Mazda CX-30 SkyActiv-D",
    priceKES: 3850000,
    fuel: "Diesel",
    cc: 2000,
    transmission: "Automatic",
    condition: "Direct Import",
    seller: "N We Buy Cars",
    stockLocation: "Direct Import",
    category: "suv",
    year: 2022,
    mileageKm: 15000,
    color: "Red",
    bodyType: "Crossover",
    drivetrain: "FWD",
    engine: "2.0L Diesel",
    images: [
      "images/review2.png"
    ],
    features: [
      "SkyActiv-D engine",
      "Heads-up display",
      "Adaptive cruise control"
    ],
    description: "Stylish crossover with premium interior and efficient diesel engine."
  },

  "2018 Range Rover Vogue SDV8": {
    id: "2018 Range Rover Vogue SDV8",
    make: "Land Rover",
    model: "Range Rover Vogue SDV8",
    title: "2018 Range Rover Vogue SDV8",
    priceKES: 19850000,
    fuel: "Diesel",
    cc: 4400,
    transmission: "8-Speed Automatic",
    condition: "Kenyan Used",
    seller: "N We Buy Cars",
    stockLocation: "Available in Kenya",
    category: "luxury",
    year: 2018,
    mileageKm: 80000,
    color: "Black",
    bodyType: "SUV",
    drivetrain: "RWD Full-time 4WD (Terrain Response 2) 0–100 km/h: ~ 6.9 seconds",
    engine: "4400",
    images: [
      "images/2018 Range Rover Vogue SDV8/1.jpg",
      "images/2018 Range Rover Vogue SDV8/2.jpg",
      "images/2018 Range Rover Vogue SDV8/3.jpg",
      "images/2018 Range Rover Vogue SDV8/4.jpg",
      "images/2018 Range Rover Vogue SDV8/5.jpg",
      "images/2018 Range Rover Vogue SDV8/6.jpg",
      "images/2018 Range Rover Vogue SDV8/7.jpg",
      "images/2018 Range Rover Vogue SDV8/8.jpg"
    ],
    features: [
      "Full luxury leather interior",
      "Heated and cooled seats (front & rear depending on spec)",
      "Electric adjustable seats with memory function",
      "Dual-zone or Four-zone climate control",
      "Ambient interior lighting",
      "Soft-close doors",
      "Panoramic roof (most units have fixed or sliding)",
      "Touch Pro Duo dual-screen infotainment",
      "Blind spot monitoring",
      "Lane departure warning",
      "Autonomous emergency braking",
      "Parking sensors (front & rear)",
      "Air suspension (auto height adjust)",
      "Hill descent control",
      "Meridian premium audio system",
      "Digital driver display",
      "Navigation, Bluetooth, Wi-Fi hotspot",
      "360-degree parking camera",
      "Adaptive cruise control",
      "Keyless entry + push start"
    ],
    description: "The 2018 Range Rover Vogue SDV8 is a premium full-size luxury SUV powered by a strong 4.4L V8 twin-turbo diesel engine. It offers exceptional comfort, advanced technology, air suspension, panoramic roof, dual-screen infotainment, and unmatched off-road capability. A perfect blend of power, luxury, and refinement."
  },

  "isuzu-mux-2023-30d-ls-4x4": {
    id: "isuzu-mux-2023-30d-ls-4x4",
    make: "Isuzu",
    model: "mu-X",
    title: "2023 Isuzu mu-X 3.0D LS 4x4",
    priceKES: 6100000,
    fuel: "Diesel",
    cc: 3000,
    transmission: "Automatic",
    condition: "Kenyan Used",
    seller: "Private Seller",
    stockLocation: "Available in Kenya",
    category: "bakkie",
    year: 2023,
    mileageKm: 21000,
    color: "Grey",
    bodyType: "SUV",
    drivetrain: "4x4",
    engine: "3.0L Diesel",
    images: [
      "images/review4.png"
    ],
    features: [
      "7-seater",
      "4x4",
      "Rear air-conditioning"
    ],
    description: "Spacious 7-seater SUV with serious off-road ability and strong diesel torque."
  },

  "ford-transit-2021-custom-sport": {
    id: "ford-transit-2021-custom-sport",
    make: "Ford",
    model: "Transit",
    title: "2021 Ford Transit Custom Sport",
    priceKES: 4250000,
    fuel: "Petrol",
    cc: 2000,
    transmission: "Manual",
    condition: "Direct Import",
    seller: "Private Seller",
    stockLocation: "Direct Import",
    category: "commercial",
    year: 2021,
    mileageKm: 52000,
    color: "White",
    bodyType: "Van",
    drivetrain: "FWD",
    engine: "2.0L",
    images: [
      "images/review1.png"
    ],
    features: [
      "Sport body kit",
      "Dual sliding doors",
      "Reverse camera"
    ],
    description: "Practical and stylish Transit Custom Sport van, ideal for business or lifestyle use."
  },

  "bmw-x5-2021-30d-msport": {
    id: "bmw-x5-2021-30d-msport",
    make: "BMW",
    model: "X5",
    title: "2021 BMW X5 3.0d xDrive M-Sport",
    priceKES: 8450000,
    fuel: "Diesel",
    cc: 3000,
    transmission: "Automatic",
    condition: "Direct Import",
    seller: "N We Buy Cars",
    stockLocation: "Direct Import",
    category: "luxury",
    year: 2021,
    mileageKm: 33000,
    color: "Black",
    bodyType: "SUV",
    drivetrain: "xDrive",
    engine: "3.0L Diesel",
    images: [
      "images/review2.png"
    ],
    features: [
      "M-Sport package",
      "Panoramic sunroof",
      "Adaptive suspension"
    ],
    description: "Premium luxury SUV with impressive performance and top-end comfort features."
  },

  "toyota-rav4-2022-20-awd": {
    id: "toyota-rav4-2022-20-awd",
    make: "Toyota",
    model: "RAV4",
    title: "2022 Toyota RAV4 2.0 AWD",
    priceKES: 4000000,
    fuel: "Petrol",
    cc: 2000,
    transmission: "Automatic",
    condition: "Kenyan Used",
    seller: "Private Seller",
    stockLocation: "Available in Kenya",
    category: "suv",
    year: 2022,
    mileageKm: 26000,
    color: "Silver",
    bodyType: "SUV",
    drivetrain: "AWD",
    engine: "2.0L",
    images: [
  "images/Rav4 2022.png",
  "images/toyota-rav4-2022/1.jpg",
  "images/toyota-rav4-2022/2.jpg",
  "images/toyota-rav4-2022/3.jpg",
  "images/toyota-rav4-2022/4.jpg",
  "images/toyota-rav4-2022/5.jpg",
  "images/toyota-rav4-2022/6.jpg",
  "images/toyota-rav4-2022/7.jpg",
  "images/toyota-rav4-2022/8.jpg",
  "images/toyota-rav4-2022/9.jpg",
  "images/toyota-rav4-2022/10.jpg",
  "images/toyota-rav4-2022/11.jpg",
  "images/toyota-rav4-2022/12.jpg"
],

    features: [
      "AWD",
      "LED headlights",
      "Smart entry & start"
    ],
    description: "Latest-shape Rav4 with all-wheel drive – perfect for Kenyan roads and family trips."
  }
};

// expose globally
window.carsDB = carsDB;

// helper to format prices
function formatKES(value) {
  const num = Number(value || 0);
  return "KES " + num.toLocaleString("en-KE");
}

// helper to generate one card for Buy a Car grid
function generateCarCard(car) {
  const image = (car.images && car.images[0]) || "images/placeholder-car.jpg";
  const fuelClass = car.fuel.toLowerCase() === "diesel" ? "badge diesel" : "badge petrol";

  return `
    <a href="vehicle-details.html?id=${encodeURIComponent(car.id)}" class="car-card-link">
      <article class="vehicle-card">
        <div class="vehicle-image">
          <img src="${image}" alt="${car.title}">
        </div>
        <div class="vehicle-body">
          <h3 class="vehicle-title">${car.title}</h3>
          <div class="chip-row">
            <span class="chip"><i class="fa-solid fa-gear"></i> ${car.transmission}</span>
            <span class="chip"><i class="fa-solid fa-gauge-high"></i> ${car.cc} CC</span>
            <span class="chip"><i class="fa-solid fa-location-dot"></i> ${car.stockLocation}</span>
          </div>
          <div class="line">
            <span class="${fuelClass}">${car.fuel}</span>
            <h4>${formatKES(car.priceKES)}</h4>
          </div>
          <p class="seller">${car.seller}</p>
        </div>
      </article>
    </a>
  `;
}
