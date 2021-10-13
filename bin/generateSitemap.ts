#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

import { groupByCategory } from '../models/groupByCategory';
import { loadSnippets } from '../models/loadSnippets';
import { Snippet } from '../models/Snippet';
import { slugifyCategory } from '../utils/slugifyCategory';

const snippets = loadSnippets();
const categories = Object.keys(groupByCategory(snippets));

const output = ['<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">', '<url><loc><![CDATA[https://1loc.dev]]></loc></url>']
    .concat(categories.map((c) => `<url><loc><![CDATA[https://1loc.dev/${slugifyCategory(c)}]]></loc></url>`).sort())
    .concat(
        // Sort by slugs
        snippets.map((s: Snippet) => `<url><loc><![CDATA[https://1loc.dev/${slugifyCategory(s.category)}/${s.slug}]]></loc></url>`).sort()
    )
    .concat(['</urlset>'])
    .join('\n');

fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), output);
