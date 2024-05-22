/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        loginBg: "#E8EEF3",
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
        grey10: "#E5E5E5",
        darkBlue: "#171F29",
        darkBlue2: "#200E32",
        grey8: "#8994A30D",
        grey9: "#E8E8F7",
        green: "#00AF2F",
        green2: "#2495A3",
        lightGreen: "#B7DFDD",
        darkGreen: "#023020",
        red: "#BE0000",
        orange: "#ED6E00",
        pending: "#FFCC00",
        black2: "#171F29",
        black3: "#1C2030",
        transparentBlack: "rgba(0,0,0,0.8)",
        purple: "#8120F4",
        grey11: "#272739",
        grey12: "#393939",
        grey13: "#6E6E6E",
        grey14: "#252538",
        grey15: "#BEC4CC",
        grey16: "#1f1f2d",
      },
      width: {
        mainContent: "calc(100%-240px)",
        mainContentCollapsed: "calc(100%-0px)",
      },
      boxShadow: {
        cardShadow: "0px 0px 6px #0000001A",
      },
    },
  },
  plugins: [],
};
