# 🌍 World on the GO

A modern, responsive country exploration web application built with **React, TypeScript, Vite, and Tailwind CSS**.

World on the GO fetches country data from the Programming Hero Countries API and presents countries in an interactive card-based interface. Users can mark countries as visited and save individual flags as visited. Their selections persist in the browser even after refreshing the page.

---

## ✨ Features

- 🌎 Browse country information from around the world
- 🏳️ Display country flags dynamically from API data
- 📊 Track total countries, visited countries, and visited flags
- ✅ Mark/unmark countries as visited
- 🏳️‍🌈 Add/remove country flags from the visited collection
- 💾 Persistent visited data using browser `localStorage`
- 🔄 Data loading with React `Suspense`
- 📱 Responsive country-card grid
- 🎨 Modern dark UI built with Tailwind CSS
- ⚡ Fast development and hot module replacement with Vite
- 🧩 Reusable React components
- 🔷 Strong typing with TypeScript

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | UI development |
| TypeScript | Static typing and safer component development |
| Vite | Development server and build tooling |
| Tailwind CSS | Responsive styling and UI design |
| JavaScript / ES6+ | Application logic |
| Fetch API | Retrieving country data |
| localStorage | Persisting visited countries and flags |

---

## 📡 API

Country data is retrieved from the Programming Hero Countries API:

```text
https://openapi.programming-hero.com/api/all
```

The application requests the country collection and renders the returned data dynamically.

---

## 📂 Project Structure

```text
react-ts-on-the-go/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Countries/
│   │   │   ├── Countries.tsx
│   │   │   └── Countries.css
│   │   │
│   │   └── Country/
│   │       ├── Country.tsx
│   │       └── Country.css
│   │
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── type.ts
│   └── User.tsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/arponganapati7-byte/on-the-go-world-via-react.git
```

### 2. Move into the project directory

```bash
cd on-the-go-world-via-react
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173/
```

Open that URL in your browser.

---

## 🏗️ Build for Production

Create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 💾 How Persistence Works

Visited countries and visited flags are stored in the browser using `localStorage`.

The application keeps two browser storage entries:

```text
world-on-the-go-visited-countries
world-on-the-go-visited-flags
```

When a user marks a country or flag:

```text
User interaction
      ↓
React state updates
      ↓
localStorage is updated
      ↓
Browser refresh
      ↓
Saved data is loaded again
```

This means the user's selections remain available after refreshing the page.

> **Note:** `localStorage` is browser-specific. Clearing the site's browser storage will remove the saved selections.

---

## 🧠 React Concepts Practiced

This project focuses on practical React and TypeScript concepts, including:

- Functional components
- Component props
- TypeScript interfaces and types
- `useState`
- `useEffect`
- React `use()`
- `Suspense`
- Asynchronous data fetching
- Parent-child state management
- Event handling
- Conditional rendering
- Array methods such as `map`, `filter`, and `includes`
- Persistent client-side state

---

## 🎨 UI & Design

The interface uses a dark visual theme with:

- Gradient typography
- Glass-style panels
- Rounded cards
- Responsive grids
- Hover transitions
- Interactive buttons
- Visited-state indicators
- Responsive layouts for different screen sizes

Tailwind CSS utility classes are used throughout the main interface to keep styling close to the component structure.

---

## 🔄 Application Flow

```text
                    ┌──────────────────┐
                    │   Countries API  │
                    └────────┬─────────┘
                             │
                             ▼
                    Fetch country data
                             │
                             ▼
                    ┌──────────────────┐
                    │    Countries     │
                    │    Component     │
                    └────────┬─────────┘
                             │
                  ┌──────────┴──────────┐
                  ▼                     ▼
            Country Cards          Statistics
                  │
          ┌───────┴────────┐
          ▼                ▼
    Mark Visited        Add Flag
          │                │
          └───────┬────────┘
                  ▼
             React State
                  │
                  ▼
             localStorage
                  │
                  ▼
          Persistent Selection
```

---

## 📱 Responsive Design

The country cards use a responsive grid that adapts to the available screen width:

```text
Mobile       → 1 column
Small        → 2 columns
Large        → 3 columns
Extra Large  → 4 columns
```

This allows the application to remain usable across desktop, tablet, and mobile layouts.

---

## 🧪 Development

Recommended workflow:

```bash
npm install
npm run dev
```

After making changes, verify the application in the browser and check the browser console for runtime errors.

Before committing changes, you can create a production build:

```bash
npm run build
```

---

## 📌 Future Improvements

Possible future enhancements include:

- 🔎 Country search
- 🌐 Filter countries by region
- 🔤 Sort countries alphabetically
- 📋 Dedicated visited-country section
- 🗺️ Interactive world map
- 📈 More detailed country statistics
- 🌙 Theme customization
- 🔐 User accounts and cloud-synced progress
- ☁️ Backend database persistence
- 🚀 Production deployment

---

## 🙌 Acknowledgements

Country data is provided through the **Programming Hero Countries API**.

The project was developed as a React + TypeScript learning project and subsequently customized with a responsive Tailwind CSS interface and persistent browser-side state.

---

## 👨‍💻 Author

**Arpon Ganapati**

GitHub:  
https://github.com/arponganapati7-byte

Project Repository:  
https://github.com/arponganapati7-byte/on-the-go-world-via-react

---

## 📄 License

No license has been specified for this repository yet.
