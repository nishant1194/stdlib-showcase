# stdlib Heatmap Showcase

This project visualizes daily repository download counts using a calendar-style **heatmap** — built entirely on the frontend using React and `@stdlib` modules.

It serves as a demonstration of how `@stdlib` can be used in frontend projects to perform statistical analysis and data visualization in a lightweight, interactive way.

---

## Features

- **Heatmap** representing daily download counts
- **Statistical summary** using `@stdlib/stats`:
  - Mean (average downloads)
  - Maximum downloads
- **Dynamic color mapping** based on download intensity
- Built with **React + Tailwind CSS**
---

## stdlib Modules Used

- [`@stdlib/stats/base/mean`](https://www.npmjs.com/package/@stdlib/stats-base-mean) – Compute average downloads  
- [`@stdlib/stats/base/max`](https://www.npmjs.com/package/@stdlib/stats-base-max) – Get the maximum download count  
- [`@stdlib/array/float64`](https://www.npmjs.com/package/@stdlib/array-float64) – Efficient array for calculations  

---

## Screenshot

<img width="997" alt="image" src="https://github.com/user-attachments/assets/dd98cc62-561d-4204-bf3e-13923354d362" />


---

## Setup

```bash
git clone https://github.com/nishant1194/stdlib-showcase.git
cd stdlib-showcase
npm install
npm run dev
