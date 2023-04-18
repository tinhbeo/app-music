/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#432275",
        "layout-bg": "#170f23",
        "player-bg": "#130c1c",
        "primary-text": "#DADADA",
        "purple-primary": "#7200a1",
        "text-hover": "#c662ef",
        "alpha-bg": "hsla(0,0%,100%,0.05)",
        "dark-alpha": "rgba(0,0,0,0.5)",
        "border-alpha": "hsla(0,0%,100%,0.1)",
        "text-gray": "hsla(0,0%,100%,0.5)",
        "hover-icon": "hsla(0,0%,100%,0.3)",
        scrollbar: "hsla(0,0%,100%,0.3)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        vip: "url('https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.21/static/media/vip-label.3dd6ac7e.svg')",
      },
    },
  },
  plugins: [],
};
