// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  plugins: [
    /* eslint-disable no-undef */
    require("daisyui"),
    require("@tailwindcss/forms"),
    require("prettier-plugin-tailwindcss"),
  ],
  daisyui: {
    themes: false,
  },
};
