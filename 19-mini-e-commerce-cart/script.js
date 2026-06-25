const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 499,
    image: "https://picsum.photos/300?random=1",
  },
  {
    id: 2,
    name: "Gaming Keyboard",
    price: 999,
    image: "https://picsum.photos/300?random=2",
  },
  {
    id: 3,
    name: "Bluetooth Headphones",
    price: 1499,
    image: "https://picsum.photos/300?random=3",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 2499,
    image: "https://picsum.photos/300?random=4",
  },
  {
    id: 5,
    name: "Power Bank",
    price: 899,
    image: "https://picsum.photos/300?random=5",
  },
  {
    id: 6,
    name: "Laptop Stand",
    price: 799,
    image: "https://picsum.photos/300?random=6",
  },
  {
    id: 7,
    name: "USB Hub",
    price: 599,
    image: "https://picsum.photos/300?random=7",
  },
  {
    id: 8,
    name: "Portable Speaker",
    price: 1799,
    image: "https://picsum.photos/300?random=8",
  },
  {
    id: 9,
    name: "Webcam HD",
    price: 1299,
    image: "https://picsum.photos/300?random=9",
  },
  {
    id: 10,
    name: "Gaming Chair",
    price: 7999,
    image: "https://picsum.photos/300?random=10",
  },
  {
    id: 11,
    name: "Mechanical Keyboard",
    price: 2499,
    image: "https://picsum.photos/300?random=11",
  },
  {
    id: 12,
    name: "Wireless Earbuds",
    price: 1999,
    image: "https://picsum.photos/300?random=12",
  },
  {
    id: 13,
    name: "Monitor 24 Inch",
    price: 10999,
    image: "https://picsum.photos/300?random=13",
  },
  {
    id: 14,
    name: "Tablet",
    price: 14999,
    image: "https://picsum.photos/300?random=14",
  },
  {
    id: 15,
    name: "Smartphone",
    price: 24999,
    image: "https://picsum.photos/300?random=15",
  },
  {
    id: 16,
    name: "DSLR Camera",
    price: 34999,
    image: "https://picsum.photos/300?random=16",
  },
  {
    id: 17,
    name: "Gaming Monitor",
    price: 15999,
    image: "https://picsum.photos/300?random=17",
  },
  {
    id: 18,
    name: "External SSD",
    price: 5999,
    image: "https://picsum.photos/300?random=18",
  },
  {
    id: 19,
    name: "Fitness Band",
    price: 2999,
    image: "https://picsum.photos/300?random=19",
  },
  {
    id: 20,
    name: "Wireless Printer",
    price: 8999,
    image: "https://picsum.photos/300?random=20",
  },
  {
    id: 21,
    name: "iPad Air",
    price: 54999,
    image: "https://picsum.photos/300?random=21",
  },
  {
    id: 22,
    name: "MacBook Air",
    price: 89999,
    image: "https://picsum.photos/300?random=22",
  },
  {
    id: 23,
    name: "Dell Inspiron Laptop",
    price: 65999,
    image: "https://picsum.photos/300?random=23",
  },
  {
    id: 24,
    name: "Sony WH-1000XM5",
    price: 29999,
    image: "https://picsum.photos/300?random=24",
  },
  {
    id: 25,
    name: "Apple Watch Series 9",
    price: 41999,
    image: "https://picsum.photos/300?random=25",
  },
  {
    id: 26,
    name: "Logitech MX Master 3S",
    price: 8999,
    image: "https://picsum.photos/300?random=26",
  },
  {
    id: 27,
    name: "ASUS Gaming Laptop",
    price: 99999,
    image: "https://picsum.photos/300?random=27",
  },
  {
    id: 28,
    name: "Samsung 55-inch Smart TV",
    price: 64999,
    image: "https://picsum.photos/300?random=28",
  },
  {
    id: 29,
    name: "Amazon Echo Dot",
    price: 4499,
    image: "https://picsum.photos/300?random=29",
  },
  {
    id: 30,
    name: "HP Wireless Printer",
    price: 11999,
    image: "https://picsum.photos/300?random=30",
  },
  {
    id: 31,
    name: "OnePlus 12",
    price: 64999,
    image: "https://picsum.photos/300?random=31",
  },
  {
    id: 32,
    name: "Nothing Phone 2",
    price: 44999,
    image: "https://picsum.photos/300?random=32",
  },
  {
    id: 33,
    name: "Samsung Galaxy S24",
    price: 79999,
    image: "https://picsum.photos/300?random=33",
  },
  {
    id: 34,
    name: "iPhone 15",
    price: 79999,
    image: "https://picsum.photos/300?random=34",
  },
  {
    id: 35,
    name: "Lenovo ThinkPad",
    price: 72999,
    image: "https://picsum.photos/300?random=35",
  },
  {
    id: 36,
    name: "Acer Predator Laptop",
    price: 114999,
    image: "https://picsum.photos/300?random=36",
  },
  {
    id: 37,
    name: "MSI Gaming Laptop",
    price: 124999,
    image: "https://picsum.photos/300?random=37",
  },
  {
    id: 38,
    name: "Boat Rockerz Headphones",
    price: 1999,
    image: "https://picsum.photos/300?random=38",
  },
  {
    id: 39,
    name: "Sony Soundbar",
    price: 14999,
    image: "https://picsum.photos/300?random=39",
  },
  {
    id: 40,
    name: "JBL Party Speaker",
    price: 24999,
    image: "https://picsum.photos/300?random=40",
  },
  {
    id: 41,
    name: "Apple Magic Keyboard",
    price: 9999,
    image: "https://picsum.photos/300?random=41",
  },
  {
    id: 42,
    name: "Razer Gaming Mouse",
    price: 5999,
    image: "https://picsum.photos/300?random=42",
  },
  {
    id: 43,
    name: "Corsair Mechanical Keyboard",
    price: 7999,
    image: "https://picsum.photos/300?random=43",
  },
  {
    id: 44,
    name: "LG UltraWide Monitor",
    price: 28999,
    image: "https://picsum.photos/300?random=44",
  },
  {
    id: 45,
    name: "BenQ Gaming Monitor",
    price: 21999,
    image: "https://picsum.photos/300?random=45",
  },
  {
    id: 46,
    name: "Canon Pixma Printer",
    price: 8999,
    image: "https://picsum.photos/300?random=46",
  },
  {
    id: 47,
    name: "Epson EcoTank Printer",
    price: 18999,
    image: "https://picsum.photos/300?random=47",
  },
  {
    id: 48,
    name: "GoPro Hero 12",
    price: 39999,
    image: "https://picsum.photos/300?random=48",
  },
  {
    id: 49,
    name: "DJI Mini Drone",
    price: 69999,
    image: "https://picsum.photos/300?random=49",
  },
  {
    id: 50,
    name: "Meta Quest 3 VR Headset",
    price: 54999,
    image: "https://picsum.photos/300?random=50",
  },
];

const productsContainer = document.getElementById("products");
const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");
const cartCount = document.getElementById("cartCount");
let cart = [];

/* DISPLAY PRODUCTS */

function displayProducts() {
  productsContainer.innerHTML = "";
  products.forEach((product) => {
    productsContainer.innerHTML += `
        <div class="product-card">
            <img
                src="${product.image}"
                alt="${product.name}"
            >
            <div class="product-content">
                <span class="badge">
                    Electronics
                </span>
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <button
                    onclick="addToCart(${product.id})"
                >
                    🛒 Add To Cart
                </button>
            </div>
        </div>
        `;
  });
}

/* ADD TO CART */

function addToCart(id) {
  const product = products.find((item) => item.id === id);
  const existingItem = cart.find((item) => item.id === id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }
  updateCart();
}

/* UPDATE CART */

function updateCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="empty-cart">
            🛒 Your cart is empty
        </p>`;
    totalPrice.textContent = "Total: ₹0";
    cartCount.textContent = 0;
    return;
  }

  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
    cartItems.innerHTML += `
        <div class="cart-item">
            <div>
                <h4>${item.name}</h4>
                <p>
                    ₹${item.price}
                    ×
                    ${item.quantity}
                </p>
            </div>
            <div class="quantity-buttons">
                <button
                    onclick="decreaseQuantity(${item.id})"
                >-</button>
                <button
                    onclick="increaseQuantity(${item.id})"
                >+</button>
            </div>
        </div>
        `;
  });

  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  totalPrice.textContent = `Total: ₹${total}`;
}

/* INCREASE QUANTITY */

function increaseQuantity(id) {
  const item = cart.find((product) => product.id === id);
  item.quantity++;
  updateCart();
}

/* DECREASE QUANTITY */

function decreaseQuantity(id) {
  const item = cart.find((product) => product.id === id);
  item.quantity--;
  if (item.quantity === 0) {
    cart = cart.filter((product) => product.id !== id);
  }
  updateCart();
}
/* INITIAL LOAD */

displayProducts();
