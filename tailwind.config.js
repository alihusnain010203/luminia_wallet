/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#282a33",
          "200": "#03040d",
          "300": "rgba(255, 255, 255, 0.6)",
          "400": "rgba(255, 255, 255, 0.2)",
          "500": "rgba(255, 255, 255, 0.8)",
        },
        white: "#fff",
        mediumpurple: "rgba(116, 112, 217, 0.12)",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "21xl": "40px",
        "8xs": "5px",
      },
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      "34xl": "3.313rem",
      "13xl": "2rem",
      "23xl": "2.625rem",
      "24xl": "2.688rem",
      "7xl": "1.625rem",
      "15xl": "2.125rem",
      lg: "1.125rem",
      smi: "0.813rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
