import { Heading, Spacer } from '@1milligram/design';
import * as React from 'react';

import { SnippetItem } from '../components/SnippetItem';
import { loadSnippets } from '../models/loadSnippets';
import type { Snippet } from '../models/Snippet';
import Layout from '../layouts/Layout';

const groupByCategory = (snippets: Snippet[]) => snippets.reduce((acc, item) => ((acc[item.category] = [...(acc[item.category] || []), item]), acc), {});

const HomePage: React.FC<{
    snippets: Snippet[];
}> = ({ snippets }) => {
    const categories = groupByCategory(snippets);

    return (
        <Layout>
            <div className="block-container">
                <div className="block-home-hero">
                    <Spacer size="extraLarge" />
                    <Heading level={1}>Favorite JavaScript Utilities</Heading>
                    <Heading level={4}>in single line of code! No more!</Heading>
                    <Spacer size="large" />
                </div>
                {
                    Object.keys(categories).map(category => (
                        <div key={category}>
                            <Heading level={3}>{category}</Heading>
                            {
                                categories[category].map((snippet: Snippet) => (
                                    <SnippetItem key={snippet.title} snippet={snippet} />
                                ))
                            }
                        </div>
                    ))
                }
            </div>
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
};

export default HomePage;
