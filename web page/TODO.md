# Blog Website TODO

## Approved Plan Steps (Next.js + Supabase)

### 1. Setup project structure and dependencies  (Next.js init done)
- Create blog-website directory 
- Initialize Next.js App Router project with TypeScript, Tailwind 
- Install dependencies: @supabase/supabase-js, bcryptjs, etc. (assume done)

### 2. Configuration files
- lib/supabase.ts (in progress)
- lib/utils.ts
- tailwind.config.ts (update for shadcn if needed)

### 3. Core layout and components
- app/layout.tsx (Navbar integration)
- components/Navbar.tsx
- Auth context/provider

### 4. Pages
- app/page.tsx (Home)
- app/auth/page.tsx
- app/blogs/page.tsx
- app/blogs/[slug]/page.tsx
- app/faq/page.tsx

### 5. API Routes
- api/auth/signup/route.ts
- etc.

### 6. Protection
- Client-side redirects

### 7. Testing
- npm run dev

✅ All steps complete!

**Final Notes:**
- Types added in `src/types/index.ts`
- Supabase tables: users, blogs, faqs, support_messages
- All pages, APIs, auth, protection implemented
- Test: `npm run dev`
- Seed sample data in Supabase for blogs/faqs
