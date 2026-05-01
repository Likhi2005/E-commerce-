# E-Commerce Platform

A full-stack e-commerce application built with modern web technologies, featuring a customer-facing store, admin dashboard, and scalable backend API.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Project Overview

This is a production-ready e-commerce platform with:
- **Frontend Store**: Customer-facing React application for browsing and purchasing products
- **Admin Dashboard**: Management interface for products, orders, and analytics
- **Backend API**: RESTful API with authentication, payment processing, and database management

## 🛠 Tech Stack

### Frontend & Admin
- **Framework**: React 19.x
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4.x
- **State Management**: React Context API
- **HTTP Client**: Axios
- **Routing**: React Router 7.x
- **UI Notifications**: React Toastify
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Security**: Bcrypt
- **File Upload**: Multer
- **Image Storage**: Cloudinary
- **Payment Gateways**: Stripe & Razorpay
- **Development**: Nodemon

### Tools & Utilities
- **Linting**: ESLint
- **Validation**: Validator.js
- **API Testing**: Postman (recommended)

## 🏗 Architecture

```
E-commerce-/
├── Frontend/          # Customer-facing React application
├── admin/             # Admin dashboard
├── backend/           # Express API server
└── docs/              # Documentation
```

## 📦 Prerequisites

Ensure you have the following installed:
- Node.js 16.x or higher
- npm or yarn package manager
- MongoDB (local or cloud instance - MongoDB Atlas recommended)
- Cloudinary account (for image management)
- Stripe account (for payment processing)
- Razorpay account (optional, for alternative payments)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Likhi2005/E-commerce-.git
cd E-commerce-
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
# Server Configuration
PORT=4000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/ecommerce

# JWT
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d

# Cloudinary
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key

# Razorpay
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Admin Email
ADMIN_EMAIL=admin@example.com
```

### 3. Frontend Setup

```bash
cd Frontend
npm install
```

Create a `.env` file in the Frontend directory:

```env
VITE_API_BASE_URL=http://localhost:4000/api
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

### 4. Admin Dashboard Setup

```bash
cd admin
npm install
```

Create a `.env` file in the admin directory:

```env
VITE_API_BASE_URL=http://localhost:4000/api
```

## ▶ Running the Application

### Development Mode

**Terminal 1 - Backend:**
```bash
cd backend
npm run server    # Starts with Nodemon for hot-reload
```

**Terminal 2 - Frontend:**
```bash
cd Frontend
npm run dev       # Runs on http://localhost:5173
```

**Terminal 3 - Admin Dashboard:**
```bash
cd admin
npm run dev       # Runs on http://localhost:5174
```

### Production Build

**Frontend:**
```bash
cd Frontend
npm run build     # Creates optimized build in dist/
npm run preview   # Preview production build locally
```

**Admin:**
```bash
cd admin
npm run build
npm run preview
```

**Backend:**
```bash
cd backend
npm start         # Runs production server
```

## 📂 Project Structure

### Frontend (`Frontend/`)
```
src/
├── components/        # Reusable UI components
│   ├── BestSeller.jsx
│   ├── CartTotal.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── LatestCollection.jsx
│   ├── Navbar.jsx
│   └── ...
├── pages/            # Page components
│   ├── Home.jsx
│   ├── Product.jsx
│   ├── Cart.jsx
│   ├── Collection.jsx
│   ├── Orders.jsx
│   └── ...
├── context/          # React Context for state management
│   └── ShopContext.jsx
├── assets/           # Static assets & constants
└── App.jsx
```

### Admin (`admin/`)
```
src/
├── components/       # Admin UI components
│   ├── Login.jsx
│   ├── Navbar.jsx
│   └── Sidebar.jsx
├── pages/           # Admin pages
│   ├── Add.jsx      # Add products
│   ├── List.jsx     # Product list
│   └── Orders.jsx   # Order management
└── App.jsx
```

### Backend (`backend/`)
```
├── config/          # Configuration files
│   ├── mongodb.js
│   └── cloudinary.js
├── models/          # Mongoose schemas
│   ├── userModel.js
│   ├── productModel.js
│   └── orderModel.js
├── controllers/     # Business logic
│   ├── userController.js
│   ├── productController.js
│   └── cartController.js
├── routes/          # API endpoints
│   ├── userRoute.js
│   ├── productRouter.js
│   └── cartRoute.js
├── middleware/      # Custom middleware
│   ├── auth.js      # JWT authentication
│   ├── adminAuth.js # Admin authorization
│   └── multer.js    # File upload handling
└── server.js        # Entry point
```

## 🔌 API Documentation

### Authentication Endpoints

**POST** `/api/user/register` - User registration
**POST** `/api/user/login` - User login
**POST** `/api/user/logout` - User logout

### Product Endpoints

**GET** `/api/product/list` - Get all products
**GET** `/api/product/:id` - Get product details
**POST** `/api/product/add` - Add product (Admin only)
**PUT** `/api/product/update/:id` - Update product (Admin only)
**DELETE** `/api/product/delete/:id` - Delete product (Admin only)

### Cart Endpoints

**GET** `/api/cart` - Get user's cart
**POST** `/api/cart/add` - Add item to cart
**DELETE** `/api/cart/remove/:id` - Remove item from cart

For detailed API documentation, refer to the Postman collection or generate OpenAPI docs.

## 🔐 Environment Variables

### Backend Required Variables
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT token generation
- `CLOUDINARY_*` - Cloudinary API credentials
- `STRIPE_SECRET_KEY` - Stripe secret key
- `RAZORPAY_KEY_*` - Razorpay API keys

### Frontend Required Variables
- `VITE_API_BASE_URL` - Backend API URL
- `VITE_STRIPE_PUBLIC_KEY` - Stripe public key

## 📝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add some amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

### Code Standards
- Follow ESLint rules (run `npm run lint` in each directory)
- Use meaningful commit messages
- Add comments for complex logic
- Test features before submitting PR

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 🤝 Support

For issues and feature requests, please open an issue on GitHub.
