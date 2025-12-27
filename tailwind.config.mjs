/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#c2542a', // Rusty Orange
                secondary: '#272727', // Dark Charcoal
                background: '#ffffff',
            },
            fontFamily: {
                sans: ['Jost', 'sans-serif'],
                heading: ['Jost', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
