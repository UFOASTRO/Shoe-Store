module.exports = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hidden": {
          /* For WebKit browsers */
          "&::-webkit-scrollbar": {
            display: "none",
          },
          /* For Firefox */
          "scrollbar-width": "none",
        },
      });
    }),
  ],
};
