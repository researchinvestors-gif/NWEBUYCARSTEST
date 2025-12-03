// buyacar-logic.js
// Uses window.carsDB and generateCarCard from cars.js

document.addEventListener("DOMContentLoaded", () => {
  const allCars = Object.values(window.carsDB || {});
  const perPage = 12;

  // DOM
  const vehicleListEl = document.getElementById("vehicleList");
  const paginationEl  = document.getElementById("pagination");
  const showingEl     = document.getElementById("showingText");
  const noResultsEl   = document.getElementById("noResults");

  const stockPills    = document.querySelectorAll(".pill[data-stock]");
  const categoryTiles = document.querySelectorAll(".cat-tile");
  const sortSelect    = document.getElementById("sortSelect");

  const makeSelect  = document.getElementById("makeSelect");
  const modelSelect = document.getElementById("modelSelect");
  const priceSelect = document.getElementById("priceSelect");
  const searchBtn   = document.getElementById("searchBtn");

  const openDrawerBtn   = document.getElementById("openDrawer");
  const closeDrawerBtn  = document.getElementById("closeDrawer");
  const drawer          = document.getElementById("filterDrawer");
  const overlay         = document.getElementById("drawerOverlay");
  const applyFiltersBtn = document.getElementById("applyFilters");

  const fuelChecks   = document.querySelectorAll(".fuelChk");
  const transChecks  = document.querySelectorAll(".transChk");
  const sellerChecks = document.querySelectorAll(".sellerChk");

  let activeStock    = "all";  // all | kenya | import
  let activeCategory = "all";  // all | suv | luxury | etc
  let currentPage    = 1;

  if (!allCars.length) {
    vehicleListEl.innerHTML = "";
    paginationEl.innerHTML  = "";
    showingEl.textContent   = "Showing 0 – 0 of 0";
    noResultsEl.hidden      = false;
    return;
  }

  const normalise = (str) => String(str || "").toLowerCase().trim();

  function mapStockLocation(loc) {
    const s = normalise(loc);
    if (s.includes("direct")) return "import";
    if (s.includes("kenya"))  return "kenya";
    return "all";
  }

  // ---------- dropdown data ----------
  function populateMakes() {
    const makes = Array.from(new Set(allCars.map(c => c.make))).sort();
    makes.forEach(m => {
      const opt = document.createElement("option");
      opt.value = m;
      opt.textContent = m;
      makeSelect.appendChild(opt);
    });
  }

  function populateModels() {
    modelSelect.innerHTML = `<option value="">Any Model</option>`;
    const mk = makeSelect.value;
    if (!mk) return;
    const models = Array.from(
      new Set(allCars.filter(c => c.make === mk).map(c => c.model))
    ).sort();
    models.forEach(m => {
      const opt = document.createElement("option");
      opt.value = m;
      opt.textContent = m;
      modelSelect.appendChild(opt);
    });
  }

  // ---------- match helpers ----------
  function matchesToolbar(car) {
    const stockCode = mapStockLocation(car.stockLocation);
    const stockOk   = (activeStock === "all" || activeStock === stockCode);
    const catOk     = (activeCategory === "all" || activeCategory === car.category);
    return stockOk && catOk;
  }

  function matchesSearchStrip(car) {
    const mk = makeSelect.value;
    const md = modelSelect.value;
    const pr = priceSelect.value;
    const price = Number(car.priceKES || 0);

    if (mk && car.make !== mk)   return false;
    if (md && car.model !== md)  return false;

    if (pr) {
      const [min, max] = pr.split("-").map(Number);
      if (price < min || price > max) return false;
    }
    return true;
  }

  function matchesDrawer(car) {
    const selectedFuel   = Array.from(fuelChecks)
      .filter(i => i.checked).map(i => i.value.toLowerCase());
    const selectedTrans  = Array.from(transChecks)
      .filter(i => i.checked).map(i => i.value.toLowerCase());
    const selectedSeller = Array.from(sellerChecks)
      .filter(i => i.checked).map(i => i.value.toLowerCase());

    const fuel   = normalise(car.fuel);
    const trans  = normalise(car.transmission);
    const seller = normalise(car.seller);

    let sellerCode = "";
    if (seller.includes("private")) sellerCode = "private seller";
    else if (seller.includes("n we buy")) sellerCode = "n we buy cars";

    const fuelOk   = !selectedFuel.length   || selectedFuel.includes(fuel);
    const transOk  = !selectedTrans.length  || selectedTrans.includes(trans);
    const sellerOk = !selectedSeller.length || selectedSeller.includes(sellerCode);

    return fuelOk && transOk && sellerOk;
  }

  function applySort(cars) {
    const val = sortSelect.value;
    const arr = [...cars];
    if (val === "pricelow")  return arr.sort((a, b) => a.priceKES - b.priceKES);
    if (val === "pricehigh") return arr.sort((a, b) => b.priceKES - a.priceKES);
    if (val === "newest")    return arr.sort((a, b) => (b.year || 0) - (a.year || 0));
    return arr;
  }

  // ---------- main filter + render ----------
  function filterAll() {
    let filtered = allCars.filter(car =>
      matchesToolbar(car) &&
      matchesSearchStrip(car) &&
      matchesDrawer(car)
    );

    filtered = applySort(filtered);
    const total = filtered.length;

    if (!total) {
      vehicleListEl.innerHTML = "";
      paginationEl.innerHTML  = "";
      showingEl.textContent   = "Showing 0 – 0 of 0";
      noResultsEl.hidden      = false;
      return;
    }

    noResultsEl.hidden = true;
    const totalPages = Math.ceil(total / perPage);
    if (currentPage > totalPages) currentPage = 1;

    renderPage(filtered, currentPage, totalPages);
  }

  function renderPage(cars, page, totalPages) {
    const start = (page - 1) * perPage;
    const items = cars.slice(start, start + perPage);

    vehicleListEl.innerHTML = items.map(generateCarCard).join("");

    document.querySelectorAll(".car-card-link").forEach(a => {
      a.addEventListener("click", e => {
        e.preventDefault();
        window.location.href = a.href;
      });
    });

    renderPagination(totalPages, cars.length, page);
  }

  function renderPagination(totalPages, totalCount, page) {
    paginationEl.innerHTML = "";
    if (totalPages <= 1) {
      showingEl.textContent = `Showing 1 – ${totalCount} of ${totalCount}`;
      return;
    }

    function btn(label, disabled, handler, active) {
      const b = document.createElement("button");
      b.textContent = label;
      b.className = "page-btn" + (active ? " active" : "");
      b.disabled = disabled;
      if (!disabled) b.addEventListener("click", handler);
      return b;
    }

    paginationEl.appendChild(
      btn("Prev", page === 1, () => { currentPage--; filterAll(); }, false)
    );

    for (let i = 1; i <= totalPages; i++) {
      paginationEl.appendChild(
        btn(String(i), false, () => { currentPage = i; filterAll(); }, i === page)
      );
    }

    paginationEl.appendChild(
      btn("Next", page === totalPages, () => { currentPage++; filterAll(); }, false)
    );

    const from = (page - 1) * perPage + 1;
    const to   = Math.min(page * perPage, totalCount);
    showingEl.textContent = `Showing ${from} – ${to} of ${totalCount}`;
  }

  // ---------- events ----------
  stockPills.forEach(p => {
    p.addEventListener("click", () => {
      stockPills.forEach(x => x.classList.remove("active"));
      p.classList.add("active");
      activeStock = p.dataset.stock || "all";
      currentPage = 1;
      filterAll();
    });
  });

  categoryTiles.forEach(tile => {
    tile.addEventListener("click", () => {
      categoryTiles.forEach(t => t.classList.remove("active"));
      tile.classList.add("active");
      activeCategory = tile.dataset.category || "all";
      currentPage = 1;
      filterAll();
    });
  });

  makeSelect.addEventListener("change", () => {
    populateModels();
    currentPage = 1;
    filterAll();
  });

  modelSelect.addEventListener("change", () => {
    currentPage = 1;
    filterAll();
  });

  priceSelect.addEventListener("change", () => {
    currentPage = 1;
    filterAll();
  });

  searchBtn.addEventListener("click", e => {
    e.preventDefault();
    currentPage = 1;
    filterAll();
  });

  sortSelect.addEventListener("change", () => {
    currentPage = 1;
    filterAll();
  });

  function openDrawer() {
    drawer.classList.add("open");
    overlay.classList.add("show");
  }
  function closeDrawer() {
    drawer.classList.remove("open");
    overlay.classList.remove("show");
  }

  openDrawerBtn.addEventListener("click", openDrawer);
  closeDrawerBtn.addEventListener("click", closeDrawer);
  overlay.addEventListener("click", closeDrawer);

  applyFiltersBtn.addEventListener("click", () => {
    closeDrawer();
    currentPage = 1;
    filterAll();
  });

  // ---------- init ----------
  populateMakes();
  populateModels();
  filterAll();
});
