import Link from 'next/link';
import * as React from 'react';

import { Snippet } from '../models/Snippet';
import { slugifyCategory } from '../utils/slugifyCategory';

export const SnippetList: React.FC<{
    snippets: Snippet[];
}> = ({ snippets }) => (
    <>
        {snippets.map((snippet: Snippet) => (
            <Link href={`/${slugifyCategory(snippet.category)}/${snippet.slug}`} key={snippet.title}>
                <a className="block-snippet">
                    <div className="block-snippet__title">{snippet.title}</div>
                </a>
            </Link>
        ))}
    </>
);
