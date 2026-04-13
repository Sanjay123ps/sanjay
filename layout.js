// js/layout.js — injects shared header & footer into every page

function renderHeader(activePage) {
  const user = window.Auth && Auth.isLoggedIn() ? Auth.getUser() : null;
  return `
  <header class="site-header">
    <div class="header-top">
      <a href="index.html" class="logo">
        <img src="https://raw.githubusercontent.com/Sanjay123ps/ayini-website/main/AYINI.png" alt="Ayini Logo">
        <div class="logo-text">
          <strong>Ayini Home <span style="color:var(--amber)">Products</span></strong>
          <span>From Our Kitchen to Yours</span>
        </div>
      </a>
      <form class="search-form" onsubmit="handleSearch(event)">
        <input type="search" id="searchInput" placeholder="Search products…" aria-label="Search">
        <button type="submit">Search</button>
      </form>
      <nav class="header-actions">
        <a href="${user ? '#' : 'login.html'}" id="loginLink" onclick="${user ? 'if(confirm(\'Logout?\'))Auth.logout()' : ''}">${user ? 'Hi, ' + user.name.split(' ')[0] : 'Login'}</a>
        <a href="cart.html" class="cart-btn">🛒 Cart <span class="cart-badge" id="cartBadge">0</span></a>
      </nav>
    </div>
    <nav class="site-nav" aria-label="Main navigation">
      <div class="nav-inner">
        <a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a>
        <div class="nav-dropdown">
          <a href="#" ${activePage==='cat'?'class="active"':''}>Categories ▾</a>
          <ul class="nav-dropdown-menu">
            <li><a href="masala.html">🌶️ Masalas</a></li>
            <li><a href="rice.html">🍚 Rice & Millets</a></li>
            <li><a href="soap.html">🧼 Herbal Soaps</a></li>
            <li><a href="oil.html">🫙 Cold Press Oils</a></li>
          </ul>
        </div>
        <a href="index.html#about">About Us</a>
        <a href="contact.html" ${activePage==='contact'?'class="active"':''}>Contact</a>
      </div>
    </nav>
  </header>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="https://raw.githubusercontent.com/Sanjay123ps/ayini-website/main/AYINI.png" alt="Ayini">
            <span>Ayini Home Products</span>
          </div>
          <p>Traditional homemade products from Coimbatore — masalas, millets, herbal soaps and cold-press oils.</p>
          <div class="social-row">
            <a href="https://www.instagram.com/ayini_home_products/" target="_blank" class="social-icon ig" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61573521272015" target="_blank" class="social-icon fb" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://wa.me/917397130039" target="_blank" class="social-icon wa" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Shop</h4>
          <ul>
            <li><a href="masala.html">Masalas</a></li>
            <li><a href="rice.html">Rice & Millets</a></li>
            <li><a href="soap.html">Herbal Soaps</a></li>
            <li><a href="oil.html">Cold Press Oils</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Account</h4>
          <ul>
            <li><a href="login.html">Login</a></li>
            <li><a href="signup.html">Register</a></li>
            <li><a href="cart.html">My Cart</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+917397130039">📞 +91 73971 30039</a></li>
            <li><a href="mailto:ayinihomeproducts@gmail.com">✉️ Email Us</a></li>
            <li><a href="https://wa.me/917397130039">💬 WhatsApp</a></li>
          </ul>
          <p style="margin-top:12px;font-size:.8rem;color:#6b7280;">PeriyanaickenPalayam,<br>Coimbatore, Tamil Nadu</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 Ayini Home Products. All rights reserved. Made with ❤️ in Coimbatore</p>
      </div>
    </div>
  </footer>`;
}

// Render a product card HTML string
function productCardHTML(p) {
  return `
  <article class="product-card" id="card-${p.id}">
    <div class="product-card-img">${p.emoji || '🌿'}
      ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
    </div>
    <div class="product-card-body">
      <p class="product-category">${p.category}</p>
      <h3 class="product-name">${p.name}</h3>
      <div class="product-rating">${'★'.repeat(p.rating || 5)}</div>
      <p class="product-price">₹${p.price}</p>
      <p class="product-unit">per ${p.unit}</p>
      <div class="qty-add-row">
        <div class="qty-controls card-qty">
          <button class="qty-btn" onclick="changeCardQty(${p.id}, -1)" aria-label="Decrease">−</button>
          <span class="qty-num" id="qty-${p.id}">1</span>
          <button class="qty-btn" onclick="changeCardQty(${p.id}, +1)" aria-label="Increase">+</button>
        </div>
        <button class="btn btn-primary add-to-cart-btn"
                id="atc-${p.id}"
                onclick="addToCart(${p.id}, '${p.name.replace(/'/g, "\\'")}')">
          🛒 Add to Cart
        </button>
      </div>
    </div>
  </article>`;
}

// Qty − / + on product card
function changeCardQty(productId, delta) {
  const el = document.getElementById('qty-' + productId);
  if (!el) return;
  let val = parseInt(el.textContent) + delta;
  if (val < 1) val = 1;
  if (val > 99) val = 99;
  el.textContent = val;
}

// Add to cart from product card
async function addToCart(productId, name) {
  if (!Auth.isLoggedIn()) {
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
    updateCartBadge();
    showToast(name + ' added to cart!');
    setTimeout(() => {
      btn.textContent = '🛒 Add to Cart';
      btn.style.background = '';
      btn.disabled = false;
      if (qtyEl) qtyEl.textContent = '1';
    }, 1500);
  } catch (e) {
    btn.textContent = '❌ ' + (e.message || 'Failed');
    showToast(e.message || 'Could not add to cart', true);
    setTimeout(() => {
      btn.textContent = '🛒 Add to Cart';
      btn.disabled = false;
    }, 1800);
  }
}

// Render product grid with search filter
function renderProducts(products, searchTerm = '') {
  const term = searchTerm.toLowerCase().trim();
  const filtered = term
    ? products.filter(p => p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term))
    : products;

  if (!filtered.length) {
    return `<div class="empty-state" style="grid-column:1/-1">
      <div class="icon">🔍</div>
      <h3>No products found for "${searchTerm}"</h3>
      <p>Try a different search term</p>
    </div>`;
  }
  return filtered.map(productCardHTML).join('');
}

function handleSearch(e) {
  e.preventDefault();
  const q = document.getElementById('searchInput').value.trim();
  const grid = document.getElementById('productGrid');

  if (grid && window.PAGE_PRODUCTS) {
    // Category page — search within that category only
    grid.innerHTML = renderProducts(window.PAGE_PRODUCTS, q);
  } else if (q && typeof PRODUCTS !== 'undefined') {
    // Index page — search across ALL categories
    const allProducts = Object.values(PRODUCTS).flat();
    const term = q.toLowerCase();
    const results = allProducts.filter(p =>
      p.name.toLowerCase().includes(term) ||
      (p.category || '').toLowerCase().includes(term) ||
      (p.desc || p.description || '').toLowerCase().includes(term)
    );

    // Show results in a search results overlay/section
    let resultsSection = document.getElementById('searchResultsSection');
    if (!resultsSection) {
      resultsSection = document.createElement('section');
      resultsSection.id = 'searchResultsSection';
      resultsSection.className = 'section';
      resultsSection.style.cssText = 'background:var(--cream);padding-top:32px;';
      resultsSection.innerHTML = `
        <div class="container">
          <div class="section-header" style="margin-bottom:24px;">
            <h2 id="searchResultsTitle"></h2>
            <button onclick="document.getElementById('searchResultsSection').remove();document.getElementById('searchInput').value='';"
              style="margin-top:8px;background:none;border:1.5px solid var(--gray-200);padding:6px 16px;border-radius:var(--radius);cursor:pointer;font-size:.85rem;color:var(--gray-600);">
              ✕ Clear Search
            </button>
          </div>
          <div class="product-grid" id="searchResultsGrid"></div>
        </div>`;
      // Insert after hero section
      const hero = document.querySelector('.hero') || document.querySelector('.page-hero');
      if (hero && hero.nextSibling) {
        hero.parentNode.insertBefore(resultsSection, hero.nextSibling);
      } else {
        document.body.appendChild(resultsSection);
      }
    }

    document.getElementById('searchResultsTitle').textContent =
      results.length ? `Search results for "${q}" (${results.length} found)` : `No results for "${q}"`;
    document.getElementById('searchResultsGrid').innerHTML =
      results.length ? results.map(productCardHTML).join('') :
      `<div class="empty-state" style="grid-column:1/-1"><div class="icon">🔍</div><h3>No products found</h3><p>Try a different keyword.</p></div>`;

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
