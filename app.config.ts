export default defineAppConfig({
  toaster: {
    position: 'bottom-right' as const,
    expand: true,
    duration: 5000
  },
  theme: {
    radius: 0,
    blackAsPrimary: false
  },
  ui: {
    colors: {
      primary: '#9780d6',
      secondary: '#d1d4f7',
      neutral: 'slate'
    }
  }
})