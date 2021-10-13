import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import type { Snippet } from './Snippet';

const SNIPPETS_DIR = 'snippets';

export const loadSnippets = () => {
    const folders = fs.readdirSync(path.join(SNIPPETS_DIR));
    const snippets: Snippet[] = [];

    folders.forEach((folder) => {
        loadSnippetsOfCategory(folder).forEach(s => snippets.push(s));
    });

    return snippets;
};

export const loadSnippetsOfCategory = (category: string): Snippet[] => (
    fs.readdirSync(path.join(SNIPPETS_DIR, category)).map((file) => {
        const markdown = fs.readFileSync(path.join(SNIPPETS_DIR, category, file), 'utf-8');
        const { data: frontMatter } = matter(markdown);
        return {
            category: frontMatter.category,
            slug: file.replace('.md', ''),
            title: frontMatter.title,
        };
    })
);
