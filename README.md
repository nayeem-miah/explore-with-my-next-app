# ⚡ Introduction to Next.js and Fundamentals (App Router)

## 📘 What is Next.js?
**Next.js** is a powerful React framework built by **Vercel**.  
It extends React with features like **Server Components**, **File-based Routing**, **API Routes**, and **Optimized Rendering** (SSR, SSG, ISR).

Next.js helps you build **full-stack**, **SEO-friendly**, and **high-performance** web applications easily.

### 🌐 Official Documentation
👉 [Next.js Docs](https://nextjs.org/docs)

---

## 🚀 Create a Next.js App (with TypeScript)

Run the following command to create a new Next.js app with the App Router:

```bash
npx create-next-app@latest my-next-app --typescript
````

Then start your development server:

```bash
cd my-next-app
npm run dev
```

Now visit 👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🛣️ Routing in Next.js (App Router)

Next.js uses **file-based routing** under the `app/` directory.
Each folder inside `app/` with a `page.tsx` file becomes a route.

Example:

```
app/
 ├── page.tsx          →  /
 ├── about/
 │    └── page.tsx     →  /about
 └── contact/
      └── page.tsx     →  /contact
```

---

### ⚙️ Dynamic Routing

Dynamic routes are created using square brackets `[param]`.

Example:

```
app/blog/[id]/page.tsx   →  /blog/1 , /blog/2
```

**Usage:**

```tsx
interface BlogPageProps {
  params: { id: string };
}

export default function BlogPage({ params }: BlogPageProps) {
  return <h1>Blog ID: {params.id}</h1>;
}
```

---

### 🌀 Catch-All Routing

Catch-all routes handle multiple nested segments.

Example:

```
app/docs/[...slug]/page.tsx   →  /docs/a , /docs/a/b , /docs/a/b/c
```

**Usage:**

```tsx
interface DocsPageProps {
  params: { slug: string[] };
}

export default function DocsPage({ params }: DocsPageProps) {
  return <p>Path: {params.slug.join(' / ')}</p>;
}
```

---

## ⚙️ Rendering in Next.js

Next.js App Router supports **Server Components** and **Client Components** by default.

### 🧠 Server Component vs Client Component

| Feature               | Server Component | Client Component             |
| --------------------- | ---------------- | ---------------------------- |
| Runs on               | Server           | Browser                      |
| Access to Server Data | ✅ Yes            | ❌ No (must use API or hooks) |
| Bundle Size           | Smaller          | Larger                       |
| Interactivity         | No               | Yes (state, events, effects) |

### ✅ Benefits of Server Components

* Smaller client bundles → Faster load times
* Built-in SEO
* No need for manual data fetching
* Access to backend or database directly

---

### 🔄 Converting a Server Component → Client Component

Add this line at the very top of your file:

```tsx
"use client";
```

Example:

```tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

---

### 💡 Best Practice

Keep your components organized like this:

```
components/
 ├── server/
 │    └── ProductList.tsx
 └── client/
      └── Counter.tsx
```

➡️ Avoid converting everything to client components unnecessarily —
use `"use client"` **only** when interactivity is required.

---

## 🔗 Link and Navigation

For navigation between routes, use the `Link` component from `next/link`.

Example:

```tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome!</h1>
      <Link href="/about">Go to About</Link>
    </div>
  );
}
```

---

## 🧭 Route Groups

Route groups help organize routes **without affecting the URL**.

Example:

```
app/
 ├── (admin)/
 │   └── dashboard/page.tsx   →  /dashboard
 └── (user)/
     └── profile/page.tsx     →  /profile
```

You can group routes logically but keep the URL structure clean.

---

## 🧩 template.tsx vs layout.tsx

| File             | Purpose                                          | Behavior                     |
| ---------------- | ------------------------------------------------ | ---------------------------- |
| **layout.tsx**   | Defines persistent UI (e.g., header, footer)     | Persists between navigations |
| **template.tsx** | Similar to layout but re-renders each navigation | Does **not** preserve state  |

**Example structure:**

```
app/
 ├── layout.tsx        → Global layout
 ├── page.tsx          → Home page
 └── dashboard/
     ├── template.tsx  → Re-renders each visit
     └── page.tsx
```

---

## 🎨 CSS Module Support

Next.js supports **CSS Modules** by default.

Example:

```
app/components/Button.module.css
```

```css
.btn {
  background-color: royalblue;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
}
```

Use in a component:

```tsx
import styles from "./Button.module.css";

export default function Button() {
  return <button className={styles.btn}>Click Me</button>;
}
```

CSS Modules help keep styles scoped locally to components.


---

# 🧩 Module 2 Explanation (Next.js Advanced Concepts)

## 1. **Next.js Image Optimization**

The `<Image>` component in Next.js automatically optimizes your images — it supports lazy loading, resizing, and modern formats like WebP for better performance.
✅ **Example:**

```jsx
import Image from 'next/image'

export default function Home() {
  return (
    <Image 
      src="/hero.jpg" 
      alt="Hero Image" 
      width={600} 
      height={400} 
      priority 
    />
  )
}
```

**Benefits:**

* Faster loading time
* Responsive images
* SEO-friendly

---

## 2. **Next.js Font Optimization**

Next.js optimizes Google Fonts or local fonts automatically using the `next/font` feature.
✅ **Example:**

```jsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <h1 className={inter.className}>Optimized Font Example</h1>
}
```

**Benefits:**

* Fonts are preloaded
* No layout shift during rendering

---

## 3. **Meta Data**

In Next.js 13+, you can define SEO metadata (like title and description) using the `metadata` export.
✅ **Example:**

```tsx
export const metadata = {
  title: "Home Page - My Website",
  description: "This is the homepage of my Next.js site",
};
```

**Purpose:** Helps with SEO, social media previews, and search ranking.

---

## 4. **Absolute vs Relative Path**

* **Relative Path:** depends on the file location, e.g., `../components/Navbar`
* **Absolute Path:** starts from the root, e.g., `@/components/Navbar`
  ✅ **Setup Example:**

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Benefit:** Cleaner imports and easier project maintenance.

---

## 5. **Setup JSON Server**

`json-server` helps you create a fake REST API easily for testing or prototyping.
✅ **Install:**

```bash
npm install -g json-server
```

✅ **Create `db.json`:**

```json
{
  "cars": [
    { "id": 1, "name": "Tesla Model 3", "price": 50000 },
    { "id": 2, "name": "BMW X5", "price": 60000 }
  ]
}
```

✅ **Run:**

```bash
json-server --watch db.json --port 5000
```

API URL → `http://localhost:5000/cars`

---

## 6. **Data Fetching**

Next.js supports multiple ways to fetch data:

* **SSR (Server-Side Rendering):** Fetch data on each request.
* **SSG (Static Site Generation):** Fetch data at build time.
* **CSR (Client-Side Rendering):** Fetch data in the browser.

✅ **Example (SSR):**

```tsx
export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return { props: { data } }
}
```

---

## 7. **Data Caching**

Next.js automatically caches data fetched during rendering.
✅ **Example:**

```tsx
const res = await fetch('https://api.example.com/data', { cache: 'force-cache' })
```

**Caching options:**

* `force-cache` → use cached data
* `no-store` → always fetch fresh data
* `revalidate: 60` → re-fetch every 60 seconds

---

## 8. **Error Page**

You can create a custom error page in `app/error.tsx` to handle unexpected errors.
✅ **Example:**

```tsx
'use client'
export default function Error({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div className="text-center">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  )
}
```

---

## 9. **Loading Page**

Add `app/loading.tsx` to show a loading state when a route or data is being fetched.
✅ **Example:**

```tsx
export default function Loading() {
  return <p className="text-center">Loading...</p>
}
```

---

## 10. **usePathname Hook (Active Navbar)**

`usePathname()` lets you get the current route in the app, which is useful for active navigation.
✅ **Example:**

```tsx
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const path = usePathname()
  return (
    <nav>
      <Link className={path === '/' ? 'active' : ''} href="/">Home</Link>
      <Link className={path === '/about' ? 'active' : ''} href="/about">About</Link>
    </nav>
  )
}
```

**Benefit:** Highlights the active page dynamically.

---

## 🏁 Conclusion

Next.js (App Router + TypeScript) combines **React’s flexibility** with **server capabilities** to build scalable, modern, and SEO-friendly web apps.

By understanding:

* File-based routing
* Dynamic & Catch-all routes
* Server vs Client Components
* Layout & Template differences
* CSS Module styling
* Optimize images and fonts efficiently  
* Handle routes, navigation, and active links  
* Manage data fetching and caching effectively  
* Build a smooth and user-friendly error/loading experience  
