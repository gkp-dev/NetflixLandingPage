module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({
                "netflix": "url('/public/images/netflix_icon2.png')",
                "snk": "url('/public/images/title_snk.png')",
                "linear": "linear-gradient(360deg, #222222 42.15%, rgba(0, 0, 0, 0) 100%)",
                "mini": "url('/public/images/bg-mini.jpg')",
                "med": "url('/public/images/bg-med.jpg')",
                "large": "url('/public/images/bg.jpg')",
                "person": "url('/public/images/people1.jpg')",


            })
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}