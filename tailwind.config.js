/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      SogoeUI: ["SogoeUI", "sans-serif"],
      SogoeUIBold: ["SogoeUIBold", "sans-serif"],
      SogoeUISemibold: ["SogoeUISemiBold", "sans-serif"],
    },
    extend: {
      colors: {
        bodyBg: "#EAEDF7",
        sideBarBg: "#0E0E23",
        blue: "#1D82F5",
        blue2: "#E6F3F9",
        lightBlue: "#E4E7EB",
        inputBg: "#F6F6F6",
        brightRed: "#F05E78",
        red2: "#BE000033",
        grey1: "#626972",
        grey2: "#EEEBEB",
        grey3: "#8994A3",
        grey4: "#F5F5F5",
        grey5: "#6259CA",
        grey6: "#99A5B5",
        grey7: "#707070",
        darkBlue: "#171F29",
        grey8: "#8994A30D",
        grey9: "#E8E8F7",
        green: "#00AF2F",
        red: "#BE0000",
        pending: "#FFCC00",
        black2: "#171F29",
        transparentBlack: "rgba(0,0,0,0.8)",
      },
      width: {
        mainContent: "calc(100%-240px)",
        mainContentCollapsed: "calc(100%-0px)",
      },
    },
  },
  plugins: [],
};
