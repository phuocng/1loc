import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import type { Snippet } from './Snippet';

const SNIPPETS_DIR = 'snippets';

export const loadSnippets = () => {
    const folders = fs.readdirSync(path.join(SNIPPETS_DIR));
    const posts: Snippet[] = [];

    folders.forEach((folder) => {
        fs.readdirSync(path.join(SNIPPETS_DIR, folder)).forEach((file) => {
            const markdown = fs.readFileSync(path.join(SNIPPETS_DIR, folder, file), 'utf-8');
            const { data: frontMatter } = matter(markdown);
            posts.push({
                category: frontMatter.category,
                slug: file.replace('.md', ''),
                title: frontMatter.title,
            });
        });
    });

    return posts;
};
