import Head from 'next/head';
import * as React from 'react';
import { FooterBlock } from './FooterBlock';
import { HeaderBlock } from './HeaderBlock';

export const Layout: React.FC<{
    title?: string;
}> = ({ children, title = 'Favorite JavaScript utilities in single line of code' }) => (
    <>
        <Head>
            <title>{title} - 1 LOC</title>
        </Head>
        <HeaderBlock />
        {children}
        <FooterBlock />
    </>
);
