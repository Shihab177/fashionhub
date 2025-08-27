# 🌟 Simple Next.js 15 Product App

A simple Next.js 15 application with public and protected pages using **NextAuth.js** for authentication. Users can view a landing page, browse products, view product details, and add new products after logging in.

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

## ⚡ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
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
   Visit 👉 http://localhost:3000
5. **Build for Production**
  ```bash
   npm run build
   npm start   
   
   
