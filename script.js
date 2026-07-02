// ============================================
// MAMA NJERI'S HOTEL - COMPLETE JAVASCRIPT
// ============================================

// ============================================
// ===== BREAKFAST DATA (38 Items) =====
// ============================================
const breakfastItems = [
    // === ORIGINAL BREAKFAST ITEMS ===
    { id: 1, name: "Samosa", price: 50, category: "breakfast", type: "main",
      image: "images/samosa.jpg", 
      nutrition: "🔥 Calories: 150 | Carbs: 18g | Protein: 4g | Fat: 6g",
      time: 10 },
    { id: 2, name: "Omelette", price: 80, category: "breakfast", type: "main",
      image: "images/omelette.jpg",
      nutrition: "🔥 Calories: 220 | Carbs: 2g | Protein: 14g | Fat: 16g",
      time: 8 },
    { id: 3, name: "Boiled Eggs (2pcs)", price: 50, category: "breakfast", type: "main",
      image: "images/boiled-eggs.jpg",
      nutrition: "🔥 Calories: 140 | Carbs: 1g | Protein: 12g | Fat: 10g",
      time: 10 },
    { id: 4, name: "Smokie", price: 50, category: "breakfast", type: "main",
      image: "images/smokie.jpg",
      nutrition: "🔥 Calories: 180 | Carbs: 10g | Protein: 8g | Fat: 12g",
      time: 7 },
    { id: 5, name: "Fried Eggs (2pcs)", price: 60, category: "breakfast", type: "main",
      image: "images/fried-eggs.jpg",
      nutrition: "🔥 Calories: 160 | Carbs: 1g | Protein: 13g | Fat: 12g",
      time: 6 },
    { id: 6, name: "Black Tea", price: 20, category: "breakfast", type: "drinks",
      image: "images/black-tea.jpg",
      nutrition: "🔥 Calories: 5 | Carbs: 0g | Protein: 0g | Fat: 0g",
      time: 3 },
    { id: 7, name: "Kenyan Tea (Chai)", price: 40, category: "breakfast", type: "drinks",
      image: "images/kenyan-tea.jpg",
      nutrition: "🔥 Calories: 60 | Carbs: 8g | Protein: 2g | Fat: 2g",
      time: 5 },
    { id: 8, name: "Mango Juice", price: 50, category: "breakfast", type: "drinks",
      image: "images/mango-juice.jpg",
      nutrition: "🔥 Calories: 120 | Carbs: 28g | Protein: 1g | Fat: 0g",
      time: 5 },
    { id: 9, name: "Pineapple Juice", price: 50, category: "breakfast", type: "drinks",
      image: "images/pineapple-juice.jpg",
      nutrition: "🔥 Calories: 110 | Carbs: 26g | Protein: 1g | Fat: 0g",
      time: 5 },
    { id: 10, name: "Orange Juice", price: 50, category: "breakfast", type: "drinks",
      image: "images/orange-juice.jpg",
      nutrition: "🔥 Calories: 100 | Carbs: 24g | Protein: 1g | Fat: 0g",
      time: 5 },
    { id: 11, name: "Banana Juice", price: 50, category: "breakfast", type: "drinks",
      image: "images/banana-juice.jpg",
      nutrition: "🔥 Calories: 130 | Carbs: 30g | Protein: 1g | Fat: 0g",
      time: 5 },
    { id: 12, name: "Cake", price: 30, category: "breakfast", type: "sides",
      image: "images/cake.jpg",
      nutrition: "🔥 Calories: 200 | Carbs: 28g | Protein: 3g | Fat: 8g",
      time: 5 },
    { id: 13, name: "Chapati", price: 30, category: "breakfast", type: "main",
      image: "images/chapati.jpg",
      nutrition: "🔥 Calories: 180 | Carbs: 25g | Protein: 4g | Fat: 6g",
      time: 12 },
    { id: 14, name: "Mahamri", price: 30, category: "breakfast", type: "sides",
      image: "images/mahamri.jpg",
      nutrition: "🔥 Calories: 160 | Carbs: 22g | Protein: 3g | Fat: 6g",
      time: 12 },
    { id: 15, name: "Sausage", price: 70, category: "breakfast", type: "main",
      image: "images/sausage.jpg",
      nutrition: "🔥 Calories: 200 | Carbs: 5g | Protein: 12g | Fat: 15g",
      time: 8 },
    { id: 16, name: "Uji (Porridge)", price: 40, category: "breakfast", type: "healthy",
      image: "images/uji.jpg",
      nutrition: "🔥 Calories: 150 | Carbs: 30g | Protein: 3g | Fat: 1g",
      time: 10 },
    { id: 17, name: "Instant Coffee", price: 30, category: "breakfast", type: "drinks",
      image: "images/coffee.jpg",
      nutrition: "🔥 Calories: 10 | Carbs: 0g | Protein: 0g | Fat: 0g",
      time: 3 },
    { id: 18, name: "Fruit Salad", price: 60, category: "breakfast", type: "healthy",
      image: "images/fruit-salad.jpg",
      nutrition: "🔥 Calories: 140 | Carbs: 32g | Protein: 2g | Fat: 1g",
      time: 8 },
    // === EXTRA BREAKFAST DISHES (20 more) ===
    { id: 19, name: "Arrowroots (Nduma)", price: 80, category: "breakfast", type: "healthy",
      image: "images/arrowroots.jpg",
      nutrition: "🔥 Calories: 180 | Carbs: 40g | Protein: 2g | Fat: 0g",
      time: 20 },
    { id: 20, name: "Sweet Potatoes", price: 70, category: "breakfast", type: "healthy",
      image: "images/sweet-potatoes.jpg",
      nutrition: "🔥 Calories: 160 | Carbs: 36g | Protein: 2g | Fat: 0g",
      time: 20 },
    { id: 21, name: "Cassava (Muhogo)", price: 60, category: "breakfast", type: "healthy",
      image: "images/cassava.jpg",
      nutrition: "🔥 Calories: 150 | Carbs: 34g | Protein: 1g | Fat: 0g",
      time: 20 },
    { id: 22, name: "Githeri", price: 100, category: "breakfast", type: "main",
      image: "images/githeri.jpg",
      nutrition: "🔥 Calories: 220 | Carbs: 35g | Protein: 10g | Fat: 4g",
      time: 15 },
    { id: 23, name: "Mukimo", price: 120, category: "breakfast", type: "main",
      image: "images/mukimo.jpg",
      nutrition: "🔥 Calories: 250 | Carbs: 40g | Protein: 6g | Fat: 8g",
      time: 25 },
    { id: 24, name: "Matoke (Green Bananas)", price: 100, category: "breakfast", type: "main",
      image: "images/matoke.jpg",
      nutrition: "🔥 Calories: 190 | Carbs: 38g | Protein: 3g | Fat: 2g",
      time: 20 },
    { id: 25, name: "Millet Porridge", price: 50, category: "breakfast", type: "healthy",
      image: "images/millet-porridge.jpg",
      nutrition: "🔥 Calories: 170 | Carbs: 34g | Protein: 4g | Fat: 2g",
      time: 12 },
    { id: 26, name: "Oatmeal", price: 60, category: "breakfast", type: "healthy",
      image: "images/oatmeal.jpg",
      nutrition: "🔥 Calories: 160 | Carbs: 28g | Protein: 6g | Fat: 3g",
      time: 8 },
    { id: 27, name: "Pancakes (2pcs)", price: 80, category: "breakfast", type: "main",
      image: "images/pancakes.jpg",
      nutrition: "🔥 Calories: 240 | Carbs: 30g | Protein: 6g | Fat: 10g",
      time: 12 },
    { id: 28, name: "French Toast", price: 90, category: "breakfast", type: "main",
      image: "images/french-toast.jpg",
      nutrition: "🔥 Calories: 220 | Carbs: 24g | Protein: 8g | Fat: 10g",
      time: 10 },
    { id: 29, name: "Baked Beans on Toast", price: 100, category: "breakfast", type: "main",
      image: "images/baked-beans.jpg",
      nutrition: "🔥 Calories: 200 | Carbs: 30g | Protein: 10g | Fat: 5g",
      time: 8 },
    { id: 30, name: "Sausage & Egg Breakfast", price: 130, category: "breakfast", type: "main",
      image: "images/sausage-egg.jpg",
      nutrition: "🔥 Calories: 350 | Carbs: 10g | Protein: 22g | Fat: 25g",
      time: 12 },
    { id: 31, name: "Full Kenyan Breakfast", price: 250, category: "breakfast", type: "main",
      image: "images/full-kenyan.jpg",
      nutrition: "🔥 Calories: 500 | Carbs: 50g | Protein: 25g | Fat: 22g",
      time: 20 },
    { id: 32, name: "Spiced Tea (Masala Chai)", price: 50, category: "breakfast", type: "drinks",
      image: "images/masala-chai.jpg",
      nutrition: "🔥 Calories: 70 | Carbs: 10g | Protein: 2g | Fat: 2g",
      time: 5 },
    { id: 33, name: "Yogurt Parfait", price: 100, category: "breakfast", type: "healthy",
      image: "images/yogurt-parfait.jpg",
      nutrition: "🔥 Calories: 180 | Carbs: 24g | Protein: 10g | Fat: 5g",
      time: 5 },
    { id: 34, name: "Smoothie Bowl", price: 120, category: "breakfast", type: "healthy",
      image: "images/smoothie-bowl.jpg",
      nutrition: "🔥 Calories: 200 | Carbs: 30g | Protein: 8g | Fat: 6g",
      time: 8 },
    { id: 35, name: "Avocado Toast", price: 150, category: "breakfast", type: "healthy",
      image: "images/avocado-toast.jpg",
      nutrition: "🔥 Calories: 280 | Carbs: 22g | Protein: 8g | Fat: 18g",
      time: 5 },
    { id: 36, name: "Plantain (Matoke)", price: 80, category: "breakfast", type: "main",
      image: "images/plantain.jpg",
      nutrition: "🔥 Calories: 170 | Carbs: 38g | Protein: 2g | Fat: 0g",
      time: 15 },
    { id: 37, name: "Doughnuts (3pcs)", price: 60, category: "breakfast", type: "sides",
      image: "images/doughnuts.jpg",
      nutrition: "🔥 Calories: 300 | Carbs: 35g | Protein: 5g | Fat: 15g",
      time: 10 },
    { id: 38, name: "Bread & Butter", price: 50, category: "breakfast", type: "sides",
      image: "images/bread-butter.jpg",
      nutrition: "🔥 Calories: 180 | Carbs: 22g | Protein: 4g | Fat: 8g",
      time: 3 }
];

// ============================================
// ===== LUNCH DATA (21 Items) =====
// ============================================
const lunchItems = [
    // === ORIGINAL LUNCH ITEMS ===
    { id: 101, name: "Chapati Beans", price: 100, category: "lunch", type: "chapati",
      image: "images/chapati-beans.jpg",
      nutrition: "🔥 Calories: 380 | Carbs: 50g | Protein: 15g | Fat: 12g",
      time: 15 },
    { id: 102, name: "Chapati Ndengu", price: 100, category: "lunch", type: "chapati",
      image: "images/chapati-ndengu.jpg",
      nutrition: "🔥 Calories: 370 | Carbs: 48g | Protein: 14g | Fat: 12g",
      time: 15 },
    { id: 103, name: "Chapati Njahi", price: 100, category: "lunch", type: "chapati",
      image: "images/chapati-njahi.jpg",
      nutrition: "🔥 Calories: 390 | Carbs: 50g | Protein: 16g | Fat: 12g",
      time: 15 },
    { id: 104, name: "Chapati Beef Stew", price: 250, category: "lunch", type: "chapati",
      image: "images/chapati-beef.jpg",
      nutrition: "🔥 Calories: 450 | Carbs: 45g | Protein: 28g | Fat: 18g",
      time: 20 },
    { id: 105, name: "Rice Beef Stew + Soda", price: 300, category: "lunch", type: "rice",
      image: "images/rice-beef.jpg",
      nutrition: "🔥 Calories: 550 | Carbs: 60g | Protein: 30g | Fat: 20g",
      time: 20 },
    { id: 106, name: "Chips & Fried Chicken", price: 300, category: "lunch", type: "main",
      image: "images/chips-chicken.jpg",
      nutrition: "🔥 Calories: 620 | Carbs: 50g | Protein: 35g | Fat: 28g",
      time: 18 },
    { id: 107, name: "Chips & Lamb Chops", price: 350, category: "lunch", type: "main",
      image: "images/chips-lamb.jpg",
      nutrition: "🔥 Calories: 650 | Carbs: 48g | Protein: 38g | Fat: 30g",
      time: 22 },
    { id: 108, name: "Rice Beans", price: 100, category: "lunch", type: "rice",
      image: "images/rice-beans.jpg",
      nutrition: "🔥 Calories: 350 | Carbs: 55g | Protein: 12g | Fat: 8g",
      time: 12 },
    { id: 109, name: "Pilau + Soda", price: 300, category: "lunch", type: "rice",
      image: "images/pilau.jpg",
      nutrition: "🔥 Calories: 480 | Carbs: 58g | Protein: 20g | Fat: 15g",
      time: 25 },
    { id: 110, name: "Shawarma", price: 350, category: "lunch", type: "main",
      image: "images/shawarma.jpg",
      nutrition: "🔥 Calories: 400 | Carbs: 35g | Protein: 25g | Fat: 18g",
      time: 15 },
    { id: 111, name: "Rice Chicken", price: 500, category: "lunch", type: "rice",
      image: "images/rice-chicken.jpg",
      nutrition: "🔥 Calories: 520 | Carbs: 55g | Protein: 32g | Fat: 18g",
      time: 25 },
    { id: 112, name: "Ugali Beef Spinach", price: 500, category: "lunch", type: "ugali",
      image: "images/ugali-beef-spinach.jpg",
      nutrition: "🔥 Calories: 550 | Carbs: 60g | Protein: 30g | Fat: 20g",
      time: 20 },
    { id: 113, name: "Ugali Nyama Choma + Salad + Soda", price: 750, category: "lunch", type: "ugali",
      image: "images/nyama-choma.jpg",
      nutrition: "🔥 Calories: 700 | Carbs: 55g | Protein: 45g | Fat: 25g",
      time: 30 },
    { id: 114, name: "Vegetable Rice", price: 500, category: "lunch", type: "rice",
      image: "images/vegetable-rice.jpg",
      nutrition: "🔥 Calories: 420 | Carbs: 60g | Protein: 10g | Fat: 12g",
      time: 18 },
    { id: 115, name: "Soda (500ml)", price: 50, category: "lunch", type: "drinks",
      image: "images/soda.jpg",
      nutrition: "🔥 Calories: 150 | Carbs: 38g | Protein: 0g | Fat: 0g",
      time: 2 },
    { id: 116, name: "Pasta with Chicken", price: 300, category: "lunch", type: "pasta",
      image: "images/pasta-chicken.jpg",
      nutrition: "🔥 Calories: 480 | Carbs: 50g | Protein: 28g | Fat: 18g",
      time: 18 },
    { id: 117, name: "Pasta with Beef", price: 300, category: "lunch", type: "pasta",
      image: "images/pasta-beef.jpg",
      nutrition: "🔥 Calories: 490 | Carbs: 50g | Protein: 30g | Fat: 18g",
      time: 18 },
    // === EXTRA LUNCH DISHES ===
    { id: 118, name: "Fish Fry + Chips", price: 400, category: "lunch", type: "main",
      image: "images/fish-chips.jpg",
      nutrition: "🔥 Calories: 550 | Carbs: 45g | Protein: 35g | Fat: 25g",
      time: 20 },
    { id: 119, name: "Grilled Chicken + Rice", price: 450, category: "lunch", type: "rice",
      image: "images/grilled-chicken.jpg",
      nutrition: "🔥 Calories: 500 | Carbs: 50g | Protein: 38g | Fat: 18g",
      time: 25 },
    { id: 120, name: "Mutton Stew + Ugali", price: 550, category: "lunch", type: "ugali",
      image: "images/mutton-stew.jpg",
      nutrition: "🔥 Calories: 580 | Carbs: 55g | Protein: 40g | Fat: 22g",
      time: 30 },
    { id: 121, name: "Vegetable Curry + Rice", price: 350, category: "lunch", type: "rice",
      image: "images/veg-curry.jpg",
      nutrition: "🔥 Calories: 380 | Carbs: 55g | Protein: 8g | Fat: 10g",
      time: 18 }
];

// ============================================
// ===== CART / ORDER STATE =====
// ============================================
let cart = [];
let selectedRating = 0;
let currentUser = {
    phone: null,
    name: null
};

// ============================================
// ===== RENDER FUNCTIONS =====
// ============================================

// Render Breakfast Menu
function renderBreakfast(filter = 'all') {
    const grid = document.getElementById('breakfast-grid');
    if (!grid) return;
    
    let items = breakfastItems;
    if (filter !== 'all') {
        items = breakfastItems.filter(item => item.type === filter);
    }
    
    grid.innerHTML = items.map(item => `
        <div class="menu-item" onclick="addToCart(${item.id})">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='images/placeholder.jpg'" />
            <div class="item-info">
                <h3>${item.name}</h3>
                <p class="price">KSh ${item.price}</p>
                <p class="nutrition">${item.nutrition}</p>
                <p class="time"><i class="fas fa-clock"></i> ~${item.time} mins</p>
                <button class="add-btn" onclick="event.stopPropagation(); addToCart(${item.id})">
                    <i class="fas fa-plus"></i> Add to Order
                </button>
            </div>
        </div>
    `).join('');
}

// Render Lunch Menu
function renderLunch(filter = 'all') {
    const grid = document.getElementById('lunch-grid');
    if (!grid) return;
    
    let items = lunchItems;
    if (filter !== 'all') {
        items = lunchItems.filter(item => item.type === filter);
    }
    
    grid.innerHTML = items.map(item => `
        <div class="menu-item" onclick="addToCart(${item.id})">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='images/placeholder.jpg'" />
            <div class="item-info">
                <h3>${item.name}</h3>
                <p class="price">KSh ${item.price}</p>
                <p class="nutrition">${item.nutrition}</p>
                <p class="time"><i class="fas fa-clock"></i> ~${item.time} mins</p>
                <button class="add-btn" onclick="event.stopPropagation(); addToCart(${item.id})">
                    <i class="fas fa-plus"></i> Add to Order
                </button>
            </div>
        </div>
    `).join('');
}

// ============================================
// ===== FILTER FUNCTIONS =====
// ============================================

function filterBreakfast(type) {
    document.querySelectorAll('#breakfast-grid .menu-item').forEach(el => el.remove());
    renderBreakfast(type);
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function filterLunch(type) {
    document.querySelectorAll('#lunch-grid .menu-item').forEach(el => el.remove());
    renderLunch(type);
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// ============================================
// ===== CART FUNCTIONS =====
// ============================================

function addToCart(itemId) {
    const allItems = [...breakfastItems, ...lunchItems];
    const item = allItems.find(i => i.id === itemId);
    if (!item) return;
    
    // Check if item already in cart
    const existing = cart.find(i => i.id === itemId);
    if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    updateCartUI();
    updateOrderPage();
    
    // Show confirmation
    showToast(`✅ Added ${item.name} to your order!`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
    updateOrderPage();
    if (document.getElementById('billDisplay')) {
        document.getElementById('billDisplay').style.display = 'none';
    }
}

function clearCart() {
    cart = [];
    updateCartUI();
    updateOrderPage();
    if (document.getElementById('billDisplay')) {
        document.getElementById('billDisplay').style.display = 'none';
    }
    showToast('🛒 Cart cleared');
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    document.querySelectorAll('#cartCount, #cartCount2, #cartCount3').forEach(el => {
        el.textContent = totalItems;
    });
}

function updateOrderPage() {
    const container = document.getElementById('order-items');
    const summaryContainer = document.getElementById('orderSummaryItems');
    const totalSpan = document.getElementById('summaryTotal');
    const countSpan = document.getElementById('summaryCount');
    
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = `
            <p class="empty-cart">🛒 Your cart is empty. Browse our <a href="breakfast.html">Breakfast</a> or <a href="lunch.html">Lunch</a> menu to add items.</p>
        `;
        if (summaryContainer) {
            summaryContainer.innerHTML = '<p class="empty-summary">No items selected</p>';
        }
        if (totalSpan) totalSpan.textContent = 'KSh 0';
        if (countSpan) countSpan.textContent = '0';
        return;
    }
    
    // Update order items
    container.innerHTML = cart.map((item, index) => `
        <div class="order-item">
            <span>${item.name} x${item.quantity || 1} - KSh ${(item.price * (item.quantity || 1)).toLocaleString()}</span>
            <div>
                <button onclick="adjustQuantity(${index}, -1)">−</button>
                <span class="qty">${item.quantity || 1}</span>
                <button onclick="adjustQuantity(${index}, 1)">+</button>
                <button onclick="removeFromCart(${index})">❌</button>
            </div>
        </div>
    `).join('');
    
    // Update summary
    if (summaryContainer) {
        summaryContainer.innerHTML = cart.map(item => `
            <div class="summary-item">
                <span>${item.name} x${item.quantity || 1}</span>
                <span>KSh ${(item.price * (item.quantity || 1)).toLocaleString()}</span>
            </div>
        `).join('');
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    
    if (totalSpan) totalSpan.textContent = `KSh ${total.toLocaleString()}`;
    if (countSpan) countSpan.textContent = count;
}

function adjustQuantity(index, delta) {
    const item = cart[index];
    const newQty = (item.quantity || 1) + delta;
    if (newQty <= 0) {
        removeFromCart(index);
    } else {
        item.quantity = newQty;
        updateOrderPage();
    }
}

function viewCart() {
    window.location.href = 'order.html';
}

// ============================================
// ===== BILL & TIME ESTIMATION =====
// ============================================

function calculateBill() {
    if (cart.length === 0) {
        showToast('Please add some items first!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    const maxTime = Math.max(...cart.map(item => (item.time || 10)));
    const isSpecial = maxTime > 15;
    
    // Update cooking time
    const timeDisplay = document.getElementById('cookingTime');
    const timeUnit = document.getElementById('timeUnit');
    const specialNote = document.getElementById('specialOrderNote');
    
    if (timeDisplay) {
        timeDisplay.textContent = maxTime;
    }
    if (timeUnit) {
        timeUnit.textContent = maxTime === 1 ? 'minute' : 'minutes';
    }
    
    if (specialNote) {
        if (isSpecial) {
            specialNote.className = 'warning';
            specialNote.innerHTML = `
                ⚠️ This order includes special dishes that take >15 minutes. 
                Please allow extra time or call us for faster service.
            `;
        } else {
            specialNote.className = 'success';
            specialNote.innerHTML = '✅ All dishes will be ready within 15 minutes!';
        }
    }
    
    // Show bill
    const billDiv = document.getElementById('billDisplay');
    if (billDiv) {
        billDiv.style.display = 'block';
    }
    
    const billDetails = document.getElementById('billDetails');
    if (billDetails) {
        billDetails.innerHTML = cart.map(item => `
            <div class="bill-item">
                <span>${item.name} x${item.quantity || 1}</span>
                <span>KSh ${(item.price * (item.quantity || 1)).toLocaleString()}</span>
            </div>
        `).join('');
        
        billDetails.innerHTML += `
            <div class="bill-total">
                <span>Total:</span>
                <span>KSh ${total.toLocaleString()}</span>
            </div>
            <p style="font-size:0.9rem; color:#7f8c8d; margin-top:10px;">
                <i class="fas fa-clock"></i> Estimated cooking time: ${maxTime} minutes
                ${isSpecial ? ' ⚠️ (Special order)' : ''}
            </p>
            <p style="font-size:0.9rem; color:#7f8c8d;">
                <i class="fas fa-info-circle"></i> Payment will be processed after food is served
            </p>
        `;
    }
}

// ============================================
// ===== SUBMIT ORDER TO FIREBASE =====
// ============================================

function submitOrder() {
    const name = document.getElementById('customerName')?.value;
    const phone = document.getElementById('customerPhone')?.value;
    const specialRequest = document.getElementById('specialRequest')?.value || 'None';
    
    if (!name || !phone) {
        showToast('Please enter your name and phone number!');
        return;
    }
    
    if (cart.length === 0) {
        showToast('Please add items to your order!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    const maxTime = Math.max(...cart.map(item => (item.time || 10)));
    
    const orderData = {
        customerName: name,
        customerPhone: phone,
        items: cart.map(item => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity || 1
        })),
        total: total,
        cookingTime: maxTime,
        specialRequest: specialRequest,
        isSpecial: maxTime > 15,
        status: 'pending',
        paid: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    // Save to Firebase
    db.collection('orders').add(orderData)
        .then((docRef) => {
            showToast(`✅ Order submitted! Order ID: ${docRef.id}`);
            
            // Save to local storage
            localStorage.setItem('lastOrder', JSON.stringify({ id: docRef.id, ...orderData }));
            
            // Save customer info
            localStorage.setItem('customerPhone', phone);
            localStorage.setItem('customerName', name);
            
            // Clear cart
            cart = [];
            updateCartUI();
            updateOrderPage();
            document.getElementById('billDisplay').style.display = 'none';
            
            // Clear form fields
            if (document.getElementById('customerName')) {
                document.getElementById('customerName').value = '';
            }
            if (document.getElementById('customerPhone')) {
                document.getElementById('customerPhone').value = '';
            }
            if (document.getElementById('specialRequest')) {
                document.getElementById('specialRequest').value = '';
            }
        })
        .catch((error) => {
            console.error('Error submitting order:', error);
            showToast('❌ Error submitting order. Please try again.');
        });
}

// ============================================
// ===== PAYMENT =====
// ============================================

function confirmPayment() {
    const phone = document.getElementById('customerPhone')?.value;
    const name = document.getElementById('customerName')?.value;
    const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    
    if (!phone || !name) {
        showToast('Please enter customer details first!');
        return;
    }
    
    if (cart.length === 0) {
        showToast('Please add items to your order!');
        return;
    }
    
    // Show payment confirmation
    if (confirm(`💳 Confirm payment of KSh ${total.toLocaleString()} for ${name}?`)) {
        // Record payment in Firebase
        db.collection('payments').add({
            customerName: name,
            customerPhone: phone,
            amount: total,
            items: cart.map(item => ({
                name: item.name,
                price: item.price,
                quantity: item.quantity || 1
            })),
            orderId: 'ORDER-' + Date.now(),
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            status: 'completed',
            paymentMethod: 'card'
        })
        .then(() => {
            showToast(`✅ Payment of KSh ${total.toLocaleString()} recorded successfully!`);
            
            // Clear cart
            cart = [];
            updateCartUI();
            updateOrderPage();
            document.getElementById('billDisplay').style.display = 'none';
            
            // Save to local storage
            localStorage.setItem('lastPayment', JSON.stringify({
                amount: total,
                customerName: name,
                customerPhone: phone,
                date: new Date().toISOString()
            }));
        })
        .catch((error) => {
            console.error('Error recording payment:', error);
            showToast('❌ Error recording payment. Please try again.');
        });
    }
}

// ============================================
// ===== CUSTOMER LOGIN =====
// ============================================

function customerLogin() {
    const phone = document.getElementById('loginPhone')?.value;
    
    if (!phone || phone.length < 10) {
        document.getElementById('loginMessage').textContent = 'Please enter a valid phone number.';
        document.getElementById('loginMessage').style.color = '#e74c3c';
        return;
    }
    
    // Check if customer exists
    db.collection('customers').where('phone', '==', phone).get()
        .then((querySnapshot) => {
            if (querySnapshot.empty) {
                // New customer - register
                const name = prompt('Welcome! Please enter your full name:');
                if (name) {
                    db.collection('customers').add({
                        name: name,
                        phone: phone,
                        registeredAt: firebase.firestore.FieldValue.serverTimestamp()
                    }).then(() => {
                        currentUser = { phone, name };
                        document.getElementById('loginMessage').textContent = '✅ Account created! Loading dashboard...';
                        document.getElementById('loginMessage').style.color = '#2ecc71';
                        loadCustomerDashboard(phone, name);
                    });
                }
            } else {
                // Existing customer
                const customer = querySnapshot.docs[0].data();
                currentUser = { phone, name: customer.name };
                document.getElementById('loginMessage').textContent = '✅ Welcome back!';
                document.getElementById('loginMessage').style.color = '#2ecc71';
                loadCustomerDashboard(phone, customer.name);
            }
        })
        .catch((error) => {
            console.error('Login error:', error);
            document.getElementById('loginMessage').textContent = '❌ Error logging in. Please try again.';
            document.getElementById('loginMessage').style.color = '#e74c3c';
        });
}

function loadCustomerDashboard(phone, name) {
    document.getElementById('userName').textContent = name;
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    
    localStorage.setItem('customerPhone', phone);
    localStorage.setItem('customerName', name);
    
    loadCustomerOrders(phone);
    loadCustomerPayments(phone);
    loadActiveOrders(phone);
}

function loadCustomerOrders(phone) {
    db.collection('orders')
        .where('customerPhone', '==', phone)
        .orderBy('timestamp', 'desc')
        .limit(10)
        .get()
        .then((snapshot) => {
            const container = document.getElementById('orderHistory');
            if (snapshot.empty) {
                container.innerHTML = '<p class="loading">No orders yet.</p>';
                return;
            }
            
            container.innerHTML = snapshot.docs.map(doc => {
                const data = doc.data();
                const items = data.items || [];
                return `
                    <div class="order-history-item">
                        <p><strong>Order ID:</strong> ${doc.id}</p>
                        <p><strong>Items:</strong> ${items.map(i => `${i.name} x${i.quantity || 1}`).join(', ')}</p>
                        <p><strong>Total:</strong> KSh ${data.total?.toLocaleString() || '0'}</p>
                        <p><strong>Status:</strong> <span class="status-${data.status || 'pending'}">${data.status || 'pending'}</span></p>
                        <p><strong>Paid:</strong> ${data.paid ? '✅ Yes' : '❌ No'}</p>
                        <p><strong>Date:</strong> ${data.timestamp?.toDate().toLocaleDateString() || 'N/A'}</p>
                    </div>
                `;
            }).join('');
        })
        .catch((error) => {
            console.error('Error loading orders:', error);
            document.getElementById('orderHistory').innerHTML = '<p class="loading">Error loading orders.</p>';
        });
}

function loadCustomerPayments(phone) {
    db.collection('payments')
        .where('customerPhone', '==', phone)
        .orderBy('timestamp', 'desc')
        .limit(5)
        .get()
        .then((snapshot) => {
            const container = document.getElementById('paymentHistory');
            if (snapshot.empty) {
                container.innerHTML = '<p class="loading">No payment history.</p>';
                return;
            }
            
            container.innerHTML = snapshot.docs.map(doc => {
                const data = doc.data();
                return `
                    <div class="payment-item">
                        <p><strong>Amount:</strong> KSh ${data.amount?.toLocaleString() || '0'}</p>
                        <p><strong>Order ID:</strong> ${data.orderId || 'N/A'}</p>
                        <p><strong>Status:</strong> ${data.status || 'completed'}</p>
                        <p><strong>Date:</strong> ${data.timestamp?.toDate().toLocaleDateString() || 'N/A'}</p>
                    </div>
                `;
            }).join('');
        })
        .catch((error) => {
            console.error('Error loading payments:', error);
            document.getElementById('paymentHistory').innerHTML = '<p class="loading">Error loading payments.</p>';
        });
}

function loadActiveOrders(phone) {
    db.collection('orders')
        .where('customerPhone', '==', phone)
        .where('status', '==', 'pending')
        .get()
        .then((snapshot) => {
            const container = document.getElementById('activeOrders');
            if (snapshot.empty) {
                container.innerHTML = '<p class="loading">No active orders.</p>';
                return;
            }
            
            container.innerHTML = snapshot.docs.map(doc => {
                const data = doc.data();
                const items = data.items || [];
                return `
                    <div class="order-history-item">
                        <p><strong>Order ID:</strong> ${doc.id}</p>
                        <p><strong>Items:</strong> ${items.map(i => `${i.name} x${i.quantity || 1}`).join(', ')}</p>
                        <p><strong>Total:</strong> KSh ${data.total?.toLocaleString() || '0'}</p>
                        <p><strong>Cooking:</strong> ~${data.cookingTime || 0} mins</p>
                        <p><strong>Status:</strong> <span class="status-pending">⏳ Being prepared</span></p>
                    </div>
                `;
            }).join('');
        })
        .catch((error) => {
            console.error('Error loading active orders:', error);
            document.getElementById('activeOrders').innerHTML = '<p class="loading">Error loading active orders.</p>';
        });
}

function logoutCustomer() {
    currentUser = { phone: null, name: null };
    localStorage.removeItem('customerPhone');
    localStorage.removeItem('customerName');
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('loginPhone').value = '';
    document.getElementById('loginMessage').textContent = '';
    showToast('👋 Logged out successfully');
}

// ============================================
// ===== FEEDBACK & RATINGS =====
// ============================================

function setRating(rating) {
    selectedRating = rating;
    document.querySelectorAll('.rating span').forEach((el, index) => {
        if (index < rating) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
    document.getElementById('ratingLabel').textContent = 
        ['', '😞 Poor', '😐 Fair', '👍 Good', '🌟 Great', '⭐ Excellent'][rating];
}

function submitFeedback() {
    const phone = localStorage.getItem('customerPhone');
    const name = localStorage.getItem('customerName');
    const feedback = document.getElementById('feedbackText')?.value;
    
    if (!phone) {
        showToast('Please login first to submit feedback!');
        return;
    }
    
    if (!feedback || selectedRating === 0) {
        showToast('Please provide a rating and feedback!');
        return;
    }
    
    db.collection('feedback').add({
        customerName: name || 'Anonymous',
        customerPhone: phone,
        rating: selectedRating,
        feedback: feedback,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        document.getElementById('feedbackMessage').textContent = '✅ Thank you for your feedback!';
        document.getElementById('feedbackMessage').style.color = '#2ecc71';
        document.getElementById('feedbackText').value = '';
        selectedRating = 0;
        document.querySelectorAll('.rating span').forEach(el => el.classList.remove('active'));
        document.getElementById('ratingLabel').textContent = 'Click a star to rate';
        showToast('⭐ Thank you for your feedback!');
    })
    .catch((error) => {
        console.error('Error submitting feedback:', error);
        document.getElementById('feedbackMessage').textContent = '❌ Error submitting feedback.';
        document.getElementById('feedbackMessage').style.color = '#e74c3c';
    });
}

// ============================================
// ===== ADMIN FUNCTIONS =====
// ============================================

function showTab(tab) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    
    // Show selected tab
    document.getElementById(tab + 'Tab').classList.add('active');
    event.target.classList.add('active');
    
    // Load data for tab
    if (tab === 'orders') loadAllOrders();
    if (tab === 'feedback') loadAllFeedback();
    if (tab === 'customers') loadAllCustomers();
    if (tab === 'menu') loadMenuItems();
}

function loadAllOrders() {
    db.collection('orders')
        .orderBy('timestamp', 'desc')
        .limit(50)
        .get()
        .then((snapshot) => {
            const container = document.getElementById('allOrders');
            if (snapshot.empty) {
                container.innerHTML = '<p class="loading">No orders yet.</p>';
                return;
            }
            
            container.innerHTML = snapshot.docs.map(doc => {
                const data = doc.data();
                const items = data.items || [];
                return `
                    <div class="order-history-item">
                        <p><strong>Order ID:</strong> ${doc.id}</p>
                        <p><strong>Customer:</strong> ${data.customerName || 'N/A'} (${data.customerPhone || 'N/A'})</p>
                        <p><strong>Items:</strong> ${items.map(i => `${i.name} x${i.quantity || 1}`).join(', ')}</p>
                        <p><strong>Total:</strong> KSh ${data.total?.toLocaleString() || '0'}</p>
                        <p><strong>Status:</strong> 
                            <select onchange="updateOrderStatus('${doc.id}', this.value)">
                                <option value="pending" ${data.status === 'pending' ? 'selected' : ''}>Pending</option>
                                <option value="preparing" ${data.status === 'preparing' ? 'selected' : ''}>Preparing</option>
                                <option value="ready" ${data.status === 'ready' ? 'selected' : ''}>Ready</option>
                                <option value="served" ${data.status === 'served' ? 'selected' : ''}>Served</option>
                                <option value="cancelled" ${data.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
                            </select>
                        </p>
                        <p><strong>Paid:</strong> ${data.paid ? '✅ Yes' : '❌ No'}</p>
                        <p><strong>Date:</strong> ${data.timestamp?.toDate().toLocaleString() || 'N/A'}</p>
                    </div>
                `;
            }).join('');
        })
        .catch((error) => {
            console.error('Error loading orders:', error);
            document.getElementById('allOrders').innerHTML = '<p class="loading">Error loading orders.</p>';
        });
}

function updateOrderStatus(orderId, status) {
    db.collection('orders').doc(orderId).update({
        status: status
    })
    .then(() => {
        showToast(`✅ Order ${orderId} status updated to ${status}`);
        loadAllOrders();
    })
    .catch((error) => {
        console.error('Error updating order:', error);
        showToast('❌ Error updating order status.');
    });
}

function loadAllFeedback() {
    db.collection('feedback')
        .orderBy('timestamp', 'desc')
        .limit(50)
        .get()
        .then((snapshot) => {
            const container = document.getElementById('allFeedback');
            if (snapshot.empty) {
                container.innerHTML = '<p class="loading">No feedback yet.</p>';
                return;
            }
            
            container.innerHTML = snapshot.docs.map(doc => {
                const data = doc.data();
                const stars = '⭐'.repeat(data.rating || 0) + '☆'.repeat(5 - (data.rating || 0));
                return `
                    <div class="feedback-item">
                        <p><strong>${data.customerName || 'Anonymous'}</strong> (${data.customerPhone || 'N/A'})</p>
                        <p>${stars} (${data.rating || 0}/5)</p>
                        <p>"${data.feedback || 'No comment'}"</p>
                        <p style="font-size:0.85rem; color:#7f8c8d;">${data.timestamp?.toDate().toLocaleString() || 'N/A'}</p>
                    </div>
                `;
            }).join('');
        })
        .catch((error) => {
            console.error('Error loading feedback:', error);
            document.getElementById('allFeedback').innerHTML = '<p class="loading">Error loading feedback.</p>';
        });
}

function loadAllCustomers() {
    db.collection('customers')
        .orderBy('registeredAt', 'desc')
        .limit(50)
        .get()
        .then((snapshot) => {
            const container = document.getElementById('allCustomers');
            if (snapshot.empty) {
                container.innerHTML = '<p class="loading">No customers yet.</p>';
                return;
            }
            
            container.innerHTML = snapshot.docs.map(doc => {
                const data = doc.data();
                return `
                    <div class="customer-item">
                        <p><strong>${data.name || 'N/A'}</strong></p>
                        <p>📱 ${data.phone || 'N/A'}</p>
                        <p style="font-size:0.85rem; color:#7f8c8d;">Registered: ${data.registeredAt?.toDate().toLocaleString() || 'N/A'}</p>
                    </div>
                `;
            }).join('');
        })
        .catch((error) => {
            console.error('Error loading customers:', error);
            document.getElementById('allCustomers').innerHTML = '<p class="loading">Error loading customers.</p>';
        });
}

function loadMenuItems() {
    const container = document.getElementById('menuItemsList');
    const allItems = [...breakfastItems, ...lunchItems];
    container.innerHTML = allItems.map(item => `
        <div class="menu-item-admin">
            <span><strong>${item.name}</strong> - KSh ${item.price}</span>
            <span style="font-size:0.85rem; color:#7f8c8d;">${item.category}</span>
            <button onclick="deleteMenuItem(${item.id})" class="btn-delete">🗑️</button>
        </div>
    `).join('');
}

function adminAddDish() {
    const name = document.getElementById('dishName')?.value;
    const price = parseInt(document.getElementById('dishPrice')?.value);
    const category = document.getElementById('dishCategory')?.value;
    const nutrition = document.getElementById('dishNutrition')?.value;
    const time = parseInt(document.getElementById('dishTime')?.value);
    const image = document.getElementById('dishImage')?.value || 'images/placeholder.jpg';
    
    if (!name || !price || !nutrition || !time) {
        showToast('Please fill in all fields!');
        return;
    }
    
    const newItem = {
        id: Date.now(),
        name: name,
        price: price,
        category: category,
        type: 'main',
        image: image,
        nutrition: nutrition,
        time: time
    };
    
    // Add to appropriate array
    if (category === 'breakfast') {
        breakfastItems.push(newItem);
        renderBreakfast();
    } else {
        lunchItems.push(newItem);
        renderLunch();
    }
    
    // Clear form
    document.getElementById('dishName').value = '';
    document.getElementById('dishPrice').value = '';
    document.getElementById('dishNutrition').value = '';
    document.getElementById('dishTime').value = '';
    document.getElementById('dishImage').value = '';
    
    showToast(`✅ Added ${name} to menu!`);
    loadMenuItems();
}

function deleteMenuItem(id) {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    // Remove from arrays
    const breakfastIndex = breakfastItems.findIndex(i => i.id === id);
    if (breakfastIndex !== -1) {
        breakfastItems.splice(breakfastIndex, 1);
        renderBreakfast();
        showToast('✅ Item deleted');
        loadMenuItems();
        return;
    }
    
    const lunchIndex = lunchItems.findIndex(i => i.id === id);
    if (lunchIndex !== -1) {
        lunchItems.splice(lunchIndex, 1);
        renderLunch();
        showToast('✅ Item deleted');
        loadMenuItems();
        return;
    }
    
    showToast('❌ Item not found');
}

// ============================================
// ===== TOAST NOTIFICATIONS =====
// ============================================

function showToast(message) {
    // Check if toast container exists
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.style.cssText = `
        background: var(--secondary-black);
        color: var(--white);
        padding: 15px 25px;
        border-radius: 12px;
        border-left: 4px solid var(--primary-green);
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease-out;
        max-width: 400px;
        font-size: 1rem;
    `;
    toast.textContent = message;
    
    container.appendChild(toast);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// ============================================
// ===== NAVIGATION =====
// ============================================

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('open');
}

// Close menu on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('open');
    });
});

// ============================================
// ===== INITIALIZATION =====
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Render menus
    renderBreakfast('all');
    renderLunch('all');
    
    // Auto-fill customer info if logged in
    const savedPhone = localStorage.getItem('customerPhone');
    const savedName = localStorage.getItem('customerName');
    
    if (savedPhone && document.getElementById('customerPhone')) {
        document.getElementById('customerPhone').value = savedPhone;
    }
    if (savedName && document.getElementById('customerName')) {
        document.getElementById('customerName').value = savedName;
    }
    
    // Auto-login if phone exists
    if (savedPhone && document.getElementById('loginPhone')) {
        document.getElementById('loginPhone').value = savedPhone;
    }
    
    // Load cart from localStorage (if any)
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            updateCartUI();
            updateOrderPage();
        } catch (e) {
            console.warn('Error loading cart from localStorage');
        }
    }
    
    // Update cart count on page load
    updateCartUI();
    updateOrderPage();
    
    // Admin stats
    if (document.getElementById('totalOrders')) {
        loadAdminStats();
    }
    
    console.log('🍽️ Mama Njeri\'s Hotel System Loaded!');
    console.log('📊 Breakfast items:', breakfastItems.length);
    console.log('📊 Lunch items:', lunchItems.length);
    console.log('📦 Cart items:', cart.length);
});

// Save cart to localStorage when page unloads
window.addEventListener('beforeunload', function() {
    localStorage.setItem('cart', JSON.stringify(cart));
});

// ============================================
// ===== ADD CSS ANIMATIONS =====
// ============================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .status-pending { color: #f39c12; }
    .status-preparing { color: #3498db; }
    .status-ready { color: #2ecc71; }
    .status-served { color: #27ae60; }
    .status-cancelled { color: #e74c3c; }
    
    .summary-item {
        display: flex;
        justify-content: space-between;
        padding: 5px 0;
        border-bottom: 1px solid #f0f0f0;
    }
    
    .menu-item-admin {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 15px;
        border-bottom: 1px solid #f0f0f0;
    }
    
    .btn-delete {
        background: #e74c3c;
        color: white;
        border: none;
        padding: 5px 12px;
        border-radius: 6px;
        cursor: pointer;
    }
    
    .btn-delete:hover {
        background: #c0392b;
    }
    
    .feedback-item {
        padding: 15px;
        border-bottom: 1px solid #f0f0f0;
    }
    
    .customer-item {
        padding: 15px;
        border-bottom: 1px solid #f0f0f0;
    }
    
    .order-item .qty {
        padding: 0 10px;
        font-weight: 600;
    }
    
    .order-item button {
        background: #e74c3c;
        color: white;
        border: none;
        padding: 4px 10px;
        border-radius: 4px;
        cursor: pointer;
        margin: 0 2px;
    }
    
    .order-item button:first-child,
    .order-item button:nth-child(3) {
        background: #3498db;
    }
    
    .order-item button:first-child:hover,
    .order-item button:nth-child(3):hover {
        background: #2980b9;
    }
`;
document.head.appendChild(style);

console.log('✅ Mama Njeri\'s Hotel System Complete!');
console.log('🚀 Ready for deployment!');
// ============================================
// M-PESA INTEGRATION (Frontend)
// ============================================

/**
 * Process M-Pesa payment via Daraja API
 * Calls Vercel serverless function[reference:12]
 */
async function processMpesaPayment(phoneNumber, amount, orderId) {
    try {
        const response = await fetch('/api/initiatePayment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phoneNumber: phoneNumber,
                amount: amount,
                accountReference: orderId || 'MamaNjeriOrder',
                transactionDesc: 'Food Payment'
            })
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('M-Pesa payment error:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Check transaction status (polling)[reference:13]
 */
async function checkTransactionStatus(checkoutRequestID) {
    try {
        const response = await fetch(`/api/checkStatus?checkoutRequestID=${checkoutRequestID}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Status check error:', error);
        return { status: 'ERROR', error: error.message };
    }
}

/**
 * Track order status
 */
async function trackOrder(orderId) {
    try {
        const response = await fetch(`/api/trackOrder?orderId=${orderId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Track order error:', error);
        return { error: error.message };
    }
}

/**
 * Update order status (Admin)
 */
async function updateOrderStatus(orderId, status, notes = '') {
    try {
        const response = await fetch('/api/trackOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ orderId, status, notes })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Update status error:', error);
        return { error: error.message };
    }
}

/**
 * Send SMS notification
 */
async function sendSMS(phoneNumber, message) {
    try {
        const response = await fetch('/api/sendSms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ to: phoneNumber, message })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('SMS error:', error);
        return { success: false, error: error.message };
    }
}

// ============================================
// UPDATED M-PESA MODAL FUNCTIONS
// ============================================

let currentCheckoutRequestID = null;
let pollingInterval = null;

function showMpesaModal(amount, orderId = null) {
    document.getElementById('mpesaAmount').textContent = 'KSh ' + amount.toLocaleString();
    document.getElementById('mpesaOrderId').value = orderId || 'MamaNjeriOrder';
    document.getElementById('mpesaModal').style.display = 'flex';
}

function closeMpesaModal() {
    document.getElementById('mpesaModal').style.display = 'none';
    document.getElementById('mpesaStatus').innerHTML = '';
    document.getElementById('mpesaPhone').value = '';
    
    if (pollingInterval) {
        clearInterval(pollingInterval);
        pollingInterval = null;
    }
}

async function processMpesa() {
    const phone = document.getElementById('mpesaPhone').value.trim();
    const orderId = document.getElementById('mpesaOrderId').value;
    const statusDiv = document.getElementById('mpesaStatus');
    
    if (!phone || phone.length < 10) {
        statusDiv.innerHTML = '<span style="color:#e74c3c;">❌ Please enter a valid phone number</span>';
        return;
    }

    const amountText = document.getElementById('mpesaAmount').textContent.replace(/[^0-9]/g, '');
    const amount = parseInt(amountText) || 0;

    statusDiv.innerHTML = '<div class="loading-spinner" style="margin:0 auto;"></div><p style="color:#3498db;">⏳ Initiating payment...</p>';

    // Call the backend to initiate STK Push
    const result = await processMpesaPayment(phone, amount, orderId);

    if (!result.success) {
        statusDiv.innerHTML = `<span style="color:#e74c3c;">❌ ${result.error || 'Payment initiation failed'}</span>`;
        return;
    }

    currentCheckoutRequestID = result.checkoutRequestID;
    
    statusDiv.innerHTML = `
        <div style="background:#eafaf1; padding:15px; border-radius:12px;">
            <p style="color:#27ae60; font-weight:bold;">✅ STK Push sent!</p>
            <p style="font-size:0.9rem; color:#7f8c8d;">Check your phone (${phone}) for the M-Pesa prompt.</p>
            <p style="font-size:0.8rem; color:#95a5a6;">Waiting for confirmation...</p>
            <div class="loading-spinner" style="margin:10px auto;"></div>
        </div>
    `;

    // Start polling for status[reference:14]
    if (pollingInterval) {
        clearInterval(pollingInterval);
    }

    let attempts = 0;
    const maxAttempts = 30; // 30 * 3 seconds = 90 seconds timeout

    pollingInterval = setInterval(async () => {
        attempts++;
        
        const statusResult = await checkTransactionStatus(currentCheckoutRequestID);
        
        if (statusResult.status === 'SUCCESS') {
            clearInterval(pollingInterval);
            pollingInterval = null;
            
            statusDiv.innerHTML = `
                <div style="background:#eafaf1; padding:15px; border-radius:12px; border-left:4px solid #2ecc71;">
                    <p style="color:#27ae60; font-weight:bold;">✅ Payment successful!</p>
                    <p style="font-size:0.9rem; color:#7f8c8d;">Receipt: ${statusResult.mpesaReceiptNumber || 'N/A'}</p>
                    <p style="font-size:0.9rem; color:#7f8c8d;">Amount: KSh ${statusResult.amount || amount}</p>
                </div>
            `;

            // Update order status
            if (orderId && orderId !== 'MamaNjeriOrder') {
                await updateOrderStatus(orderId, 'preparing', 'Payment confirmed, preparing your order');
            }

            setTimeout(() => {
                closeMpesaModal();
                showToast('✅ Payment successful! Thank you for dining with us!');
                // Clear cart
                cart = [];
                updateCartUI();
                updateOrderPage();
                document.getElementById('billDisplay').style.display = 'none';
            }, 3000);
            
        } else if (statusResult.status === 'FAILED') {
            clearInterval(pollingInterval);
            pollingInterval = null;
            
            statusDiv.innerHTML = `
                <div style="background:#fdedec; padding:15px; border-radius:12px; border-left:4px solid #e74c3c;">
                    <p style="color:#e74c3c; font-weight:bold;">❌ Payment failed</p>
                    <p style="font-size:0.9rem; color:#7f8c8d;">${statusResult.resultDesc || 'Transaction was not completed'}</p>
                </div>
            `;
            
        } else if (statusResult.status === 'PENDING' && attempts >= maxAttempts) {
            clearInterval(pollingInterval);
            pollingInterval = null;
            
            statusDiv.innerHTML = `
                <div style="background:#fef9e7; padding:15px; border-radius:12px; border-left:4px solid #f39c12;">
                    <p style="color:#f39c12; font-weight:bold;">⏳ Still waiting...</p>
                    <p style="font-size:0.9rem; color:#7f8c8d;">Please check your phone and complete the payment.</p>
                    <p style="font-size:0.8rem; color:#95a5a6;">You can also check your order status later.</p>
                    <button onclick="closeMpesaModal()" style="margin-top:10px; padding:8px 20px; background:#3498db; color:#fff; border:none; border-radius:30px; cursor:pointer;">Close</button>
                </div>
            `;
        }
    }, 3000);
}

// ============================================
// UPDATED confirmPayment FUNCTION
// ============================================

function confirmPayment() {
    const name = document.getElementById('customerName')?.value;
    const phone = document.getElementById('customerPhone')?.value;
    const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    
    if (!name || !phone) {
        showToast('Please enter your name and phone number first!');
        return;
    }
    
    if (cart.length === 0) {
        showToast('🛒 Your cart is empty!');
        return;
    }

    // Generate order ID
    const orderId = 'ORDER-' + Date.now();
    
    // Save order first
    const orderData = {
        orderId: orderId,
        customerName: name,
        customerPhone: phone,
        items: cart.map(item => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity || 1
        })),
        total: total,
        status: 'pending',
        paid: false,
        paymentStatus: 'pending',
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    db.collection('orders').add(orderData)
        .then(() => {
            showMpesaModal(total, orderId);
        })
        .catch((error) => {
            console.error('Error saving order:', error);
            showToast('❌ Error creating order. Please try again.');
        });
}

// ============================================
// ORDER TRACKING UI
// ============================================

function loadOrderTracking(orderId) {
    const container = document.getElementById('trackingContainer');
    if (!container) return;

    container.innerHTML = '<div class="loading-spinner"></div><p>Loading order status...</p>';

    trackOrder(orderId).then(data => {
        if (data.error) {
            container.innerHTML = `<p style="color:#e74c3c;">❌ ${data.error}</p>`;
            return;
        }

        const statusEmoji = {
            'pending': '📋',
            'preparing': '👨‍🍳',
            'ready': '🍽️',
            'delivered': '✅',
            'cancelled': '❌'
        };

        const statusLabels = {
            'pending': 'Order Received',
            'preparing': 'Being Prepared',
            'ready': 'Ready for Pickup',
            'delivered': 'Delivered',
            'cancelled': 'Cancelled'
        };

        container.innerHTML = `
            <div class="tracking-card">
                <h3>Order #${data.orderId}</h3>
                <div class="tracking-status">
                    <span class="status-icon">${statusEmoji[data.status] || '📋'}</span>
                    <span class="status-label">${statusLabels[data.status] || data.status}</span>
                </div>
                <div class="tracking-timeline">
                    ${(data.trackingHistory || []).map(entry => `
                        <div class="timeline-item">
                            <span class="timeline-icon">${statusEmoji[entry.status] || '📋'}</span>
                            <div class="timeline-content">
                                <strong>${statusLabels[entry.status] || entry.status}</strong>
                                <p>${entry.notes || ''}</p>
                                <small>${entry.timestamp?.toDate?.()?.toLocaleString() || 'Just now'}</small>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="tracking-details">
                    <p><strong>Customer:</strong> ${data.customerName}</p>
                    <p><strong>Total:</strong> KSh ${data.total?.toLocaleString() || 0}</p>
                    <p><strong>Items:</strong> ${(data.items || []).map(i => `${i.name} x${i.quantity}`).join(', ')}</p>
                </div>
            </div>
        `;
    });
}