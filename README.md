📖 Project Overview
This is a simple Next.js 15 (App Router) application featuring public and protected routes. Users can browse products, view product details, log in with NextAuth.js, and add products through a protected dashboard.

🚀 Core Features
Landing Page (/)

Navbar, Hero, Product Highlights, Footer
Navigation to Login & Products
Public access
Login with NextAuth (/login)

Google or credential login
Redirects to /products after login
Product List (/products)

Public access
Displays all products with name, description, price
Each has a Details button
Product Details (/products/[id])

Public access
Shows full details of a selected product
Protected Page: Add Product (/dashboard/add-product)

Accessible only for logged-in users
Product form to add new items to the database
Unauthenticated users are redirected to /login
⚡ Enhancements
✅ Loading spinner on form submission
✅ Toast messages after product add
🛠️ Tech Stack
Frontend: Next.js 15 (App Router)
Authentication: NextAuth.js
Database: MongoDB
Deployment: Vercel
📂 Project Structure
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

⚙️ Setup & Installation
1. Clone Repository
git clone https://github.com/Hossahin/scic-task.git
cd fashionhub
2. Install Dependencies
npm install
3. Configure Environment Variables
Create a .env.local file in the root directory:


4. Run Development Server
npm run dev
Visit 👉 http://localhost:3000

5. Build for Production
npm run build
npm start
📌 Route Summary
Route	Access	Description
/	Public	Landing page with sections
/login	Public	Login with NextAuth
/products	Public	Product list page
/products/[id]	Public	Product details page
/dashboard/add-product	Protected	Add product form (requires login)
/api/products	Public API	Fetch products
📎 Submission
Live Site (Vercel): 
👨‍💻 Author
Developed with  by Shihab Islam