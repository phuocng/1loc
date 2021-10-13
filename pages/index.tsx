import { Heading, Spacer } from '@1milligram/design';
import * as React from 'react';

import { SnippetList } from '../components/SnippetList';
import { loadSnippets } from '../models/loadSnippets';
import { groupByCategory } from '../models/groupByCategory';
import { Layout } from '../layouts/Layout';
import { uid } from '../utils/uid';

import type { Snippet } from '../models/Snippet';

const HomePage: React.FC<{
    snippets: Snippet[];
}> = ({ snippets }) => {
    const categories = groupByCategory(snippets);
    const id = uid();

    return (
        <Layout>
            <div className="block-container">
                <div className="block-hero">
                    <Spacer size="extraLarge" />
                    <h1 className="page-home__heading">Favorite JavaScript Utilities</h1>
                    <Heading level={4}>in single line of code! No more!</Heading>
                    <Spacer size="large" />
                </div>
                {Object.keys(categories).map((category) => (
                    <div key={category}>
                        <div className="page-home__category">
                            <Heading level={3}>{category}</Heading>
                        </div>
                        <SnippetList snippets={categories[category]} />
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
