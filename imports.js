// imports.js
// Simple DB for direct-import / international stock cars

const importCarsDB = {
  "lc-250-2024-pearl": {
    id: "lc-250-2024-pearl",
    stockId: "DKR3638",
    make: "TOYOTA",
    model: "LAND CRUISER 250",
    year: 2024,
    month: 8,
    title: "2024/8 TOYOTA LAND CRUISER 250",
    priceUSD: 39860,
    totalUSD: 42343,
    mileageKm: 3000,
    engineCC: 2700,
    transmission: "AT",
    drive: "4WD",
    fuel: "PETROL",
    steering: "RHD",
    seats: 7,
    doors: 5,
    bodyColor: "PEARL",
    bodyType: "SUV",
    location: "OSAKA, JAPAN",
    partnerStock: true,
    discountTag: "10%",
    images: [
      "images/imports/lc250/1.jpg",
      "images/imports/lc250/2.jpg",
      "images/imports/lc250/3.jpg",
      "images/imports/lc250/4.jpg",
      "images/imports/lc250/5.jpg",
      "images/imports/lc250/6.jpg",
      "images/imports/lc250/7.jpg",
      "images/imports/lc250/8.jpg",
      "images/imports/lc250/9.jpg",
      "images/imports/lc250/10.jpg",
      "images/imports/lc250/11.jpg",
      "images/imports/lc250/12.jpg",
      "images/imports/lc250/13.jpg",
      "images/imports/lc250/14.jpg",
      "images/imports/lc250/15.jpg"
    ],
    optionsComfort: [
      "Air Conditioner",
      "Navigation System",
      "Power Steering",
      "Power Window All",
      "Cruise Control",
      "Double Air Conditioner"
    ],
    optionsDressUp: [
      "Alloy Wheels"
    ],
    optionsExterior: [
      "Sun Roof",
      "LED Light"
    ],
    optionsSafety: [
      "ABS",
      "Air Bag",
      "Back Camera",
      "ESC"
    ],
    optionsOther: [
      "Leather Seat"
    ],
    description:
      "Clean 2024 Land Cruiser 250 with low mileage, pearl exterior, and premium options. Ideal for direct import to Kenya and East Africa."
  },

  // Example second vehicle (you can add more like this)
  "Cx-5-2019-Blue": {
    id: "Cx-5-2019-Blue",
    stockId: "MZC5123",
    make: "MAZDA",
    model: "CX-5",
    year: 2019,
    month: 6,

    title: "2019/6 MAZDA CX-5",
    priceUSD: 18600,
    totalUSD: 20250,
    mileageKm: 42000,
    engineCC: 2200,
    transmission: "AT",
    drive: "2WD",
    fuel: "DIESEL",
    steering: "RHD",
    seats: 5,
    doors: 5,
    bodyColor: "BLUE",
    bodyType: "SUV",
    location: "AICHI, JAPAN",
    partnerStock: true,
    discountTag: "HOT",

    images: [
        "images/imports/cx5/1.jpg",
        "images/imports/cx5/2.jpg",
        "images/imports/cx5/3.jpg",
        "images/imports/cx5/4.jpg",
        "images/imports/cx5/5.jpg",
        "images/imports/cx5/6.jpg",
        "images/imports/cx5/7.jpg",
        "images/imports/cx5/8.jpg",
        "images/imports/cx5/9.jpg",
        "images/imports/cx5/10.jpg",
        "images/imports/cx5/11.jpg",
        "images/imports/cx5/12.jpg",
        "images/imports/cx5/13.jpg",
        "images/imports/cx5/14.jpg",
        "images/imports/cx5/15.jpg"
    ],

    optionsComfort: [
        "Air Conditioner",
        "Cruise Control",
        "Navigation System",
        "Cooler"
    ],

    optionsDressUp: [
        "Alloy Wheels"
    ],

    optionsExterior: [
        "Sun Roof",
        "Roof Rack",
        "Fog Light"
    ],

    optionsSafety: [
        "ABS",
        "Air Bag",
        "Around View Monitor"
    ],

    optionsOther: [
        "Leather Seat"
    ],

    description:
        "Clean 2019 Mazda CX-5 Blue with excellent fuel economy and reliable performance. Great option for direct import to Kenya."
},
    "2023 Toyota Fortuner 2.8 Gd": {
    id: "2023 Toyota Fortuner 2.8 Gd",
    stockId: "7C8004839",
    make: "TOYOTA",
    model: "FORTUNER",
    year: 2023 ,
    month: 6,

    title: "2023/6 Toyota Fortuner 2.8 Gd",
    priceUSD: 40512,
    totalUSD: 42512,
    mileageKm: 52000,
    engineCC: 2755,
    transmission: "AT",
    drive: "4X4",
    fuel: "DIESEL",
    steering: "RHD",
    seats: 7,
    doors: 5,
    bodyColor: "WHITE",
    bodyType: "SUV",
    location: "Gqeberha (EC), SOUTH AFRICA",
    partnerStock: true,
    discountTag: "HOT",

    images: [
        "images/imports/Toyota Fortuner/1.jpg",
        "images/imports/Toyota Fortuner/2.jpg",
        "images/imports/Toyota Fortuner/3.jpg",
        "images/imports/Toyota Fortuner/4.jpg",
        "images/imports/Toyota Fortuner/5.jpg",
        "images/imports/Toyota Fortuner/6.jpg",
        "images/imports/Toyota Fortuner/7.jpg",
        "images/imports/Toyota Fortuner/8.jpg",
        "images/imports/Toyota Fortuner/9.jpg",
        "images/imports/Toyota Fortuner/10.jpg",
        "images/imports/Toyota Fortuner/11.jpg",
        "images/imports/Toyota Fortuner/12.jpg",
        "images/imports/Toyota Fortuner/13.jpg",
        "images/imports/Toyota Fortuner/14.jpg",
        "images/imports/Toyota Fortuner/15.jpg"
       
    ],

    optionsComfort: [
        "Air Conditioner",
        "Cruise Control",
        "Navigation System",
        "Cooler"
    ],

    optionsDressUp: [
        "Alloy Wheels"
    ],

    optionsExterior: [
        "Sun Roof",
        "Roof Rack",
        "Fog Light"
    ],

    optionsSafety: [
        "ABS",
        "Air Bag",
        "Around View Monitor"
    ],

    optionsOther: [
        "Leather Seat"
    ],

    description:
        "Clean Toyota Fortuner with excellent fuel economy and reliable performance. Great option for direct import to Kenya."
},

"2020 BMW 6 SERIES 630I": {
    id: "2020 BMW 6 SERIES 630I",
    stockId: "ABA-JX20S CB103139",
    make: "BMW",
    model: "6 SERIES",
    year: 2020,
    month: 4,
    title: "2020 BMW 6 SERIES 630I GRAN TURISMO M SPORT",
    priceUSD: 10070,
    totalUSD: 12577,
    mileageKm: 104997,
    engineCC: 1990,
    transmission: "AT",
    drive: "2WD",
    fuel: "PETROL",
    steering: "RHD",
    seats: 5,
    doors: 5,
    bodyColor: "BLUE",
    bodyType: "SEDAN M SPORT",
    location: "NAGOYA, JAPAN",
    partnerStock: true,
    discountTag: "10%",
    images: [
      "images/imports/BMW 6 SERIES/1.jpg",
      "images/imports/BMW 6 SERIES/2.jpg",
      "images/imports/BMW 6 SERIES/3.jpg",
      "images/imports/BMW 6 SERIES/4.jpg",
      "images/imports/BMW 6 SERIES/5.jpg",
      "images/imports/BMW 6 SERIES/6.jpg",
      "images/imports/BMW 6 SERIES/7.jpg",
      "images/imports/BMW 6 SERIES/8.jpg",
      "images/imports/BMW 6 SERIES/9.jpg",
      "images/imports/BMW 6 SERIES/10.jpg",
      "images/imports/BMW 6 SERIES/11.jpg",
      "images/imports/BMW 6 SERIES/12.jpg",
      "images/imports/BMW 6 SERIES/13.jpg",
      "images/imports/BMW 6 SERIES/14.jpg",
      "images/imports/BMW 6 SERIES/15.jpg"
    ],
    optionsComfort: [
      "Air Conditioner",
      "Navigation System",
      "Power Steering",
      "Power Window All",
      "Cruise Control",
      "Double Air Conditioner",
      "Keyless Entry",
      "Push Start"
    ],
    optionsDressUp: [
      "Alloy Wheels"
    ],
    optionsExterior: [
      "Sun Roof",
      "LED Light",
      "Rear Spoiler"
    ],
    optionsSafety: [
      
      "Air Bag",
      "Back Camera",
      "360 Degree Camera",
    ],
    optionsOther: [
      "Power Seat",
      "Leather Seat"
    ],
    description:
      "Clean 2020 BMW 6 series with low mileage, pearl exterior, and premium options. Ideal for direct import to Kenya and East Africa."
  },

  "2020 Ford Ranger": {
    id: "2020 Ford Ranger",
    stockId: "MZC5123",
    make: "FORD",
    model: "Ranger",
    year: 2020,
    month: 8,
    title: "2020 Ford Ranger 2.0Bi-Turbo Double Cab 4x4 Raptor",
    priceUSD: 36665,
    totalUSD: 40000,
    mileageKm: 77000,
    engineCC: 2000,
    transmission: "AT",
    drive: "4WD",
    fuel: "DIESEL",
    steering: "RHD",
    seats: 5,
    doors: 5,
    bodyColor: "Grey",
    bodyType: "Double cab",
    location: "South Africa",
    partnerStock: true,
    discountTag: "HOT",

    images: [
        "images/imports/2020 Ford Ranger/1.jpg",
        "images/imports/2020 Ford Ranger/2.jpg",
        "images/imports/2020 Ford Ranger/3.jpg",
        "images/imports/2020 Ford Ranger/4.jpg",
        "images/imports/2020 Ford Ranger/5.jpg",
        "images/imports/2020 Ford Ranger/6.jpg",
        "images/imports/2020 Ford Ranger/7.jpg",
        "images/imports/2020 Ford Ranger/8.jpg"
        
    ],

    optionsComfort: [
        "Air Conditioner",
        "Cruise Control",
        "Navigation System",
        "Cooler"
    ],

    optionsDressUp: [
        "Alloy Wheels"
    ],

    optionsExterior: [
        "Sun Roof",
        "Roof Rack",
        "Fog Light"
    ],

    optionsSafety: [
        "ABS",
        "Air Bag",
        "Around View Monitor"
    ],

    optionsOther: [
        "Leather Seat"
    ],

    description:
        "Clean 2020 Ford Ranger with excellent fuel economy and reliable performance. Great option for direct import to Kenya."
},
    "2023 Toyota Fortuner 2.8 Gd": {
    id: "2023 Toyota Fortuner 2.8 Gd",
    stockId: "7C8004839",
    make: "TOYOTA",
    model: "FORTUNER",
    year: 2023 ,
    month: 6,

    title: "2023/6 Toyota Fortuner 2.8 Gd",
    priceUSD: 40512,
    totalUSD: 42512,
    mileageKm: 52000,
    engineCC: 2755,
    transmission: "AT",
    drive: "4X4",
    fuel: "DIESEL",
    steering: "RHD",
    seats: 7,
    doors: 5,
    bodyColor: "WHITE",
    bodyType: "SUV",
    location: "Gqeberha (EC), SOUTH AFRICA",
    partnerStock: true,
    discountTag: "HOT",

    images: [
        "images/imports/Toyota Fortuner/1.jpg",
        "images/imports/Toyota Fortuner/2.jpg",
        "images/imports/Toyota Fortuner/3.jpg",
        "images/imports/Toyota Fortuner/4.jpg",
        "images/imports/Toyota Fortuner/5.jpg",
        "images/imports/Toyota Fortuner/6.jpg",
        "images/imports/Toyota Fortuner/7.jpg",
        "images/imports/Toyota Fortuner/8.jpg",
        "images/imports/Toyota Fortuner/9.jpg",
        "images/imports/Toyota Fortuner/10.jpg",
        "images/imports/Toyota Fortuner/11.jpg",
        "images/imports/Toyota Fortuner/12.jpg",
        "images/imports/Toyota Fortuner/13.jpg",
        "images/imports/Toyota Fortuner/14.jpg",
        "images/imports/Toyota Fortuner/15.jpg"
       
    ],

    optionsComfort: [
        "Air Conditioner",
        "Cruise Control",
        "Navigation System",
        "Cooler"
    ],

    optionsDressUp: [
        "Alloy Wheels"
    ],

    optionsExterior: [
        "Sun Roof",
        "Roof Rack",
        "Fog Light"
    ],

    optionsSafety: [
        "ABS",
        "Air Bag",
        "Around View Monitor"
    ],

    optionsOther: [
        "Leather Seat"
    ],

    description:
        "Clean Toyota Fortuner with excellent fuel economy and reliable performance. Great option for direct import to Kenya."
},


};

// Helpers
function getImportCarsList() {
  return Object.values(importCarsDB);
}

function getImportCarById(id) {
  return importCarsDB[id] || null;
}
