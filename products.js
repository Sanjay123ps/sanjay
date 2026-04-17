// ═══════════════════════════════════════════
//  AYINI — Product data for all category pages
// ═══════════════════════════════════════════

const PRODUCTS = {
  masala: [
    { id:1,  name:'Chicken Masala',       price:70,  unit:'100g',  rating:5, category:'Masala',      emoji:'🌶️', badge:'Best Seller' },
    { id:2,  name:'Mutton Masala',        price:135, unit:'250g',  rating:5, category:'Masala',      emoji:'🌶️' },
    { id:3,  name:'Chilli Powder',        price:50,  unit:'100g',  rating:5, category:'Masala',      emoji:'🌶️', badge:'Popular' },
    { id:4,  name:'Sambar Powder',        price:135, unit:'250g',  rating:5, category:'Powder',      emoji:'🥘' },
    { id:5,  name:'Instant Rasam Powder', price:80,  unit:'100g',  rating:5, category:'Powder',      emoji:'🥘' },
    { id:6,  name:'Biryani Masala',       price:70,  unit:'100g',  rating:5, category:'Spice Blend', emoji:'🍛', badge:'New' },
    { id:7,  name:'Idly Podi',            price:140, unit:'250g',  rating:5, category:'Powder',      emoji:'🫙' },
    { id:8,  name:'Idly Podi',            price:60,  unit:'100g',  rating:5, category:'Powder',      emoji:'🫙' },
    { id:9,  name:'Malli Powder',         price:40,  unit:'100g',  rating:5, category:'Spice Blend', emoji:'🌿' },
    { id:10, name:'Garam Masala',         price:100, unit:'50g',   rating:5, category:'Whole Spice', emoji:'🌶️' },
    { id:11, name:'Parru Powder',         price:60,  unit:'100g',  rating:5, category:'Powder',      emoji:'🫙' },
    { id:12, name:'Karuveppilai Powder',  price:60,  unit:'100g',  rating:5, category:'Masala',      emoji:'🌶️' },
  ],
  pulses: [
    { id:13, name:'Karupu Kavuni',        price:250, unit:'1kg',   rating:5, category:'Rice',        emoji:'🍚', badge:'Traditional' },
    { id:14, name:'Seeraga Samba',        price:110, unit:'1kg',   rating:5, category:'Rice',        emoji:'🍚' },
    { id:15, name:'Kuthirai Vaali',       price:60,  unit:'500g',  rating:5, category:'Millet',      emoji:'🌾', badge:'Healthy' },
    { id:16, name:'Samai',               price:60,  unit:'500g',  rating:5, category:'Millet',      emoji:'🌾' },
    { id:17, name:'Thinai',              price:50,  unit:'500g',  rating:5, category:'Millet',      emoji:'🌾' },
    { id:18, name:'Varagu',              price:60,  unit:'500g',  rating:5, category:'Millet',      emoji:'🌾' },
    { id:19, name:'Ragi',               price:40,  unit:'500g',  rating:5, category:'Millet',      emoji:'🌾', badge:'Iron Rich' },
    { id:20, name:'Ragi',               price:70,  unit:'1 kg',  rating:5, category:'Millet',      emoji:'🌾', badge:'Iron Rich' },
    { id:21, name:'Kambu',              price:50,  unit:'500g',  rating:5, category:'Millet',      emoji:'🌾' },
    { id:22, name:'Ellu',              price:120, unit:'500g',  rating:5, category:'Seeds',        emoji:'🫘' },
    { id:23, name:'White Solam',        price:40,  unit:'500g',  rating:5, category:'Grain',        emoji:'🌽' },
    { id:24, name:'Kollu',             price:55,  unit:'500g',  rating:5, category:'Legume',       emoji:'🫘' },
    { id:25, name:'Paasi Payaru',       price:70,  unit:'500g',  rating:5, category:'Legume',       emoji:'🫘' },
    { id:26, name:'Pepper',            price:47,  unit:'50g',   rating:5, category:'Legume',       emoji:'🫘' },
    { id:27, name:'Elakkai',           price:200, unit:'50g',   rating:5, category:'Legume',       emoji:'🫘' },
    { id:28, name:'Vendhayam',         price:30,  unit:'250g',  rating:5, category:'Legume',       emoji:'🫘' },
    { id:29, name:'Ulundhu',           price:75,  unit:'500g',  rating:5, category:'Legume',       emoji:'🫘' },
    { id:30, name:'Cumin Seeds',       price:45,  unit:'100g',  rating:5, category:'Legume',       emoji:'🫘' },
    { id:31, name:'Double Beans',      price:40,  unit:'250g',  rating:5, category:'Legume',       emoji:'🫘' },
    { id:32, name:'Black gram',        price:65,  unit:'500g',  rating:5, category:'Legume',       emoji:'🫘' },
    { id:33, name:'Paasi Payaru',      price:70,  unit:'500g',  rating:5, category:'Legume',       emoji:'🫘' },
    { id:34, name:'Sundal',            price:55,  unit:'500g',  rating:5, category:'Legume',       emoji:'🫘' },
    { id:35, name:'Sundal',            price:110, unit:'1 kg',  rating:5, category:'Legume',       emoji:'🫘' },
    { id:36, name:'Soya Chunks (Big)',  price:30,  unit:'250g',  rating:5, category:'Legume',       emoji:'🫘' },
    { id:37, name:'Soya Chunks (Small)',price:30,  unit:'250g',  rating:5, category:'Legume',       emoji:'🫘' },
    { id:38, name:'Solam',             price:30,  unit:'500g',  rating:5, category:'Legume',       emoji:'🫘' },
  ],
  soap: [
    { id:39, name:'Nalangu Maavu',       price:70,  unit:'bar',   rating:5, category:'Soap',        emoji:'🧴', badge:'Traditional' },
    { id:40, name:'Kattralai (Aloe)',    price:70,  unit:'bar',   rating:5, category:'Soap',        emoji:'🌿' },
    { id:41, name:'Kuppaimeni',          price:70,  unit:'bar',   rating:5, category:'Soap',        emoji:'🧼' },
    { id:42, name:'Sandalwood Soap',     price:70,  unit:'bar',   rating:5, category:'Soap',        emoji:'🧼', badge:'Luxury' },
    { id:43, name:'Seeyarkkai',          price:80,  unit:'100g',  rating:5, category:'Powder',      emoji:'🧴' },
    { id:44, name:'Herbal Hair Oil',     price:75,  unit:'100ml', rating:5, category:'Oil',         emoji:'💧' },
    { id:45, name:'Tulsi Soap',          price:70,  unit:'bar',   rating:5, category:'Soap',        emoji:'🧼' },
    { id:46, name:'Arrapu Sampoo Bar',   price:70,  unit:'bar',   rating:5, category:'Soap',        emoji:'🧼' },
    { id:47, name:'Sandal Leaf Soap',    price:70,  unit:'bar',   rating:5, category:'Soap',        emoji:'🧼' },
    { id:48, name:'Multanimetti Soap',   price:70,  unit:'bar',   rating:5, category:'Soap',        emoji:'🪨' },
    { id:49, name:'Vettiver Soap',       price:70,  unit:'bar',   rating:5, category:'Soap',        emoji:'🧼' },
    { id:50, name:'Soapnut Bar',         price:70,  unit:'bar',   rating:5, category:'Soap',        emoji:'🧼', badge:'Natural' },
    { id:51, name:'Arisi Maavu Soap',    price:70,  unit:'bar',   rating:5, category:'Soap',        emoji:'🧼' },
    { id:52, name:'Herbal Hair Oil',     price:175, unit:'200ml', rating:5, category:'Hair oil',    emoji:'🧼' },
  ],
  oil: [
    { id:53, name:'Coconut Oil (500ml)', price:230, unit:'500ml',  rating:5, category:'Oil',        emoji:'🥥', badge:'Cold Press' },
    { id:54, name:'Coconut Oil (200ml)', price:100, unit:'200ml',  rating:5, category:'Oil',        emoji:'🥥', badge:'Cold Press' },
    { id:55, name:'Coconut Oil (1 lt)',  price:450, unit:'1 litre',rating:5, category:'Oil',        emoji:'🥥' },
    { id:56, name:'Groundnut Oil (500ml)',price:140,unit:'500ml',  rating:5, category:'Oil',        emoji:'🥜', badge:'Traditional' },
    { id:57, name:'Groundnut Oil (1 lt)',price:275, unit:'1 litre',rating:5, category:'Oil',        emoji:'🥜', badge:'Traditional' },
    { id:58, name:'Castor Oil',          price:75,  unit:'250ml',  rating:5, category:'Oil',        emoji:'🌾' },
    { id:59, name:'Gingelly Oil',        price:250, unit:'500ml',  rating:5, category:'Oil',        emoji:'🌾' },
    { id:60, name:'Gingelly Oil',        price:500, unit:'1 litre',rating:5, category:'Oil',        emoji:'🌾' },
    { id:61, name:'Deepam Oil',          price:80,  unit:'500ml',  rating:5, category:'Oil',        emoji:'🌾' },
  ],

  flour: [
    { id:62, name:'Kavuni Barley Kanji Mix',   unit:'250g',  price:125, category:'flour', emoji:'🌾', description:'Nutritious kanji mix made from kavuni rice and barley. Great for a healthy breakfast.' },
    { id:63, name:'Wheat Kurunai (Kottai Kambu)',unit:'500g',price:35,  category:'flour', emoji:'🌾', description:'Traditional pearl millet broken wheat for porridge and health drinks.' },
    { id:64, name:'Karuppu Kavuni Kurunai',    unit:'500g',  price:140, category:'flour', emoji:'🌾', description:'Stone-ground black kavuni rice flour, rich in antioxidants.' },
    { id:65, name:'Millet Dosa Mix',           unit:'500g',  price:100, category:'flour', emoji:'🌾', description:'Ready-to-use millet dosa batter mix for crispy, healthy dosas.' },
    { id:66, name:'Multigrain Health Mix',     unit:'250g',  price:150, category:'flour', emoji:'🌾', description:'Power-packed blend of multiple grains and millets for daily nutrition.' },
    { id:67, name:'Kambu Kurunai',             unit:'500g',  price:40,  category:'flour', emoji:'🌾', description:'Pure pearl millet flour, ideal for koozh, porridge and traditional recipes.' },
    { id:68, name:'Wheat Flour (Gothumai)',    unit:'1kg',   price:60,  category:'flour', emoji:'🌾', description:'Fresh stone-ground whole wheat flour for chapati, roti and breads.' },
  ],
  noodles: [
    { id:69, name:'Millet Noodles (Varagu)',        unit:'200g',  price:60, category:'noodles', emoji:'🍜', description:'Healthy kodo millet noodles — a tasty and nutritious alternative to maida noodles.' },
    { id:70, name:'Semiya (Ragi / Tomato / Kambu)', unit:'225g',  price:25, category:'noodles', emoji:'🍜', description:'Traditional semiya available in ragi, tomato and kambu flavours.' },
    { id:71, name:'Wheat Noodles (Gothumai)',       unit:'Big',   price:160,category:'noodles', emoji:'🍜', description:'Whole wheat noodles in a large pack — perfect for family meals.' },
    { id:72, name:'Millet Noodles (Kuthiravali)',   unit:'200g',  price:60, category:'noodles', emoji:'🍜', description:'Barnyard millet noodles, light on digestion and high on nutrition.' },
    { id:73, name:'Millet Noodles (Multigrain)',    unit:'200g',  price:60, category:'noodles', emoji:'🍜', description:'Blend of multiple millets in noodle form for a wholesome everyday meal.' },
    { id:74, name:'Millet Noodles (Thinai)',        unit:'200g',  price:60, category:'noodles', emoji:'🍜', description:'Foxtail millet noodles — traditional grain, modern convenience.' },
    { id:75, name:'Millet Noodles (Sikappuvaragu)', unit:'200g',  price:60, category:'noodles', emoji:'🍜', description:'Red kodo millet noodles, a rare and nutritious grain in noodle form.' },
    { id:76, name:'Millet Noodles (Samai)',         unit:'200g',  price:60, category:'noodles', emoji:'🍜', description:'Little millet noodles, easy to cook and rich in fibre.' },
    { id:77, name:'Millet Noodles (Kambu)',         unit:'200g',  price:60, category:'noodles', emoji:'🍜', description:'Pearl millet noodles — high in iron and a great maida substitute.' },
    { id:78, name:'Millet Noodles (Ragi)',          unit:'200g',  price:60, category:'noodles', emoji:'🍜', description:'Finger millet noodles packed with calcium, great for kids and adults alike.' },
  ],
};

// ═══════════════════════════════════════════
//  RENDER FUNCTIONS
// ═══════════════════════════════════════════

/**
 * Renders a product grid with qty selector + Add to Cart button.
 * @param {Array}  products  - array of product objects
 * @param {string} query     - optional search filter string
 */
function renderProducts(products, query) {
  const q = (query || '').toLowerCase().trim();
  const filtered = q
    ? products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        (p.desc || p.description || '').toLowerCase().includes(q) ||
        (p.category || '').toLowerCase().includes(q))
    : products;

  if (!filtered.length) {
    return `<div class="empty-state" style="grid-column:1/-1">
              <div class="icon">🔍</div>
              <h3>No results for "${query}"</h3>
              <p>Try a different keyword.</p>
            </div>`;
  }

  return filtered.map(p => {
    const desc = p.desc || p.description || '';
    const badge = p.badge ? `<span class="product-badge">${p.badge}</span>` : '';
    const stars = '⭐'.repeat(p.rating || 5);
    return `
      <div class="product-card" id="card-${p.id}">
        ${badge}
        <div class="product-emoji">${p.emoji || '🌿'}</div>
        <h3 class="product-name">${p.name}</h3>
        ${desc ? `<p class="product-desc">${desc}</p>` : ''}
        <p class="product-unit">${p.unit || ''}</p>
        <div class="product-rating">${stars}</div>
        <div class="product-footer">
          <span class="product-price">₹${p.price}</span>
          <div class="qty-add-row">
            <div class="qty-controls card-qty">
              <button class="qty-btn" onclick="changeCardQty(${p.id}, -1)" aria-label="Decrease quantity">−</button>
              <span class="qty-num" id="qty-${p.id}">1</span>
              <button class="qty-btn" onclick="changeCardQty(${p.id}, +1)" aria-label="Increase quantity">+</button>
            </div>
            <button class="btn btn-primary add-to-cart-btn"
                    id="atc-${p.id}"
                    onclick="addToCart(${p.id}, '${p.name.replace(/'/g, "\\'")}')">
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>`;
  }).join('');
}

// ─── Qty change on product card ───────────────────────────────────────────────
function changeCardQty(productId, delta) {
  const el = document.getElementById('qty-' + productId);
  if (!el) return;
  let val = parseInt(el.textContent) + delta;
  if (val < 1) val = 1;
  if (val > 99) val = 99;
  el.textContent = val;
}

// ─── Add to cart ──────────────────────────────────────────────────────────────
async function addToCart(productId, name) {
  // Redirect to login if not authenticated
  if (typeof Auth !== 'undefined' && !Auth.isLoggedIn()) {
    window.location.href = 'login.html';
    return;
  }

  const qtyEl = document.getElementById('qty-' + productId);
  const btn   = document.getElementById('atc-' + productId);
  const qty   = parseInt(qtyEl ? qtyEl.textContent : 1);

  btn.disabled = true;
  btn.textContent = 'Adding…';

  try {
    await CartAPI.add(productId, qty);
    btn.textContent = '✅ Added!';
    btn.style.background = '#16a34a';
    if (typeof updateCartBadge === 'function') updateCartBadge();
    if (typeof showToast === 'function') showToast(`${name} added to cart!`);

    setTimeout(() => {
      btn.textContent = '🛒 Add to Cart';
      btn.style.background = '';
      btn.disabled = false;
      if (qtyEl) qtyEl.textContent = '1'; // reset qty to 1
    }, 1500);

  } catch (e) {
    btn.textContent = '❌ ' + (e.message || 'Failed');
    if (typeof showToast === 'function') showToast(e.message || 'Could not add to cart', true);
    setTimeout(() => {
      btn.textContent = '🛒 Add to Cart';
      btn.disabled = false;
    }, 1800);
  }
}
