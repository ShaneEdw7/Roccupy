/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  // daisyui: {
  //   themes: [
  //     {
  //       lite: {
  //         primary: "#686963",
  //         secondary: "#598392",
  //         accent: "#1D2F6F",
  //         neutral: "#EFEFF0",
  //         "base-100": "#EFEFF0",
  //         info: "#a8dadc",
  //         success: "#40916c",
  //         warning: "#f9c74f",
  //         error: "#d90429",
  //       },
  //     },
  //   ],

  // },
};
