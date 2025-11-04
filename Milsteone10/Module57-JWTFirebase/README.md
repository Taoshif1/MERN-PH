# SmartDeals - Secure Product Bidding Platform with JWT Authentication

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-12.5.0-orange.svg)](https://firebase.google.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.20.0-green.svg)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-5.1.0-lightgrey.svg)](https://expressjs.com/)
[![JWT](https://img.shields.io/badge/JWT-9.0.2-red.svg)](https://jwt.io/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.16-38B2AC.svg)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5.3.10-5A0EF8.svg)](https://daisyui.com/)

A modern, full-stack marketplace platform where users can sell, resell, and shop from trusted local sellers. Built with React, Express, MongoDB, Firebase Authentication, and secured with JWT token verification using Firebase Admin SDK.


# SmartDeals: Modern Bidding & E-commerce Platform

This document outlines the core features, architectural components, and technical stack used to build the SmartDeals Bidding and E-commerce Platform.

---

## 🌟 Features Overview

### 🔐 Advanced Authentication & Security
* **Google OAuth Integration:** Provides seamless sign-in capability.
* **Firebase Authentication:** Handles secure user registration and session management.
* **JWT Token Verification:** Uses the **Firebase Admin SDK** for robust server-side token validation.
* **Protected Routes:** Implements private routes on the client for authenticated access only.
* **Persistent Sessions:** Ensures auto-login functionality upon page refresh.
* **Secure API Endpoints:** All critical endpoints are protected with **Token-based Authorization Headers**.
* **User Data Protection:** Server-side checks prevent unauthorized access to other users' data.
* **Custom Middleware:** Includes dedicated middleware for logging and token verification.

### 🛍️ Product Management
* **Product Listings:** Allows browsing of all available products.
* **Latest Products:** Displays the **6 most recent additions** prominently on the homepage.
* **Product Details:** Offers comprehensive product information, including seller details.
* **My Products:** A dashboard for users to manage their personal listings.
* **Advanced Sorting:** Supports both price-based and date-based sorting options.
* **Product Search:** Robust search functionality covering products and categories.

### 💰 Bidding System
* **Place Bids:** Enables authenticated users to make offers on products.
* **My Bids:** Allows users to track all their active bids with complete product information.
* **Bid Management:** Features a confirmation dialog for removing active bids.
* **Real-time Updates:** Automatic updates to the bid list for a live experience.
* **Bid Status:** Tracks the lifecycle of a bid (Pending, Accepted, Rejected).
* **Product-specific Bids:** Displays all bids on individual product pages, sorted by price.
* **Secure Bid Access:** Bid endpoints are specifically protected using **JWT authorization**.

### 🎨 User Interface (UI)
* **Responsive Design:** Implemented with a **Mobile-first approach** using **Tailwind CSS**.
* **DaisyUI Components:** Utilizes a library of pre-built, customizable UI components.
* **Loading States:** Features **Suspense-based loading indicators** for smooth transitions.
* **Custom Theming:** A distinct **Purple Gradient** primary color scheme is applied across the application.
* **Sweet Alerts:** Used for creating beautiful and user-friendly confirmation and notification dialogs.
* **Hero Section:** An eye-catching landing page that includes core search functionality.
* **Gradient Buttons:** Modern styling applied to action buttons.

---

## 🔄 Data Relations & Management

| Relationship | Description |
| :--- | :--- |
| **User-Product** | Products are intrinsically linked to the seller/owner user. |
| **Product-Bid** | A single product can receive multiple bids. |
| **User-Bid** | Tracks the complete bidding history for each user. |
| **Data Merging** | Frontend joins data from different backend sources for comprehensive display (e.g., showing product details alongside bid history). |
| **Query Optimization** | Server-side logic prioritizes efficient, email-based filtering. |

---

## 🚀 Tech Stack

### Frontend Technologies
| Component | Version | Role |
| :--- | :--- | :--- |
| **React** | `19.1.1` | Core UI library (latest version, utilizing `use` hook) |
| **React Router** | `7.9.5` | Client-side routing and data loading |
| **TailwindCSS** | `4.1.16` | Utility-first CSS framework |
| **DaisyUI** | `5.3.10` | Component library for rapid development |
| **Firebase** | `12.5.0` | Client-side authentication utilities |
| **SweetAlert2** | `11.26.3` | Custom alert and modal solution |
| **Vite** | `7.1.7` | Fast build tool and development server |

### Backend Technologies
| Component | Version | Role |
| :--- | :--- | :--- |
| **Node.js** | N/A | JavaScript Runtime Environment |
| **Express** | `5.1.0` | Web application framework |
| **MongoDB** | `6.20.0` | NoSQL database for data persistence |
| **Firebase Admin SDK** | `13.5.0` | Server-side token verification |
| **JSON Web Token (JWT)** | `9.0.2` | Token generation and handling (optional/custom) |
| **CORS** | N/A | Cross-Origin Resource Sharing setup |
| **dotenv** | N/A | Management of environment variables |

## 📋 Prerequisites
Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or Atlas cluster)
- Firebase Account (for authentication)
- Firebase Admin SDK Service Account (for JWT verification)
- Git (for cloning the repository)

## 🛠️ Installation

1. Clone the Repository
```bash
 clone https://github.com/yourusername/smart-deals.git
cd smart-deals
```

2. Backend Setup
```bash
cd smart-deals-server
npm install
```
Create Firebase Admin SDK Service Account

1. Go to Firebase Console
2. Select your project
3. Go to Project Settings → Service Accounts
4. Click Generate New Private Key
5. Save the JSON file as smart-deals-firebase-adminsdk.json in the server root directory

## Create `.env` file in the server root:
```env
envDB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
PORT=3000
JWT_SECRET=your_custom_jwt_secret_key
```

## 📁 Project Structure

### Frontend Structure
```
smart-deals-client/
├── src/
│   ├── assets/          # Images and static files
│   │   ├── bg-hero-left.png
│   │   └── bg-hero-right.png
│   ├── components/      # React components
│   │   ├── AllProducts/
│   │   │   └── AllProducts.jsx
│   │   ├── HeroSection/
│   │   │   └── HeroSection.jsx
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   ├── LatestProducts/
│   │   │   └── LatestProducts.jsx
│   │   ├── LoadingSpinner/
│   │   │   └── LoadingSpinner.jsx
│   │   ├── MyBids/
│   │   │   └── MyBids.jsx
│   │   ├── MyProducts/
│   │   │   └── MyProducts.jsx
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx
│   │   ├── Product/
│   │   │   └── Product.jsx
│   │   ├── ProductDetails/
│   │   │   └── ProductDetails.jsx
│   │   └── Register/
│   │       └── Register.jsx
│   ├── context/         # React Context API
│   │   ├── AuthContext.jsx
│   │   └── AuthProvider.jsx
│   ├── firebase/        # Firebase configuration
│   │   └── firebase.init.js
│   ├── layouts/         # Layout components
│   │   └── RootLayout.jsx
│   ├── Routes/          # Route protection
│   │   └── PrivateRoute.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

### Backend Structure
```
smart-deals-server/
├── index.js                              # Main server file with JWT middleware
├── __jwt__.js                            # JWT concepts documentation
├── smart-deals-firebase-adminsdk.json    # Firebase Admin SDK credentials
├── .env                                  # Environment variables
├── .gitignore
├── package.json
└── README.md
```

## 🔑 API Endpoints

### Authentication & Users
| Method | Endpoint | Auth Required | Description |
|--------|----------|---------------|-------------|
| POST | `/users` | No | Create new user (checks for existing email) |
| POST | `/getToken` | No | Generate custom JWT token (optional feature) |

### Products
| Method | Endpoint | Auth Required | Description |
|--------|----------|---------------|-------------|
| GET | `/products` | No | Get all products (supports email query) |
| GET | `/latest-products` | No | Get 6 most recent products |
| GET | `/products/:id` | No | Get single product by ID |
| POST | `/products` | No | Create new product |
| PATCH | `/products/:id` | No | Update product |
| DELETE | `/products/:id` | No | Delete product |

### Bids (Protected with JWT)
| Method | Endpoint | Auth Required | Description |
|--------|----------|---------------|-------------|
| GET | `/bids?email=user@email.com` | **Yes** (Firebase Token) | Get bids by buyer email (user can only access their own bids) |
| GET | `/products/bids/:productId` | **Yes** (Firebase Token) | Get all bids for a product (sorted by price descending) |
| POST | `/bids` | No | Create new bid |
| DELETE | `/bids/:id` | No | Delete bid |

### Authorization Header Format
All protected endpoints require the following header:
```js
Authorization: Bearer <firebase_access_token>
```

## 🔒 Security Implementation  

### **JWT Token Flow (Firebase Admin SDK)**  
The application leverages **Firebase Authentication's built-in JWT system** for secure, stateful user sessions.

| Step | Detail | Mechanism |
|------|---------|-----------|
| **User Login** | User signs in with Google via Firebase. | Firebase Auth |
| **Token Creation** | Firebase automatically creates an ID token (JWT). | Firebase Auth |
| **Token Storage** | Token stored in Firebase Auth state; accessible via `user.accessToken`. | Firebase |
| **Secure API Requests** | Frontend sends token in Authorization header. | `Bearer <token>` |
| **Server-Side Verification** | Firebase Admin SDK verifies the token's validity, expiry, and signature. | Firebase Admin SDK |
| **Data Ownership Validation** | Extracts user email from token; compares with requested data ownership. | Express Middleware |

#### Example Frontend Request
```js
fetch(`http://localhost:3000/bids?email=${user.email}`, {
  headers: {
    authorization: `Bearer ${user.accessToken}`
  }
})
```
### Server-Side Verification

1. Firebase Admin SDK verifies the token
2. Extracts user email from token
3. Compares with requested data ownership


#### Middleware Architecture
```js
// 1. Logger Middleware
javascriptconst logger = (req, res, next) => {
    console.log('logging information');
    next();
}

// Logs all incoming requests for debugging.
// 2. Firebase Token Verification Middleware
javascriptconst verifyFireBaseToken = async (req, res, next) => {
    // Check for authorization header
    if (!req.headers.authorization) {
        return res.status(401).send({ message: 'unauthorized access' });
    }
    
    // Extract token
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).send({ message: 'unauthorized access' })
    }
    
    // Verify with Firebase Admin SDK
    try {
        const userInfo = await admin.auth().verifyIdToken(token);
        req.token_email = userInfo.email;
        next();
    } catch {
        return res.status(401).send({ message: 'unauthorized access' })
    }
}
// 3. Data Ownership Validation
javascriptapp.get('/bids', logger, verifyFireBaseToken, async(req, res) => {
    const email = req.query.email;
    
    // Prevent users from accessing other users' bids
    if (email !== req.token_email) {
        return res.status(403).send({ message: 'forbidden access' })
    }
    
    // Proceed with query...
})
Custom JWT Token (Optional - Documented)
The project includes documentation for implementing custom JWT tokens:
javascript// Generate custom token
app.post('/getToken', (req, res) => {
    const loggedUser = req.body;
    const token = jwt.sign(loggedUser, process.env.JWT_SECRET, { 
        expiresIn: '1h' 
    });
    res.send({ token });
})

// Verify custom token
const verifyJWTToken = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).send({ message: 'unauthorized access' })
    }
    
    const token = authorization.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'unauthorized access' })
        }
        req.token_email = decoded.email;
        next();
    })
}
```

### 💾 Database Schema
### Collections



```js
// users
javascript{
  _id: ObjectId,
  name: String,
  email: String,
  image: String
}
// products
javascript{
  _id: String,
  title: String,
  price_min: Number,
  price_max: Number,
  image: String,
  seller_name: String,
  seller_image: String,
  seller_contact: String,
  email: String,
  location: String,
  condition: String,
  usage: String,
  description: String,
  status: String,
  created_at: Date
}
// bids
javascript{
  _id: ObjectId,
  product: String,          // Product ID reference
  buyer_name: String,
  buyer_email: String,
  buyer_image: String,
  bid_price: Number,
  status: String           // "pending", "accepted", "rejected"
}
```

## Built with ❤️ using modern web technologies

## 📸 Screenshots
![alt text](<Screenshot 2025-11-04 034104.png>)
![alt text](<Screenshot 2025-11-04 034125.png>)
![alt text](<Screenshot 2025-11-04 034140.png>)
![alt text](<Screenshot 2025-11-04 034155.png>)
![alt text](<Screenshot 2025-11-04 034214.png>)
![alt text](<Screenshot 2025-11-04 034236.png>)