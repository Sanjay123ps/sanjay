// ═══════════════════════════════════════════
//  AYINI — API & Shared JS
//  Change API_BASE when you deploy backend
// ═══════════════════════════════════════════

const API_BASE = 'http://localhost:5000/api';

// ── Auth helpers ─────────────────────────────
const Auth = {
  getToken : () => localStorage.getItem('ayini_token'),
  getUser  : () => JSON.parse(localStorage.getItem('ayini_user') || 'null'),
  isLoggedIn: () => !!localStorage.getItem('ayini_token'),
  setSession(token, user) {
    localStorage.setItem('ayini_token', token);
    localStorage.setItem('ayini_user', JSON.stringify(user));
  },
  logout() {
    localStorage.removeItem('ayini_token');
    localStorage.removeItem('ayini_user');
    window.location.href = 'login.html';
  }
};

// ── Fetch wrapper ────────────────────────────
async function apiFetch(endpoint, options = {}) {
  const token = Auth.getToken();
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(`${API_BASE}${endpoint}`, { ...options, headers });
  const data = await res.json();
  if (!res.ok) throw { status: res.status, message: data.error || 'Request failed' };
  return data;
}

// ── API modules ──────────────────────────────
const AuthAPI = {
  login    : (email, password)         => apiFetch('/auth/login', { method:'POST', body: JSON.stringify({email,password}) }),
  register : (name, email, password, phone) => apiFetch('/auth/register', { method:'POST', body: JSON.stringify({name,email,password,phone}) }),
  me       : ()                        => apiFetch('/auth/me'),
  forgot   : (email)                   => apiFetch('/auth/forgot-password', { method:'POST', body: JSON.stringify({email}) }),
};

const CartAPI = {
  get      : ()                        => apiFetch('/cart'),
  add      : (product_id, quantity)    => apiFetch('/cart', { method:'POST', body: JSON.stringify({product_id,quantity}) }),
  remove   : (productId)              => apiFetch(`/cart/${productId}`, { method:'DELETE' }),
  clear    : ()                        => apiFetch('/cart', { method:'DELETE' }),
  coupon   : (code)                    => apiFetch('/cart/coupon', { method:'POST', body: JSON.stringify({code}) }),
};

const OrdersAPI = {
  place    : (address_id, payment_method, extra) => apiFetch('/orders', { method:'POST', body: JSON.stringify({address_id,payment_method,...extra}) }),
  mine     : ()                        => apiFetch('/orders/my'),
  get      : (id)                      => apiFetch(`/orders/${id}`),
};

const AddressAPI = {
  getAll   : ()                        => apiFetch('/addresses'),
  add      : (data)                    => apiFetch('/addresses', { method:'POST', body: JSON.stringify(data) }),
};

const ContactAPI = {
  send     : (name,email,phone,subject,message) => apiFetch('/contact', { method:'POST', body: JSON.stringify({name,email,phone,subject,message}) }),
};

// ── Buy Now ───────────────────────────────────
function buyNow(productId) {
  if (!Auth.isLoggedIn()) {
    if (confirm('Please login first to place an order. Go to login page?')) {
      window.location.href = 'login.html';
    }
    return;
  }
  const btn = event.currentTarget;
  const orig = btn.textContent;
  btn.textContent = 'Adding…'; btn.disabled = true;
  CartAPI.add(parseInt(productId), 1)
    .then(() => { window.location.href = 'checkout.html'; })
    .catch(err => {
      showToast(err.message, true);
      btn.textContent = orig; btn.disabled = false;
    });
}

// ── Cart badge ────────────────────────────────
async function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge || !Auth.isLoggedIn()) return;
  try {
    const cart = await CartAPI.get();
    badge.textContent = cart.item_count || 0;
  } catch {}
}

// ── Toast notification ────────────────────────
function showToast(message, isError = false) {
  let toast = document.getElementById('ayiniToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'ayiniToast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = 'toast' + (isError ? ' error' : '');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ── Init on every page ────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Update login link
  const loginLink = document.getElementById('loginLink');
  if (loginLink && Auth.isLoggedIn()) {
    const user = Auth.getUser();
    loginLink.textContent = `Hi, ${user?.name?.split(' ')[0] || 'You'}`;
  }
  // Cart badge
  updateCartBadge();
});
