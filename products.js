// ═══════════════════════════════════════════
//  AYINI — Product data for all category pages
// ═══════════════════════════════════════════

const PRODUCTS = {
  masala: [
    { id:1,  name:'Chicken Masala',       price:60,  unit:'100g',  rating:5, category:'Masala',      emoji:'🌶️', badge:'Best Seller' },
    { id:2,  name:'Mutton Masala',        price:65,  unit:'100g',  rating:5, category:'Masala',      emoji:'🌶️' },
    { id:3,  name:'Fish Masala',          price:55,  unit:'100g',  rating:5, category:'Masala',      emoji:'🌶️', badge:'Popular' },
    { id:4,  name:'Sambar Powder',        price:50,  unit:'200g',  rating:5, category:'Powder',      emoji:'🥘' },
    { id:5,  name:'Rasam Powder',         price:45,  unit:'100g',  rating:5, category:'Powder',      emoji:'🥘' },
    { id:6,  name:'Biryani Masala',       price:70,  unit:'100g',  rating:5, category:'Spice Blend', emoji:'🍛', badge:'New' },
    { id:4,  name:'Idly Podi',            price:15,  unit:'50g',   rating:5, category:'Powder',      emoji:'🫙' },
    { id:4,  name:'Malli Powder',         price:75,  unit:'250g',  rating:5, category:'Spice Blend', emoji:'🌿' },
    { id:6,  name:'Garam Masala',         price:100, unit:'50g',   rating:5, category:'Whole Spice', emoji:'🌶️' },
  ],
  rice: [
    { id:8,  name:'Karupu Kavuni',        price:250, unit:'1kg',   rating:5, category:'Rice',        emoji:'🍚', badge:'Traditional' },
    { id:8,  name:'Seeraga Samba',        price:110, unit:'1kg',   rating:5, category:'Rice',        emoji:'🍚' },
    { id:9,  name:'Kuthirai Vaali',       price:60,  unit:'500g',  rating:5, category:'Millet',      emoji:'🌾', badge:'Healthy' },
    { id:9,  name:'Samai',               price:60,  unit:'500g',  rating:5, category:'Millet',      emoji:'🌾' },
    { id:10, name:'Thinai',              price:50,  unit:'500g',  rating:5, category:'Millet',      emoji:'🌾' },
    { id:10, name:'Varagu',              price:60,  unit:'500g',  rating:5, category:'Millet',      emoji:'🌾' },
    { id:10, name:'Ragi',               price:40,  unit:'500g',  rating:5, category:'Millet',      emoji:'🌾', badge:'Iron Rich' },
    { id:10, name:'Kambu',              price:40,  unit:'500g',  rating:5, category:'Millet',      emoji:'🌾' },
    { id:10, name:'Ellu',              price:115, unit:'500g',  rating:5, category:'Seeds',       emoji:'🫘' },
    { id:10, name:'White Solam',        price:40,  unit:'500g',  rating:5, category:'Grain',       emoji:'🌽' },
    { id:10, name:'Kollu',             price:40,  unit:'500g',  rating:5, category:'Legume',      emoji:'🫘' },
    { id:10, name:'Paasi Payaru',       price:70,  unit:'500g',  rating:5, category:'Legume',      emoji:'🫘' },
    { id:7,  name:'Idly Maavu (Batter)',price:10,  unit:'per kg', rating:5, category:'Batter',     emoji:'🫓', badge:'Fresh Daily' },
  ],
  soap: [
    { id:11, name:'Nalangu Maavu',       price:70,  unit:'500g',  rating:5, category:'Powder',      emoji:'🧴', badge:'Traditional' },
    { id:11, name:'Kattralai (Aloe)',    price:70,  unit:'100ml', rating:5, category:'Gel',         emoji:'🌿' },
    { id:11, name:'Kuppaimeni',          price:70,  unit:'bar',   rating:5, category:'Soap',        emoji:'🧼' },
    { id:11, name:'Neem Soap',           price:70,  unit:'bar',   rating:5, category:'Soap',        emoji:'🧼', badge:'Antibacterial' },
    { id:11, name:'Kasthuri Manjal',     price:70,  unit:'bar',   rating:5, category:'Soap',        emoji:'🧼' },
    { id:11, name:'Sandalwood Soap',     price:70,  unit:'bar',   rating:5, category:'Soap',        emoji:'🧼', badge:'Luxury' },
    { id:11, name:'Seeyarkkai',          price:190, unit:'250g',  rating:5, category:'Powder',      emoji:'🧴' },
    { id:11, name:'Herbal Hair Oil',     price:75,  unit:'100ml', rating:5, category:'Oil',         emoji:'💧' },
    { id:11, name:'Tulsi Soap',          price:70,  unit:'bar',   rating:5, category:'Soap',        emoji:'🧼' },
    { id:11, name:'Arrapu Sampoo Bar',   price:70,  unit:'bar',   rating:5, category:'Soap',        emoji:'🧼' },
    { id:11, name:'Sandal Leaf Soap',    price:70,  unit:'bar',   rating:5, category:'Soap',        emoji:'🧼' },
    { id:11, name:'Multanimetti',        price:70,  unit:'100g',  rating:5, category:'Clay',        emoji:'🪨' },
    { id:11, name:'Vettiver Soap',       price:70,  unit:'bar',   rating:5, category:'Soap',        emoji:'🧼' },
    { id:11, name:'Soapnut Bar',         price:70,  unit:'bar',   rating:5, category:'Soap',        emoji:'🧼', badge:'Natural' },
  ],
  oil: [
    { id:17, name:'Coconut Oil (500ml)', price:175, unit:'500ml', rating:5, category:'Oil',         emoji:'🥥', badge:'Cold Press' },
    { id:17, name:'Coconut Oil (1 lt)',  price:340, unit:'1 litre',rating:5,category:'Oil',         emoji:'🥥' },
    { id:15, name:'Groundnut Oil (500ml)',price:130,unit:'500ml', rating:5, category:'Oil',         emoji:'🥜', badge:'Traditional' },
    { id:16, name:'Sesame Oil',          price:220, unit:'500ml', rating:5, category:'Oil',         emoji:'🌾' },
  ],
};
