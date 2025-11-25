# 🚀 BoostLabs – Porsche Performance Parts Store  
### _A Premium React + Vite E-Commerce UI – WT Practical 6_

BoostLabs is a modern Porsche-themed performance parts store built using **React (Vite)**.  
It delivers a clean automotive UI with browsing, filtering, cart, checkout, and order confirmation.

🌐 **Live Demo:**  
👉 https://boost-labs.vercel.app/

---

## ✨ Features

### 🏎️ Product & Model Interface
- Modern Porsche-inspired dark theme  
- Product grid with equal height cards  
- Model selector with modal warnings for unavailable models (GT4, Targa)  
- Product Details page with specs, features, compatibility  

### 🛒 Advanced Cart System
- Add to Cart  
- Remove items  
- Update quantity  
- Auto price calculations  
- Toast notifications  

### 💳 Checkout with Multiple Payment Methods
BoostLabs includes a polished multi-option checkout:

- 💵 Cash on Delivery (COD)
- 📲 UPI (GPay / PhonePe / Paytm)
- 💳 Credit/Debit Card
- 🏦 NetBanking

And also:
- Form validation  
- Payment-specific input fields  
- Order details summary  
- Auto redirect to Confirmation  

### 📦 Order Confirmation Page
- Shows each item purchased  
- Thumbnail images  
- Shipping information  
- Payment method (cleanly formatted)  
- Total price + timestamp  

### 🚫 NotFound (404) as Modal
- Custom dark-themed popup  
- Smooth overlay  
- Matches Porsche UI  

---

## 📂 Folder Structure
```
boostlabs/
│
├── public/
│   └── assets/
│       ├── logo.png
│       ├── hero_car.png
│       ├── speed_lines.png
│       ├── turbo_kit.png
│       ├── exhaust.png
│       ├── rims_set.png
│       ├── suspension.png
│       ├── brake_kit.png
│       ├── model_911_gt3rs.png
│       ├── model_918spyder.png
│       ├── model_cayman.png
│       └── model_targa.png
│
├── src/
│   ├── context/
│   │   └── CartContext.jsx         # Cart state management
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── OrderConfirmation.jsx
│   │   ├── Models.jsx
│   │   ├── Login.jsx
│   │   └── NotFound.jsx
│   │
│   ├── ui/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Notification.jsx
│   │   └── FallbackImage.jsx
│   │
│   ├── styles/
│   │   └── App.css                 # Global stylesheet
│   │
│   ├── productsData.js             # Product list (images + specs)
│   ├── App.jsx                     # Main app + routes
│   └── main.jsx                    # React entry point
│
├── index.html                      # Vite HTML entry
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
```


## 🧰 Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | React (Vite) |
| Styling | Pure CSS |
| Routing | React Router |
| State | Context API |
| Hosting | Vercel |
| Build Tool | Vite |

---

## 🚀 Deployment (Already Live)

This project is deployed on **Vercel**.

## 🏗️ Build Settings (Vercel)

BoostLabs is deployed on **Vercel** using the following configuration:

- **Framework:** Vite  
- **Build Command:** `npm run build`  
- **Install Command:** `npm install`  
- **Output Directory:** `dist`  
- **Node Version:** Latest (recommended)  
- **SPA Support:** Enabled (Vercel handles client-side routing)  

No backend is required — the entire project is a **static Vite React build**.


Your live production link:  
👉 https://boost-labs.vercel.app/

---

## 🛠️ Setup Instructions

Follow these steps to run BoostLabs locally:

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Aryan-52/BoostLabs.git
cd BoostLabs
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start development server
```bash
npm run dev
```

### 4️⃣ Build for production
```bash
npm run build
```
### 5️⃣ Preview production build
```bash
npm run preview
```

## 🏆 Tech Stack Badges

<p align="left">

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Vite-6A34FF?style=for-the-badge&logo=vite&logoColor=FFD23F" />
<img src="https://img.shields.io/badge/CSS3-264DE4?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />

</p>

