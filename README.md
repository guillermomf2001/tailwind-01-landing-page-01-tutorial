# Modern Landing Page Tailwind CSS Project following YouTube Tutorial

## Presentation

The main objetive of this project is to adquire some practise and agility using __Tailwind CSS framework__. To get it, I will follow the YouTube tutorial [Modern Landing Page Tailwind CSS Project](https://www.youtube.com/watch?v=xpGNcQDmV2A).

In addition, I will use other tecnologies like __pnpm__ package manager and __Vite__ builder that let me develop more quickly.

<br>

## Getting Started: Installations & Settings

In order to develop this project it is necessary to install the [Tailwind CSS IntelliSense plugin](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) in [Visual Studio Code](https://code.visualstudio.com/) and add the next lines in `settings.json` vscode configuration file.

```json
"files.associations": {
  "*.css": "tailwindcss"
},
"editor.quickSuggestions": {
  "strings": true
}
```

After that, I will use the terminal for several things:
  - To install pnpm package manager (it is not necessary to realize this tutorial, but I wanted to prove it )
  - To create a Vite project
  - To install development dependencies
  - To initialize our Tailwind project

```bash
npm i -g pnpm

pnpm create vite@latest <project-name>

// Select: Vanilla
// Select: Javascript

cd <project-name>

pnpm i -D tailwincss postcss autoprefixer @tailwind/forms

pnpx tailwindcss init -p
```

I will continue with the next steps:

Edit __tailwind.config.cjs__:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
```

Edit __style.css__:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import _style.css_ into __main.js__ and delete all the file content:
```js
import './style.css'
```

Edit __index.html__:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Homesmart</title>
  </head>
  <body class="bg-gray-800">
    <script type="module" src="/main.js"></script>
  </body>
</html>
```

Finally, I will create a local Git repository and push it to a remote GitHub repository. Of course, I will sure I rename `master` branch to `main` branch and `node_modules` directory is added to __.gitignore__ file.

```bash
git init
git branch -M main
git commit -m "First commit"
git remote add origin <url-of-your-repository>
git push -u origin main

```

At the end of this step the project will be configured and ready to begin its develop.

<br>

Nothing else. Enjoy 🤓

<br>
<br>

---

## Related Links
* [Modern Landing Page Tailwind CSS Project (YouTube Tutorial)](https://www.youtube.com/watch?v=xpGNcQDmV2A)
* [pnpm - Performant Node Package Manager](https://pnpm.io/)
* [Tailwind CSS framework](https://tailwindcss.com/)
* [Tailwind Intellisense Recommended VS Code Settings](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss#recommended-vs-code-settings)
* [PostCSS Official Web Site](https://postcss.org/)
* [Autoprefixer Readme](https://github.com/postcss/autoprefixer#autoprefixer-)
* [Tailwind Forms Reset](https://github.com/tailwindlabs/tailwindcss-forms)