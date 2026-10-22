# tiger-strategies-website

# Tiger Strategies Fund – I · Website

The investor-facing website for Tiger Strategies Fund – I, a SEBI-registered Category I Alternative Investment Fund (Venture Capital Fund). The site was built to meet the fund's regulatory disclosure requirements and give investors one place for fund information, stewardship disclosures and grievance redressal.

**Live site:** https://rad-clafoutis-290fc3.netlify.app


## Pages

- **Home** – overview, key fund facts and investment focus areas
- **About Us** – fund structure and the investment manager
- **Team** – designated partners and key team members
- **Investors Corner** – stewardship policy, voting disclosures and grievance redressal
- **Contact** – fund enquiries and the sponsor / investment manager's details
- **Disclaimer** – regulatory disclaimer

## Features

- Responsive layout that works on phone, tablet and desktop, with a collapsible mobile menu
- Single-page navigation using URL hashes (`#about`, `#contact`, …), so every page has its own link and the browser back button works
- Accessibility basics: semantic HTML, `aria-current` on the active menu item, keyboard focus styles and focus moved to each page's heading
- A consistent visual system built on CSS custom properties (color tokens, cards, tables, accordions)
- No frameworks or build step: plain HTML, CSS and JavaScript

## Tech stack

HTML5 · CSS3 · vanilla JavaScript · Google Fonts (Inter)

## Running it locally

Download or clone the repo and open `index.html` in any browser. No install needed.

    git clone https://github.com/RhyamJain/tiger-strategies-website.git

## Project structure

    index.html   – page content and structure
    styles.css   – all styling and responsive layout
    script.js    – page navigation and mobile menu

## How it was built

I started from an existing single-file HTML page. I used AI-assisted development (Claude Code) to split it into separate HTML, CSS and JS files, redesign the layout and visual style, and make it responsive. I then gathered revision requests from the team and applied them across all pages before delivery.

## Author

Rhyam Jain · https://www.linkedin.com/in/rhyam-jain-665a3123a/
