import { Heading, Spacer } from '@1milligram/design';
import Link from 'next/link';
import * as React from 'react';

import { loadSnippets } from '../models/loadSnippets';
import { groupByCategory } from '../models/groupByCategory';
import type { Snippet } from '../models/Snippet';
import { Layout } from '../layouts/Layout';
import { slugifyCategory } from '../utils/slugifyCategory';
import { uid } from '../utils/uid';

const HomePage: React.FC<{
    snippets: Snippet[];
}> = ({ snippets }) => {
    const categories = groupByCategory(snippets);
    const id = uid();

    return (
        <Layout>
            <div className="block-container">
                <div className="block-home__hero">
                    <Spacer size="extraLarge" />
                    <Heading level={1}>Favorite JavaScript Utilities</Heading>
                    <Heading level={4}>in single line of code! No more!</Heading>
                    <Spacer size="large" />
                </div>
                {Object.keys(categories).map((category) => (
                    <div key={category}>
                        <div className="block-home__category">
                            <Heading level={3}>{category}</Heading>
                        </div>
                        {categories[category].map((snippet: Snippet) => (
                            <Link href={`/${slugifyCategory(snippet.category)}/${snippet.slug}`} key={snippet.title}>
                                <a className="block-home__snippet">
                                    <div className="block-home__snippet-index">{id.increase()}.</div>
                                    <div className="block-home__snippet-title">{snippet.title}</div>
                                </a>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
            <Spacer size="large" />
        </Layout>
    );
};

export async function getStaticProps() {
    const snippets = loadSnippets();
    return {
        props: {
            snippets,
        },
    };
}

export default HomePage;
