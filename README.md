# ChatGPT API Generator Prank Simulation

A static HTML/CSS/JS prank simulation.

It shows:

- A centered generator box
- Input field
- Generate button
- 5–6 second loading animation
- Final message: `You got fool!!`

## Files

```text
index.html
style.css
script.js
assets/logo.webp
README.md
```

## Run Locally

Open `index.html` directly in your browser.

Or run a local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000
```

## Upload To GitHub

1. Create a new GitHub repository.
2. Upload:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - `assets/logo.webp`
3. Commit changes.

## Enable GitHub Pages

1. Go to repository **Settings**.
2. Open **Pages**.
3. Source: **Deploy from branch**.
4. Branch: **main**.
5. Folder: **/root**.
6. Save.
7. Wait 1–3 minutes.
8. Open the GitHub Pages live URL.

## Change Loading Time

Open `script.js` and edit:

```js
const totalDurationMs = 5600;
```

For 6 seconds:

```js
const totalDurationMs = 6000;
```

For 5 seconds:

```js
const totalDurationMs = 5000;
```

## Change Final Text

Open `index.html` and edit:

```html
<h2>You got fool!!</h2>
```
