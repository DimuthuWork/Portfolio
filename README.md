# Dimuthu Ekanayaka | Portfolio
A dark, space-themed personal portfolio for a cyber security undergraduate student. Built with plain HTML, CSS and JavaScript.


## Features
- Responsive layout with a mobile menu
- Smooth scroll-reveal animations
- Projects loaded from `projects.json`, so adding a project needs no code changes
- Contact form that opens the visitor's email app


## Project structure
```
space-portfolio/
├── index.html      # page content
├── style.css       # theme, colors and fonts (edit the :root variables)
├── script.js       # menu, animations, project loader, contact form
├── projects.json   # your projects list
└── README.md
```


## Run locally
The project list is loaded with `fetch`, so open the site through a local server instead of double-clicking the file.
1. Open the folder in VS Code
2. Install the **Live Server** extension
3. Right-click `index.html` and choose **Open with Live Server**


## Customize
- **Name, bio, skills:** edit `index.html` (look for the `EDIT` comments)
- **Colors and fonts:** edit the `:root` block at the top of `style.css`
- **Projects:** add an entry to `projects.json`
- **Email:** change `your@email.com` in `index.html` and `script.js`


## Deploy with GitHub Pages
1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Under **Branch**, choose `main` and `/ (root)`, then click **Save**
4. After a minute, the site is live.


## License

© 2026 Dimuthu Ekanayaka. All rights reserved.
