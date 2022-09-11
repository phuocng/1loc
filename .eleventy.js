const fs = require('fs');
const markdownIt = require('markdown-it');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const htmlmin = require('html-minifier');

module.exports = function(eleventyConfig) {
    // Copy the `img` and `css` folders to the output
    eleventyConfig.addPassthroughCopy('assets');

    eleventyConfig.addPlugin(syntaxHighlight);

    let markdownLibrary = markdownIt({
        html: true,
        linkify: true
    });
    eleventyConfig.setLibrary('md', markdownLibrary);

    eleventyConfig.addCollection('sortByTitle', function(collectionApi) {
        return collectionApi.getAll()
            .filter(function(item) {
                let extension = item.inputPath.split('.').pop();
                return extension === 'md';
            })
            .sort(function(a, b) {
                return a.data.title - b.data.title;
            });
    });

    eleventyConfig.addTransform('minify-html', function(content) {
        if (this.outputPath && this.outputPath.endsWith('.html')) {
            return htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
        }    
        return content;
    });

    return {
        // Control which files Eleventy will process
        // e.g.: *.md, *.njk, *.html, *.liquid
        templateFormats: [
            'md',
            'njk',
            'html',
            'liquid',
        ],
        // Pre-process *.md files with: (default: `liquid`)
        markdownTemplateEngine: 'njk',

        // Pre-process *.html files with: (default: `liquid`)
        htmlTemplateEngine: 'njk',

        // These are all optional (defaults are shown):
        dir: {
            input: 'contents',
            includes: '_includes',
            data: '_data',
            output: '_site'
        }
    };
};