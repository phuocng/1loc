const { DateTime } = require('luxon');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginNavigation = require('@11ty/eleventy-navigation');
const markdownIt = require('markdown-it');
const minify = require('html-minifier').minify;

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginSyntaxHighlight);
    eleventyConfig.addPlugin(pluginNavigation);

    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('robots.txt');
    eleventyConfig.addPassthroughCopy('css');

    eleventyConfig.addWatchTarget('./css/');

    let markdownLibrary = markdownIt({
        html: true,
        breaks: true,
        linkify: true,
    });
    eleventyConfig.setLibrary('md', markdownLibrary);

    eleventyConfig.addCollection('posts', (collection) => {
        const posts = collection.getFilteredByTag('posts');
      
        for(let i = 0; i < posts.length; i++) {
            posts[i].data['index'] = i;
            posts[i].data['prevPost'] = i === 0 ? null : posts[i - 1];
            posts[i].data['nextPost'] = i === posts.length - 1 ? null : posts[i + 1];
        }
      
        return posts;
    });

    eleventyConfig.addCollection('postsByCategory', (collection) => {
        const posts = collection.getFilteredByTag('posts');
        const groups = posts.reduce((acc, item) => ((acc[item.data.category] = [...(acc[item.data.category] || []), item]), acc), {});
        return Object.keys(groups).sort().reduce((p, c) => (p[c] = groups[c], p), {});
    });

    eleventyConfig.addFilter('countKeys', (arr) => {
        return Object.keys(arr).length;
    });

    eleventyConfig.addFilter('randomItems', (arr, count) => {
        return arr.concat().reduce((p, _, __, arr) => (p[0] < count) ? [p[0] + 1, p[1].concat(arr.splice(Math.random() * arr.length | 0, 1))] : p, [0, []])[1];
    });

    eleventyConfig.addFilter('sortBy', (arr, key) => {
        return arr.sort((a, b) => (a[key] > b[key]) ? 1 : ((a[key] < b[key]) ? -1 : 0));
    });

    eleventyConfig.addFilter('chunk', (arr, size) => {
        return arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);
    });

    // Minify HTML
    const minifyHtml = (rawContent, outputPath) => (
        (outputPath && outputPath.endsWith('.html'))
            ? minify(rawContent, {
                removeAttributeQuotes: true,
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeComments: true,
                sortClassName: true,
                sortAttributes: true,
                html5: true,
                decodeEntities: true,
                removeOptionalTags: true,
            })
            : rawContent
    );

    eleventyConfig.addTransform("minifyHtml", minifyHtml);

    return {
        templateFormats: ['md', 'njk', 'html', 'liquid'],
        markdownTemplateEngine: 'liquid',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',

        dir: {
            input: '.',
            includes: '_includes',
            data: '_data',
            output: '_site',
        },
    };
};
