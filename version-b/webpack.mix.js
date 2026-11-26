const { defineConfig } = require('laravel-mix');

module.exports = defineConfig({
    webpackConfig: {
        output: {
            chunkFilename: 'js/[id].js',
        },
    },

    // JS entry points
    js: [
        'resources/sass/app.styl',  // Stylus compilado a CSS
        'resources/js/navbar.js',
        'resources/js/Form.js',
        'resources/js/Carrello.js',
    ],

    // CSS entry point
    css: 'resources/sass/app.styl',

    // Output directories
    manifest: {
        basePath('/manifest'),
    },

    // Aliases (optional)
    aliases: {
        '@': 'resources',
    },

    // Progress notification
    notify: true,
});