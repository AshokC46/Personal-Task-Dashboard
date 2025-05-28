# 🗂️ Personal Task Dashboard

A responsive task tracking app built with React, Redux Toolkit, and Material UI. Track tasks, manage time, and visualize your productivity easily.

---

## 🚀 Features

- Add and delete tasks
- Start/stop timer for individual tasks
- Visualize time spent using charts
- Light/Dark mode toggle
- Fully responsive layout with Material UI

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/AshokC46/Personal-Task-Dashboard.git

cd Personal-Task-Dashboard/client


### 2. Install dependencies 

```bash
npm install


### 3. Start the development server

   ```bash
   npm run dev
   ```

### 4. Open the app:

   Navigate to `http://localhost:5173` (or the URL shown in your terminal) in your browser.

---

## Design Decisions

* **React + Vite:** Used Vite for faster development and hot reloading; React for component-based UI.
* **Redux Toolkit:** Manages global state of tasks and timer with simple, scalable reducers.
* **Material UI:** Provides a clean, accessible, and responsive design system with built-in theming.
* **Recharts:** Visualizes task time data with an interactive bar chart for productivity stats.
* **Responsive Design:** Achieved with Material UI’s responsive props and components for usability on multiple screen sizes.
* **Dark Mode:** Implemented with Material UI theme toggling for better user experience in different lighting conditions.
* **Frontend-only:** No backend or authentication to keep scope aligned with assignment requirements.

---

## Known Issues & Future Improvements

* No data persistence; task and timer data resets on page reload. Could add localStorage or backend integration.
* Timer state only works per browser tab; no sync across tabs or devices.
* Tasks cannot be edited once added; adding edit functionality would improve usability.
* Accessibility can be enhanced with better ARIA attributes and keyboard navigation support.
* Productivity stats could be expanded with filtering, exporting, or additional chart types.
* More robust input validation and error handling.
* Add automated tests for components and redux logic.


```
