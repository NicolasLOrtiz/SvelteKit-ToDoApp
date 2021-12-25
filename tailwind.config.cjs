module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,svelte,css}"],
  purge: ['./src/**/*.svelte', './src/**/*.css'],
  theme: {
    extend: {},
  },
  plugins: [],
}
