# Vue Custom Elements

This project demonstrates how to compile Vue Single-File Components (SFCs) into custom web components with styles injected into the shadow root.

**See results [here](https://sillyash.github.io/vus-custom-web-component/) and look at the [source code](./index.html) !**

## Steps

### Rename Your Component Files

[See files](./src/components/)

Rename your Vue component files to end with .ce.vue. For example:

HelloWorld.vue -> HelloWorld.ce.vue \
WelcomeItem.vue -> WelcomeItem.ce.vue \
TheWelcome.vue -> TheWelcome.ce.vue

### Update Your Vite Configuration

Configure Vite to handle .ce.vue files in custom element mode.

[See file](./vite.config.js)

```js
// vite.config.js
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.endsWith('.ce')
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
```

### Import Global Styles in Each Component

Add the import of @/assets/main.css to index.js, or make the CSS inside your components files.

[See file](./index.html)

```html
<link rel="stylesheet" href="@/assets/main.css">
```

### Define Custom Elements

Create a new JavaScript file to define the custom elements.

[See file](./defineCustomElements.js)

```js
// defineCustomElements.js
import { defineCustomElement } from 'vue';
import HelloWorld from './HelloWorld.ce.vue';
import WelcomeItem from './WelcomeItem.ce.vue';
import TheWelcome from './TheWelcome.ce.vue';

const HelloWorldElement = defineCustomElement(HelloWorld);
const WelcomeItemElement = defineCustomElement(WelcomeItem);
const TheWelcomeElement = defineCustomElement(TheWelcome);

customElements.define('hello-world', HelloWorldElement);
customElements.define('welcome-item', WelcomeItemElement);
customElements.define('the-welcome', TheWelcomeElement);
```

### Use Custom Elements in HTML

Include the custom elements in your HTML file.

[See file](./index.html)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico">
    <link rel="stylesheet" href="@/assets/main.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue Custom Elements</title>
  </head>
  <body>
    <hello-world msg="Hello, World!"></hello-world>
    <the-welcome></the-welcome>
    <script type="module" src="./defineCustomElements.js"></script>
  </body>
</html>
```

## Test

### Start the Development Server

Start the development server to test and display your webpage.

```bash
npm run dev
```

### Open Your Browser

Open the provided local URL (e.g., http://localhost:3000) in your web browser to see your webpage with the custom elements.

## Build

### Build your code

Build your code in [./dist](./dist/).

```bash
npm run build
```

### Test your build

#### Install http-server

```bash
npm -i -g http-server
```

#### Run your build

```bash
http-server ./build
```

Open https://localhost:8080/ and see if your build works !

## Deploy

TODO : Write doc on deployment

