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

## 🏁 Conclusion

Next.js (App Router + TypeScript) combines **React’s flexibility** with **server capabilities** to build scalable, modern, and SEO-friendly web apps.

By understanding:

* File-based routing
* Dynamic & Catch-all routes
* Server vs Client Components
* Layout & Template differences
* CSS Module styling

You’ll be ready to develop production-grade applications with clean structure and performance optimization.

# module 2
<!-- next js image optimize -->
<!-- next js Font optimize -->
<!-- meta data -->
<!-- absolute and relative path -->
<!-- setup json-server -->
<!--  data fetching -->
<!-- data cache ing -->

