module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({
                "netflix": "url('/images/netflix_icon2.png')",
                "snk": "url('/images/title_snk.png')",
                "linear": "linear-gradient(0deg, #000000 30.49%, rgba(103, 103, 103, 0) 86.24%)",
                "mini": "url('/images/bg-mini.jpg')",
                "med": "url('/images/bg-med.jpg')",
                "large": "url('/images/bg.jpg')",
                "person": "url('/images/people1.jpg')",


            })
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}