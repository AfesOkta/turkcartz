// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      screens: {
        xs: "365px",
      },
      colors: {
        primary: "#ee4d2d",
      },
      boxShadow: {
        "bottom-spread": "rgba(0, 0, 0, 0.35)0px 5px 15px;",
      },
      backgroundImage: {
        "shopee-pattern": "url('https://cf.shopee.vn/file/5569eb9dc7e09e2dbed5315b8f2ea8ba')",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".container": {
          maxWidth: theme("columns.7xl"),
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: theme("spacing.4"),
          paddingRight: theme("spacing.4"),          
        },
      });
    }),
    require("@tailwindcss/line-clamp"),
  ],
};