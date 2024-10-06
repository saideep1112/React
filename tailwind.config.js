module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        proximanova: ["ProximaNovaCondensed", "sans-serif"],
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(rgb(255, 255, 255) -6.71%, rgb(235, 235, 242) 56.19%, rgb(223, 223, 231) 106.56%)",
      },
      keyframes: {
        popup: {
          "0%": { opacity: 0, transform: "translate3d(0, 100%, 0)" },
          "100%": { opacity: 1, transform: "translate3d(0, 0, 0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
