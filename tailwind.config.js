/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "course-details-sm": ["26px", "36px"],
        "course-details-lg": ["36px", "44px"],
        "home-sm": ["28px", "34px"],
        "home-lg": ["48px", "56px"],
        body: ["15px", "21px"],
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
      spacing: {
        30: "7.5rem",
      },
      height: {
        "section-height": "500px",
      },
      zIndex: {
        1: "1",
      },
    },
  },
  plugins: [],
};
