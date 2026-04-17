/* ================================================
   ເຮືອນອາຫານລາວ — script.js
   Lao food ordering · WhatsApp checkout
   ================================================
   HOW TO SET YOUR WHATSAPP NUMBER:
   Change SHOP_WA below to your number in
   international format (no +, no spaces).
   Laos prefix = 856
   Example: "85620XXXXXXXX"
================================================ */

const SHOP_WA = "84 0764009837"; // ← ປ່ຽນເບີໂທຮ້ານທີ່ນີ້

/* ──────────────────────────────────────────────
   MENU DATA  (12 items, 4 categories)
────────────────────────────────────────────── */
const MENU = [
  /* ── ອາຫານ */
  {
    id:1, cat:"ອາຫານ", badge:"❤️",
    name:"ລາບໝູ",
    desc:"ລາບໝູດິບ ຕຳດ້ວຍຂ່ຳ ໝາກນາວ ເຜັດ ຫວານ ສ້ົມ",
    price:30000,
    img:"https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&q=80",
  },
  {
    id:2, cat:"ອາຫານ", badge:"🔥",
    name:"ຕຳໝາກຫຸ່ງ",
    desc:"ໝາກຫຸ່ງດຽວ ຕຳໃໝ່ ກຸ້ງແຫ້ງ ຖົ່ວດິນ ເຜັດສົ້ມຫວານ",
    price:15000,
    img:"https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=400&q=80",
  },
  {
    id:3, cat:"ອາຫານ", badge:"",
    name:"ແກງຫນ່ໍໄມ້",
    desc:"ຕ້ົມໃໝ່ ໃສ່ໝູ ໝາກເຜັດ ໝາກຂຸ່ນ ກ່ຳລັງດີ",
    price:25000,
    img:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&q=80",
  },
  {
    id:4, cat:"ອາຫານ", badge:"",
    name:"ສ້ົມໝູ ລາວດຽວ",
    desc:"ໝັກດ້ວຍຂ້າວ ສ້ົມກຳລັງ ກິນພ້ອມຜັກ ແລະ ໝາກພິກ",
    price:18000,
    img:"https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
  },

  /* ── ກ໋ວຍ */
  {
    id:5, cat:"ກ໋ວຍ", badge:"🔥",
    name:"ກ໋ວຍຕຽວ ໝູ",
    desc:"ນ້ຳຊຸບຂົ້ວຫອມ ຊີ້ນໝູ ຖົ່ວງອກ ຜັກສົດ ກິນຕອນເຊົ້າ",
    price:25000,
    img:"https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&q=80",
  },
  {
    id:6, cat:"ກ໋ວຍ", badge:"",
    name:"ກ໋ວຍຈັ່ບ",
    desc:"ກ໋ວຍຈັ່ບ ນ້ຳໃສ ໄຂ່ຕ້ົມ ໝູ ເຄື່ອງຄົ່ວ ຫອມ",
    price:22000,
    img:"https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&q=80",
  },

  /* ── ເຂົ້າ */
  {
    id:7, cat:"ເຂົ້າ", badge:"❤️",
    name:"ເຂົ້າໜຽວ + ໄກ່ຍ່າງ",
    desc:"ໄກ່ຍ່າງໄຟ ໜັງກອ ພ້ອມຂ້າວໜຽວ ແລະ ຈ້ຳ",
    price:35000,
    img:"https://images.unsplash.com/photo-1598514982901-b62ddf4fc910?w=400&q=80",
  },
  {
    id:8, cat:"ເຂົ້າ", badge:"",
    name:"ເຂົ້າປຽກໄກ່",
    desc:"ເຂົ້າປຽກ ນ້ຳຊຸບໄກ່ ຫວານໝົ້ນ ຈ່ອຍ ໃສ່ຂຽວຫຼີ",
    price:20000,
    img:"https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80",
  },
  {
    id:9, cat:"ເຂົ້າ", badge:"",
    name:"ເຂົ້າຜັດໄຂ່",
    desc:"ຜັດດ້ວຍໄຟສູງ ໃສ່ໄຂ່ ຜັກ ຊອດໝາກເຜັດ",
    price:18000,
    img:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80",
  },

  /* ── ດື່ມ */
  {
    id:10, cat:"ດື່ມ", badge:"☕",
    name:"ກາເຟລາວ ເຢັນ",
    desc:"ໂລໂບ ຊ່ຳ ດຳ ໃສ່ນົມຂຸ້ນ ນ້ຳກ້ອນ ຫວານໂດ",
    price:12000,
    img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
  },
  {
    id:11, cat:"ດື່ມ", badge:"🥥",
    name:"ນ້ຳໝາກພ້າວ ສົດ",
    desc:"ໝາກພ້າວໜຸ່ມ ນ້ຳຫວານ ດຶ່ມສົດຊື່ນ ໃໝ່ທຸກໃບ",
    price:10000,
    img:"https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=400&q=80",
  },
  {
    id:12, cat:"ດື່ມ", badge:"🍊",
    name:"ນ້ຳໝາກໂອ ຄັ້ນ",
    desc:"ຄັ້ນສົດໃໝ່ທຸກໃບ ວິຕາມິນສູງ ຫວານສ້ົມ ສົດຊື່ນ",
    price:15000,
    img:"https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=80",
  },
];

/* ──────────────────────────────────────────────
   STATE
────────────────────────────────────────────── */
let cart = [];
try {
  cart = JSON.parse(localStorage.getItem("heuan_cart")) || [];
} catch (e) {
  cart = []; 
}
let curCat  = "all";
let toastTm = null;
let modalOn = false;

/* ──────────────────────────────────────────────
   HELPERS
────────────────────────────────────────────── */
// Format number as Lao kip
const fmt = n => n.toLocaleString("lo-LA") + " ₭";

// Save to localStorage
function save() {
  localStorage.setItem("heuan_cart", JSON.stringify(cart));
}

// Total item count
function totalQty() {
  return cart.reduce((s, i) => s + i.qty, 0);
}

// Total price
function totalPrice() {
  return cart.reduce((s, i) => s + i.price * i.qty, 0);
}

/* ──────────────────────────────────────────────
   TOAST
────────────────────────────────────────────── */
function showToast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTm);
  toastTm = setTimeout(() => el.classList.remove("show"), 2700);
}

/* ──────────────────────────────────────────────
   BADGE
────────────────────────────────────────────── */
function refreshBadge() {
  const badge = document.getElementById("hdrbadge");
  badge.textContent = totalQty();
  badge.classList.remove("bounce");
  void badge.offsetWidth; // reflow trick to restart animation
  badge.classList.add("bounce");
}

/* ──────────────────────────────────────────────
   ADD TO CART
────────────────────────────────────────────── */
function addToCart(id) {
  const item = MENU.find(m => m.id === id);
  if (!item) return;

  const found = cart.find(c => c.id === id);
  if (found) {
    found.qty++;
  } else {
    cart.push({ id: item.id, name: item.name, price: item.price, img: item.img, qty: 1 });
  }

  save();
  refreshBadge();
  renderCartItems();
  showToast(`✅ ເພີ່ມ "${item.name}" ສຳເລັດ`);
}

/* ──────────────────────────────────────────────
   CHANGE QTY
────────────────────────────────────────────── */
function changeQty(id, delta) {
  const entry = cart.find(c => c.id === id);
  if (!entry) return;

  entry.qty += delta;
  if (entry.qty <= 0) {
    cart = cart.filter(c => c.id !== id);
    showToast("🗑 ລຶບລາຍການອອກແລ້ວ");
  }

  save();
  refreshBadge();
  renderCartItems();
}

/* ──────────────────────────────────────────────
   REMOVE ITEM
────────────────────────────────────────────── */
function removeItem(id) {
  const entry = cart.find(c => c.id === id);
  if (entry) showToast(`🗑 ລຶບ "${entry.name}"`);
  cart = cart.filter(c => c.id !== id);
  save();
  refreshBadge();
  renderCartItems();
}

/* ──────────────────────────────────────────────
   CLEAR CART
────────────────────────────────────────────── */
/* ──────────────────────────────────────────────
   CLEAR CART (Đã nâng cấp Custom Modal)
────────────────────────────────────────────── */
function clearCart() {
  if (!cart.length) return;
  // Bật modal tự chế thay vì dùng confirm mặc định
  document.getElementById("confirm-modal").style.display = "flex";
}

function closeConfirm() {
  document.getElementById("confirm-modal").style.display = "none";
}

function executeClearCart() {
  cart = [];
  save();
  refreshBadge();
  renderCartItems();
  closeConfirm(); // Đóng modal
  showToast("🗑 ລ້າງກະຕ່າແລ້ວ");
}

/* ──────────────────────────────────────────────
   RENDER CART ITEMS
────────────────────────────────────────────── */
function renderCartItems() {
  const itemsEl  = document.getElementById("modalItems");
  const emptyEl  = document.getElementById("modalEmpty");
  const footEl   = document.getElementById("modalFoot");
  const countEl  = document.getElementById("sumCount");
  const priceEl  = document.getElementById("sumPrice");

  if (cart.length === 0) {
    itemsEl.innerHTML     = "";
    emptyEl.style.display = "flex";
    footEl.style.display  = "none";
    return;
  }

  emptyEl.style.display = "none";
  footEl.style.display  = "block";
  countEl.textContent   = totalQty();
  priceEl.textContent   = fmt(totalPrice());

  itemsEl.innerHTML = cart.map(item => `
    <div class="ci">
      <img class="ci-img" src="${item.img}" alt="${item.name}"
           onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=60'"/>
      <div class="ci-info">
        <div class="ci-name">${item.name}</div>
        <div class="ci-sub">${fmt(item.price * item.qty)}</div>
      </div>
      <div class="ci-right">
        <div class="qty-row">
          <button class="qb" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qn">${item.qty}</span>
          <button class="qb" onclick="changeQty(${item.id}, +1)">+</button>
        </div>
        <button class="del" onclick="removeItem(${item.id})" title="ລຶບ">✕</button>
      </div>
    </div>
  `).join("");
}

/* ──────────────────────────────────────────────
   OPEN / CLOSE CART MODAL
────────────────────────────────────────────── */
function openCart() {
  modalOn = true;
  document.getElementById("modal").classList.add("open");
  document.getElementById("backdrop").classList.add("on");
  document.body.style.overflow = "hidden";
  renderCartItems();
  loadCustomerInfo();
}

function closeCart() {
  modalOn = false;
  document.getElementById("modal").classList.remove("open");
  document.getElementById("backdrop").classList.remove("on");
  document.body.style.overflow = "";
}

/* ──────────────────────────────────────────────
   SEND ORDER VIA WHATSAPP
────────────────────────────────────────────── */
function sendWA() {
  // 1. Check cart is not empty
  if (cart.length === 0) {
    showToast("⚠️ ກະຕ່າຍັງຫວ່າງ — ເລືອກອາຫານກ່ອນ");
    return;
  }

  // 2. Read form values
  const name  = document.getElementById("fName").value.trim();
  const phone = document.getElementById("fPhone").value.trim();
  const addr  = document.getElementById("fAddr").value.trim();

  // 3. Validate
  if (!name) {
    showToast("⚠️ ກາລຸນາໃສ່ຊື່");
    document.getElementById("fName").focus();
    return;
  }
  if (!phone) {
    showToast("⚠️ ກາລຸນາໃສ່ເບີໂທ");
    document.getElementById("fPhone").focus();
    return;
  }
  if (!addr) {
    showToast("⚠️ ກາລຸນາໃສ່ທີ່ຢູ່");
    document.getElementById("fAddr").focus();
    return;
  }
  // 3.5. Lưu thông tin khách hàng cho lần mua sau (Thầy dán vào vị trí này nhé)
  const customerInfo = { name, phone, addr };
  localStorage.setItem("chimoua_customer", JSON.stringify(customerInfo));

  // 4. Build item list
  const lines = cart
    .map(i => `  • ${i.name} x${i.qty}  =  ${fmt(i.price * i.qty)}`)
    .join("\n");

  // 5. Compose Lao-language message
  const now = new Date().toLocaleString("lo-LA", { dateStyle: "short", timeStyle: "short" });
  const msg = [
    `🍜 *ຄຳສັ່ງຊື້ອາຫານ — ເຮືອນອາຫານລາວ*`,
    `🕐 ${now}`,
    `─────────────────────────`,
    `👤 ຊື່        : ${name}`,
    `📞 ເບີໂທ    : ${phone}`,
    `📍 ທີ່ຢູ່     : ${addr}`,
    `─────────────────────────`,
    `🛒 *ລາຍການສັ່ງ*`,
    lines,
    `─────────────────────────`,
    `💰 *ລວມທັງໝົດ : ${fmt(totalPrice())}*`,
    `─────────────────────────`,
    `ຂໍຂອບໃຈທີ່ໃຊ້ບໍລິການ! 🙏`,
  ].join("\n");

  // 6. Build URL and open WhatsApp
  const url = `https://wa.me/${SHOP_WA}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

/* ──────────────────────────────────────────────
   CATEGORY FILTER
────────────────────────────────────────────── */
function setcat(cat, btn) {
  curCat = cat;
  document.querySelectorAll(".cat").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderMenu();
}

/* ──────────────────────────────────────────────
   RENDER MENU GRID
────────────────────────────────────────────── */
function renderMenu() {
  const items = MENU.filter(m => curCat === "all" || m.cat === curCat);

  document.getElementById("grid").innerHTML = items.map((m, i) => `
    <div class="card" style="animation-delay:${i * 0.05}s">
      <div class="card-img">
      <img src="${m.img}" alt="${m.name}" loading="lazy" onclick="openImage(this.src)"
             onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=60'"/>
        <span class="card-tag">${m.cat}</span>
        ${m.badge ? `<span class="card-badge">${m.badge}</span>` : ""}
      </div>
      <div class="card-body">
        <div class="card-name">${m.name}</div>
        <div class="card-desc">${m.desc}</div>
        <div class="card-foot">
          <span class="card-price">${fmt(m.price)}</span>
          <button class="btn-add" onclick="addToCart(${m.id})">+ ເພີ່ມ</button>
        </div>
      </div>
    </div>
  `).join("");
}

/* ──────────────────────────────────────────────
   KEYBOARD: close modal on Escape
────────────────────────────────────────────── */
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modalOn) closeCart();
});

/* ──────────────────────────────────────────────
   INIT
────────────────────────────────────────────── */
renderMenu();
refreshBadge();


function changeImage() {
  if (!sliderImg) return;
  sliderImg.style.opacity = "0";
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % foodImages.length;
    sliderImg.src = foodImages[currentIndex];
    sliderImg.style.opacity = "1";
  }, 300);
}

function startSlider() {
  if (sliderInterval) return;
  sliderInterval = setInterval(changeImage, 2500);
}

function stopSlider() {
  clearInterval(sliderInterval);
  sliderInterval = null;
}

// Tự động chạy khi load xong
startSlider();


function searchMenu(keyword) {
  const kw = keyword.trim().toLowerCase();
  const items = MENU.filter(m =>
    (curCat === "all" || m.cat === curCat) &&
    (m.name.toLowerCase().includes(kw) || m.desc.toLowerCase().includes(kw))
  );

  document.getElementById("grid").innerHTML = items.length
    ? items.map((m, i) => `
        <div class="card" style="animation-delay:${i * 0.05}s">
          <div class="card-img">
            <img src="${m.img}" alt="${m.name}" loading="lazy"
                 onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=60'"/>
            <span class="card-tag">${m.cat}</span>
            ${m.badge ? `<span class="card-badge">${m.badge}</span>` : ""}
          </div>
          <div class="card-body">
            <div class="card-name">${m.name}</div>
            <div class="card-desc">${m.desc}</div>
            <div class="card-foot">
              <span class="card-price">${fmt(m.price)}</span>
              <button class="btn-add" onclick="addToCart(${m.id})">+ ເພີ່ມ</button>
            </div>
          </div>
        </div>
      `).join("")
    : `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--txt2)">
         <div style="font-size:48px">🍽️</div>
         <p style="margin-top:8px"> ບໍ່ພົບເມນູ "<strong>${escapeHTML(keyword)}</strong>"</p>
       </div>`;
}
//Bấm xem ảnh
function openImage(src) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");

  modal.style.display = "flex";
  modalImg.src = src;
}

function closeImage() {
  document.getElementById("image-modal").style.display = "none";
}

/* ──────────────────────────────────────────────
   SMART FORM - Tự động điền thông tin
────────────────────────────────────────────── */
function loadCustomerInfo() {
  try {
    const info = JSON.parse(localStorage.getItem("chimoua_customer") || "{}");
    if (info.name) document.getElementById("fName").value = info.name;
    if (info.phone) document.getElementById("fPhone").value = info.phone;
    if (info.addr) document.getElementById("fAddr").value = info.addr;
  } catch (e) {
    console.log("Lỗi tải thông tin khách hàng");
  }
}
