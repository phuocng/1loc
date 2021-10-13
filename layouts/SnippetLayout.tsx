import { Heading, Sidebar, SidebarGroup, SidebarLink, Spacer } from '@1milligram/design';
import Head from 'next/head';
import * as React from 'react';

import { Layout } from './Layout';
import { Ad } from '../components/Ad';
import { Snippet } from '../models/Snippet';
import { slugifyCategory } from '../utils/slugifyCategory';

export const SnippetLayout: React.FC<{
    categories: string[];
    keywords?: string;
    snippet: Snippet;    
}> = ({ categories, children, keywords, snippet }) => (
    <Layout title={snippet.title}>
        <Head>
            <meta name="description" content={snippet.title} />
            <meta name="twitter:title" content={`${snippet.title} - 1 LOC`} />
            <meta name="twitter:description" content={snippet.title} />
            <meta property="og:title" content={`${snippet.title} - 1 LOC`} />
            <meta property="og:description" content={snippet.title} />
            {keywords && keywords.length && <meta property="keywords" content={keywords} />}
        </Head>
        <div className="block-container">
            <div className="page-snippet__container">
                <div className="page-snippet__sidebar">
                    <Sidebar>
                        <SidebarGroup title="Categories">
                        {
                            categories.map(category => (
                                <SidebarLink href={`/${slugifyCategory(category)}`} key={category}>{category}</SidebarLink>
                            ))
                        }
                        </SidebarGroup>
                        <SidebarGroup title="Ad">
                            <div className="block-ad">
                                <Ad />
                            </div>
                        </SidebarGroup>
                    </Sidebar>                    
                </div>
                <div className="page-snippet__content">
                    <div className="block-home__hero">
                        <Spacer size="extraLarge" />
                        <Heading level={1}>{snippet.title}</Heading>
                        <Spacer size="large" />                        
                    </div>
                    {children}
                    <Spacer size="large" />
                </div>
            </div>            
        </div>
    </Layout>
);
