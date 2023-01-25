# Welcome to [Astro Foodie](https://astro-foodie.vercel.app/)

## 🥦 About Astro Foodie
An attempt to experience [Astro](https://astro.build) technology by building a book recipe with seasonal vegetables and fruits from your region and current season.

![basics](/public/images/AstroFoodie.png)


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.png
├── src/
│   ├── components/
│   │   └── Card.astro
│   │   └── Header.tsx
│   │   └── Navbar.astro
│   ├── lib/
│   │   └── getUserLocation
│   │   └── getUserSeason
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
│   └── posts/
│       └── autumn-recipes
│       └── spring-recipes
│       └── summer-recipes
│       └── winter-recipes
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |

