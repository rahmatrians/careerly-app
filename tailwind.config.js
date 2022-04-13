module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        // 'Inter': ["Inter"],
        Rampart: ["Rampart One", "cursive"],
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      mytheme: {
        primary: "#6171FE",
        secondary: "#f6d860",
        accent: "#37cdbe",
        neutral: "#ec4d1d",
        "base-100": "#F9F9FF",
      },
    }],
  },
}
