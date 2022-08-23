/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.html' /* ... */ ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', 'ui-sans-serif', 'system-ui'],
            },
            boxShadow: {
                'box': '0px -8px 32px rgba(17, 17, 24, 0.08), inset 0px 1px 0px #EBEBEB',
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar')
    ],
    variants: {
        scrollbar: ['rounded']
    }
}