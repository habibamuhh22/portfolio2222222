# Habiba Muhammed — Portfolio

Premium personal command-center portfolio for **Habiba Muhammed**, Senior Network Security Engineer & SOC Analyst.

Built with **HTML5, CSS3, and vanilla JavaScript** only (no React, Vue, Angular, Bootstrap, or Tailwind).

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
# Python
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Replace personal assets

| File | Purpose |
| --- | --- |
| `assets/images/profile.jpg` | Hero portrait |
| `assets/images/about.jpg` | About section photo |
| `assets/images/project1.jpg` … `project4.jpg` | Project covers |
| `assets/cv/Habiba_Muhammed_CV.pdf` | Download CV |

The CV download path is also set in `js/script.js` (`CONFIG.cvPath`) and in the navbar link in `index.html`.

Replace the email `your.email@example.com` in `index.html` (contact section, `mailto:` link).

## Edit content without hunting

- **Projects, GitHub links, CV path:** `js/script.js` → `CONFIG`
- **Experience placeholders:** HTML comments in the Experience section of `index.html`
- **Testimonials:** placeholder slides in `index.html` (do not invent people)
- **Contact backend:** comment in `js/script.js` inside `initForm()`

## Theme

Dark mode is the default. The toggle stores `theme` in `localStorage` (`dark` or `light`).

## Notes

- The hero **SYSTEM STATUS** card is a visual portfolio element, not live monitoring.
- Project GitHub buttons show **GitHub link coming soon** until a URL is added in `CONFIG.projects`.
- Generated photos are placeholders. Swap them with your own images for production use.
