#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const getDirectories = source => fs.readdirSync(source, { withFileTypes: true })
    .filter(item => item.isDirectory())
    .map(item => item.name);

const getFiles = source => fs.readdirSync(source, { withFileTypes: true })
    .filter(item => item.isFile());

const getFileName = nameAndExt => nameAndExt.substring(0, nameAndExt.lastIndexOf('.'));

const collectionsDir = path.resolve(__dirname, '../collections');

const output = getDirectories(collectionsDir).map((dir) => {
    const dirPath = path.join(collectionsDir, '/', dir);
    const files = getFiles(dirPath).map((item) => {
        return {
            name: getFileName(item.name),
            body: fs.readFileSync(path.join(dirPath, '/', item.name), 'utf8'),
        };
    });

    return {
        category: dir,
        snippets: files,
    };
}).sort((a, b) => a.category.toLowerCase() > b.category.toLowerCase());

if (!fs.existsSync('./data')) {
    fs.mkdirSync('./data');
}
fs.writeFileSync(path.resolve(__dirname, '../data/data.json'), JSON.stringify(output));
