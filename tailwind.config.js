/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--text)",
                surface: "var(--surface)",
                "surface-alt": "var(--surface-alt)",
                primary: {
                    DEFAULT: "var(--primary)",
                    soft: "var(--primary-soft)",
                },
                accent: {
                    DEFAULT: "var(--accent)",
                    soft: "var(--accent-soft)",
                },
                success: "var(--success)",
                warning: "var(--warning)",
                danger: "var(--danger)",
                muted: "var(--text-muted)",
                border: "var(--border)",
            },
            boxShadow: {
                strong: "var(--shadow-strong)",
            },
            borderRadius: {
                sm: "10px",
                md: "16px",
                lg: "22px",
                pill: "999px",
            },
        },
    },
    plugins: [],
};
