# 📝 Blog Website

A modern, full-stack blog application built with **Next.js 15**, featuring authentication, dynamic blog content, and a responsive support center.

## ✨ Features

- 🔐 **Authentication** — Secure user sign-up and login with bcrypt-hashed passwords
- 📝 **Blog Management** — Create, read, and manage blog posts with dynamic routing
- ❓ **FAQ Section** — Accordion-based frequently asked questions
- 💬 **Support Center** — Contact/support form for user inquiries
- 🎨 **Modern UI** — Built with Tailwind CSS and responsive design
- ⚡ **Fast Performance** — Optimized with Next.js App Router

## 🛠 Tech Stack

| Technology | Description |
|------------|-------------|
| **Next.js 15** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first CSS framework |
| **Supabase** | Backend database & authentication |
| **bcryptjs** | Password hashing |
| **shadcn/ui** | Accessible UI components |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mr-sadhiqzz/my-project.git
   cd my-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**  
   Create a `.env.local` file in the root directory and add:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://mtvutjehyqmllxgwhdam.supabase.co                                                  
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10dnV0amVoeXFtbGx4Z3doZGFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4OTk5OTUsImV4cCI6MjA5MjQ3NTk5NX0.GP1Sy26xCZkxfvNq-3p4eXcf-I49P0OE7qt5v1KxQvg   
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**  
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
my-project/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── api/          # API routes (auth, blogs, faq, support)
│   │   ├── auth/         # Authentication page
│   │   ├── blogs/        # Blog listing & detail pages
│   │   ├── faq/          # FAQ page
│   │   └── page.tsx      # Homepage
│   ├── components/       # Reusable React components
│   ├── context/          # React context (AuthContext)
│   ├── lib/              # Utility functions & configs
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
└── README.md             # Project documentation
```

## 📡 API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/signup` | POST | User registration |
| `/api/auth/login` | POST | User authentication |
| `/api/auth/logout` | POST | User logout |
| `/api/blogs` | GET/POST | List or create blogs |
| `/api/blogs/[slug]` | GET | Get blog by slug |
| `/api/faq` | GET | Retrieve FAQ data |
| `/api/support` | POST | Submit support request |

## 📦 Deployment

The easiest way to deploy is via [Vercel](https://vercel.com):

```bash
npm run build
```

Or deploy directly from GitHub to Vercel with one click.

## 🧾 License

This project is open-source and available under the [MIT License](LICENSE).

---

Built with 💙 by [mr-sadhiqzz](https://github.com/mr-sadhiqzz)
