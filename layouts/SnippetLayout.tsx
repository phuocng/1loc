import { Heading, Sidebar, SidebarGroup, SidebarLink, Spacer } from '@1milligram/design';
import Head from 'next/head';
import * as React from 'react';

import { Layout } from './Layout';
import { Ad } from '../components/Ad';
import { slugifyCategory } from '../utils/slugifyCategory';
import { unslugifyCategory } from '../utils/unslugifyCategory';

export const SnippetLayout: React.FC<{
    categories: string[];
    keywords?: string;
    title: string;
}> = ({ categories, children, keywords, title }) => (
    <Layout title={title}>
        <Head>
            <meta name="description" content={title} />
            <meta name="twitter:title" content={`${title} - 1 LOC`} />
            <meta name="twitter:description" content={title} />
            <meta property="og:title" content={`${title} - 1 LOC`} />
            <meta property="og:description" content={title} />
            {keywords && keywords.length && <meta property="keywords" content={keywords} />}
        </Head>
        <div className="block-container">
            <div className="page-snippet__container">
                <div className="page-snippet__sidebar">
                    <Sidebar>
                        <SidebarGroup title="Categories">
                            {categories.map((category) => (
                                <SidebarLink href={`/${slugifyCategory(category)}`} key={category}>
                                    {unslugifyCategory(category)}
                                </SidebarLink>
                            ))}
                        </SidebarGroup>
                        <SidebarGroup title="Ad">
                            <div className="block-ad">
                                <Ad />
                            </div>
                        </SidebarGroup>
                    </Sidebar>
                </div>
                <div className="page-snippet__content">
                    <div className="block-hero">
                        <Spacer size="extraLarge" />
                        <Heading level={1}>{title}</Heading>
                        <Spacer size="large" />
                    </div>
                    {children}
                    <Spacer size="large" />
                </div>
            </div>
        </div>
    </Layout>
);
