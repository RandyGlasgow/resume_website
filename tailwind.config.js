module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
      boxShadow: {
        down: "inset 8px 8px 12px rgba(0,0,0,0.2), inset -8px -8px 12px rgba(255,255,255,0.4)",
        "down-sm":
          "inset 4px 4px 6px rgba(0,0,0,0.2), inset -4px -4px 6px rgba(255,255,255,0.4)",
        up: "8px 8px 12px rgba(0,0,0,0.2), -8px -8px 12px rgba(255,255,255,0.4)",
        "up-sm":
          "4px 4px 6px rgba(0,0,0,0.2), -4px -4px 6px rgba(255,255,255,0.4)",
      },
      keyframes: {
        "pulse-fast": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundImage: (theme) => ({
        "hero-img": "url('/img/keyboard.svg')",
      }),
    },
    fontFamily: {
      serif: ["STIX Two Text"],
      sans: ["Nunito"],
    },
  },
  variants: {
    extend: {
      // ...
      boxShadow: ["active"],
    },
  },
  plugins: [],
};
