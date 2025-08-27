# 🌟 📖 Project Overview

This is a simple Next.js 15 (App Router) application featuring public and protected routes. Users can browse products, view product details, log in with NextAuth.js, and add products through a protected dashboard.


---

## 🚀 Features

### Public Pages
- **Landing Page (`/`)**  
  - Navbar, Hero section, Product Highlights, Footer  
  - Navigation links to Login and Products  
  - No authentication required  

- **Product List Page (`/products`)**  
  - Display a list of products (name, description, price)  
  - Each product includes a Details button  
  - Publicly accessible  

- **Product Details Page (`/products/[id]`)**  
  - Show full details of a single product  
  - Publicly accessible  

### Authentication
- **Login Page (`/login`)**  
  - Social login (Google) or credential login via NextAuth  
  - Redirects to `/products` on successful login  

### Protected Pages
- **Add Product (`/dashboard/add-product`)**  
  - Only accessible when logged in  
  - Form to add a new product  
  - Stores product data in the database  
  - Redirects unauthenticated users to login  

### Optional Enhancements
- Loading spinner on form submission  
- Toast messages for success notifications  
- Light/Dark theme toggle  

---

## 🛠 Technologies Used
- Next.js 15 (App Router)  
- NextAuth.js for authentication  
- Route Handlers (`/api`) or Express.js for backend API  
- React + Tailwind CSS for UI  

---

## 📂 Project Structure
    /app
    ├── (public pages)
    │   ├── page.jsx                 # Landing page
    │   ├── products
    │   │   ├── page.jsx             # Product list
    │   │   └── [id]/page.jsx        # Product details
    │   └── login/page.jsx           # Login page
    │
    ├── dashboard
    │   └── add-product/page.jsx     # Protected page

---

## ⚡ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shihab177/fashionhub.git
   cd fashionhub
2. **Install dependencies**
     ```bash
     npm install
3. **Set up environment variables**
   Create a .env file in the root:
   ```bash
   MONGODB_URI=your_mongodb_connection_string
   DB_NAME=your_database_name
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   NEXTAUTH_SECRET=your_nextauth_secret
4. **Run Development Server**
   ```bash
   npm run dev
  
5. **Build for Production**
   ```bash
   npm run build
   npm start

---

## 🛠 route samary

| Route                    | Access        | Description                                 |
|---------------------------|---------------|---------------------------------------------|
| `/`                       | Public        | Landing page with sections                  |
| `/login`                  | Public        | Login page using NextAuth                   |
| `/products`               | Public        | Product list page                           |
| `/products/[id]`          | Public        | Product details page                         |
| `/dashboard/add-product`  | Protected     | Add product form (requires login)          |
| `/api/products`           | Public API    | Fetch products                              |
      
---

## 📎 Submission
Live Site (Vercel): -** [https://fashionhub-bmyew72l8-shihabs-projects-54e0af4f.vercel.app/]
---
##👨‍💻 Author
Developed  by Shihab Islam
